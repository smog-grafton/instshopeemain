You are working inside a live repository with full context. Create a new component based on the HTML and CSS I provide.

Honor the current folder structure and coding conventions. If a `components` folder exists, split HTML/CSS across component files for modularity. Propose file paths up front and then produce patches/diffs for each file you add or change.

## Project alignment
- If Shadcn UI is present, follow its patterns (foldering, `@/components/ui/*`, `cn` util, variants).
- If an icon library is present, replace inline SVGs with icons from that library.
- If the project uses TypeScript, make the component fully type-safe. Match the repo's preference for `interface` vs `type`.
- If the app is Next.js and uses `next/image`, use it for images.
- Use loops for repeated structures.
- Copy the HTML verbatim (except for the explicit rules above). Do not alter semantics.
- Prefer small, focused subcomponents rather than one large component.

## HTML and CSS

This html and css is extracted from `https://shopee.com.my/%F0%9F%8E%81Free-Pillow%F0%9F%8E%81-Inflatable-Air-bed-Mattress-With-Electric-Pump-40CM-Single-Double-Mattress-Portable-In-Outdoor-Camping-Mat-i.308904741.24479143339?extraParams=%7B%22display_model_id%22%3A49905240873%2C%22model_selection_logic%22%3A3%7D` via the selector `div.flex-auto.flex-column.tKNJvJ`. Don't call the component the name of the website, choose a name that is more generic.
The original background color for this html is `rgb(255, 255, 255)` (the color of the plane behind the html). When integrating the component into the project, make sure the background color of the location, where the new component is placed, matches the theme of the original background color. It doesn't need to be exactly the same, but the theme should match (light, dark, etc.).

**Skip any css if:**
- It is common and already included through Tailwind's Preflight styles (must be generic and not custom).
- It is already defined by the projects global css.

**Important:**
If the css contains a layer statement (e.g. `@layer base, component;`), you must not skip it and you must insert this statement at the top most position of the global css file, even above any Tailwind at-rules like `@import "tailwindcss"`, `@tailwind base;`, `@tailwind components;` or `@tailwind utilities;`. Furthermore, you must preserve any css layer blocks (e.g. `@layer base { ... }`) with their order, when including styles. Integrate the layer blocks somewhere in the global css file, most likely at the end of the file. Any deviation from this, and the styles might break.

