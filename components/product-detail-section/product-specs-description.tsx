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
  "capitalize text-lg font-medium p-3.5 text-black/87 bg-black/2";
const SPEC_LABEL_CLASS =
  "[word-break:break-word] w-52 text-sm m-[inherit] pr-3 text-black/40";

function SpecSectionHeader({ children }: { children: React.ReactNode }) {
  return <h2 className={SECTION_HEADER_CLASS}>{children}</h2>;
}

function CategoryBreadcrumb({ links }: { links: CategoryBreadcrumbLink[] }) {
  const linkClass =
    "cursor-pointer whitespace-nowrap no-underline text-sky-700 text-sm active:outline-0 hover:outline-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:-m-1.5 focus-visible:p-1.5 focus-visible:rounded-sm";

  return (
    <div className="flex items-center whitespace-nowrap h-4">
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
    <div className="flex mb-5 last:mb-5">
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
    <section className="pt-4 px-4">
      <SpecSectionHeader>Product Specifications</SpecSectionHeader>
      <div className="mt-8 mb-4 mx-4">
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
    <section className="pt-4 px-4">
      <SpecSectionHeader>Product Description</SpecSectionHeader>
      <div className="mt-8 mb-4 mx-4">
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
      className="text-sm leading-tight text-black/80 bg-white overflow-x-hidden overflow-y-hidden shadow-sm mt-4 p-2.5 rounded-sm"
      aria-label="Product details"
    >
      <ProductSpecifications specifications={specifications} />
      <ProductDescription description={description} />
    </div>
  );
}
