"use client";

import { useState } from "react";
import type { StoredAddress, StoredAddressKind } from "@/lib/address-storage";
import {
  updateAddress,
  type ApiAddress,
} from "@/lib/api-client";
import {
  EditAddressModal,
  type EditAddressFormValues,
} from "@/components/user-dashboard/address/edit-address-modal";

interface CheckoutAddressBookModalProps {
  open: boolean;
  onClose: () => void;
  selectedAddress: StoredAddress | null;
  userAddresses: ApiAddress[];
  adminAddresses: ApiAddress[];
  onSelectAddress: (address: ApiAddress, kind: StoredAddressKind) => void;
  onAddNew: () => void;
  onAddressUpdated?: (address: ApiAddress) => void;
}

function formatAddressLine(address: Pick<ApiAddress, "unitNo" | "streetAddress" | "stateArea" | "postalCode">): string {
  const parts: string[] = [];

  if (address.unitNo?.trim()) parts.push(address.unitNo.trim());
  if (address.streetAddress?.trim()) parts.push(address.streetAddress.trim());
  if (address.stateArea?.trim()) parts.push(address.stateArea.trim());
  if (address.postalCode?.trim()) parts.push(address.postalCode.trim());

  return parts.join(", ");
}

function matchesSelectedAddress(
  selectedAddress: StoredAddress | null,
  address: ApiAddress,
  kind: StoredAddressKind
): boolean {
  if (!selectedAddress) {
    return false;
  }

  const selectedKind =
    selectedAddress.kind === "template" || selectedAddress.isTemplate
      ? "template"
      : "user";

  if (selectedKind !== kind) {
    return false;
  }

  if (selectedAddress.id) {
    return selectedAddress.id === address.id;
  }

  return (
    selectedAddress.fullName === address.fullName &&
    selectedAddress.phoneNumber === address.phoneNumber &&
    selectedAddress.streetAddress === address.streetAddress &&
    selectedAddress.unitNo === address.unitNo
  );
}