```html
<div class="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 flex-col flex-[auto] w-full pl-5 pr-9 pt-5" id="component">
  <div class="text-ellipsis [-webkit-line-clamp:2] align-sub break-words max-w-2xl text-xl font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden">
    <h1 class="align-middle inline m-[inherit]">🎁Free Pillow🎁 Inflatable Air bed Mattress With Electric Pump 40CM Single/Double Mattress Portable In Outdoor Camping Mat</h1>
  </div>
  <div class="flex min-h-6 relative mt-2.5"><button class="[appearance:auto] flex cursor-pointer items-center pr-4 border-0">
      <div class="[border-bottom-style:solid] text-base mr-1.5 pb-px border-b text-neutral-800 border-b-neutral-800">4.8</div>
      <div class="inline-flex relative">
        <div class="relative mr-px">
          <div class="z-[1] h-full absolute overflow-x-hidden overflow-y-hidden left-0 top-0 w-full">
            <div class="bg-no-repeat bg-contain bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b1caea2bc005e0f6fd8e.svg')] w-3.5 h-3.5"></div>
          </div>
          <div class="bg-no-repeat bg-contain bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/95364851020901105ff2.svg')] w-3.5 h-3.5"></div>
        </div>
        <div class="relative mr-px">
          <div class="z-[1] h-full absolute overflow-x-hidden overflow-y-hidden left-0 top-0 w-full">
            <div class="bg-no-repeat bg-contain bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b1caea2bc005e0f6fd8e.svg')] w-3.5 h-3.5"></div>
          </div>
          <div class="bg-no-repeat bg-contain bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/95364851020901105ff2.svg')] w-3.5 h-3.5"></div>
        </div>
        <div class="relative mr-px">
          <div class="z-[1] h-full absolute overflow-x-hidden overflow-y-hidden left-0 top-0 w-full">
            <div class="bg-no-repeat bg-contain bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b1caea2bc005e0f6fd8e.svg')] w-3.5 h-3.5"></div>
          </div>
          <div class="bg-no-repeat bg-contain bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/95364851020901105ff2.svg')] w-3.5 h-3.5"></div>
        </div>
        <div class="relative mr-px">
          <div class="z-[1] h-full absolute overflow-x-hidden overflow-y-hidden left-0 top-0 w-full">
            <div class="bg-no-repeat bg-contain bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b1caea2bc005e0f6fd8e.svg')] w-3.5 h-3.5"></div>
          </div>
          <div class="bg-no-repeat bg-contain bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/95364851020901105ff2.svg')] w-3.5 h-3.5"></div>
        </div>
        <div class="relative mr-px">
          <div class="z-[1] h-full absolute overflow-x-hidden overflow-y-hidden left-0 top-0 w-10/12">
            <div class="bg-no-repeat bg-contain bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b1caea2bc005e0f6fd8e.svg')] w-3.5 h-3.5"></div>
          </div>
          <div class="bg-no-repeat bg-contain bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/95364851020901105ff2.svg')] w-3.5 h-3.5"></div>
        </div>
      </div>
    </button><button class="[appearance:auto] flex cursor-pointer items-center px-4 border-r-0 border-y-0 [border-left-style:solid] border-l border-l-black/14">
      <div class="text-neutral-800 [border-bottom-style:solid] text-base mr-1.5 pb-px border-b border-b-neutral-600">1.6k</div>
      <div class="text-neutral-500 capitalize text-sm mr-1.5 py-1">ratings</div>
    </button>
    <div class="flex items-center px-4 [border-left-style:solid] border-l border-l-black/14" tabindex="0">
      <div class="text-neutral-500 capitalize text-sm mr-1.5 py-1">
        <span class="text-neutral-800 text-base mr-1.5 pb-px">6k+</span> Sold</div>
      <div class="outline-0 flex relative focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87" id="pc-drawer-id-4" tabindex="0"><img alt="icon help" class="align-baseline inline w-3.5 h-3.5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/e752f9593529853f9406.svg"></div>
    </div><button class="[appearance:auto] cursor-pointer text-sm ml-auto border-[unset] text-black/54">Report</button>
  </div>
  <div class="mt-2.5">
    <div class="flex flex-col z-[2] bg-neutral-50 relative px-5 py-4">
      <section aria-live="polite">
        <div class="items-center flex">
          <div class="text-red-500 text-3xl font-medium whitespace-nowrap flex-none">RM21.48 -
            RM215.00</div>
          <div class="text-neutral-400 text-base line-through whitespace-nowrap flex-none ml-2.5">RM43.00 - RM300.00</div>
          <div class="whitespace-nowrap flex-none text-red-500 bg-rose-50 justify-center items-center h-5 text-xs font-bold inline-flex ml-2.5 px-1 rounded-sm">-50%</div>
        </div>
      </section>
    </div>
  </div>
  <div class="mt-6 px-5">
    <div class="flex flex-col">
      <div aria-haspopup="true" aria-expanded="false" id="miniVoucherPopoverLabel" class="text-neutral-800 items-center flex -ml-1 -mt-1 mb-6 p-1 focus-visible:outline-2 focus-visible:outline-solid focus-visible:rounded-sm relative" tabindex="0">
        <section class="w-full items-center flex">
          <h2 class="[font:revert] text-neutral-500 capitalize w-24 shrink-0 font-normal mr-2.5">Shop Vouchers</h2>
          <div class="flex flex-[auto] w-0 min-w-[calc(100%-theme(minWidth.60))] h-6">
            <div class="flex-[auto] w-0 flex relative overflow-x-hidden overflow-y-hidden">
              <div class="cursor-default z-[1] whitespace-nowrap text-red-500 justify-center items-center max-w-full flex px-2 py-[3px] bg-red-700/8 relative mr-2.5 before:content-[&quot;&quot;] before:bg-[radial-gradient(#fff_2px,#0000_0)] before:[background-position-x:-6px] before:bg-size-[6px_6px] before:w-1.5 before:h-[calc(100%-theme(height[1.5]))] before:absolute before:left-[-3px] before:top-[2.5px] after:content-[&quot;&quot;] after:bg-[radial-gradient(#fff_2px,#0000_0)] after:[background-position-x:-6px] after:bg-size-[6px_6px] after:w-1.5 after:h-[calc(100%-theme(height[1.5]))] after:absolute after:right-[-3px] after:top-[2.5px]"><span>15% OFF</span></div>
              <div class="cursor-default z-[1] whitespace-nowrap text-red-500 justify-center items-center max-w-full flex px-2 py-[3px] bg-red-700/8 relative mr-2.5 before:content-[&quot;&quot;] before:bg-[radial-gradient(#fff_2px,#0000_0)] before:[background-position-x:-6px] before:bg-size-[6px_6px] before:w-1.5 before:h-[calc(100%-theme(height[1.5]))] before:absolute before:left-[-3px] before:top-[2.5px] after:content-[&quot;&quot;] after:bg-[radial-gradient(#fff_2px,#0000_0)] after:[background-position-x:-6px] after:bg-size-[6px_6px] after:w-1.5 after:h-[calc(100%-theme(height[1.5]))] after:absolute after:right-[-3px] after:top-[2.5px]"><span>20% OFF</span></div>
              <div class="cursor-default z-[1] whitespace-nowrap text-red-500 justify-center items-center max-w-full flex px-2 py-[3px] bg-red-700/8 relative mr-2.5 before:content-[&quot;&quot;] before:bg-[radial-gradient(#fff_2px,#0000_0)] before:[background-position-x:-6px] before:bg-size-[6px_6px] before:w-1.5 before:h-[calc(100%-theme(height[1.5]))] before:absolute before:left-[-3px] before:top-[2.5px] after:content-[&quot;&quot;] after:bg-[radial-gradient(#fff_2px,#0000_0)] after:[background-position-x:-6px] after:bg-size-[6px_6px] after:w-1.5 after:h-[calc(100%-theme(height[1.5]))] after:absolute after:right-[-3px] after:top-[2.5px]"><span>15% OFF</span></div>
              <div class="z-[1] bg-[linear-gradient(90deg,#fff0_80%,#fff)] w-[calc(100%+1px)] h-full absolute"></div>
            </div>
          </div>
        </section>
      </div>
      <section class="text-neutral-800 flex -ml-1 -mt-1 mb-6 p-1 items-start">
        <h2 class="[font:revert] text-neutral-500 capitalize w-24 shrink-0 items-center font-normal mr-2.5 leading-5">Shipping</h2>
        <div class="flex">
          <div class="flex">
            <div class="align-middle inline-block [align-self:start] w-5 h-5 mr-2"><svg width="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline fill-none overflow-x-hidden overflow-y-hidden w-5 h-5">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.45831 4.16669C1.11314 4.16669 0.833313 4.44651 0.833313 4.79169V14.375C0.833313 14.7202 1.11314 15 1.45831 15H3.49158C3.57186 16.1052 4.49366 16.978 5.6207 16.978C6.74775 16.978 7.66955 16.1052 7.74983 15H12.0833L12.0867 15H13.219C13.2993 16.1054 14.2222 16.978 15.3481 16.978C16.4751 16.978 17.3969 16.1052 17.4772 15H18.9134C19.1184 15 19.3103 14.8995 19.4271 14.731C19.5438 14.5626 19.5706 14.3476 19.4986 14.1556L16.8172 7.00285C16.7257 6.75887 16.4925 6.59723 16.232 6.59723H12.7083V4.79169C12.7083 4.44651 12.4285 4.16669 12.0833 4.16669H1.45831ZM17.1822 13.75H18.0116L15.7988 7.84723H12.7083V13.75H13.5142C13.887 13.1262 14.5689 12.7084 15.3481 12.7084C16.128 12.7084 16.8097 13.1263 17.1822 13.75ZM5.6207 12.7084C4.84077 12.7084 4.15912 13.1263 3.78662 13.75H2.08331V5.41669H11.4583V13.75H7.45479C7.08229 13.1263 6.40064 12.7084 5.6207 12.7084ZM5.6207 13.9584C5.13174 13.9584 4.7359 14.3547 4.7359 14.8432C4.7359 15.3317 5.13174 15.728 5.6207 15.728C6.10967 15.728 6.50551 15.3317 6.50551 14.8432C6.50551 14.3547 6.10967 13.9584 5.6207 13.9584ZM14.4633 14.8432C14.4633 14.3549 14.8598 13.9584 15.3481 13.9584C15.837 13.9584 16.2329 14.3547 16.2329 14.8432C16.2329 15.3317 15.837 15.728 15.3481 15.728C14.8598 15.728 14.4633 15.3314 14.4633 14.8432Z" class="fill-teal-500"></path>
              </svg></div>
            <div class="flex-col flex-1 gap-y-1 gap-x-1 leading-5 flex">
              <div class="items-end flex hover:cursor-pointer">
                <div class="text-ellipsis">
                  <span class="text-black/87">Guaranteed to get by 1 - 3 Feb</span></div><svg viewBox="0 0 24 24" width="24" color="rgba(0, 0, 0, 0.54)" class="align-baseline inline fill-none w-5 h-5 text-black/54 overflow-x-hidden overflow-y-hidden">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.94 12L9.47 6.53l1.06-1.06 5.647 5.646a1.25 1.25 0 010 1.768L10.53 18.53l-1.06-1.06L14.94 12z" class="fill-current"></path>
                </svg>
              </div>
              <div class="text-ellipsis text-xs text-black/54">
                <span>Get a </span><span>RM5.00</span><span> voucher if your order arrives late.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-neutral-800 items-center flex -ml-1 -mt-1 mb-6 p-1">
        <h2 class="[font:revert] text-neutral-500 capitalize w-24 shrink-0 items-center font-normal mr-2.5">Shopping Guarantee</h2>
        <div class="outline-0 flex relative focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87" id="pc-drawer-id-5" tabindex="0">
          <div class="text-ellipsis whitespace-nowrap items-center gap-y-2 gap-x-2 max-w-lg flex overflow-x-hidden overflow-y-hidden hover:cursor-pointer"><img alt="service entrance icon" class="align-baseline inline w-5 h-5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/281bf4388d58a7cc965a.svg">
            <div class="text-ellipsis whitespace-nowrap overflow-x-hidden overflow-y-hidden">
              15-Day Free Returns · Cash on Delivery</div><svg viewBox="0 0 12 12" width="12" color="#ee4d2d" class="align-baseline inline fill-none w-3 h-3 text-black/54 overflow-x-hidden overflow-y-hidden">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8.146L11.146 3l.707.707-5.146 5.147a1 1 0 01-1.414 0L.146 3.707.854 3 6 8.146z" class="fill-current"></path>
            </svg>
          </div>
        </div>
      </section>
      <div class="text-neutral-800 items-center flex -ml-1 -mt-1 pt-1 px-1 pb-4">
        <div class="flex flex-col">
          <section class="flex items-baseline mb-6">
            <h2 class="[font:revert] text-neutral-500 capitalize w-24 shrink-0 items-center font-normal mr-2.5">Specification</h2>
            <div>
              <div class="flex items-center flex-wrap basis-[515px] max-w-lg max-h-56 overflow-y-auto -mt-2"><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="🟢5Layer Single 25CM" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasb-mdecgqiyzrxr33@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasb-mdecgqiyzrxr33@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasb-mdecgqiyzrxr33@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasb-mdecgqiyzrxr33@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasb-mdecgqiyzrxr33">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">🟢5Layer Single 25CM</span>
                </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="🟢5Layer Double 25CM" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820la-mdwnk8s9s004c8@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820la-mdwnk8s9s004c8@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820la-mdwnk8s9s004c8@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820la-mdwnk8s9s004c8@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820la-mdwnk8s9s004c8">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">🟢5Layer Double 25CM</span>
                </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="🟢6Layer Double 40CM" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras9-mdech8h6q4a71b@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras9-mdech8h6q4a71b@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras9-mdech8h6q4a71b@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras9-mdech8h6q4a71b@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras9-mdech8h6q4a71b">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">🟢6Layer Double 40CM</span>
                </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="🟢7-Layer King 40CM" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-mdechbns2fnpac@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-mdechbns2fnpac@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-mdechbns2fnpac@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-mdechbns2fnpac@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-mdechbns2fnpac">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">🟢7-Layer King 40CM</span>
                </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="⚫5Layer Double 25CM" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820l6-me80g0lycvet49@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820l6-me80g0lycvet49@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820l6-me80g0lycvet49@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820l6-me80g0lycvet49@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820l6-me80g0lycvet49">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">⚫5Layer Double 25CM</span>
                </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="⚫6-Layer Double 40CM" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rash-mawfcgg5q6y27b@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rash-mawfcgg5q6y27b@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rash-mawfcgg5q6y27b@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rash-mawfcgg5q6y27b@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rash-mawfcgg5q6y27b">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">⚫6-Layer Double 40CM</span>
                </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="⚫7-Layer King 40CM" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasf-mawfcjft1ewa4c@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasf-mawfcjft1ewa4c@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasf-mawfcjft1ewa4c@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasf-mawfcjft1ewa4c@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasf-mawfcjft1ewa4c">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">⚫7-Layer King 40CM</span>
                </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="5-Layer Single 25CM" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rask-m7hcyssmxp3s33@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rask-m7hcyssmxp3s33@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rask-m7hcyssmxp3s33@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rask-m7hcyssmxp3s33@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rask-m7hcyssmxp3s33">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">5-Layer Single 25CM</span>
                </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="5-Layer Single 40CM" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasd-m7hcz3d1h07cf4@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasd-m7hcz3d1h07cf4@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasd-m7hcz3d1h07cf4@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasd-m7hcz3d1h07cf4@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasd-m7hcz3d1h07cf4">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">5-Layer Single 40CM</span>
                </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="6-Layer Double 40CM" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasj-m7hd1xwff5i7de@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasj-m7hd1xwff5i7de@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasj-m7hd1xwff5i7de@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasj-m7hd1xwff5i7de@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasj-m7hd1xwff5i7de">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">6-Layer Double 40CM</span>
                </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="7-Layer King 40CM" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasg-mab59yeo529s97@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasg-mab59yeo529s97@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasg-mab59yeo529s97@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasg-mab59yeo529s97@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasg-mab59yeo529s97">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">7-Layer King 40CM</span>
                </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="Two modes 190*150*65" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rase-ma2t6cjpxko58e@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rase-ma2t6cjpxko58e@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rase-ma2t6cjpxko58e@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rase-ma2t6cjpxko58e@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rase-ma2t6cjpxko58e">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">Two modes 190*150*65</span>
                </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="200*100+30CM khaki" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasc-m8zxh2j9p23p95@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasc-m8zxh2j9p23p95@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasc-m8zxh2j9p23p95@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasc-m8zxh2j9p23p95@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasc-m8zxh2j9p23p95">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">200*100+30CM khaki</span>
                </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="200×100+45CM khaki" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-m8zxh5vosu79e4@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-m8zxh5vosu79e4@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-m8zxh5vosu79e4@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-m8zxh5vosu79e4@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-m8zxh5vosu79e4">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">200×100+45CM khaki</span>
                </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="200×150+45CM khaki" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasc-m8zxh2j9p23p95@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasc-m8zxh2j9p23p95@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasc-m8zxh2j9p23p95@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasc-m8zxh2j9p23p95@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasc-m8zxh2j9p23p95">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">200×150+45CM khaki</span>
                </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="200×180+45CM khaki" aria-disabled="false">
                  <picture class="contents">
                    <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-m8zxh5vosu79e4@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-m8zxh5vosu79e4@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-m8zxh5vosu79e4@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-m8zxh5vosu79e4@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-m8zxh5vosu79e4">
                  </picture>
                  <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">200×180+45CM khaki</span>
                </button></div>
            </div>
          </section>
          <section class="flex items-center text-neutral-500 mt-4">
            <h2 class="[font:revert] text-neutral-500 capitalize w-24 shrink-0 items-center font-normal mr-2.5">Quantity</h2>
            <div class="flex items-center">
              <div class="mr-4">
                <div class="items-center flex bg-white"><button aria-label="Decrease" class="[appearance:auto] tracking-[0] outline-0 justify-center items-center w-8 h-8 text-sm font-light leading-none transition-colors duration-100 ease-in-out flex rounded-sm border border-solid text-stone-300 border-black/9 focus-visible:shadow-sm first:rounded-tr-none first:rounded-br-none" disabled=""><svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden shrink-0 w-2.5 h-2.5 text-xs fill-stone-300">
                      <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                    </svg></button><input class="py-px tracking-[0] outline-0 justify-center items-center transition-colors duration-100 ease-in-out flex border-y border-solid text-center w-12 h-8 text-base font-normal border-x-0 cursor-default text-stone-300 border-black/9 focus-visible:shadow-sm" type="text" disabled="" role="spinbutton" aria-live="assertive" aria-valuenow="1" value="1"><button aria-label="Increase" class="[appearance:auto] tracking-[0] outline-0 justify-center items-center w-8 h-8 text-sm font-light leading-none transition-colors duration-100 ease-in-out flex rounded-sm border border-solid text-stone-300 border-black/9 focus-visible:shadow-sm last:rounded-tl-none last:rounded-bl-none" disabled=""><svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden shrink-0 w-2.5 h-2.5 text-xs fill-stone-300">
                      <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                    </svg></button></div>
              </div>
              <div>IN STOCK</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-4 mb-8">
    <div class="pl-5">
      <div class="flex"><button type="button" class="[appearance:auto] min-w-44 text-sm mr-4 text-ellipsis [-webkit-line-clamp:1] capitalize cursor-pointer justify-center items-center flex rounded-sm max-w-64 h-12 px-5 outline-0 relative text-red-500 shadow-sm border border-solid border-red-500 bg-orange-600/10 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87 hover:bg-orange-200/18 active:shadow-inner active:bg-orange-900/15" aria-disabled="false"><img alt="icon-add-to-cart" class="align-baseline inline w-5 h-5 mr-2.5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/f600cbfffbe02cc144a1.svg"><span>add to cart</span></button><button type="button" class="[appearance:auto] min-w-44 text-sm mr-4 text-ellipsis [-webkit-line-clamp:1] capitalize cursor-pointer flex-col justify-center items-center flex shadow-sm rounded-sm border-0 h-12 px-5 text-white outline-0 relative bg-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87 hover:bg-red-500 active:bg-red-500 active:shadow-inner" aria-disabled="false">buy now</button></div>
    </div>
  </div>
</div>
```

