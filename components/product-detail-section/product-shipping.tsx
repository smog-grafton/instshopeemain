import { IconTruck, IconChevronRight } from "./icons";

interface ProductShippingProps {
  shippingText: string;
  shippingSubtext: string;
}

export function ProductShipping({ shippingText, shippingSubtext }: ProductShippingProps) {
  return (
    <section className="mb-5 flex flex-col gap-2 p-1 text-neutral-800 sm:mb-6 sm:flex-row sm:items-start">
      <h2 className="mr-2.5 w-20 shrink-0 text-sm font-normal capitalize leading-5 text-neutral-500 sm:w-24">
        Shipping
      </h2>
      <div className="min-w-0 flex-1">
        <div className="flex min-w-0">
          <div className="align-middle inline-block [align-self:start] w-5 h-5 mr-2">
            <IconTruck />
          </div>
          <div className="flex flex-1 min-w-0 flex-col gap-x-1 gap-y-1 leading-5">
            <div className="flex items-start hover:cursor-pointer">
              <div className="min-w-0">
                <span className="break-words text-black/87">{shippingText}</span>
              </div>
              <IconChevronRight />
            </div>
            <div className="text-xs text-black/54">
              <span>{shippingSubtext}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