function addressMatchesSearch(address: ApiAddress, search: string): boolean {
  if (!search) {
    return true;
  }

  const haystack = [
    address.fullName,
    address.phoneNumber,
    address.streetAddress,
    address.unitNo,
    address.stateArea,
    address.postalCode,
    address.city,
    address.state,
    address.summaryLabel,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(search);
}

export function CheckoutAddressBookModal({
  open,
  onClose,
  selectedAddress,
  userAddresses,
  adminAddresses,
  onSelectAddress,
  onAddNew,
  onAddressUpdated,
}: CheckoutAddressBookModalProps) {
  const [search, setSearch] = useState("");
  const [editingAddress, setEditingAddress] = useState<ApiAddress | null>(null);
  const normalizedSearch = search.trim().toLowerCase();
  const filteredUserAddresses = userAddresses.filter((address) =>
    addressMatchesSearch(address, normalizedSearch)
  );
  const filteredAdminAddresses = adminAddresses.filter((address) =>
    addressMatchesSearch(address, normalizedSearch)
  );

  if (!open) return null;

  const handleEditSubmit = async (values: EditAddressFormValues) => {
    if (!editingAddress) {
      return;
    }

    try {
      const updatedAddress = await updateAddress(editingAddress.id, {
        full_name: values.fullName,
        phone: values.phoneNumber,
        line1: values.streetAddress,
        line2: values.unitNo || undefined,
        city: values.stateArea.split(",")[0] || values.stateArea,
        state: values.stateArea,
        postal_code: values.postalCode || undefined,
        is_default: values.setAsDefault,
        region: values.region,
        label_as: values.labelAs,
      });

      onAddressUpdated?.(updatedAddress);
      setEditingAddress(null);
    } catch (error) {
      console.error("Failed to update address:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Failed to update address. Please try again."
      );
      throw error;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-address-book-title"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] min-h-[520px] w-[720px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-[3px] bg-white text-sm text-black/80 shadow"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-4">
          <div>
            <h2
              id="checkout-address-book-title"
              className="text-base font-medium text-black/87"
            >
              Select delivery address
            </h2>
            <p className="mt-1 text-sm text-black/60">
              Use your default address, pick an admin-defined shipping address, or add a new one for this checkout.
            </p>
          </div>
          <button
            type="button"
            className="cursor-pointer border-0 bg-transparent text-xl leading-none text-black/60"
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="border-b border-black/10 px-6 py-4">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name, phone, state, or address"
            className="h-11 w-full rounded-[3px] border border-black/10 px-3 text-sm outline-none transition focus:border-[#ee4d2d]"
          />
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <section>
            <div className="mb-3 text-sm font-medium text-black/87">
              Your saved addresses
            </div>

            {filteredUserAddresses.length === 0 ? (
              <div className="mb-6 rounded-[3px] border border-dashed border-black/10 px-4 py-5 text-sm text-black/60">
                {userAddresses.length === 0
                  ? "You do not have any saved addresses yet."
                  : "No saved addresses match your search."}
              </div>
            ) : (
              filteredUserAddresses.map((address) => {
                const isSelected = matchesSelectedAddress(
                  selectedAddress,
                  address,
                  "user"
                );

                return (
                  <div
                    key={address.id}
                    className="mb-3 rounded-[3px] border border-black/10 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <button
                        type="button"
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#ee4d2d] bg-transparent p-0"
                        onClick={() => onSelectAddress(address, "user")}
                        aria-label={`Select address for ${address.fullName}`}
                      >
                        {isSelected && (
                          <span className="h-2.5 w-2.5 rounded-full bg-[#ee4d2d]" />
                        )}
                      </button>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 text-[14px] font-medium text-black/87">
                          <span>{address.fullName}</span>
                          <span className="text-black/20">|</span>
                          <span className="text-black/80">{address.phoneNumber}</span>
                          {address.setAsDefault && (
                            <span className="inline-flex rounded-[1px] border border-[#ee4d2d] px-1.5 py-0.5 text-[11px] text-[#ee4d2d]">
                              Default
                            </span>
                          )}
                        </div>
                        <div className="mt-1 text-[13px] text-black/80">
                          {formatAddressLine(address)}
                        </div>
                      </div>

                      <div className="flex shrink-0 items-center gap-3">
                        <button
                          type="button"
                          className="cursor-pointer border-0 bg-transparent p-0 text-[13px] text-[#0055aa]"
                          onClick={() => setEditingAddress(address)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className={`h-9 rounded-[2px] border px-4 text-[13px] font-medium ${
                            isSelected
                              ? "border-[#ee4d2d] bg-[#fff6f4] text-[#ee4d2d]"
                              : "border-[#ee4d2d] bg-[#ee4d2d] text-white"
                          }`}
                          onClick={() => onSelectAddress(address, "user")}
                        >
                          {isSelected ? "Selected" : "Use this address"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </section>

          <section className="mt-8">
            <div className="mb-3 text-sm font-medium text-black/87">
              Admin-defined shipping addresses
            </div>

            {filteredAdminAddresses.length === 0 ? (
              <div className="rounded-[3px] border border-dashed border-black/10 px-4 py-5 text-sm text-black/60">
                {adminAddresses.length === 0
                  ? "No admin-defined shipping addresses are available yet."
                  : "No admin-defined addresses match your search."}
              </div>
            ) : (
              filteredAdminAddresses.map((address) => {
                const isSelected = matchesSelectedAddress(
                  selectedAddress,
                  address,
                  "template"
                );

                return (
                  <div
                    key={address.id}
                    className="mb-3 rounded-[3px] border border-black/10 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <button
                        type="button"
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#ee4d2d] bg-transparent p-0"
                        onClick={() => onSelectAddress(address, "template")}
                        aria-label={`Select admin address for ${address.fullName}`}
                      >
                        {isSelected && (
                          <span className="h-2.5 w-2.5 rounded-full bg-[#ee4d2d]" />
                        )}
                      </button>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 text-[14px] font-medium text-black/87">
                          <span>{address.fullName}</span>
                          <span className="text-black/20">|</span>
                          <span className="text-black/80">{address.phoneNumber}</span>
                          <span className="inline-flex rounded-[1px] border border-black/15 px-1.5 py-0.5 text-[11px] text-black/60">
                            Admin address
                          </span>
                        </div>
                        <div className="mt-1 text-[13px] text-black/80">
                          {formatAddressLine(address)}
                        </div>
                      </div>

                      <button
                        type="button"
                        className={`h-9 shrink-0 rounded-[2px] border px-4 text-[13px] font-medium ${
                          isSelected
                            ? "border-[#ee4d2d] bg-[#fff6f4] text-[#ee4d2d]"
                            : "border-[#ee4d2d] bg-[#ee4d2d] text-white"
                        }`}
                        onClick={() => onSelectAddress(address, "template")}
                      >
                        {isSelected ? "Selected" : "Use this address"}
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </section>
        </div>

        <div className="flex items-center justify-between border-t border-black/10 px-6 py-3">
          <button
            type="button"
            className="cursor-pointer border-0 bg-transparent p-0 text-sm text-black/60"
            onClick={onClose}
          >
            Close
          </button>
          <button
            type="button"
            className="flex h-10 items-center justify-center rounded-[2px] border-0 bg-[#ee4d2d] px-5 text-sm font-medium text-white shadow-[rgba(0,0,0,0.09)_0px_1px_1px_0px]"
            onClick={onAddNew}
          >
            Add New Address
          </button>
        </div>
      </div>

      {editingAddress && (
        <EditAddressModal
          open={true}
          onClose={() => setEditingAddress(null)}
          onSubmit={handleEditSubmit}
          isFirstAddress={editingAddress.setAsDefault}
          initialValues={{
            region: (editingAddress.region || "general") as EditAddressFormValues["region"],
            fullName: editingAddress.fullName,
            phoneNumber: editingAddress.phoneNumber,
            stateArea: editingAddress.stateArea,
            postalCode: editingAddress.postalCode,
            unitNo: editingAddress.unitNo,
            streetAddress: editingAddress.streetAddress,
            labelAs: (editingAddress.labelAs || "home") as EditAddressFormValues["labelAs"],
            setAsDefault: editingAddress.setAsDefault,
            location: {
              lat: 3.07563,
              lng: 101.48119,
            },
          }}
        />
      )}
    </div>
  );
}
