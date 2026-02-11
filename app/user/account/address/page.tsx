"use client";

import { useEffect, useState } from "react";
import { UserDashboardLayout } from "@/components/user-dashboard";
import { AddressHeader, AddressEmptyState, AddressList } from "@/components/user-dashboard/address";
import { getAddresses, type ApiAddress } from "@/lib/api-client";

export default function UserAddressPage() {
  const [addresses, setAddresses] = useState<ApiAddress[]>([]);
  const [loading, setLoading] = useState(true);

  const loadAddresses = async () => {
    try {
      const addrList = await getAddresses();
      setAddresses(addrList);
    } catch (error) {
      console.error("Failed to load addresses:", error);
      setAddresses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAddresses();
  }, []);

  return (
    <UserDashboardLayout>
      <div className="bg-white grow w-[980px] relative shadow-sm ml-7 rounded-sm min-h-[400px]">
        <div className="flex-col min-h-full flex relative" role="main">
          <div className="contents">
            <AddressHeader onAddressAdded={loadAddresses} />
            {loading ? (
              <div className="px-8 py-6 text-center text-black/54">Loading addresses...</div>
            ) : addresses.length === 0 ? (
              <AddressEmptyState />
            ) : (
              <AddressList addresses={addresses} onRefresh={loadAddresses} />
            )}
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
