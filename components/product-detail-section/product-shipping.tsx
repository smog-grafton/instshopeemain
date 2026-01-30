import { IconTruck, IconChevronRight } from "./icons";

interface ProductShippingProps {
  shippingText: string;
  shippingSubtext: string;
}

export function ProductShipping({ shippingText, shippingSubtext }: ProductShippingProps) {
  return (
    <section className="text-neutral-800 flex -ml-1 -mt-1 mb-6 p-1 items-start">
      <h2 className="text-neutral-500 capitalize w-24 shrink-0 items-center font-normal mr-2.5 leading-5">
        Shipping
      </h2>
      <div className="flex">
        <div className="flex">
          <div className="align-middle inline-block [align-self:start] w-5 h-5 mr-2">
            <IconTruck />
          </div>
          <div className="flex-col flex-1 gap-y-1 gap-x-1 leading-5 flex">
            <div className="items-end flex hover:cursor-pointer">
              <div className="text-ellipsis">
                <span className="text-black/87">{shippingText}</span>
              </div>
              <IconChevronRight />
            </div>
            <div className="text-ellipsis text-xs text-black/54">
              <span>{shippingSubtext}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
