"use client";

import { useState } from "react";
import { deleteAddress, updateAddress, type ApiAddress } from "@/lib/api-client";
import { EditAddressModal, type EditAddressFormValues } from "./edit-address-modal";

interface AddressListProps {
  addresses: ApiAddress[];
  onRefresh: () => void;
}

function formatPhone(phone: string): string {
  return phone;
}

function formatAddressLine(address: ApiAddress): string {
  const parts: string[] = [];
  if (address.unitNo?.trim()) parts.push(address.unitNo.trim());
  if (address.streetAddress?.trim()) parts.push(address.streetAddress.trim());
  if (address.stateArea?.trim()) parts.push(address.stateArea.trim());
  if (address.postalCode?.trim()) parts.push(address.postalCode.trim());
  return parts.join(", ");
}

export function AddressList({ addresses, onRefresh }: AddressListProps) {
  const [editingAddress, setEditingAddress] = useState<ApiAddress | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this address?")) return;
    setDeletingId(id);
    try {
      await deleteAddress(id);
      onRefresh();
    } catch (error) {
      console.error("Failed to delete address:", error);
      alert("Failed to delete address. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleEditSubmit = async (values: EditAddressFormValues) => {
    if (!editingAddress) return;
    try {
      await updateAddress(editingAddress.id, {
        full_name: values.fullName,
        phone: values.phoneNumber,
        line1: values.streetAddress,
        line2: values.unitNo || undefined,
        city: values.stateArea.split(',')[0] || values.stateArea,
        state: values.stateArea,
        postal_code: values.postalCode || undefined,
        is_default: values.setAsDefault,
      });
      setEditingAddress(null);
      onRefresh();
    } catch (error) {
      console.error("Failed to update address:", error);
      alert("Failed to update address. Please try again.");
    }
  };

  if (addresses.length === 0) {
    return null; // Empty state handled by parent
  }

  return (
    <>
      <div className="px-8 py-6">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="border border-black/10 rounded-[3px] p-4 mb-4 flex items-start gap-4"
          >
            <div className="flex-1">
              <div className="flex items-center text-[14px] font-medium text-black/87 mb-2">
                <span>{address.fullName}</span>
                <span className="mx-2 text-black/20">|</span>
                <span className="text-black/80">{formatPhone(address.phoneNumber)}</span>
                {address.setAsDefault && (
                  <span className="ml-3 inline-flex rounded-[1px] border border-[#ee4d2d] px-1.5 py-0.5 text-[11px] text-[#ee4d2d]">
                    Default
                  </span>
                )}
              </div>
              <div className="text-[13px] text-black/80">
                {formatAddressLine(address)}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="text-[13px] text-[#0055aa] cursor-pointer border-0 bg-transparent p-0"
                onClick={() => setEditingAddress(address)}
              >
                Edit
              </button>
              <button
                type="button"
                className="text-[13px] text-[#0055aa] cursor-pointer border-0 bg-transparent p-0"
                onClick={() => handleDelete(address.id)}
                disabled={deletingId === address.id}
              >
                {deletingId === address.id ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingAddress && (
        <EditAddressModal
          open={true}
          onClose={() => setEditingAddress(null)}
          onSubmit={handleEditSubmit}
          isFirstAddress={editingAddress.setAsDefault}
          initialValues={{
            region: (editingAddress.region || "general") as "MY" | "BN" | "general",
            fullName: editingAddress.fullName,
            phoneNumber: editingAddress.phoneNumber,
            stateArea: editingAddress.stateArea,
            postalCode: editingAddress.postalCode,
            unitNo: editingAddress.unitNo,
            streetAddress: editingAddress.streetAddress,
            labelAs: (editingAddress.labelAs || "home") as "home" | "work",
            setAsDefault: editingAddress.setAsDefault,
            location: {
              lat: 3.07563,
              lng: 101.48119,
            },
          }}
        />
      )}
    </>
  );
}
