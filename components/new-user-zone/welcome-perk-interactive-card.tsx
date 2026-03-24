import type { AnchorHTMLAttributes, CSSProperties, ReactNode } from "react";
import Link from "next/link";
import type { ApiWelcomePerk } from "@/lib/api-client";

/** Orange ticket strip width — wider than Shopee’s ~106px dump so icon/title aren’t cramped. */
const VC_LEFT_STRIP = "clamp(148px, 34%, 200px)";

const vcLeftStripStyle = { ["--vc-left-strip" as string]: VC_LEFT_STRIP } as CSSProperties;

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

type OuterLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "style" | "children">;

function OuterLink({ href, children, className, style, ...rest }: OuterLinkProps) {
  if (isExternal(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} style={style} {...rest}>
      {children}
    </Link>
  );
}

/** Shopee ticket-edge SVG (paths from provided markup). Groovy / sawtooth left border. */
function VoucherLeftSvg() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 106 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="none"
      className="box-border overflow-hidden"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2a2 2 0 0 1 2-2h106v106H2a2 2 0 0 1-2-2v-3a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 0 0 0-6V2Z"
        fill="#EE4D2D"
        className="box-border"
      />
      <path
        clipRule="evenodd"
        d="M.25 2.25a2 2 0 0 1 2-2M0 101.25a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m2.25 101a2 2 0 0 1-2-2"
        stroke="#000"
        opacity={0.15}
        strokeWidth={1}
        className="box-border"
      />
      <path
        clipRule="evenodd"
        d="M2 0.25h108m0 105.5H2m-1.75-1.75v-3m0-6v-4m0-6v-4m0-6v-4m0-6v-4m0-6v-4m0-6v-4m0-6v-4m0-6v-4m0-6v-4m0-6V2Z"
        opacity={0.15}
        stroke="#000"
        strokeWidth={1.5}
        className="box-border"
      />
      <path
        d="M106 .5v105Z"
        stroke="#000"
        strokeOpacity={0.15}
        strokeWidth={1.5}
        className="box-border"
      />
    </svg>
  );
}

