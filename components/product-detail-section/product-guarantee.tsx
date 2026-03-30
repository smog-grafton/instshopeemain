import { IconShieldCheck, IconChevronDown } from "./icons";

interface ProductGuaranteeProps {
  guaranteeText: string;
}

export function ProductGuarantee({ guaranteeText }: ProductGuaranteeProps) {
  return (
    <section className="mb-5 flex flex-col gap-2 p-1 text-neutral-800 sm:mb-6 sm:flex-row sm:items-center">
      <h2 className="mr-2.5 w-20 shrink-0 text-sm font-normal capitalize text-neutral-500 sm:w-24">
        Shopping Guarantee
      </h2>
      <div
        className="outline-0 flex relative focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87"
        tabIndex={0}
      >
        <div className="flex max-w-2xl items-start gap-x-2 gap-y-2 hover:cursor-pointer sm:items-center">
          <IconShieldCheck />
          <div className="break-words">
            {guaranteeText}
          </div>
          <IconChevronDown />
        </div>
      </div>
    </section>
  );
}
