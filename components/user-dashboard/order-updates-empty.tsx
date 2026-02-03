import Image from "next/image";

const NO_ORDER_IMAGE = "/images/common/user/account/no-order.png";

export function OrderUpdatesEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8">
      <div className="relative w-48 h-48 mb-6">
        <Image
          src={NO_ORDER_IMAGE}
          alt="No order updates"
          width={192}
          height={192}
          className="object-contain w-full h-full"
        />
      </div>
      <p className="text-zinc-600 text-sm text-center">
        No Order Updates yet
      </p>
    </div>
  );
}