export function WelcomePerkInteractiveCard({ perk }: { perk: ApiWelcomePerk }) {
  const c = perk.card;
  if (!c) return null;

  const wrapHref = perk.linkUrl?.trim();

  const cardInner = (
    <div
      className="box-border"
      style={{
        padding: "20px 20px 12px",
        paddingTop: 20,
        paddingBottom: 12,
        boxSizing: "border-box",
      }}
    >
      <div
        tabIndex={0}
        aria-label="Vouchers"
        role="group"
        className="box-border"
        style={{ boxSizing: "border-box" }}
      >
        <div
          className="box-border w-full"
          style={{
            visibility: "visible",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            className="grid box-border"
            style={{
              padding: "0px 0px 4px",
              gridTemplateColumns: "minmax(0, 1fr)",
              gap: 8,
              color: "rgba(0, 0, 0, 0.87)",
              display: "grid",
              boxSizing: "border-box",
            }}
          >
            <div
              className="mx-auto box-border block w-full"
              style={{ margin: "0px auto", display: "block", boxSizing: "border-box", width: "100%" }}
            >
              <div
                className="box-border"
                style={{
                  width: "100%",
                  height: 212,
                  lineHeight: "normal",
                  filter: "drop-shadow(rgba(0, 0, 0, 0.09) 0px 0px 6px)",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="relative box-border"
                  style={{
                    width: "100%",
                    height: 212,
                    position: "relative",
                    boxSizing: "border-box",
                    ...vcLeftStripStyle,
                  }}
                >
                  {/* Left groovy edge + fill */}
                  <div
                    className="absolute left-0 top-0 box-border overflow-hidden"
                    style={{
                      boxSizing: "border-box",
                      width: "var(--vc-left-strip)",
                      borderTopLeftRadius: 4,
                      borderBottomLeftRadius: 4,
                      height: 212,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      overflow: "hidden",
                    }}
                  >
                    <VoucherLeftSvg />
                  </div>

                  {/* White right panel (behind flex content) */}
                  <div
                    className="absolute right-0 top-0 box-border bg-white"
                    aria-hidden
                    style={{
                      boxSizing: "border-box",
                      width: "calc(100% - var(--vc-left-strip))",
                      backgroundColor: "rgb(255, 255, 255)",
                      borderTopColor: "rgba(0, 0, 0, 0.09)",
                      borderTopStyle: "solid",
                      borderTopWidth: 2,
                      borderRightColor: "rgba(0, 0, 0, 0.09)",
                      borderRightStyle: "solid",
                      borderRightWidth: 2,
                      borderBottomColor: "rgba(0, 0, 0, 0.09)",
                      borderBottomStyle: "solid",
                      borderBottomWidth: 2,
                      borderTopRightRadius: 12,
                      borderBottomRightRadius: 12,
                      borderLeft: "0px none rgba(0, 0, 0, 0.87)",
                      height: 212,
                      position: "absolute",
                      top: 0,
                      right: 0,
                    }}
                  />

                  {/* Foreground row (icon + copy + Use) */}
                  <div
                    role="presentation"
                    className="relative box-border flex"
                    style={{
                      boxSizing: "border-box",
                      borderTop: "1px solid rgba(0, 0, 0, 0)",
                      borderRight: "1px solid rgba(0, 0, 0, 0)",
                      borderBottom: "1px solid rgba(0, 0, 0, 0)",
                      borderLeft: "0px none rgba(0, 0, 0, 0.87)",
                      height: 212,
                      transition: "background 1s",
                      display: "flex",
                      position: "relative",
                    }}
                  >
                    {/* Left: circle icon + title */}
                    <div
                      role="presentation"
                      className="relative box-border flex shrink-0 flex-col items-center justify-center"
                      style={{
                        boxSizing: "border-box",
                        width: "var(--vc-left-strip)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: 10,
                        paddingRight: 10,
                        display: "flex",
                        position: "relative",
                      }}
                    >
                      <div className="box-border" style={{ boxSizing: "border-box" }}>
                        <div
                          className="relative box-border flex justify-center"
                          style={{
                            width: "100%",
                            minHeight: 112,
                            position: "relative",
                            boxSizing: "border-box",
                          }}
                        >
                          <div
                            className="relative box-border shrink-0 overflow-hidden rounded-full"
                            style={{
                              backgroundColor: "rgb(238, 77, 45)",
                              verticalAlign: "baseline",
                              borderRadius: "50%",
                              overflow: "hidden",
                              width: 112,
                              height: 112,
                              position: "relative",
                              boxSizing: "border-box",
                            }}
                          >
                            {c.logoUrl ? (
                              <img
                                src={c.logoUrl}
                                alt=""
                                loading="lazy"
                                className="box-border"
                                style={{
                                  width: 112,
                                  height: 112,
                                  verticalAlign: "baseline",
                                  objectFit: "cover",
                                  boxSizing: "border-box",
                                  border: "0px none rgba(0, 0, 0, 0.87)",
                                }}
                              />
                            ) : null}
                          </div>
                        </div>
                      </div>
                      {c.leftTitle ? (
                        <div
                          className="box-border"
                          style={{
                            color: "rgb(255, 255, 255)",
                            padding: "0px 12px",
                            maxWidth: "100%",
                            marginTop: 8,
                            fontSize: 20,
                            textAlign: "center",
                            textOverflow: "ellipsis",
                            wordBreak: "break-word",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            display: "-webkit-box",
                            overflow: "hidden",
                            boxSizing: "border-box",
                          }}
                        >
                          {c.leftTitle}
                        </div>
                      ) : null}
                    </div>

                    {/* Center: offer lines + T&C */}
                    <div
                      role="presentation"
                      className="relative box-border flex min-w-0 flex-1 flex-col justify-center overflow-hidden"
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingLeft: 24,
                        display: "flex",
                        position: "relative",
                        overflow: "hidden",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className="pointer-events-none absolute box-border overflow-hidden"
                        style={{
                          clip: "rect(0px, 0px, 0px, 0px)",
                          whiteSpace: "nowrap",
                          border: "0px none rgba(0, 0, 0, 0.87)",
                          width: "1px",
                          height: 1,
                          margin: "-1px",
                          padding: 0,
                          position: "absolute",
                          overflow: "hidden",
                          boxSizing: "border-box",
                        }}
                      >
                        <span aria-label="voucher" className="box-border" />
                        {c.topBadgeText ? (
                          <span aria-label={c.topBadgeText} className="box-border" />
                        ) : null}
                      </div>

                      {c.discountText ? (
                        <div
                          className="box-border"
                          style={{
                            color: "rgb(33, 33, 33)",
                            zIndex: 1,
                            fontSize: 28,
                            fontWeight: 700,
                            lineHeight: "32px",
                            verticalAlign: "middle",
                            textOverflow: "ellipsis",
                            wordBreak: "break-word",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            display: "-webkit-box",
                            overflow: "hidden",
                            boxSizing: "border-box",
                          }}
                        >
                          <span
                            className="box-border"
                            style={{
                              zIndex: 1,
                              fontSize: 28,
                              fontWeight: 700,
                              lineHeight: "32px",
                              color: "rgb(33, 33, 33)",
                              verticalAlign: "middle",
                              boxSizing: "border-box",
                            }}
                          >
                            {c.discountText}
                          </span>
                        </div>
                      ) : null}

                      {c.minSpendText ? (
                        <div
                          className="box-border"
                          style={{
                            color: "rgb(33, 33, 33)",
                            marginTop: 4,
                            fontSize: 24,
                            lineHeight: "28px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            boxSizing: "border-box",
                          }}
                        >
                          {c.minSpendText}
                        </div>
                      ) : null}

                      {c.pillText ? (
                        <div
                          className="box-border flex"
                          style={{ marginTop: 12, display: "flex", boxSizing: "border-box" }}
                        >
                          <div
                            className="box-border"
                            style={{
                              maxWidth: "100%",
                              fontSize: 24,
                              lineHeight: "28px",
                              padding: "2px 8px",
                              color: "rgb(238, 77, 45)",
                              border: "1px solid rgb(238, 77, 45)",
                              borderRadius: 4,
                              textOverflow: "ellipsis",
                              WebkitLineClamp: 1,
                              WebkitBoxOrient: "vertical",
                              display: "-webkit-box",
                              overflow: "hidden",
                              boxSizing: "border-box",
                            }}
                          >
                            {c.pillText}
                          </div>
                        </div>
                      ) : null}

                      <div
                        className="box-border"
                        style={{ paddingTop: 8, boxSizing: "border-box" }}
                      >
                        <div
                          className="box-border flex flex-row items-center"
                          style={{
                            color: "rgba(0, 0, 0, 0.54)",
                            whiteSpace: "nowrap",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 8,
                            fontSize: 20,
                            fontWeight: 400,
                            lineHeight: "24px",
                            display: "flex",
                            boxSizing: "border-box",
                          }}
                        >
                          <span
                            className="box-border"
                            style={{
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              boxSizing: "border-box",
                            }}
                          >
                            <span
                              className="box-border"
                              style={{ color: "rgb(117, 117, 117)", fontSize: 20, boxSizing: "border-box" }}
                            >
                              <span
                                className="box-border align-middle"
                                style={{ verticalAlign: "middle", boxSizing: "border-box" }}
                              >
                                {c.validityText}
                              </span>
                            </span>
                          </span>
                          {c.termsUrl ? (
                            <span className="box-border" style={{ boxSizing: "border-box" }}>
                              <span className="box-border" style={{ boxSizing: "border-box" }}>
                                <OuterLink
                                  href={c.termsUrl}
                                  aria-label="term and condition link"
                                  tabIndex={0}
                                  className="box-border bg-transparent font-bold"
                                  style={{
                                    color: "rgb(64, 128, 238)",
                                    verticalAlign: "middle",
                                    paddingLeft: 8,
                                    fontSize: 20,
                                    fontWeight: 700,
                                    lineHeight: "24px",
                                    textDecoration: "none",
                                    boxSizing: "border-box",
                                    backgroundColor: "rgba(0, 0, 0, 0)",
                                  }}
                                >
                                  T&amp;C
                                </OuterLink>
                              </span>
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    {/* Right: Use */}
                    <div
                      role="presentation"
                      className="relative box-border flex shrink-0 flex-col items-end justify-center"
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        padding: "12px 25px 12px 7px",
                        display: "flex",
                        position: "relative",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className="box-border flex flex-col items-center"
                        style={{
                          flexDirection: "column",
                          alignItems: "center",
                          display: "flex",
                          boxSizing: "border-box",
                        }}
                      >
                        <div
                          className="relative box-border cursor-pointer"
                          style={{ cursor: "pointer", position: "relative", boxSizing: "border-box" }}
                        >
                          {c.ctaUrl ? (
                            <OuterLink
                              href={c.ctaUrl}
                              tabIndex={0}
                              role="button"
                              className="relative box-border text-center"
                              style={{
                                color: "rgb(238, 77, 45)",
                                minWidth: 104,
                                maxWidth: 120,
                                borderRadius: 8,
                                textOverflow: "ellipsis",
                                WebkitLineClamp: 2,
                                wordBreak: "break-word",
                                WebkitBoxOrient: "vertical",
                                display: "-webkit-box",
                                overflow: "hidden",
                                boxSizing: "border-box",
                                padding: 10,
                                fontSize: 24,
                                lineHeight: "28px",
                                textAlign: "center",
                                cursor: "pointer",
                                position: "relative",
                              }}
                            >
                              <span className="box-border" style={{ boxSizing: "border-box" }}>
                                {c.ctaLabel}
                              </span>
                            </OuterLink>
                          ) : (
                            <div
                              tabIndex={0}
                              role="button"
                              className="relative box-border text-center"
                              style={{
                                color: "rgb(238, 77, 45)",
                                minWidth: 104,
                                maxWidth: 120,
                                borderRadius: 8,
                                textOverflow: "ellipsis",
                                WebkitLineClamp: 2,
                                wordBreak: "break-word",
                                WebkitBoxOrient: "vertical",
                                display: "-webkit-box",
                                overflow: "hidden",
                                boxSizing: "border-box",
                                padding: 10,
                                fontSize: 24,
                                lineHeight: "28px",
                                textAlign: "center",
                                cursor: "pointer",
                                position: "relative",
                              }}
                            >
                              <span className="box-border" style={{ boxSizing: "border-box" }}>
                                {c.ctaLabel}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Top corner badge (COD etc.) */}
                    {c.topBadgeText ? (
                      <div
                        className="absolute box-border flex text-white"
                        style={{
                          background: "rgb(237, 165, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                          maxWidth: 204,
                          backgroundColor: "rgb(237, 165, 0)",
                          top: 8,
                          left: -4,
                          padding: "2px 4px",
                          fontSize: 20,
                          fontWeight: 600,
                          lineHeight: "23px",
                          color: "rgb(255, 255, 255)",
                          borderRadius: "2px 2px 2px 0px",
                          display: "flex",
                          position: "absolute",
                          boxSizing: "border-box",
                        }}
                      >
                        <div
                          className="box-border"
                          style={{
                            maxWidth: 212,
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            boxSizing: "border-box",
                          }}
                        >
                          {c.topBadgeText}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border" style={{ boxSizing: "border-box" }} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="mb-2 w-full sm:mb-2.5">
      <div className="w-full min-w-0">
        <div className="mx-auto w-full min-w-0">
          {wrapHref ? (
            <OuterLink href={wrapHref} className="block bg-transparent">
              {cardInner}
            </OuterLink>
          ) : (
            cardInner
          )}
        </div>
      </div>
    </div>
  );
}
