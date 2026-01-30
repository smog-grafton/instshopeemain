import { IconShieldCheck, IconChevronDown } from "./icons";

interface ProductGuaranteeProps {
  guaranteeText: string;
}

export function ProductGuarantee({ guaranteeText }: ProductGuaranteeProps) {
  return (
    <section className="text-neutral-800 items-center flex -ml-1 -mt-1 mb-6 p-1">
      <h2 className="text-neutral-500 capitalize w-24 shrink-0 items-center font-normal mr-2.5">
        Shopping Guarantee
      </h2>
      <div
        className="outline-0 flex relative focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87"
        tabIndex={0}
      >
        <div className="text-ellipsis whitespace-nowrap items-center gap-y-2 gap-x-2 max-w-lg flex overflow-x-hidden overflow-y-hidden hover:cursor-pointer">
          <IconShieldCheck />
          <div className="text-ellipsis whitespace-nowrap overflow-x-hidden overflow-y-hidden">
            {guaranteeText}
          </div>
          <IconChevronDown />
        </div>
      </div>
    </section>
  );
}