```css
@layer base, component;
@font-face {
  font-display: swap;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  src: url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9cff5f27f6ad3d59.eot');
  src:
    local(Roboto Light),
    local(Roboto-Light),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/2188ea3f3f8ab51a.woff') format("woff"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5605865fb101be1a.ttf') format("truetype"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1e0c2160cb5b9b62.svg#Roboto-Light') format("svg");
}
@font-face {
  font-display: swap;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  src: url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/b21a0eefbec4f57f.eot');
  src:
    local(Roboto),
    local(Roboto-Regular),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/2313f68c10458709.woff') format("woff"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/b796ce65a81adc41.ttf') format("truetype"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1e0c2160cb5b9b62.svg#Roboto-Regular') format("svg");
}
@font-face {
  font-display: swap;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  src: url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/0d2870f5e1759c7a.eot');
  src:
    local(Roboto Bold),
    local(Roboto-Bold),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/313d5de65a92aae6.woff') format("woff"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/ed694f411e0b3a82.ttf') format("truetype"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1e0c2160cb5b9b62.svg#Roboto-Bold') format("svg");
}
@font-face {
  font-display: swap;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  src: url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9a9c9421bcdef79c.eot');
  src:
    local(Roboto Medium),
    local(Roboto-Medium),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/769ea541b3eef14d.woff') format("woff"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/03501557d620ee6b.ttf') format("truetype"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1e0c2160cb5b9b62.svg#Roboto-Medium') format("svg");
}
@font-face {
  font-display: swap;
  font-family: SHPBurmese;
  font-style: normal;
  font-weight: 400;
  src:
    local(SHPBurmese),
    local(SHPBurmese-Regular),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/cb8cb550721c0e4b.woff2') format("woff2"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f323e3aca914323c.woff') format("woff");
  unicode-range: U+1000-109F, U+200C-200D, U+25CC, U+A92E, U+A9E0-A9FE, U+AA60-AA7F, U+116D0-116E3;
}
@font-face {
  font-display: swap;
  font-family: SHPBurmese;
  font-style: normal;
  font-weight: 500 900;
  src:
    local(SHPBurmese),
    local(SHPBurmese-Bold),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f541c268f1fe1d5e.woff2') format("woff2"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/0d6a0e110a917f1a.woff') format("woff");
  unicode-range: U+1000-109F, U+200C-200D, U+25CC, U+A92E, U+A9E0-A9FE, U+AA60-AA7F, U+116D0-116E3;
}
@font-face {
  font-display: swap;
  font-family: SHPKhmer;
  font-style: normal;
  font-weight: 400;
  src:
    local(SHPKhmer),
    local(SHPKhmer-Regular),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/94e02354f0537a73.woff2') format("woff2"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/b2e27183240120a8.woff') format("woff");
  unicode-range: U+1780-17FF, U+19E0-19FF, U+200C-200D, U+25CC;
}
@font-face {
  font-display: swap;
  font-family: SHPKhmer;
  font-style: normal;
  font-weight: 500 900;
  src:
    local(SHPKhmer),
    local(SHPKhmer-Bold),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/09a297825af983b8.woff2') format("woff2"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/fdff68f9de417674.woff') format("woff");
  unicode-range: U+1780-17FF, U+19E0-19FF, U+200C-200D, U+25CC;
}
@font-face {
  font-display: swap;
  font-family: Roboto;
  src: url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/f1bcf0f64a201912072b.eot');
  src:
    local(Roboto Light),
    local(Roboto-Light),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/8dc942c71385e7509b87.woff') format("woff"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/c248e1508ed79ef03adf.ttf') format("truetype"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b0b9dd8a84d67db5ebbf.svg#Roboto-Light') format("svg");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-display: swap;
  font-family: Roboto;
  src: url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/5edb75fadfbc53d7745c.eot');
  src:
    local(Roboto),
    local(Roboto-Regular),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/770a8fca674a3550e241.woff') format("woff"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/10952ea0fbd7cb93977f.ttf') format("truetype"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b0b9dd8a84d67db5ebbf.svg#Roboto-Regular') format("svg");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-display: swap;
  font-family: Roboto;
  src: url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/37f419871727f019c788.eot');
  src:
    local(Roboto Bold),
    local(Roboto-Bold),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/8bd7856b64b4313341eb.woff') format("woff"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/69c061b7c23590e75a88.ttf') format("truetype"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b0b9dd8a84d67db5ebbf.svg#Roboto-Bold') format("svg");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-display: swap;
  font-family: Roboto;
  src: url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/f4df501fdaf4863dc4e0.eot');
  src:
    local(Roboto Medium),
    local(Roboto-Medium),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/eb797abfa6a5cca2463e.woff') format("woff"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/ad148b1c1dd7fb964d14.ttf') format("truetype"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b0b9dd8a84d67db5ebbf.svg#Roboto-Medium') format("svg");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-display: swap;
  font-family: SHPBurmese;
  src:
    local(SHPBurmese),
    local(SHPBurmese-Regular),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/424b475ab19caf1f46b6.woff2') format("woff2"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/0870be775d1b2f796a49.woff') format("woff");
  font-weight: 400;
  font-style: normal;
  unicode-range: U+1000-109F, U+200C-200D, U+25CC, U+A92E, U+A9E0-A9FE, U+AA60-AA7F, U+116D0-116E3;
}
@font-face {
  font-display: swap;
  font-family: SHPBurmese;
  src:
    local(SHPBurmese),
    local(SHPBurmese-Bold),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/ae2a65783bae966be025.woff2') format("woff2"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/08b89780030249f265a4.woff') format("woff");
  font-weight: 500 900;
  font-style: normal;
  unicode-range: U+1000-109F, U+200C-200D, U+25CC, U+A92E, U+A9E0-A9FE, U+AA60-AA7F, U+116D0-116E3;
}
@font-face {
  font-display: swap;
  font-family: SHPKhmer;
  src:
    local(SHPKhmer),
    local(SHPKhmer-Regular),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/07657abc97c3598331c0.woff2') format("woff2"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/5762614baf30b68cfbfc.woff') format("woff");
  font-weight: 400;
  font-style: normal;
  unicode-range: U+1780-17FF, U+19E0-19FF, U+200C-200D, U+25CC;
}
@font-face {
  font-display: swap;
  font-family: SHPKhmer;
  src:
    local(SHPKhmer),
    local(SHPKhmer-Bold),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/3bd4abecbc4c30ffe562.woff2') format("woff2"),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/37b0c7493dcb66a80d95.woff') format("woff");
  font-weight: 500 900;
  font-style: normal;
  unicode-range: U+1780-17FF, U+19E0-19FF, U+200C-200D, U+25CC;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  src:
    local(Roboto Light),
    local(Roboto-Light),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/cyrillic-ext-light.woff2') format("woff2");
  unicode-range: U+460-52F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  src:
    local(Roboto Light),
    local(Roboto-Light),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/cyrillic-light.woff2') format("woff2");
  unicode-range: U+400-45F, U+490-491, U+4B0-4B1, U+2116;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  src:
    local(Roboto Light),
    local(Roboto-Light),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/greek-ext-light.woff2') format("woff2");
  unicode-range: U+1F??;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  src:
    local(Roboto Light),
    local(Roboto-Light),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/greek-light.woff2') format("woff2");
  unicode-range: U+370-3FF;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  src:
    local(Roboto Light),
    local(Roboto-Light),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/vietnamese-light.woff2') format("woff2");
  unicode-range: U+102-103, U+110-111, U+128-129, U+168-169, U+1A0-1A1, U+1AF-1B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  src:
    local(Roboto Light),
    local(Roboto-Light),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/latin-ext-light.woff2') format("woff2");
  unicode-range: U+100-24F, U+259, U+1E??, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  src:
    local(Roboto Light),
    local(Roboto-Light),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/latin-light.woff2') format("woff2");
  unicode-range:
    U+??, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF,
    U+FFFD;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  src:
    local(Roboto),
    local(Roboto-Regular),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/cyrillic-ext-regular.woff2') format("woff2");
  unicode-range: U+460-52F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  src:
    local(Roboto),
    local(Roboto-Regular),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/cyrillic-regular.woff2') format("woff2");
  unicode-range: U+400-45F, U+490-491, U+4B0-4B1, U+2116;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  src:
    local(Roboto),
    local(Roboto-Regular),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/greek-ext-regular.woff2') format("woff2");
  unicode-range: U+1F??;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  src:
    local(Roboto),
    local(Roboto-Regular),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/greek-regular.woff2') format("woff2");
  unicode-range: U+370-3FF;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  src:
    local(Roboto),
    local(Roboto-Regular),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/vietnamese-regular.woff2') format("woff2");
  unicode-range: U+102-103, U+110-111, U+128-129, U+168-169, U+1A0-1A1, U+1AF-1B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  src:
    local(Roboto),
    local(Roboto-Regular),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/latin-ext-regular.woff2') format("woff2");
  unicode-range: U+100-24F, U+259, U+1E??, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  src:
    local(Roboto),
    local(Roboto-Regular),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/latin-regular.woff2') format("woff2");
  unicode-range:
    U+??, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF,
    U+FFFD;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  src:
    local(Roboto Medium),
    local(Roboto-Medium),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/cyrillic-ext-medium.woff2') format("woff2");
  unicode-range: U+460-52F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  src:
    local(Roboto Medium),
    local(Roboto-Medium),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/cyrillic-medium.woff2') format("woff2");
  unicode-range: U+400-45F, U+490-491, U+4B0-4B1, U+2116;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  src:
    local(Roboto Medium),
    local(Roboto-Medium),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/greek-ext-medium.woff2') format("woff2");
  unicode-range: U+1F??;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  src:
    local(Roboto Medium),
    local(Roboto-Medium),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/greek-medium.woff2') format("woff2");
  unicode-range: U+370-3FF;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  src:
    local(Roboto Medium),
    local(Roboto-Medium),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/vietnamese-medium.woff2') format("woff2");
  unicode-range: U+102-103, U+110-111, U+128-129, U+168-169, U+1A0-1A1, U+1AF-1B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  src:
    local(Roboto Medium),
    local(Roboto-Medium),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/latin-ext-medium.woff2') format("woff2");
  unicode-range: U+100-24F, U+259, U+1E??, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  src:
    local(Roboto Medium),
    local(Roboto-Medium),
    url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-seller-live-my/chateasy/latin-medium.woff2') format("woff2");
  unicode-range:
    U+??, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF,
    U+FFFD;
}

```

## Repo-specific steps
1) Detect Tailwind version and config; integrate only nonstandard Tailwind classes (arbitrary JIT, custom tokens).
2) If CSS includes `@layer`, insert the layer statement at the top of global CSS (above Tailwind at-rules) and preserve block order.
3) Emit a minimal test or story (if the repo uses Storybook/Playwright) for the new component.
4) Output a final diff for all touched files.

## Assets

Look closely at the html and css and figure out which assets are used. Make sure to download them via shell and include it in a project aligned way. For fonts, check if the project already uses them. If not, check if we can include them via `next/font/...`, otherwise download them via shell and include them in a project aligned way via font-face, unless stated differently by the user or Next.js isn't used.

You need to ask the user before doing any shell interactions for downloading the assets, so do this as last step! Before you have the permission, use the regular urls provided by the html, no placeholder, just the original urls provided by the html verbatim! This means you also need to allow the urls external host via e.g. next config.