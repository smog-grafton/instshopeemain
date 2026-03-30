import Link from "next/link";
import { IconArrowRight } from "./icons";
import type {
  ProductSpecsDescriptionData,
  ProductSpecItem,
  CategoryBreadcrumbLink,
} from "./data";

interface ProductSpecsDescriptionProps {
  data: ProductSpecsDescriptionData;
}

const SECTION_HEADER_CLASS =
  "bg-black/2 p-3 text-lg font-medium capitalize text-black/87 sm:p-3.5";
const SPEC_LABEL_CLASS =
  "m-[inherit] w-full break-words pr-3 text-sm text-black/40 sm:w-44 lg:w-52";

function SpecSectionHeader({ children }: { children: React.ReactNode }) {
  return <h2 className={SECTION_HEADER_CLASS}>{children}</h2>;
}

function CategoryBreadcrumb({ links }: { links: CategoryBreadcrumbLink[] }) {
  const linkClass =
    "cursor-pointer whitespace-nowrap no-underline text-sky-700 text-sm active:outline-0 hover:outline-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:-m-1.5 focus-visible:p-1.5 focus-visible:rounded-sm";

  return (
    <div className="flex h-4 items-center whitespace-nowrap overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {links.map((link, index) => (
        <span key={link.href} className="contents">
          <Link href={link.href} className={linkClass}>
            {link.label}
          </Link>
          {index < links.length - 1 && (
            <IconArrowRight className="align-baseline inline w-2.5 h-2.5 mx-1.5 text-black/54" />
          )}
        </span>
      ))}
    </div>
  );
}

function SpecRow({ item }: { item: ProductSpecItem }) {
  return (
    <div className="mb-5 flex flex-col gap-1 last:mb-5 sm:flex-row">
      <h3 className={SPEC_LABEL_CLASS}>{item.label}</h3>
      {item.categoryBreadcrumbs ? (
        <CategoryBreadcrumb links={item.categoryBreadcrumbs} />
      ) : (
        <div>{item.value}</div>
      )}
    </div>
  );
}

function ProductSpecifications({
  specifications,
}: {
  specifications: ProductSpecItem[];
}) {
  return (
    <section className="px-3 pt-4 sm:px-4">
      <SpecSectionHeader>Product Specifications</SpecSectionHeader>
      <div className="mx-2 mb-4 mt-6 sm:mx-4 sm:mt-8">
        {specifications.map((item) => (
          <SpecRow key={item.label} item={item} />
        ))}
      </div>
    </section>
  );
}

function ProductDescription({ description }: { description: string }) {
  const paragraphs = description
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className="px-3 pt-4 sm:px-4">
      <SpecSectionHeader>Product Description</SpecSectionHeader>
      <div className="mx-2 mb-4 mt-6 sm:mx-4 sm:mt-8">
        <div className="whitespace-pre-wrap text-ellipsis flex flex-col gap-y-8 gap-x-8 text-sm leading-relaxed overflow-x-hidden overflow-y-hidden text-black/80">
          <div>
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductSpecsDescription({ data }: ProductSpecsDescriptionProps) {
  const { specifications, description } = data;

  return (
    <div
      className="mt-4 overflow-x-hidden overflow-y-hidden rounded-sm bg-white p-2.5 text-sm leading-tight text-black/80 shadow-sm"
      aria-label="Product details"
    >
      <ProductSpecifications specifications={specifications} />
      <ProductDescription description={description} />
    </div>
  );
}
