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

This html and css is extracted from `https://shopee.com.my/Latest-RUN3.0-men's-sneakers-casual-men's-shoes-i.806123574.28328592519?extraParams=%7B%22display_model_id%22%3A139267538700%2C%22model_selection_logic%22%3A3%7D` via the selector `div.kr8eST`. Don't call the component the name of the website, choose a name that is more generic.
The original background color for this html is `undefined` (the color of the plane behind the html). When integrating the component into the project, make sure the background color of the location, where the new component is placed, matches the theme of the original background color. It doesn't need to be exactly the same, but the theme should match (light, dark, etc.).

**Skip any css if:**
- It is common and already included through Tailwind's Preflight styles (must be generic and not custom).
- It is already defined by the projects global css.

**Important:**
If the css contains a layer statement (e.g. `@layer base, component;`), you must not skip it and you must insert this statement at the top most position of the global css file, even above any Tailwind at-rules like `@import "tailwindcss"`, `@tailwind base;`, `@tailwind components;` or `@tailwind utilities;`. Furthermore, you must preserve any css layer blocks (e.g. `@layer base { ... }`) with their order, when including styles. Integrate the layer blocks somewhere in the global css file, most likely at the end of the file. Any deviation from this, and the styles might break.

```html
<div class="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 flex-1" id="component">
  <div class="contents">
    <div id="sll2-normal-pdp-main">
      <div>
        <div class="transition-all duration-300 ease-in-out">
          <div>
            <div class="z-[99999] fixed left-0 bottom-0"></div>
            <div role="main" class="w-[1200px] mx-auto pb-16">
              <div class="flex items-center whitespace-nowrap h-4 mt-5"><a class="cursor-pointer text-sky-700 whitespace-nowrap text-sm no-underline active:outline-0 hover:outline-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:-m-1.5 focus-visible:p-1.5 focus-visible:rounded-sm" href="/">Shopee</a><img alt="icon arrow right" class="align-baseline inline w-2.5 h-2.5 mx-1.5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/dd5cbafaee315c6c99f4.svg"><a class="cursor-pointer text-sky-700 whitespace-nowrap text-sm no-underline active:outline-0 hover:outline-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:-m-1.5 focus-visible:p-1.5 focus-visible:rounded-sm" href="/Men-Shoes-cat.11000781">Men Shoes</a><img alt="icon arrow right" class="align-baseline inline w-2.5 h-2.5 mx-1.5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/dd5cbafaee315c6c99f4.svg"><a class="cursor-pointer text-sky-700 whitespace-nowrap text-sm no-underline active:outline-0 hover:outline-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:-m-1.5 focus-visible:p-1.5 focus-visible:rounded-sm" href="/Sneakers-cat.11000781.11000797">Sneakers</a><img alt="icon arrow right" class="align-baseline inline w-2.5 h-2.5 mx-1.5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/dd5cbafaee315c6c99f4.svg"><a class="cursor-pointer text-sky-700 whitespace-nowrap text-sm no-underline active:outline-0 hover:outline-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:-m-1.5 focus-visible:p-1.5 focus-visible:rounded-sm" href="/Others-cat.11000781.11000797.11001800">Others</a><img alt="icon arrow right" class="align-baseline inline w-2.5 h-2.5 mx-1.5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/dd5cbafaee315c6c99f4.svg"><span class="whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden" tabindex="0">Latest RUN3.0 men's sneakers, casual men's shoes</span>
              </div>
              <section class="bg-white shadow-sm rounded-[3px] flex mt-5">
                <section class="shrink-0 w-96 p-4">
                  <div class="flex flex-col">
                    <div class="relative">
                      <div class="relative hover:cursor-pointer">
                        <div class="relative hidden">
                          <div class="w-full relative pt-[100%] bg-white"><svg enable-background="new 0 0 54 61" viewBox="0 0 54 61" role="img" class="align-baseline inline stroke-current fill-current w-16 h-16 overflow-x-hidden overflow-y-hidden text-6xl absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-black/5">
                              <path d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00" class="stroke-none"></path>
                            </svg></div>
                          <div class="justify-center items-center flex w-full h-full absolute left-0 top-0"><img class="align-baseline inline w-full h-full absolute left-0 top-0" src="" elementtiming="shopee:heroComponentPaint"><video class="align-baseline z-[1] bg-white h-full hidden absolute left-0 top-0 w-full" autoplay=""></video></div>
                        </div>
                        <div class="w-full relative pb-[100%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk5-m70xs0r0nh9m83@resize_w450_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk5-m70xs0r0nh9m83@resize_w900_nl.webp 2x" type="image/webp" class="contents" elementtiming="shopee:heroComponentPaint"><img width="450" loading="lazy" class="inline align-bottom object-center object-contain w-full h-full absolute inset-x-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk5-m70xs0r0nh9m83@resize_w450_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk5-m70xs0r0nh9m83@resize_w900_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk5-m70xs0r0nh9m83" alt="Product image Latest RUN3.0 men's sneakers, casual men's shoes 3" elementtiming="shopee:heroComponentPaint">
                          </picture>
                        </div>
                      </div>
                    </div>
                    <div class="relative -mx-1.5 my-1.5">
                      <div class="w-1/5 inline-block p-1.5">
                        <div class="relative hover:cursor-pointer">
                          <div class="w-full relative pb-[100%]">
                            <picture class="contents">
                              <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk5-m70xs0r0nh9m83@resize_w82_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk5-m70xs0r0nh9m83@resize_w164_nl.webp 2x" type="image/webp" class="contents"><img width="82" loading="lazy" class="inline align-bottom object-center object-contain w-full h-full absolute inset-x-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk5-m70xs0r0nh9m83@resize_w82_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk5-m70xs0r0nh9m83@resize_w164_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk5-m70xs0r0nh9m83">
                            </picture>
                          </div>
                          <div class="absolute border-2 border-solid border-red-500 inset-0">
                          </div>
                        </div>
                      </div>
                      <div class="w-1/5 inline-block p-1.5">
                        <div class="relative hover:cursor-pointer">
                          <div class="w-full relative pb-[100%]">
                            <picture class="contents">
                              <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk5-m70xs0r0nh41a5@resize_w82_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk5-m70xs0r0nh41a5@resize_w164_nl.webp 2x" type="image/webp" class="contents"><img width="82" loading="lazy" class="inline align-bottom object-center object-contain w-full h-full absolute inset-x-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk5-m70xs0r0nh41a5@resize_w82_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk5-m70xs0r0nh41a5@resize_w164_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk5-m70xs0r0nh41a5">
                            </picture>
                          </div>
                          <div></div>
                        </div>
                      </div>
                      <div class="w-1/5 inline-block p-1.5">
                        <div class="relative hover:cursor-pointer">
                          <div class="w-full relative pb-[100%]">
                            <picture class="contents">
                              <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0l-mc9fx0ophtqdee@resize_w82_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0l-mc9fx0ophtqdee@resize_w164_nl.webp 2x" type="image/webp" class="contents"><img width="82" loading="lazy" class="inline align-bottom object-center object-contain w-full h-full absolute inset-x-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0l-mc9fx0ophtqdee@resize_w82_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0l-mc9fx0ophtqdee@resize_w164_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0l-mc9fx0ophtqdee">
                            </picture>
                          </div>
                          <div></div>
                        </div>
                      </div>
                      <div class="w-1/5 inline-block p-1.5">
                        <div class="relative hover:cursor-pointer">
                          <div class="w-full relative pb-[100%]">
                            <picture class="contents">
                              <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0i-mc9fx0opj8atc8@resize_w82_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0i-mc9fx0opj8atc8@resize_w164_nl.webp 2x" type="image/webp" class="contents"><img width="82" loading="lazy" class="inline align-bottom object-center object-contain w-full h-full absolute inset-x-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0i-mc9fx0opj8atc8@resize_w82_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0i-mc9fx0opj8atc8@resize_w164_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0i-mc9fx0opj8atc8">
                            </picture>
                          </div>
                          <div></div>
                        </div>
                      </div>
                      <div class="w-1/5 inline-block p-1.5">
                        <div class="relative hover:cursor-pointer">
                          <div class="w-full relative pb-[100%]">
                            <picture class="contents">
                              <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0u-mc9fx0opkmv902@resize_w82_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0u-mc9fx0opkmv902@resize_w164_nl.webp 2x" type="image/webp" class="contents"><img width="82" loading="lazy" class="inline align-bottom object-center object-contain w-full h-full absolute inset-x-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0u-mc9fx0opkmv902@resize_w82_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0u-mc9fx0opkmv902@resize_w164_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0u-mc9fx0opkmv902">
                            </picture>
                          </div>
                          <div></div>
                        </div>
                      </div><button class="[appearance:auto] cursor-pointer tracking-[0] outline-0 justify-center items-center text-sm font-light leading-none transition-colors duration-100 ease-in-out flex border-solid border-black/54 text-white w-5 h-10 absolute -translate-y-2/4 top-2/4 bg-black/20 border-0 left-1.5 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87" tabindex="-1"><img alt="icon arrow left bold" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/5914c85bab254a6705bd.svg" class="align-baseline inline"></button><button class="[appearance:auto] cursor-pointer tracking-[0] outline-0 justify-center items-center text-sm font-light leading-none transition-colors duration-100 ease-in-out flex border-solid border-black/54 text-white w-5 h-10 absolute -translate-y-2/4 top-2/4 bg-black/20 border-0 right-1.5 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87" tabindex="-1"><img alt="icon arrow right bold" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/7e05bc64eb8a25d287c5.svg" class="align-baseline inline"></button>
                    </div>
                  </div>
                  <div class="flex items-center justify-center mt-4">
                    <div class="flex items-center [border-right-style:solid] px-8 border-r border-r-black/9">
                      <div class="text-neutral-800 text-base">Share:</div><button class="[appearance:auto] cursor-pointer bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5625a70747a40315.png')] bg-size-[100%] outline-0 w-6 h-6 relative ml-1.5 border-0 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87" aria-label="Share on Messenger"></button><button class="[appearance:auto] cursor-pointer bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5625a70747a40315.png')] bg-size-[100%] outline-0 w-6 h-6 relative ml-1.5 border-0 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87" aria-label="Share on Facebook"></button><button class="[appearance:auto] cursor-pointer bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5625a70747a40315.png')] bg-size-[100%] outline-0 w-6 h-6 relative ml-1.5 border-0 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87" aria-label="Share on Pinterest"></button><button class="[appearance:auto] cursor-pointer bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5625a70747a40315.png')] bg-size-[100%] outline-0 w-6 h-6 relative ml-1.5 border-0 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87" aria-label="Share on Twitter"></button>
                    </div>
                    <div class="flex items-center flex-1 justify-center hover:cursor-pointer">
                      <button class="[appearance:auto] cursor-pointer outline-0 relative flex border-0 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87" tabindex="0"><svg width="24" class="align-baseline inline h-5 mr-2.5 overflow-x-hidden overflow-y-hidden">
                          <path d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z" stroke-width="1.5" fill-rule="evenodd" stroke-linejoin="round" class="fill-none stroke-rose-500"></path>
                        </svg>
                        <div class="text-neutral-800 text-base">Favorite (198)</div>
                      </button></div>
                  </div>
                </section>
                <section class="flex flex-[auto] grow shrink-0 w-0">
                  <div class="flex-col flex-[auto] w-full pl-5 pr-9 pt-5">
                    <div class="text-ellipsis [-webkit-line-clamp:2] align-sub break-words max-w-2xl text-xl font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden">
                      <h1 class="align-middle inline m-[inherit]">Latest RUN3.0 men's sneakers, casual men's shoes</h1>
                    </div>
                    <div class="flex min-h-6 relative mt-2.5"><button class="[appearance:auto] flex cursor-pointer items-center pr-4 border-0">
                        <div class="[border-bottom-style:solid] text-base mr-1.5 pb-px border-b text-neutral-800 border-b-neutral-800">4.4</div>
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
                            <div class="z-[1] h-full absolute overflow-x-hidden overflow-y-hidden left-0 top-0 w-5/12">
                              <div class="bg-no-repeat bg-contain bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b1caea2bc005e0f6fd8e.svg')] w-3.5 h-3.5"></div>
                            </div>
                            <div class="bg-no-repeat bg-contain bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/95364851020901105ff2.svg')] w-3.5 h-3.5"></div>
                          </div>
                        </div>
                      </button><button class="[appearance:auto] flex cursor-pointer items-center px-4 border-r-0 border-y-0 [border-left-style:solid] border-l border-l-black/14">
                        <div class="text-neutral-800 [border-bottom-style:solid] text-base mr-1.5 pb-px border-b border-b-neutral-600">685</div>
                        <div class="text-neutral-500 capitalize text-sm mr-1.5 py-1">ratings
                        </div>
                      </button>
                      <div class="flex items-center px-4 [border-left-style:solid] border-l border-l-black/14" tabindex="0">
                        <div class="text-neutral-500 capitalize text-sm mr-1.5 py-1">
                          <span class="text-neutral-800 text-base mr-1.5 pb-px">3k+</span> Sold
                        </div>
                        <div class="outline-0 flex relative focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87" id="pc-drawer-id-4" tabindex="0"><img alt="icon help" class="align-baseline inline w-3.5 h-3.5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/e752f9593529853f9406.svg"></div>
                      </div><button class="[appearance:auto] cursor-pointer text-sm ml-auto border-[unset] text-black/54">Report</button>
                    </div>
                    <div class="mt-2.5">
                      <div class="flex flex-col z-[2] bg-neutral-50 relative px-5 py-4">
                        <section aria-live="polite">
                          <div class="items-center flex">
                            <div class="text-red-500 text-3xl font-medium whitespace-nowrap flex-none">RM10.48 - RM18.59</div>
                            <div class="text-neutral-400 text-base line-through whitespace-nowrap flex-none ml-2.5">RM17.49 - RM18.59</div>
                            <div class="whitespace-nowrap flex-none text-red-500 bg-rose-50 justify-center items-center h-5 text-xs font-bold inline-flex ml-2.5 px-1 rounded-sm">-40%</div>
                          </div>
                        </section>
                        <div class="text-red-500 items-center h-5 flex my-2.5">
                          <div class="shrink-0 h-5 mr-2.5"><img alt="deep discount teaser icon" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjtbl99ycqo4ad" class="align-baseline inline h-5"></div>
                          <div class="text-ellipsis whitespace-nowrap overflow-x-hidden overflow-y-hidden"><span>Lower prices from 15:00, 1 Feb</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-6 px-5">
                      <div class="flex flex-col">
                        <section class="text-neutral-800 flex -ml-1 -mt-1 mb-6 p-1 items-start">
                          <h2 class="text-neutral-500 capitalize w-24 shrink-0 items-center font-normal mr-2.5 leading-5">Shipping</h2>
                          <div class="flex">
                            <div class="flex">
                              <div class="align-middle inline-block [align-self:start] w-5 h-5 mr-2"><svg width="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline fill-none overflow-x-hidden overflow-y-hidden w-5 h-5">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.45831 4.16669C1.11314 4.16669 0.833313 4.44651 0.833313 4.79169V14.375C0.833313 14.7202 1.11314 15 1.45831 15H3.49158C3.57186 16.1052 4.49366 16.978 5.6207 16.978C6.74775 16.978 7.66955 16.1052 7.74983 15H12.0833L12.0867 15H13.219C13.2993 16.1054 14.2222 16.978 15.3481 16.978C16.4751 16.978 17.3969 16.1052 17.4772 15H18.9134C19.1184 15 19.3103 14.8995 19.4271 14.731C19.5438 14.5626 19.5706 14.3476 19.4986 14.1556L16.8172 7.00285C16.7257 6.75887 16.4925 6.59723 16.232 6.59723H12.7083V4.79169C12.7083 4.44651 12.4285 4.16669 12.0833 4.16669H1.45831ZM17.1822 13.75H18.0116L15.7988 7.84723H12.7083V13.75H13.5142C13.887 13.1262 14.5689 12.7084 15.3481 12.7084C16.128 12.7084 16.8097 13.1263 17.1822 13.75ZM5.6207 12.7084C4.84077 12.7084 4.15912 13.1263 3.78662 13.75H2.08331V5.41669H11.4583V13.75H7.45479C7.08229 13.1263 6.40064 12.7084 5.6207 12.7084ZM5.6207 13.9584C5.13174 13.9584 4.7359 14.3547 4.7359 14.8432C4.7359 15.3317 5.13174 15.728 5.6207 15.728C6.10967 15.728 6.50551 15.3317 6.50551 14.8432C6.50551 14.3547 6.10967 13.9584 5.6207 13.9584ZM14.4633 14.8432C14.4633 14.3549 14.8598 13.9584 15.3481 13.9584C15.837 13.9584 16.2329 14.3547 16.2329 14.8432C16.2329 15.3317 15.837 15.728 15.3481 15.728C14.8598 15.728 14.4633 15.3314 14.4633 14.8432Z" class="fill-teal-500"></path>
                                </svg></div>
                              <div class="flex-col flex-1 gap-y-1 gap-x-1 leading-5 flex">
                                <div class="items-end flex hover:cursor-pointer">
                                  <div class="text-ellipsis">
                                    <span class="text-black/87">Guaranteed to get by 4 - 9 Feb</span>
                                  </div><svg viewBox="0 0 24 24" width="24" color="rgba(0, 0, 0, 0.54)" class="align-baseline inline fill-none w-5 h-5 text-black/54 overflow-x-hidden overflow-y-hidden">
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
                          <h2 class="text-neutral-500 capitalize w-24 shrink-0 items-center font-normal mr-2.5">Shopping Guarantee</h2>
                          <div class="outline-0 flex relative focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87" id="pc-drawer-id-5" tabindex="0">
                            <div class="text-ellipsis whitespace-nowrap items-center gap-y-2 gap-x-2 max-w-lg flex overflow-x-hidden overflow-y-hidden hover:cursor-pointer"><img alt="service entrance icon" class="align-baseline inline w-5 h-5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/281bf4388d58a7cc965a.svg">
                              <div class="text-ellipsis whitespace-nowrap overflow-x-hidden overflow-y-hidden">15-Day Free Returns · Cash on Delivery · Product Care Service
                                Programme</div><svg viewBox="0 0 12 12" width="12" color="#ee4d2d" class="align-baseline inline fill-none w-3 h-3 text-black/54 overflow-x-hidden overflow-y-hidden">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8.146L11.146 3l.707.707-5.146 5.147a1 1 0 01-1.414 0L.146 3.707.854 3 6 8.146z" class="fill-current"></path>
                              </svg>
                            </div>
                          </div>
                        </section>
                        <div class="text-neutral-800 items-center flex -ml-1 -mt-1 pt-1 px-1 pb-4">
                          <div class="flex flex-col">
                            <section class="flex items-baseline mb-6">
                              <h2 class="text-neutral-500 capitalize w-24 shrink-0 items-center font-normal mr-2.5">Color</h2>
                              <div>
                                <div class="flex items-center flex-wrap basis-[515px] max-w-lg max-h-56 overflow-y-auto -mt-2"><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="RUN3.0 Black" aria-disabled="false">
                                    <picture class="contents">
                                      <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbke-m70i98jwb6sqaa@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbke-m70i98jwb6sqaa@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline align-bottom w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbke-m70i98jwb6sqaa@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbke-m70i98jwb6sqaa@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbke-m70i98jwb6sqaa">
                                    </picture>
                                    <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">RUN3.0 Black</span>
                                  </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="RUN3.0 Blue" aria-disabled="false">
                                    <picture class="contents">
                                      <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbka-m70i98jwcld6d2@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbka-m70i98jwcld6d2@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline align-bottom w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbka-m70i98jwcld6d2@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbka-m70i98jwcld6d2@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbka-m70i98jwcld6d2">
                                    </picture>
                                    <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">RUN3.0 Blue</span>
                                  </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="Black White AB" aria-disabled="false">
                                    <picture class="contents">
                                      <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk2-m70xs0r0ovoh1d@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk2-m70xs0r0ovoh1d@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline align-bottom w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk2-m70xs0r0ovoh1d@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk2-m70xs0r0ovoh1d@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk2-m70xs0r0ovoh1d">
                                    </picture>
                                    <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">Black White AB</span>
                                  </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="White green AB" aria-disabled="false">
                                    <picture class="contents">
                                      <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk9-m70xs0r0qa8x09@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk9-m70xs0r0qa8x09@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline align-bottom w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk9-m70xs0r0qa8x09@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk9-m70xs0r0qa8x09@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk9-m70xs0r0qa8x09">
                                    </picture>
                                    <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">White green AB</span>
                                  </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="AB orange" aria-disabled="false">
                                    <picture class="contents">
                                      <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0s-mc9fx0opgf5x32@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0s-mc9fx0opgf5x32@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline align-bottom w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0s-mc9fx0opgf5x32@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0s-mc9fx0opgf5x32@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0s-mc9fx0opgf5x32">
                                    </picture>
                                    <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">AB orange</span>
                                  </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="Black and white lightning" aria-disabled="false">
                                    <picture class="contents">
                                      <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0o-mc9fx0op9ebpdc@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0o-mc9fx0op9ebpdc@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline align-bottom w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0o-mc9fx0op9ebpdc@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0o-mc9fx0op9ebpdc@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0o-mc9fx0op9ebpdc">
                                    </picture>
                                    <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">Black and white lightning</span>
                                  </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="Black red lightning" aria-disabled="false">
                                    <picture class="contents">
                                      <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0o-mc9fx0opasw50c@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0o-mc9fx0opasw50c@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline align-bottom w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0o-mc9fx0opasw50c@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0o-mc9fx0opasw50c@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0o-mc9fx0opasw50c">
                                    </picture>
                                    <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">Black red lightning</span>
                                  </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="Black and white Chx" aria-disabled="false">
                                    <picture class="contents">
                                      <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0j-mc9fx0opc7gl5d@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0j-mc9fx0opc7gl5d@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline align-bottom w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0j-mc9fx0opc7gl5d@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0j-mc9fx0opc7gl5d@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0j-mc9fx0opc7gl5d">
                                    </picture>
                                    <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">Black and white Chx</span>
                                  </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="Chx black red" aria-disabled="false">
                                    <picture class="contents">
                                      <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0s-mc9fx0opdm11b3@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0s-mc9fx0opdm11b3@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline align-bottom w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0s-mc9fx0opdm11b3@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0s-mc9fx0opdm11b3@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0s-mc9fx0opdm11b3">
                                    </picture>
                                    <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">Chx black red</span>
                                  </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="F30 Black" aria-disabled="false">
                                    <picture class="contents">
                                      <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0m-mcubs3dnmihj3b@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0m-mcubs3dnmihj3b@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline align-bottom w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0m-mcubs3dnmihj3b@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0m-mcubs3dnmihj3b@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0m-mcubs3dnmihj3b">
                                    </picture>
                                    <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">F30 Black</span>
                                  </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="Black Silluet" aria-disabled="false">
                                    <picture class="contents">
                                      <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-81ztk-mf1r09joh3in0d@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-81ztk-mf1r09joh3in0d@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline align-bottom w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-81ztk-mf1r09joh3in0d@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-81ztk-mf1r09joh3in0d@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-81ztk-mf1r09joh3in0d">
                                    </picture>
                                    <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">Black Silluet</span>
                                  </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="Silhouette Ash" aria-disabled="false">
                                    <picture class="contents">
                                      <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-81ztc-mf1r09jqp5vt2b@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-81ztc-mf1r09jqp5vt2b@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline align-bottom w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-81ztc-mf1r09jqp5vt2b@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-81ztc-mf1r09jqp5vt2b@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-81ztc-mf1r09jqp5vt2b">
                                    </picture>
                                    <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">Silhouette Ash</span>
                                  </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="Xtron Black" aria-disabled="false">
                                    <picture class="contents">
                                      <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-82252-mgjga84l1rt95f@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-82252-mgjga84l1rt95f@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline align-bottom w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-82252-mgjga84l1rt95f@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-82252-mgjga84l1rt95f@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-82252-mgjga84l1rt95f">
                                    </picture>
                                    <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">Xtron Black</span>
                                  </button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="Xtron Ash" aria-disabled="false">
                                    <picture class="contents">
                                      <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-82250-mgjga84l36dp95@resize_w24_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-82250-mgjga84l36dp95@resize_w48_nl.webp 2x" type="image/webp" class="contents"><img width="24" loading="lazy" class="inline align-bottom w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-82250-mgjga84l36dp95@resize_w24_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-82250-mgjga84l36dp95@resize_w48_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-82250-mgjga84l36dp95">
                                    </picture>
                                    <span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">Xtron Ash</span>
                                  </button></div>
                              </div>
                            </section>
                            <section class="flex items-baseline mb-6">
                              <h2 class="text-neutral-500 capitalize w-24 shrink-0 items-center font-normal mr-2.5">Size</h2>
                              <div>
                                <div class="flex items-center flex-wrap basis-[515px] max-w-lg max-h-56 overflow-y-auto -mt-2"><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 p-2 rounded-sm border border-solid text-black/80 border-black/9 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="38" aria-disabled="false"><span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">38</span></button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 p-2 rounded-sm border border-solid text-black/80 border-black/9 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="39" aria-disabled="false"><span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">39</span></button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 p-2 rounded-sm border border-solid text-black/80 border-black/9 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="40" aria-disabled="false"><span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">40</span></button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 p-2 rounded-sm border border-solid text-black/80 border-black/9 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="41" aria-disabled="false"><span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">41</span></button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 p-2 rounded-sm border border-solid text-black/80 border-black/9 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="42" aria-disabled="false"><span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">42</span></button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 p-2 rounded-sm border border-solid text-black/80 border-black/9 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="43" aria-disabled="false"><span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">43</span></button><button class="[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 p-2 rounded-sm border border-solid text-black/80 border-black/9 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87" aria-label="37" aria-disabled="false"><span class="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">37</span></button>
                                </div>
                                <div class="text-sm leading-4 mt-3 text-black/65">
                                  <div class="items-center flex">
                                    <div class="text-blue-800 cursor-pointer align-middle text-sm leading-5">
                                      <span class="align-middle">Size Guide</span><svg viewBox="0 0 24 24" width="18" class="inline h-5 fill-blue-800 overflow-x-hidden overflow-y-hidden">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.94 12L9.47 6.53l1.06-1.06 5.647 5.646a1.25 1.25 0 010 1.768L10.53 18.53l-1.06-1.06L14.94 12z" class="fill-current"></path>
                                      </svg></div>
                                  </div>
                                </div>
                              </div>
                            </section>
                            <section class="flex items-center text-neutral-500 mt-4">
                              <h2 class="text-neutral-500 capitalize w-24 shrink-0 items-center font-normal mr-2.5">Quantity</h2>
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
                </section>
              </section>
              <div id="sll2-pdp-product-shop">
                <section class="bg-white overflow-x-hidden overflow-y-hidden shadow-sm mt-4 p-2.5 rounded-sm">
                  <div class="justify-between items-center flex pt-5 pb-6 px-6">
                    <div class="[border-right-style:solid] max-w-md flex pr-6 border-r border-r-black/5"><a class="no-underline cursor-pointer outline-0 shrink-0 relative mr-5 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-[50%] focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87" href="/nandacollectionp6.my?categoryId=100012&amp;entryPoint=ShopByPDP&amp;itemId=28328592519">
                        <div class="inline-block relative rounded-[50%] border border-solid border-black/9 w-20 h-20">
                          <div class="bg-neutral-100 w-full relative overflow-x-hidden overflow-y-hidden pt-[100%] rounded-[50%]"><img alt="icon head shot" class="align-baseline inline stroke-stone-300 w-6 h-6 text-2xl leading-8 absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/5bca1ff220bc8a156458.svg"></div>
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/ec944fcc2f4bde4972eb0cb618c8d9bf@resize_w80_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/ec944fcc2f4bde4972eb0cb618c8d9bf@resize_w160_nl.webp 2x" type="image/webp" class="contents"><img width="80" loading="lazy" class="align-bottom w-full h-full absolute rounded-[50%] left-0 top-0 focus-visible:outline-0 focus-visible:shadow-[0_0_0_10px_#fff,0_0_0_12px_#000000de]" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/ec944fcc2f4bde4972eb0cb618c8d9bf@resize_w80_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/ec944fcc2f4bde4972eb0cb618c8d9bf@resize_w160_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/ec944fcc2f4bde4972eb0cb618c8d9bf" alt="click here to visit shop">
                          </picture>
                        </div>
                      </a>
                      <div class="flex-col grow justify-between flex overflow-x-hidden overflow-y-hidden">
                        <div class="text-ellipsis whitespace-nowrap text-base font-medium leading-6 overflow-x-hidden overflow-y-hidden text-black/87">nandacollectionp6.my</div>
                        <div class="text-neutral-500 items-center text-sm flex">
                          <div class="capitalize text-sm text-black/54">Active 11 hours ago</div>
                        </div>
                        <div class="flex mt-2"><button type="button" class="[appearance:auto] text-ellipsis [-webkit-line-clamp:1] cursor-pointer justify-center items-center text-sm rounded-sm inline-flex min-w-16 max-w-48 h-9 px-4 outline-0 relative text-red-500 shadow-sm border border-solid border-red-500 bg-orange-600/10 capitalize mr-2.5 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87 hover:bg-orange-200/18 active:shadow-inner active:bg-orange-900/15"><span class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/7bf03ed38ca37787fe78.svg')] shrink-0 w-3.5 h-3.5 inline-block mr-1.5 whitespace-nowrap text-ellipsis leading-6 overflow-x-hidden overflow-y-hidden"></span>
                            <div>chat now</div>
                          </button><a class="no-underline text-ellipsis [-webkit-line-clamp:1] cursor-pointer justify-center items-center text-sm rounded-sm inline-flex min-w-16 max-w-48 h-9 px-4 outline-0 bg-white relative shadow-sm border border-solid border-black/9 text-neutral-600 capitalize hover:bg-black/2 active:shadow-inner active:bg-black/2 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87" href="/nandacollectionp6.my?categoryId=100012&amp;entryPoint=ShopByPDP&amp;itemId=28328592519"><img alt="icon shop" class="align-baseline shrink-0 w-3.5 h-3.5 inline-block mr-1.5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/748adc5e75595200c51b.svg">
                            <div>view shop</div>
                          </a></div>
                      </div>
                    </div>
                    <div class="grow grid-cols-[repeat(3,auto)] gap-y-5 gap-x-12 grid pl-6 text-black/40">
                      <div class="cursor-default outline-0 justify-between flex relative focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+6px)] focus-visible:before:h-[calc(100%+6px)] focus-visible:before:absolute focus-visible:before:m-[-3px] focus-visible:before:p-[3px] focus-visible:before:rounded-sm focus-visible:before:left-[-3px] focus-visible:before:top-[-3px] focus-visible:before:outline-black/87"><label class="capitalize mr-3 text-black/40">Ratings</label><span class="text-red-500 whitespace-nowrap text-right">4.2k</span>
                      </div>
                      <div class="cursor-default outline-0 justify-between flex relative focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+6px)] focus-visible:before:h-[calc(100%+6px)] focus-visible:before:absolute focus-visible:before:m-[-3px] focus-visible:before:p-[3px] focus-visible:before:rounded-sm focus-visible:before:left-[-3px] focus-visible:before:top-[-3px] focus-visible:before:outline-black/87"><label class="capitalize mr-3 text-black/40">response
                          rate</label><span class="text-red-500 whitespace-nowrap text-right">100%</span>
                      </div>
                      <div class="cursor-default outline-0 justify-between flex relative focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+6px)] focus-visible:before:h-[calc(100%+6px)] focus-visible:before:absolute focus-visible:before:m-[-3px] focus-visible:before:p-[3px] focus-visible:before:rounded-sm focus-visible:before:left-[-3px] focus-visible:before:top-[-3px] focus-visible:before:outline-black/87"><label class="capitalize mr-3 text-black/40">joined</label><span class="text-red-500 whitespace-nowrap text-right">4 years ago</span>
                      </div><a class="no-underline cursor-default outline-0 justify-between flex relative focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+6px)] focus-visible:before:h-[calc(100%+6px)] focus-visible:before:absolute focus-visible:before:m-[-3px] focus-visible:before:p-[3px] focus-visible:before:rounded-sm focus-visible:before:left-[-3px] focus-visible:before:top-[-3px] focus-visible:before:outline-black/87" href="/nandacollectionp6.my#product_list"><label class="capitalize mr-3 text-black/40">products</label><span class="text-red-500 whitespace-nowrap text-right cursor-pointer">30</span></a>
                      <div class="cursor-default outline-0 justify-between flex relative focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+6px)] focus-visible:before:h-[calc(100%+6px)] focus-visible:before:absolute focus-visible:before:m-[-3px] focus-visible:before:p-[3px] focus-visible:before:rounded-sm focus-visible:before:left-[-3px] focus-visible:before:top-[-3px] focus-visible:before:outline-black/87"><label class="capitalize mr-3 text-black/40">response
                          time</label><span class="text-red-500 whitespace-nowrap text-right">within minutes</span>
                      </div>
                      <div class="cursor-default outline-0 justify-between flex relative focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+6px)] focus-visible:before:h-[calc(100%+6px)] focus-visible:before:absolute focus-visible:before:m-[-3px] focus-visible:before:p-[3px] focus-visible:before:rounded-sm focus-visible:before:left-[-3px] focus-visible:before:top-[-3px] focus-visible:before:outline-black/87"><label class="capitalize mr-3 text-black/40">follower</label><span class="text-red-500 whitespace-nowrap text-right">305</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div>
                <div class="min-h-[40rem] flex">
                  <div class="flex-1">
                    <div class="bg-white overflow-x-hidden overflow-y-hidden shadow-sm mt-4 p-2.5 rounded-sm">
                      <section class="pt-4 px-4">
                        <h2 class="capitalize text-lg font-medium p-3.5 text-black/87 bg-black/2">Product Specifications</h2>
                        <div class="mt-8 mb-4 mx-4">
                          <div class="flex mb-5">
                            <h3 class="[word-break:break-word] w-52 text-sm m-[inherit] pr-3 text-black/40">Category</h3>
                            <div class="flex items-center whitespace-nowrap h-4"><a class="cursor-pointer whitespace-nowrap no-underline text-sky-700 text-sm active:outline-0 hover:outline-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:-m-1.5 focus-visible:p-1.5 focus-visible:rounded-sm" href="/">Shopee</a><img alt="icon arrow right" class="align-baseline inline w-2.5 h-2.5 mx-1.5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/dd5cbafaee315c6c99f4.svg"><a class="cursor-pointer whitespace-nowrap no-underline text-sky-700 text-sm active:outline-0 hover:outline-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:-m-1.5 focus-visible:p-1.5 focus-visible:rounded-sm" href="/Men-Shoes-cat.11000781">Men Shoes</a><img alt="icon arrow right" class="align-baseline inline w-2.5 h-2.5 mx-1.5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/dd5cbafaee315c6c99f4.svg"><a class="cursor-pointer whitespace-nowrap no-underline text-sky-700 text-sm active:outline-0 hover:outline-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:-m-1.5 focus-visible:p-1.5 focus-visible:rounded-sm" href="/Sneakers-cat.11000781.11000797">Sneakers</a><img alt="icon arrow right" class="align-baseline inline w-2.5 h-2.5 mx-1.5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/dd5cbafaee315c6c99f4.svg"><a class="cursor-pointer whitespace-nowrap no-underline text-sky-700 text-sm active:outline-0 hover:outline-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:-m-1.5 focus-visible:p-1.5 focus-visible:rounded-sm" href="/Others-cat.11000781.11000797.11001800">Others</a></div>
                          </div>
                          <div class="flex mb-5">
                            <h3 class="[word-break:break-word] w-52 text-sm m-[inherit] pr-3 text-black/40">Stock</h3>
                            <div>IN STOCK</div>
                          </div>
                          <div class="flex mb-5">
                            <h3 class="[word-break:break-word] w-52 text-sm m-[inherit] pr-3 text-black/40">Wide Fit</h3>
                            <div>No</div>
                          </div>
                          <div class="flex mb-5">
                            <h3 class="[word-break:break-word] w-52 text-sm m-[inherit] pr-3 text-black/40">Fastening Type</h3>
                            <div>Laces</div>
                          </div>
                          <div class="flex mb-5">
                            <h3 class="[word-break:break-word] w-52 text-sm m-[inherit] pr-3 text-black/40">Leather Finish</h3>
                            <div>Glossy</div>
                          </div>
                          <div class="flex mb-5">
                            <h3 class="[word-break:break-word] w-52 text-sm m-[inherit] pr-3 text-black/40">Country of Origin</h3>
                            <div>Indonesia</div>
                          </div>
                          <div class="flex mb-5">
                            <h3 class="[word-break:break-word] w-52 text-sm m-[inherit] pr-3 text-black/40">Heels Height</h3>
                            <div>Others</div>
                          </div>
                          <div class="flex mb-5">
                            <h3 class="[word-break:break-word] w-52 text-sm m-[inherit] pr-3 text-black/40">Shoes Style</h3>
                            <div>Print motif</div>
                          </div>
                          <div class="flex last:mb-5">
                            <h3 class="[word-break:break-word] w-52 text-sm m-[inherit] pr-3 text-black/40">Ships From</h3>
                            <div>Indonesia</div>
                          </div>
                        </div>
                      </section>
                      <div id="size-guide-section"></div>
                      <section class="pt-4 px-4">
                        <h2 class="capitalize text-lg font-medium p-3.5 text-black/87 bg-black/2">Size Guide</h2>
                        <div class="mt-8 mb-4 mx-4">
                          <div>
                            <div class="text-base font-medium mb-4">Product Measurements</div>
                            <div class="pb-4">
                              <div class="bg-red-50 flex p-3 rounded-md border-[0.5px] border-solid border-red-500/40"><img class="align-baseline inline w-4 h-4 mr-1" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/c3936907aab2a3173ab0.svg">
                                <div class="flex-col justify-between flex">
                                  <div class="text-sm font-medium">No recommended size yet</div>
                                </div>
                                <div class="cursor-pointer items-center text-sm leading-4 flex ml-auto text-red-700">Input size<img class="align-baseline inline ml-1" alt="size profile entrance cta icon" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/e711cf4967e522033dc5.svg"></div>
                              </div>
                            </div>
                            <div class="z-0 w-full relative overflow-x-hidden overflow-y-hidden rounded-lg border border-solid border-gray-200">
                              <div>
                                <table class="indent-[initial] border-zinc-500 text-center table-fixed w-full min-w-full text-sm border-separate border-spacing-0">
                                  <thead>
                                    <tr>
                                      <th class="bg-neutral-100 [border-bottom-style:solid] w-72 min-w-72 h-12 font-normal px-2 py-4 border-b border-b-gray-200">
                                        <div class="text-ellipsis whitespace-nowrap max-w-full font-bold overflow-x-hidden overflow-y-hidden mb-1">Size (EU)</div>
                                      </th>
                                      <th class="bg-neutral-100 [border-bottom-style:solid] w-72 min-w-72 h-12 font-normal px-2 py-4 border-b border-b-gray-200">
                                        <div class="text-ellipsis whitespace-nowrap max-w-full font-bold overflow-x-hidden overflow-y-hidden mb-1">Foot Length</div>
                                        <div class="text-neutral-500 text-ellipsis whitespace-nowrap max-w-full text-xs overflow-x-hidden overflow-y-hidden">(cm)</div>
                                      </th>
                                      <th class="bg-neutral-100 [border-bottom-style:solid] w-72 min-w-72 h-12 font-normal px-2 py-4 border-b border-b-gray-200">
                                        <div class="text-ellipsis whitespace-nowrap max-w-full font-bold overflow-x-hidden overflow-y-hidden mb-1">Width</div>
                                        <div class="text-neutral-500 text-ellipsis whitespace-nowrap max-w-full text-xs overflow-x-hidden overflow-y-hidden">(cm)</div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr class="bg-white">
                                      <td class="bg-white whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">35</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">24</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">8</td>
                                    </tr>
                                    <tr class="bg-neutral-50">
                                      <td class="bg-neutral-50 whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">36</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">24.5</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">8.5</td>
                                    </tr>
                                    <tr class="bg-white">
                                      <td class="bg-white whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">37</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">25</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">8.5</td>
                                    </tr>
                                    <tr class="bg-neutral-50">
                                      <td class="bg-neutral-50 whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">38</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">25.5</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">8.5</td>
                                    </tr>
                                    <tr class="bg-white">
                                      <td class="bg-white whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">39</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">26</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">8.5</td>
                                    </tr>
                                    <tr class="bg-neutral-50">
                                      <td class="bg-neutral-50 whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">40</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">26.5</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">9</td>
                                    </tr>
                                    <tr class="bg-white">
                                      <td class="bg-white whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">41</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">27</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">9</td>
                                    </tr>
                                    <tr class="bg-neutral-50">
                                      <td class="bg-neutral-50 whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">42</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">27.5</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">9</td>
                                    </tr>
                                    <tr class="bg-white">
                                      <td class="bg-white whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">43</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">28</td>
                                      <td class="whitespace-nowrap text-ellipsis [border-bottom-style:solid] w-72 min-w-72 h-12 overflow-x-hidden overflow-y-hidden px-2 py-4 border-b border-b-gray-200">9.5</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div class="text-sm mt-4 text-black/54">The measurements may vary
                              slightly.</div>
                          </div>
                        </div>
                      </section>
                      <section class="pt-4 px-4">
                        <h2 class="capitalize text-lg font-medium p-3.5 text-black/87 bg-black/2">Product Description</h2>
                        <div class="mt-8 mb-4 mx-4">
                          <div class="whitespace-pre-wrap text-ellipsis flex-col gap-y-8 gap-x-8 text-sm leading-relaxed flex overflow-x-hidden overflow-y-hidden text-black/80">
                            <div><p>Canvas material</p><p>
</p><p>Men's sneakers are comfortable to wear for school, work, sizes</p><p>
</p><p>38</p><p>39</p><p>40</p>
                              <p>41</p><p>42</p>
                              <p>43</p><p>
</p><p>Note: please include color and size before purchasing. Thank you</p>
                              <p>Item price includes shipping fee that should be borne by the buyer.</p>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div>
                      <div class="contents">
                        <div class="bg-white shadow-sm mt-4 pt-6 px-6 rounded-sm">
                          <div class="mb-3.5">
                            <div class="z-[999] inline-flex relative">
                              <div class="capitalize text-lg font-medium text-black/87">Product
                                Ratings</div>
                            </div>
                          </div>
                          <div class="bg-white -mt-6">
                            <div>
                              <div></div>
                              <nav class="w-full sticky z-0 bg-white hidden top-0">
                                <ul class="[border-bottom-style:solid] flex border-b border-b-black/9">
                                  <li class="select-none cursor-pointer grow shrink-0 justify-center items-center [font-family:SHPBurmese,SHPKhmer,-apple-system,Helvetica_Neue,Helvetica,Roboto,Droid_Sans,Arial,sans-serif] text-sm flex text-red-500">
                                    <div class="items-center h-11 flex">Product Reviews</div>
                                  </li>
                                  <li class="select-none cursor-pointer grow shrink-0 justify-center items-center [font-family:SHPBurmese,SHPKhmer,-apple-system,Helvetica_Neue,Helvetica,Roboto,Droid_Sans,Arial,sans-serif] text-sm flex text-black/87">
                                    <div class="items-center h-11 flex">Similar Product</div>
                                  </li>
                                </ul><i class="bg-red-500 h-0.5 transition-transform duration-500 ease-in-out absolute bottom-0 w-0 block"></i>
                              </nav>
                              <div>
                                <section class="w-full min-h-screen">
                                  <div>
                                    <div class="bg-white shadow-sm py-6 rounded-sm">
                                      <div class="bg-stone-50 items-center min-h-20 flex mb-4 p-8 rounded-sm border border-solid border-rose-100">
                                        <div class="text-center mr-8">
                                          <div class="text-red-500 text-lg">
                                            <span class="text-3xl">4.4</span><span> out of 5 </span>
                                          </div>
                                          <div class="inline-block relative text-xl mt-2.5">
                                            <div class="flex">
                                              <div class="relative mr-px">
                                                <div class="z-[1] h-full absolute overflow-x-hidden overflow-y-hidden left-0 top-0 w-full"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-5 h-5 text-red-500 stroke-red-500 absolute left-0 overflow-x-hidden overflow-y-hidden">
                                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                  </svg></div><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-5 h-5 relative text-red-500 stroke-current overflow-x-hidden overflow-y-hidden">
                                                  <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" class="fill-none">
                                                  </polygon>
                                                </svg>
                                              </div>
                                              <div class="relative mr-px">
                                                <div class="z-[1] h-full absolute overflow-x-hidden overflow-y-hidden left-0 top-0 w-full"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-5 h-5 text-red-500 stroke-red-500 absolute left-0 overflow-x-hidden overflow-y-hidden">
                                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                  </svg></div><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-5 h-5 relative text-red-500 stroke-current overflow-x-hidden overflow-y-hidden">
                                                  <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" class="fill-none">
                                                  </polygon>
                                                </svg>
                                              </div>
                                              <div class="relative mr-px">
                                                <div class="z-[1] h-full absolute overflow-x-hidden overflow-y-hidden left-0 top-0 w-full"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-5 h-5 text-red-500 stroke-red-500 absolute left-0 overflow-x-hidden overflow-y-hidden">
                                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                  </svg></div><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-5 h-5 relative text-red-500 stroke-current overflow-x-hidden overflow-y-hidden">
                                                  <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" class="fill-none">
                                                  </polygon>
                                                </svg>
                                              </div>
                                              <div class="relative mr-px">
                                                <div class="z-[1] h-full absolute overflow-x-hidden overflow-y-hidden left-0 top-0 w-full"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-5 h-5 text-red-500 stroke-red-500 absolute left-0 overflow-x-hidden overflow-y-hidden">
                                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                  </svg></div><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-5 h-5 relative text-red-500 stroke-current overflow-x-hidden overflow-y-hidden">
                                                  <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" class="fill-none">
                                                  </polygon>
                                                </svg>
                                              </div>
                                              <div class="relative mr-px">
                                                <div class="z-[1] h-full absolute overflow-x-hidden overflow-y-hidden left-0 top-0 w-5/12"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-5 h-5 text-red-500 stroke-red-500 absolute left-0 overflow-x-hidden overflow-y-hidden">
                                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                  </svg></div><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-5 h-5 relative text-red-500 stroke-current overflow-x-hidden overflow-y-hidden">
                                                  <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" class="fill-none">
                                                  </polygon>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="flex-1 ml-4">
                                          <div class="cursor-pointer select-none text-center capitalize bg-white min-w-24 h-8 leading-8 inline-block mr-2 my-1.5 px-2.5 rounded-sm border border-solid fill-red-500 text-red-500 border-red-500 font-semibold group">
                                            <span class="inline-block relative -translate-y-2/4 top-2/4">all</span>
                                          </div>
                                          <div class="cursor-pointer select-none text-center capitalize bg-white min-w-24 h-8 leading-8 inline-block mr-2 my-1.5 px-2.5 rounded-sm border border-solid text-black/87 border-black/9 font-semibold group">
                                            <span class="inline-block relative -translate-y-2/4 top-2/4">5 star (519)</span>
                                          </div>
                                          <div class="cursor-pointer select-none text-center capitalize bg-white min-w-24 h-8 leading-8 inline-block mr-2 my-1.5 px-2.5 rounded-sm border border-solid text-black/87 border-black/9 font-semibold group">
                                            <span class="inline-block relative -translate-y-2/4 top-2/4">4 star (61)</span>
                                          </div>
                                          <div class="cursor-pointer select-none text-center capitalize bg-white min-w-24 h-8 leading-8 inline-block mr-2 my-1.5 px-2.5 rounded-sm border border-solid text-black/87 border-black/9 font-semibold group">
                                            <span class="inline-block relative -translate-y-2/4 top-2/4">3 star (39)</span>
                                          </div>
                                          <div class="cursor-pointer select-none text-center capitalize bg-white min-w-24 h-8 leading-8 inline-block mr-2 my-1.5 px-2.5 rounded-sm border border-solid text-black/87 border-black/9 font-semibold group">
                                            <span class="inline-block relative -translate-y-2/4 top-2/4">2 star (14)</span>
                                          </div>
                                          <div class="cursor-pointer select-none text-center capitalize bg-white min-w-24 h-8 leading-8 inline-block mr-2 my-1.5 px-2.5 rounded-sm border border-solid text-black/87 border-black/9 font-semibold group">
                                            <span class="inline-block relative -translate-y-2/4 top-2/4">1 star (52)</span>
                                          </div>
                                          <div class="cursor-pointer select-none text-center capitalize bg-white min-w-24 h-8 leading-8 inline-block mr-2 my-1.5 px-2.5 rounded-sm border border-solid text-black/87 border-black/9 font-semibold group">
                                            <span class="inline-block relative -translate-y-2/4 top-2/4">with comments (123)</span>
                                          </div>
                                          <div class="cursor-pointer select-none text-center capitalize bg-white min-w-24 h-8 leading-8 inline-block mr-2 my-1.5 px-2.5 rounded-sm border border-solid text-black/87 border-black/9 font-semibold group">
                                            <span class="inline-block relative -translate-y-2/4 top-2/4">With Media (71)</span>
                                          </div>
                                          <div class="cursor-pointer select-none text-center capitalize bg-white min-w-24 h-8 leading-8 inline-block mr-2 my-1.5 px-2.5 rounded-sm border border-solid text-black/87 border-black/9 font-semibold group">
                                            <span class="inline-block relative -translate-y-2/4 top-2/4">Local Review (467)</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div>
                                          <div class="[border-bottom-style:solid] flex py-4 border-b border-b-black/9">
                                            <div class="pl-5 pr-2.5"><a href="/shop/1585292168" class="cursor-pointer no-underline active:outline-0 hover:outline-0">
                                                <div class="inline-block relative rounded-[50%] border border-solid border-black/9 w-10 h-10">
                                                  <div class="bg-neutral-100 w-full relative overflow-x-hidden overflow-y-hidden pt-[100%] rounded-[50%]"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-6 h-6 inline-block overflow-x-hidden overflow-y-hidden stroke-stone-300 text-2xl font-normal leading-8 absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                                                      <g>
                                                        <circle cx="7.5" cy="4.5" r="3.8" stroke-miterlimit="10" class="fill-none"></circle>
                                                        <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke-linecap="round" stroke-miterlimit="10" class="fill-none"></path>
                                                      </g>
                                                    </svg></div><img class="align-baseline w-full h-full absolute rounded-[50%] left-0 top-0 focus-visible:outline-0 focus-visible:shadow-[0_0_0_10px_#fff,0_0_0_12px_#000000de]" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134233-7rasl-mc4s944ilzkn11_tn">
                                                </div>
                                              </a></div>
                                            <div class="flex-1">
                                              <div><a class="no-underline cursor-pointer text-xs text-black/87 active:outline-0 hover:outline-0" href="/shop/1585292168">ainadelila</a>
                                                <div class="items-center flex py-1.5">
                                                  <div class="inline-flex"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg></div>
                                                </div>
                                                <div class="mt-1">
                                                  <div class="text-xs mt-1 text-black/54">
                                                    2025-07-28 11:28 | Variation: Black white AB,43</div>
                                                </div>
                                              </div>
                                              <div class="[word-break:break-word] whitespace-pre-wrap leading-5 mt-4">
                                                <div>
                                                  <div>
                                                    <span class="text-black/40">Material: </span><span>baik</span>
                                                  </div>
                                                  <div class="mt-1.5">
                                                    <span class="text-black/40">Comfortability: </span><span>baik</span>
                                                  </div>
                                                </div>
                                                <div class="mt-3 text-black/87 leading-6">sesuai
                                                  dn puas hati,tq seller anak sangat suka.
                                                  size 43.</div>
                                              </div>
                                              <div class="mt-4">
                                                <div>
                                                  <div class="flex-wrap w-full flex">
                                                    <div class="w-20 h-20 relative mr-2.5 cursor-zoom-in">
                                                      <div class="w-full h-full relative">
                                                        <div class="bg-neutral-50 w-full h-full relative"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-6 h-6 inline-block overflow-x-hidden overflow-y-hidden stroke-stone-300 text-2xl font-normal leading-8 absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                                                            <g>
                                                              <rect height="8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="10" x="1" y="4.5" class="fill-none"></rect>
                                                              <line stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="6.5" y2="6.5" class="fill-none"></line>
                                                              <rect height="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" x="11" y="6.5" class="fill-none">
                                                              </rect>
                                                              <line stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="14.5" y2="14.5" class="fill-none">
                                                              </line>
                                                              <line stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="6" x2="6" y1=".5" y2="3" class="fill-none"></line>
                                                              <line stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="3.5" x2="3.5" y1="1" y2="3" class="fill-none"></line>
                                                              <line stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="8.5" x2="8.5" y1="1" y2="3" class="fill-none"></line>
                                                            </g>
                                                          </svg></div>
                                                        <div class="bg-[50%] bg-no-repeat bg-cover w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-ws-my.img.susercontent.com/my-11110103-6kh4e-mcq4qpedyuh143/_cover')]">
                                                          <div class="w-full h-full"> </div>
                                                        </div>
                                                      </div>
                                                      <div class="z-[1] text-white justify-between items-center h-5 text-xs leading-5 flex absolute px-1 bottom-0 inset-x-0 bg-black/54"><svg width="23" viewBox="0 0 23 18" class="align-baseline inline h-5 fill-none overflow-x-hidden overflow-y-hidden">
                                                          <g filter="url(#filter0_d)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C4.44772 4 4 4.44772 4 5V13C4 13.5523 4.44772 14 5 14H13C13.5523 14 14 13.5523 14 13V5C14 4.44772 13.5523 4 13 4H5ZM11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9ZM9 10.6667C9.92047 10.6667 10.6667 9.92047 10.6667 9C10.6667 8.07952 9.92047 7.33333 9 7.33333C8.07953 7.33333 7.33333 8.07952 7.33333 9C7.33333 9.92047 8.07953 10.6667 9 10.6667ZM18.1667 4.83333L14.8333 7.33306V10.6667L18.1667 13.1667V4.83333Z" class="fill-white"></path>
                                                          </g>
                                                          <defs>
                                                            <filter id="filter0_d" x="0" y="0" width="22.1667" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                                              <feOffset></feOffset>
                                                              <feGaussianBlur stdDeviation="2">
                                                              </feGaussianBlur>
                                                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"></feColorMatrix>
                                                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow">
                                                              </feBlend>
                                                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                                                            </filter>
                                                          </defs>
                                                        </svg><span>0:16</span></div>
                                                    </div>
                                                    <div class="w-20 h-20 relative mr-2.5 cursor-zoom-in">
                                                      <div class="w-full h-full relative">
                                                        <picture class="contents">
                                                          <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasj-mcq4pzehyzoved@resize_w72_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasj-mcq4pzehyzoved@resize_w144_nl.webp 2x" type="image/webp" class="contents">
                                                          <img width="72" loading="lazy" class="inline object-cover align-baseline w-full h-full absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasj-mcq4pzehyzoved@resize_w72_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasj-mcq4pzehyzoved@resize_w144_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasj-mcq4pzehyzoved">
                                                        </picture>
                                                      </div>
                                                    </div>
                                                    <div class="w-20 h-20 relative mr-2.5 cursor-zoom-out p-0.5 border-2 border-solid border-red-500">
                                                      <div class="w-full h-full relative">
                                                        <picture class="contents">
                                                          <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasj-mcq4pzei0e9bc9@resize_w72_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasj-mcq4pzei0e9bc9@resize_w144_nl.webp 2x" type="image/webp" class="contents">
                                                          <img width="72" loading="lazy" class="inline object-cover align-baseline w-full h-full absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasj-mcq4pzei0e9bc9@resize_w72_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasj-mcq4pzei0e9bc9@resize_w144_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasj-mcq4pzei0e9bc9">
                                                        </picture>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="w-full max-w-lg h-full max-h-[31.25rem] -ml-2.5 select-none mb-2">
                                                    <div class="h-full relative w-[536px] duration-500">
                                                      <div class="h-full overflow-x-hidden overflow-y-hidden">
                                                        <ul class="h-full flex relative duration-500 translate-x-[-1072px]">
                                                          <li class="float-left self-center h-full px-2.5">
                                                            <div class="relative h-full"><video src="https://proxy.extractcss.dev/https://down-bs-my.vod.susercontent.com/api/v4/11110103/mms/my-11110103-6kh4e-mcq4qpedyuh143.16000051753691270.mp4" controls="" class="align-baseline inline-block cursor-pointer bg-black outline-0 select-none w-[32.25rem] max-w-lg h-[31.25rem] max-h-[31.25rem]" controlslist="nodownload"></video><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current inline-block pointer-events-none w-24 h-24 absolute translate-x-[-3.125rem] translate-y-[-3.125rem] left-2/4 top-2/4 overflow-x-hidden overflow-y-hidden">
                                                                <g opacity=".54">
                                                                  <g>
                                                                    <circle cx="7.5" cy="7.5" r="7.3" class="fill-black">
                                                                    </circle>
                                                                    <path d="m7.5.5c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7m0-.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5z" class="fill-white"></path>
                                                                  </g>
                                                                </g>
                                                                <path d="m6.1 5.1c0-.2.1-.3.3-.2l3.3 2.3c.2.1.2.3 0 .4l-3.3 2.4c-.2.1-.3.1-.3-.2z" class="fill-white"></path>
                                                              </svg></div>
                                                          </li>
                                                          <li class="float-left self-center h-full px-2.5">
                                                            <picture class="contents">
                                                              <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasj-mcq4pzehyzoved.webp" type="image/webp" class="contents"><img loading="lazy" class="inline align-bottom select-none max-w-lg max-h-[31.25rem]" srcset="" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasj-mcq4pzehyzoved" alt="rating">
                                                            </picture>
                                                          </li>
                                                          <li class="float-left self-center h-full px-2.5">
                                                            <picture class="contents">
                                                              <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasj-mcq4pzei0e9bc9.webp" type="image/webp" class="contents"><img loading="lazy" class="inline align-bottom select-none max-w-lg max-h-[31.25rem]" srcset="" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasj-mcq4pzei0e9bc9" alt="rating">
                                                            </picture>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                      <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 left-0 bg-white w-6 h-6 leading-6 -mt-3" role="button" tabindex="0"><svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                                                          <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
                                                        </svg></div>
                                                      <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 right-0 bg-white w-6 h-6 leading-6 -mt-3 invisible" role="button" tabindex="0"><svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                                                          <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
                                                        </svg></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <div class="flex mt-5 text-black/40 justify-between">
                                                  <div class="flex">
                                                    <div class="cursor-pointer mr-1 text-black/20"><svg width="14px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-3.5 overflow-x-hidden overflow-y-hidden fill-current">
                                                        <defs></defs>
                                                        <g stroke-width="1" fill-rule="evenodd" class="stroke-none">
                                                          <g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fill-rule="nonzero">
                                                            <g transform="translate(155.000000, 92.000000)">
                                                              <g transform="translate(40.000000, 184.000000)">
                                                                <g transform="translate(0.000000, 326.000000)">
                                                                  <g transform="translate(50.000000, 253.000000)">
                                                                    <g>
                                                                      <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z"></path>
                                                                    </g>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </g>
                                                      </svg></div>
                                                    <div class="capitalize">4</div>
                                                  </div>
                                                  <div class="flex">
                                                    <div class="cursor-pointer ml-auto">
                                                      <div class="relative">
                                                        <div>
                                                          <div><svg width="4px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 overflow-x-hidden overflow-y-hidden">
                                                              <defs></defs>
                                                              <g stroke-width="1" fill-rule="evenodd" class="stroke-none">
                                                                <g transform="translate(-1301.000000, -550.000000)" class="fill-stone-300">
                                                                  <g transform="translate(155.000000, 92.000000)">
                                                                    <g transform="translate(40.000000, 184.000000)">
                                                                      <g transform="translate(0.000000, 161.000000)">
                                                                        <g>
                                                                          <g transform="translate(50.000000, 2.000000)">
                                                                            <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111"></path>
                                                                          </g>
                                                                        </g>
                                                                      </g>
                                                                    </g>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </svg></div>
                                                        </div>
                                                        <div class="opacity-0 h-0 transition-all duration-500 ease-in-out z-[1] bg-white hidden absolute right-0">
                                                          <div class="capitalize whitespace-nowrap shadow-sm px-7 py-3 rounded-sm border border-solid text-black/80 border-black/9">Report Abuse</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="[border-bottom-style:solid] flex py-4 border-b border-b-black/9">
                                            <div class="pl-5 pr-2.5"><a href="/shop/1577847648" class="cursor-pointer no-underline active:outline-0 hover:outline-0">
                                                <div class="inline-block relative rounded-[50%] border border-solid border-black/9 w-10 h-10">
                                                  <div class="bg-neutral-100 w-full relative overflow-x-hidden overflow-y-hidden pt-[100%] rounded-[50%]"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-6 h-6 inline-block overflow-x-hidden overflow-y-hidden stroke-stone-300 text-2xl font-normal leading-8 absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                                                      <g>
                                                        <circle cx="7.5" cy="4.5" r="3.8" stroke-miterlimit="10" class="fill-none"></circle>
                                                        <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke-linecap="round" stroke-miterlimit="10" class="fill-none"></path>
                                                      </g>
                                                    </svg></div>
                                                </div>
                                              </a></div>
                                            <div class="flex-1">
                                              <div><a class="no-underline cursor-pointer text-xs text-black/87 active:outline-0 hover:outline-0" href="/shop/1577847648">zuhaidahalway</a>
                                                <div class="items-center flex py-1.5">
                                                  <div class="inline-flex"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg></div>
                                                </div>
                                                <div class="mt-1">
                                                  <div class="text-xs mt-1 text-black/54">
                                                    2025-07-16 11:58 | Variation: RUN3.0 Black,41</div>
                                                </div>
                                              </div>
                                              <div class="[word-break:break-word] whitespace-pre-wrap leading-5 mt-4">
                                                <div>
                                                  <div>
                                                    <span class="text-black/40">Material: </span><span>ok</span>
                                                  </div>
                                                  <div class="mt-1.5">
                                                    <span class="text-black/40">Comfortability: </span><span>terbaik</span>
                                                  </div>
                                                </div>
                                                <div class="mt-3 text-black/87 leading-6">Barang
                                                  dah sampai ok sangat.cantik sesuai tuk jln joging.tq seles</div>
                                              </div>
                                              <div class="mt-4">
                                                <div>
                                                  <div class="flex-wrap w-full flex">
                                                    <div class="w-20 h-20 relative mr-2.5 cursor-zoom-in">
                                                      <div class="w-full h-full relative">
                                                        <div class="bg-neutral-50 w-full h-full relative"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-6 h-6 inline-block overflow-x-hidden overflow-y-hidden stroke-stone-300 text-2xl font-normal leading-8 absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                                                            <g>
                                                              <rect height="8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="10" x="1" y="4.5" class="fill-none"></rect>
                                                              <line stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="6.5" y2="6.5" class="fill-none"></line>
                                                              <rect height="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" x="11" y="6.5" class="fill-none">
                                                              </rect>
                                                              <line stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="14.5" y2="14.5" class="fill-none">
                                                              </line>
                                                              <line stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="6" x2="6" y1=".5" y2="3" class="fill-none"></line>
                                                              <line stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="3.5" x2="3.5" y1="1" y2="3" class="fill-none"></line>
                                                              <line stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="8.5" x2="8.5" y1="1" y2="3" class="fill-none"></line>
                                                            </g>
                                                          </svg></div>
                                                        <div class="bg-[50%] bg-no-repeat bg-cover w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-zl-sg.img.susercontent.com/my-11110103-6kh4g-mc91bmrtk7gqff/_cover')]">
                                                          <div class="w-full h-full"> </div>
                                                        </div>
                                                      </div>
                                                      <div class="z-[1] text-white justify-between items-center h-5 text-xs leading-5 flex absolute px-1 bottom-0 inset-x-0 bg-black/54"><svg width="23" viewBox="0 0 23 18" class="align-baseline inline h-5 fill-none overflow-x-hidden overflow-y-hidden">
                                                          <g filter="url(#filter0_d)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C4.44772 4 4 4.44772 4 5V13C4 13.5523 4.44772 14 5 14H13C13.5523 14 14 13.5523 14 13V5C14 4.44772 13.5523 4 13 4H5ZM11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9ZM9 10.6667C9.92047 10.6667 10.6667 9.92047 10.6667 9C10.6667 8.07952 9.92047 7.33333 9 7.33333C8.07953 7.33333 7.33333 8.07952 7.33333 9C7.33333 9.92047 8.07953 10.6667 9 10.6667ZM18.1667 4.83333L14.8333 7.33306V10.6667L18.1667 13.1667V4.83333Z" class="fill-white"></path>
                                                          </g>
                                                          <defs>
                                                            <filter id="filter0_d" x="0" y="0" width="22.1667" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                                              <feOffset></feOffset>
                                                              <feGaussianBlur stdDeviation="2">
                                                              </feGaussianBlur>
                                                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"></feColorMatrix>
                                                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow">
                                                              </feBlend>
                                                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                                                            </filter>
                                                          </defs>
                                                        </svg><span>0:07</span></div>
                                                    </div>
                                                    <div class="w-20 h-20 relative mr-2.5 cursor-zoom-in">
                                                      <div class="w-full h-full relative">
                                                        <picture class="contents">
                                                          <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasd-mc90zpttgqnc30@resize_w72_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasd-mc90zpttgqnc30@resize_w144_nl.webp 2x" type="image/webp" class="contents">
                                                          <img width="72" loading="lazy" class="inline object-cover align-baseline w-full h-full absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasd-mc90zpttgqnc30@resize_w72_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasd-mc90zpttgqnc30@resize_w144_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasd-mc90zpttgqnc30">
                                                        </picture>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="w-full max-w-lg h-full max-h-[31.25rem] hidden -ml-2.5">
                                                    <div class="w-full h-full relative">
                                                      <div class="h-full overflow-x-hidden overflow-y-hidden">
                                                        <ul class="h-full flex relative">
                                                          <li class="float-left self-center h-full px-2.5">
                                                            <div class="relative h-full"><video src="https://proxy.extractcss.dev/https://down-ws-sg.vod.susercontent.com/api/v4/11110103/mms/my-11110103-6kh4g-mc91bmrtk7gqff.16000051752656284.mp4" controls="" class="align-baseline inline-block cursor-pointer bg-black outline-0 select-none w-[32.25rem] max-w-lg h-[31.25rem] max-h-[31.25rem]" controlslist="nodownload"></video></div>
                                                          </li>
                                                          <li class="float-left self-center h-full px-2.5">
                                                            <picture class="contents">
                                                              <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasd-mc90zpttgqnc30.webp" type="image/webp" class="contents"><img loading="lazy" class="inline 0%,#f1f0f0 25%,#fafafa 50%)] bg-[50%,100%_0] [background-repeat:no-repeat,no-repeat] bg-size-[60px_60px,200%_100%] animate-[1s_0.2s_infinite_HjzSc9] align-bottom select-none max-w-lg max-h-[31.25rem]" srcset="" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasd-mc90zpttgqnc30" alt="rating">
                                                            </picture>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                      <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 left-0 bg-white w-6 h-6 leading-6 -mt-3 invisible" role="button" tabindex="0"><svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                                                          <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
                                                        </svg></div>
                                                      <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 right-0 bg-white w-6 h-6 leading-6 -mt-3" role="button" tabindex="0"><svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                                                          <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
                                                        </svg></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <div class="flex mt-5 text-black/40 justify-between">
                                                  <div class="flex">
                                                    <div class="cursor-pointer mr-1 text-black/20"><svg width="14px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-3.5 overflow-x-hidden overflow-y-hidden fill-current">
                                                        <defs></defs>
                                                        <g stroke-width="1" fill-rule="evenodd" class="stroke-none">
                                                          <g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fill-rule="nonzero">
                                                            <g transform="translate(155.000000, 92.000000)">
                                                              <g transform="translate(40.000000, 184.000000)">
                                                                <g transform="translate(0.000000, 326.000000)">
                                                                  <g transform="translate(50.000000, 253.000000)">
                                                                    <g>
                                                                      <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z"></path>
                                                                    </g>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </g>
                                                      </svg></div>
                                                    <div class="capitalize">1</div>
                                                  </div>
                                                  <div class="flex">
                                                    <div class="cursor-pointer ml-auto">
                                                      <div class="relative">
                                                        <div>
                                                          <div><svg width="4px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 overflow-x-hidden overflow-y-hidden">
                                                              <defs></defs>
                                                              <g stroke-width="1" fill-rule="evenodd" class="stroke-none">
                                                                <g transform="translate(-1301.000000, -550.000000)" class="fill-stone-300">
                                                                  <g transform="translate(155.000000, 92.000000)">
                                                                    <g transform="translate(40.000000, 184.000000)">
                                                                      <g transform="translate(0.000000, 161.000000)">
                                                                        <g>
                                                                          <g transform="translate(50.000000, 2.000000)">
                                                                            <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111"></path>
                                                                          </g>
                                                                        </g>
                                                                      </g>
                                                                    </g>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </svg></div>
                                                        </div>
                                                        <div class="opacity-0 h-0 transition-all duration-500 ease-in-out z-[1] bg-white hidden absolute right-0">
                                                          <div class="capitalize whitespace-nowrap shadow-sm px-7 py-3 rounded-sm border border-solid text-black/80 border-black/9">Report Abuse</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="[border-bottom-style:solid] flex py-4 border-b border-b-black/9">
                                            <div class="pl-5 pr-2.5"><a href="/shop/198487082" class="cursor-pointer no-underline active:outline-0 hover:outline-0">
                                                <div class="inline-block relative rounded-[50%] border border-solid border-black/9 w-10 h-10">
                                                  <div class="bg-neutral-100 w-full relative overflow-x-hidden overflow-y-hidden pt-[100%] rounded-[50%]"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-6 h-6 inline-block overflow-x-hidden overflow-y-hidden stroke-stone-300 text-2xl font-normal leading-8 absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                                                      <g>
                                                        <circle cx="7.5" cy="4.5" r="3.8" stroke-miterlimit="10" class="fill-none"></circle>
                                                        <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke-linecap="round" stroke-miterlimit="10" class="fill-none"></path>
                                                      </g>
                                                    </svg></div><img class="align-baseline w-full h-full absolute rounded-[50%] left-0 top-0 focus-visible:outline-0 focus-visible:shadow-[0_0_0_10px_#fff,0_0_0_12px_#000000de]" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/d31381597eaf5dc92392be772c580a71_tn">
                                                </div>
                                              </a></div>
                                            <div class="flex-1">
                                              <div><a class="no-underline cursor-pointer text-xs text-black/87 active:outline-0 hover:outline-0" href="/shop/198487082">saidatulazrin290509</a>
                                                <div class="items-center flex py-1.5">
                                                  <div class="inline-flex"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg></div>
                                                </div>
                                                <div class="mt-1">
                                                  <div class="text-xs mt-1 text-black/54">
                                                    2025-12-09 05:57 | Variation: Chx black red,39</div>
                                                </div>
                                              </div>
                                              <div class="[word-break:break-word] whitespace-pre-wrap leading-5 mt-4">
                                                <div></div>
                                                <div class="mt-3 text-black/87 leading-6">Tq
                                                  seller barang dah sampai dengan selamat. Barang di bungkus rapi, biasa
                                                  ambil saiz 39 kali ni saiz 39 dh mcm 40 tk pelah kita bagi orang lain
                                                  pakai tq</div>
                                              </div>
                                              <div class="mt-4">
                                                <div>
                                                  <div class="flex-wrap w-full flex">
                                                    <div class="w-20 h-20 relative mr-2.5 cursor-zoom-in">
                                                      <div class="w-full h-full relative">
                                                        <picture class="contents">
                                                          <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-820lf-mi128whotkat76@resize_w72_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-820lf-mi128whotkat76@resize_w144_nl.webp 2x" type="image/webp" class="contents">
                                                          <img width="72" loading="lazy" class="inline object-cover align-baseline w-full h-full absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-820lf-mi128whotkat76@resize_w72_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-820lf-mi128whotkat76@resize_w144_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-820lf-mi128whotkat76">
                                                        </picture>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="w-full max-w-lg h-full max-h-[31.25rem] hidden -ml-2.5">
                                                    <div class="w-full h-full relative">
                                                      <div class="h-full overflow-x-hidden overflow-y-hidden">
                                                        <ul class="h-full flex relative">
                                                          <li class="float-left self-center h-full px-2.5">
                                                            <picture class="contents">
                                                              <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-820lf-mi128whotkat76.webp" type="image/webp" class="contents"><img loading="lazy" class="inline 0%,#f1f0f0 25%,#fafafa 50%)] bg-[50%,100%_0] [background-repeat:no-repeat,no-repeat] bg-size-[60px_60px,200%_100%] animate-[1s_0.2s_infinite_HjzSc9] align-bottom select-none max-w-lg max-h-[31.25rem]" srcset="" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-820lf-mi128whotkat76" alt="rating">
                                                            </picture>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                      <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 left-0 bg-white w-6 h-6 leading-6 -mt-3 invisible" role="button" tabindex="0"><svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                                                          <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
                                                        </svg></div>
                                                      <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 right-0 bg-white w-6 h-6 leading-6 -mt-3 invisible" role="button" tabindex="0"><svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                                                          <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
                                                        </svg></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <div class="flex mt-5 text-black/40 justify-between">
                                                  <div class="flex">
                                                    <div class="cursor-pointer mr-1 text-black/20"><svg width="14px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-3.5 overflow-x-hidden overflow-y-hidden fill-current">
                                                        <defs></defs>
                                                        <g stroke-width="1" fill-rule="evenodd" class="stroke-none">
                                                          <g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fill-rule="nonzero">
                                                            <g transform="translate(155.000000, 92.000000)">
                                                              <g transform="translate(40.000000, 184.000000)">
                                                                <g transform="translate(0.000000, 326.000000)">
                                                                  <g transform="translate(50.000000, 253.000000)">
                                                                    <g>
                                                                      <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z"></path>
                                                                    </g>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </g>
                                                      </svg></div>
                                                    <div class="capitalize">helpful?</div>
                                                  </div>
                                                  <div class="flex">
                                                    <div class="cursor-pointer ml-auto">
                                                      <div class="relative">
                                                        <div>
                                                          <div><svg width="4px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 overflow-x-hidden overflow-y-hidden">
                                                              <defs></defs>
                                                              <g stroke-width="1" fill-rule="evenodd" class="stroke-none">
                                                                <g transform="translate(-1301.000000, -550.000000)" class="fill-stone-300">
                                                                  <g transform="translate(155.000000, 92.000000)">
                                                                    <g transform="translate(40.000000, 184.000000)">
                                                                      <g transform="translate(0.000000, 161.000000)">
                                                                        <g>
                                                                          <g transform="translate(50.000000, 2.000000)">
                                                                            <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111"></path>
                                                                          </g>
                                                                        </g>
                                                                      </g>
                                                                    </g>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </svg></div>
                                                        </div>
                                                        <div class="opacity-0 h-0 transition-all duration-500 ease-in-out z-[1] bg-white hidden absolute right-0">
                                                          <div class="capitalize whitespace-nowrap shadow-sm px-7 py-3 rounded-sm border border-solid text-black/80 border-black/9">Report Abuse</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="[border-bottom-style:solid] flex py-4 border-b border-b-black/9">
                                            <div class="pl-5 pr-2.5">
                                              <div>
                                                <div class="inline-block relative rounded-[50%] border border-solid border-black/9 w-10 h-10">
                                                  <div class="bg-neutral-100 w-full relative overflow-x-hidden overflow-y-hidden pt-[100%] rounded-[50%]"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-6 h-6 inline-block overflow-x-hidden overflow-y-hidden stroke-stone-300 text-2xl font-normal leading-8 absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                                                      <g>
                                                        <circle cx="7.5" cy="4.5" r="3.8" stroke-miterlimit="10" class="fill-none"></circle>
                                                        <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke-linecap="round" stroke-miterlimit="10" class="fill-none"></path>
                                                      </g>
                                                    </svg></div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="flex-1">
                                              <div>
                                                <div class="text-xs text-black/87">z*****y</div>
                                                <div class="items-center flex py-1.5">
                                                  <div class="inline-flex"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg></div>
                                                </div>
                                                <div class="mt-1">
                                                  <div class="text-xs mt-1 text-black/54">
                                                    2026-01-05 15:56 | Variation: RUN3.0 Blue,42</div>
                                                </div>
                                              </div>
                                              <div class="[word-break:break-word] whitespace-pre-wrap leading-5 mt-4">
                                                <div></div>
                                                <div class="mt-3 text-black/87 leading-6">kasut
                                                  dah selamat di terima cantik cepat lah sampai walaupon dari indonesia
                                                  saya beli ya..ngam² je ngan kaki anak..</div>
                                              </div>
                                              <div class="mt-4">
                                                <div>
                                                  <div class="flex-wrap w-full flex">
                                                    <div class="w-20 h-20 relative mr-2.5 cursor-zoom-in">
                                                      <div class="w-full h-full relative">
                                                        <div class="bg-neutral-50 w-full h-full relative"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-6 h-6 inline-block overflow-x-hidden overflow-y-hidden stroke-stone-300 text-2xl font-normal leading-8 absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                                                            <g>
                                                              <rect height="8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="10" x="1" y="4.5" class="fill-none"></rect>
                                                              <line stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="6.5" y2="6.5" class="fill-none"></line>
                                                              <rect height="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" x="11" y="6.5" class="fill-none">
                                                              </rect>
                                                              <line stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="14.5" y2="14.5" class="fill-none">
                                                              </line>
                                                              <line stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="6" x2="6" y1=".5" y2="3" class="fill-none"></line>
                                                              <line stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="3.5" x2="3.5" y1="1" y2="3" class="fill-none"></line>
                                                              <line stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="8.5" x2="8.5" y1="1" y2="3" class="fill-none"></line>
                                                            </g>
                                                          </svg></div>
                                                        <div class="bg-[50%] bg-no-repeat bg-cover w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-zl-sg.img.susercontent.com/my-11110103-6v6x9-mj46yisa4f7pb5/_cover')]">
                                                          <div class="w-full h-full"> </div>
                                                        </div>
                                                      </div>
                                                      <div class="z-[1] text-white justify-between items-center h-5 text-xs leading-5 flex absolute px-1 bottom-0 inset-x-0 bg-black/54"><svg width="23" viewBox="0 0 23 18" class="align-baseline inline h-5 fill-none overflow-x-hidden overflow-y-hidden">
                                                          <g filter="url(#filter0_d)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C4.44772 4 4 4.44772 4 5V13C4 13.5523 4.44772 14 5 14H13C13.5523 14 14 13.5523 14 13V5C14 4.44772 13.5523 4 13 4H5ZM11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9ZM9 10.6667C9.92047 10.6667 10.6667 9.92047 10.6667 9C10.6667 8.07952 9.92047 7.33333 9 7.33333C8.07953 7.33333 7.33333 8.07952 7.33333 9C7.33333 9.92047 8.07953 10.6667 9 10.6667ZM18.1667 4.83333L14.8333 7.33306V10.6667L18.1667 13.1667V4.83333Z" class="fill-white"></path>
                                                          </g>
                                                          <defs>
                                                            <filter id="filter0_d" x="0" y="0" width="22.1667" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                                              <feOffset></feOffset>
                                                              <feGaussianBlur stdDeviation="2">
                                                              </feGaussianBlur>
                                                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"></feColorMatrix>
                                                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow">
                                                              </feBlend>
                                                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                                                            </filter>
                                                          </defs>
                                                        </svg><span>0:08</span></div>
                                                    </div>
                                                    <div class="w-20 h-20 relative mr-2.5 cursor-zoom-in">
                                                      <div class="w-full h-full relative">
                                                        <picture class="contents">
                                                          <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-820lc-mj46xirv2kn838@resize_w72_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-820lc-mj46xirv2kn838@resize_w144_nl.webp 2x" type="image/webp" class="contents">
                                                          <img width="72" loading="lazy" class="inline object-cover align-baseline w-full h-full absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-820lc-mj46xirv2kn838@resize_w72_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-820lc-mj46xirv2kn838@resize_w144_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-820lc-mj46xirv2kn838">
                                                        </picture>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="w-full max-w-lg h-full max-h-[31.25rem] hidden -ml-2.5">
                                                    <div class="w-full h-full relative">
                                                      <div class="h-full overflow-x-hidden overflow-y-hidden">
                                                        <ul class="h-full flex relative">
                                                          <li class="float-left self-center h-full px-2.5">
                                                            <div class="relative h-full"><video src="https://proxy.extractcss.dev/https://down-ws-sg.vod.susercontent.com/api/v4/11110103/mms/my-11110103-6v6x9-mj46yisa4f7pb5.16000051767617693.mp4" controls="" class="align-baseline inline-block cursor-pointer bg-black outline-0 select-none w-[32.25rem] max-w-lg h-[31.25rem] max-h-[31.25rem]" controlslist="nodownload"></video></div>
                                                          </li>
                                                          <li class="float-left self-center h-full px-2.5">
                                                            <picture class="contents">
                                                              <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-820lc-mj46xirv2kn838.webp" type="image/webp" class="contents"><img loading="lazy" class="inline 0%,#f1f0f0 25%,#fafafa 50%)] bg-[50%,100%_0] [background-repeat:no-repeat,no-repeat] bg-size-[60px_60px,200%_100%] animate-[1s_0.2s_infinite_HjzSc9] align-bottom select-none max-w-lg max-h-[31.25rem]" srcset="" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-820lc-mj46xirv2kn838" alt="rating">
                                                            </picture>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                      <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 left-0 bg-white w-6 h-6 leading-6 -mt-3 invisible" role="button" tabindex="0"><svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                                                          <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
                                                        </svg></div>
                                                      <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 right-0 bg-white w-6 h-6 leading-6 -mt-3" role="button" tabindex="0"><svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                                                          <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
                                                        </svg></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <div class="flex mt-5 text-black/40 justify-between">
                                                  <div class="flex">
                                                    <div class="cursor-pointer mr-1 text-black/20"><svg width="14px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-3.5 overflow-x-hidden overflow-y-hidden fill-current">
                                                        <defs></defs>
                                                        <g stroke-width="1" fill-rule="evenodd" class="stroke-none">
                                                          <g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fill-rule="nonzero">
                                                            <g transform="translate(155.000000, 92.000000)">
                                                              <g transform="translate(40.000000, 184.000000)">
                                                                <g transform="translate(0.000000, 326.000000)">
                                                                  <g transform="translate(50.000000, 253.000000)">
                                                                    <g>
                                                                      <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z"></path>
                                                                    </g>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </g>
                                                      </svg></div>
                                                    <div class="capitalize">helpful?</div>
                                                  </div>
                                                  <div class="flex">
                                                    <div class="cursor-pointer ml-auto">
                                                      <div class="relative">
                                                        <div>
                                                          <div><svg width="4px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 overflow-x-hidden overflow-y-hidden">
                                                              <defs></defs>
                                                              <g stroke-width="1" fill-rule="evenodd" class="stroke-none">
                                                                <g transform="translate(-1301.000000, -550.000000)" class="fill-stone-300">
                                                                  <g transform="translate(155.000000, 92.000000)">
                                                                    <g transform="translate(40.000000, 184.000000)">
                                                                      <g transform="translate(0.000000, 161.000000)">
                                                                        <g>
                                                                          <g transform="translate(50.000000, 2.000000)">
                                                                            <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111"></path>
                                                                          </g>
                                                                        </g>
                                                                      </g>
                                                                    </g>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </svg></div>
                                                        </div>
                                                        <div class="opacity-0 h-0 transition-all duration-500 ease-in-out z-[1] bg-white hidden absolute right-0">
                                                          <div class="capitalize whitespace-nowrap shadow-sm px-7 py-3 rounded-sm border border-solid text-black/80 border-black/9">Report Abuse</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="[border-bottom-style:solid] flex py-4 border-b border-b-black/9">
                                            <div class="pl-5 pr-2.5">
                                              <div>
                                                <div class="inline-block relative rounded-[50%] border border-solid border-black/9 w-10 h-10">
                                                  <div class="bg-neutral-100 w-full relative overflow-x-hidden overflow-y-hidden pt-[100%] rounded-[50%]"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-6 h-6 inline-block overflow-x-hidden overflow-y-hidden stroke-stone-300 text-2xl font-normal leading-8 absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                                                      <g>
                                                        <circle cx="7.5" cy="4.5" r="3.8" stroke-miterlimit="10" class="fill-none"></circle>
                                                        <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke-linecap="round" stroke-miterlimit="10" class="fill-none"></path>
                                                      </g>
                                                    </svg></div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="flex-1">
                                              <div>
                                                <div class="text-xs text-black/87">k*****4</div>
                                                <div class="items-center flex py-1.5">
                                                  <div class="inline-flex"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" class="fill-none">
                                                      </polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" class="fill-none">
                                                      </polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" class="fill-none">
                                                      </polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" class="fill-none">
                                                      </polygon>
                                                    </svg></div>
                                                </div>
                                                <div class="mt-1">
                                                  <div class="text-xs mt-1 text-black/54"><svg width="8" viewBox="0 0 8 10" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-2.5 fill-none overflow-x-hidden overflow-y-hidden">
                                                      <path d="M4.36872 8.81893C4.28492 8.93416 4.15084 9 4 9C3.84916 9 3.71508 8.93416 3.63128 8.81893C2.82682 7.76543 1 5.23045 1 3.9465C1 2.31687 2.34078 1 4 1C5.65922 1 7 2.31687 7 3.9465C7 5.21399 5.17318 7.76543 4.36872 8.81893Z" stroke-opacity="0.54" stroke-width="0.8" class="stroke-black"></path>
                                                      <path d="M5 4C5 3.44186 4.55814 3 4 3C3.44186 3 3 3.44186 3 4C3 4.55814 3.44186 5 4 5C4.55814 5 5 4.55814 5 4Z" fill-opacity="0.26" class="fill-black">
                                                      </path>
                                                    </svg> Indonesia | 2025-04-27 08:35 | Variation: RUN3.0 Blue,38,
                                                    Black White AB,38</div>
                                                </div>
                                              </div>
                                              <div class="[word-break:break-word] whitespace-pre-wrap leading-5 mt-4">
                                                <div></div>
                                                <div class="mt-3 text-black/87 leading-6">
                                                  Quality: buy 2 come only 1</div>
                                              </div>
                                              <div class="mt-4">
                                                <div>
                                                  <div class="flex-wrap w-full flex">
                                                    <div class="w-20 h-20 relative mr-2.5 cursor-zoom-in">
                                                      <div class="w-full h-full relative">
                                                        <picture class="contents">
                                                          <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134103-7rbk5-m92njws58pv167@resize_w72_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134103-7rbk5-m92njws58pv167@resize_w144_nl.webp 2x" type="image/webp" class="contents">
                                                          <img width="72" loading="lazy" class="inline object-cover align-baseline w-full h-full absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134103-7rbk5-m92njws58pv167@resize_w72_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134103-7rbk5-m92njws58pv167@resize_w144_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134103-7rbk5-m92njws58pv167">
                                                        </picture>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="w-full max-w-lg h-full max-h-[31.25rem] hidden -ml-2.5">
                                                    <div class="w-full h-full relative">
                                                      <div class="h-full overflow-x-hidden overflow-y-hidden">
                                                        <ul class="h-full flex relative">
                                                          <li class="float-left self-center h-full px-2.5">
                                                            <picture class="contents">
                                                              <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134103-7rbk5-m92njws58pv167.webp" type="image/webp" class="contents"><img loading="lazy" class="inline 0%,#f1f0f0 25%,#fafafa 50%)] bg-[50%,100%_0] [background-repeat:no-repeat,no-repeat] bg-size-[60px_60px,200%_100%] animate-[1s_0.2s_infinite_HjzSc9] align-bottom select-none max-w-lg max-h-[31.25rem]" srcset="" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134103-7rbk5-m92njws58pv167" alt="rating">
                                                            </picture>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                      <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 left-0 bg-white w-6 h-6 leading-6 -mt-3 invisible" role="button" tabindex="0"><svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                                                          <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
                                                        </svg></div>
                                                      <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 right-0 bg-white w-6 h-6 leading-6 -mt-3 invisible" role="button" tabindex="0"><svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                                                          <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
                                                        </svg></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="text-xs mt-1 text-black/54">This review
                                                is auto-translated.</div>
                                              <div>
                                                <div class="flex mt-5 text-black/40 justify-between">
                                                  <div class="flex">
                                                    <div class="cursor-pointer mr-1 text-black/20"><svg width="14px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-3.5 overflow-x-hidden overflow-y-hidden fill-current">
                                                        <defs></defs>
                                                        <g stroke-width="1" fill-rule="evenodd" class="stroke-none">
                                                          <g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fill-rule="nonzero">
                                                            <g transform="translate(155.000000, 92.000000)">
                                                              <g transform="translate(40.000000, 184.000000)">
                                                                <g transform="translate(0.000000, 326.000000)">
                                                                  <g transform="translate(50.000000, 253.000000)">
                                                                    <g>
                                                                      <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z"></path>
                                                                    </g>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </g>
                                                      </svg></div>
                                                    <div class="capitalize">6</div>
                                                  </div>
                                                  <div class="flex">
                                                    <div class="cursor-pointer ml-auto">
                                                      <div class="relative">
                                                        <div>
                                                          <div><svg width="4px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 overflow-x-hidden overflow-y-hidden">
                                                              <defs></defs>
                                                              <g stroke-width="1" fill-rule="evenodd" class="stroke-none">
                                                                <g transform="translate(-1301.000000, -550.000000)" class="fill-stone-300">
                                                                  <g transform="translate(155.000000, 92.000000)">
                                                                    <g transform="translate(40.000000, 184.000000)">
                                                                      <g transform="translate(0.000000, 161.000000)">
                                                                        <g>
                                                                          <g transform="translate(50.000000, 2.000000)">
                                                                            <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111"></path>
                                                                          </g>
                                                                        </g>
                                                                      </g>
                                                                    </g>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </svg></div>
                                                        </div>
                                                        <div class="opacity-0 h-0 transition-all duration-500 ease-in-out z-[1] bg-white hidden absolute right-0">
                                                          <div class="capitalize whitespace-nowrap shadow-sm px-7 py-3 rounded-sm border border-solid text-black/80 border-black/9">Report Abuse</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="[border-bottom-style:solid] flex py-4 border-b border-b-black/9">
                                            <div class="pl-5 pr-2.5">
                                              <div>
                                                <div class="inline-block relative rounded-[50%] border border-solid border-black/9 w-10 h-10">
                                                  <div class="bg-neutral-100 w-full relative overflow-x-hidden overflow-y-hidden pt-[100%] rounded-[50%]"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-6 h-6 inline-block overflow-x-hidden overflow-y-hidden stroke-stone-300 text-2xl font-normal leading-8 absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                                                      <g>
                                                        <circle cx="7.5" cy="4.5" r="3.8" stroke-miterlimit="10" class="fill-none"></circle>
                                                        <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke-linecap="round" stroke-miterlimit="10" class="fill-none"></path>
                                                      </g>
                                                    </svg></div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="flex-1">
                                              <div>
                                                <div class="text-xs text-black/87">r*****c</div>
                                                <div class="items-center flex py-1.5">
                                                  <div class="inline-flex"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
                                                    </svg><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="align-baseline fill-current w-3.5 h-3.5 inline-block relative text-red-500 stroke-current mr-0.5 overflow-x-hidden overflow-y-hidden">
                                                      <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" class="fill-none">
                                                      </polygon>
                                                    </svg></div>
                                                  <div class="items-center text-xs flex ml-[3px] mt-1.5 text-black/54">
                                                    <div>Similar Product Review</div>
                                                    <div class="outline-0 flex relative focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87" id="pc-drawer-id-0" tabindex="0"><img alt="icon help" class="align-baseline inline w-3 h-3 ml-1" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/shoprating/e752f9593529853f9406.svg"></div>
                                                  </div>
                                                </div>
                                                <div class="mt-1">
                                                  <div class="text-xs mt-1 text-black/54">
                                                    2025-07-11 12:28</div>
                                                </div>
                                              </div>
                                              <div class="[word-break:break-word] whitespace-pre-wrap leading-5 mt-4">
                                                <div></div>
                                                <div class="mt-3 text-black/87 leading-6">Is it
                                                  suitable for jogging? I'm not sure, since the bases of the shoes are
                                                  flat.
                                                  I think the body is made of canvas, hence the back is soft, not
                                                  similar to sport shoes.

                                                  Thus, it's fashionable and good design for vacation purpose instead of
                                                  jogging or hiking.</div>
                                              </div>
                                              <div class="mt-4">
                                                <div>
                                                  <div class="flex-wrap w-full flex">
                                                    <div class="w-20 h-20 relative mr-2.5 cursor-zoom-in">
                                                      <div class="w-full h-full relative">
                                                        <picture class="contents">
                                                          <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasf-mc1xfcqpfo9ib0@resize_w72_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasf-mc1xfcqpfo9ib0@resize_w144_nl.webp 2x" type="image/webp" class="contents">
                                                          <img width="72" loading="lazy" class="inline object-cover align-baseline w-full h-full absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasf-mc1xfcqpfo9ib0@resize_w72_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasf-mc1xfcqpfo9ib0@resize_w144_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasf-mc1xfcqpfo9ib0">
                                                        </picture>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="w-full max-w-lg h-full max-h-[31.25rem] hidden -ml-2.5">
                                                    <div class="w-full h-full relative">
                                                      <div class="h-full overflow-x-hidden overflow-y-hidden">
                                                        <ul class="h-full flex relative">
                                                          <li class="float-left self-center h-full px-2.5">
                                                            <picture class="contents">
                                                              <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasf-mc1xfcqpfo9ib0.webp" type="image/webp" class="contents"><img loading="lazy" class="inline 0%,#f1f0f0 25%,#fafafa 50%)] bg-[50%,100%_0] [background-repeat:no-repeat,no-repeat] bg-size-[60px_60px,200%_100%] animate-[1s_0.2s_infinite_HjzSc9] align-bottom select-none max-w-lg max-h-[31.25rem]" srcset="" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134103-7rasf-mc1xfcqpfo9ib0" alt="rating">
                                                            </picture>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                      <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 left-0 bg-white w-6 h-6 leading-6 -mt-3 invisible" role="button" tabindex="0"><svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                                                          <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
                                                        </svg></div>
                                                      <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 right-0 bg-white w-6 h-6 leading-6 -mt-3 invisible" role="button" tabindex="0"><svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                                                          <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
                                                        </svg></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <div class="flex mt-5 text-black/40 justify-between">
                                                  <div class="flex">
                                                    <div class="cursor-pointer mr-1 text-black/20"><svg width="14px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-3.5 overflow-x-hidden overflow-y-hidden fill-current">
                                                        <defs></defs>
                                                        <g stroke-width="1" fill-rule="evenodd" class="stroke-none">
                                                          <g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fill-rule="nonzero">
                                                            <g transform="translate(155.000000, 92.000000)">
                                                              <g transform="translate(40.000000, 184.000000)">
                                                                <g transform="translate(0.000000, 326.000000)">
                                                                  <g transform="translate(50.000000, 253.000000)">
                                                                    <g>
                                                                      <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z"></path>
                                                                    </g>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </g>
                                                      </svg></div>
                                                    <div class="capitalize">11</div>
                                                  </div>
                                                  <div class="flex">
                                                    <div class="cursor-pointer ml-auto">
                                                      <div class="relative">
                                                        <div>
                                                          <div><svg width="4px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 overflow-x-hidden overflow-y-hidden">
                                                              <defs></defs>
                                                              <g stroke-width="1" fill-rule="evenodd" class="stroke-none">
                                                                <g transform="translate(-1301.000000, -550.000000)" class="fill-stone-300">
                                                                  <g transform="translate(155.000000, 92.000000)">
                                                                    <g transform="translate(40.000000, 184.000000)">
                                                                      <g transform="translate(0.000000, 161.000000)">
                                                                        <g>
                                                                          <g transform="translate(50.000000, 2.000000)">
                                                                            <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111"></path>
                                                                          </g>
                                                                        </g>
                                                                      </g>
                                                                    </g>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </svg></div>
                                                        </div>
                                                        <div class="opacity-0 h-0 transition-all duration-500 ease-in-out z-[1] bg-white hidden absolute right-0">
                                                          <div class="capitalize whitespace-nowrap shadow-sm px-7 py-3 rounded-sm border border-solid text-black/80 border-black/9">Report Abuse</div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <nav aria-label="" class="text-right mt-5 justify-center flex" role="navigation"><button class="[appearance:auto] cursor-pointer tracking-[0] justify-center items-center font-light transition-colors duration-100 ease-in-out flex text-xs ml-3 border-solid border-black/9 outline-0 relative min-w-10 h-8 border-0 text-black/40 text-right mr-4 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87"><svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="fill-current w-2.5 h-2.5 inline-block relative overflow-x-hidden overflow-y-hidden">
                                              <g>
                                                <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z"></path>
                                              </g>
                                            </svg></button><button class="[appearance:auto] cursor-pointer tracking-[0] outline-0 justify-center items-center font-light transition-colors duration-100 ease-in-out flex relative border-0 hover:text-red-500 text-center min-w-10 h-8 text-xl mx-4 text-black/40 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87">1</button><button class="[appearance:auto] cursor-pointer tracking-[0] justify-center items-center font-light flex select-none transition-opacity duration-200 shadow-sm rounded-sm border-0 outline-0 relative bg-red-500 text-center text-white min-w-10 h-8 text-xl mx-4 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87 hover:bg-red-500 active:bg-red-500 active:shadow-inner">2</button><button class="[appearance:auto] cursor-pointer tracking-[0] outline-0 justify-center items-center font-light transition-colors duration-100 ease-in-out flex relative border-0 hover:text-red-500 text-center min-w-10 h-8 text-xl mx-4 text-black/40 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87">3</button><button class="[appearance:auto] cursor-pointer tracking-[0] outline-0 justify-center items-center font-light transition-colors duration-100 ease-in-out flex relative border-0 hover:text-red-500 text-center min-w-10 h-8 text-xl mx-4 text-black/40 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87">4</button><button class="[appearance:auto] cursor-pointer tracking-[0] outline-0 justify-center items-center font-light transition-colors duration-100 ease-in-out flex relative border-0 hover:text-red-500 text-center min-w-10 h-8 text-xl mx-4 text-black/40 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87">5</button><button class="[appearance:auto] tracking-[0] outline-0 justify-center items-center font-light transition-colors duration-100 ease-in-out flex relative border-0 hover:text-red-500 text-center min-w-10 h-8 text-xl mx-4 text-black/40 cursor-[initial] focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87">...</button><button class="[appearance:auto] cursor-pointer tracking-[0] justify-center items-center font-light transition-colors duration-100 ease-in-out flex text-xs mr-3 border-solid border-black/9 outline-0 relative min-w-10 h-8 border-0 text-black/40 text-left ml-4 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87"><svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="fill-current w-2.5 h-2.5 inline-block relative overflow-x-hidden overflow-y-hidden">
                                              <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                                            </svg></button></nav>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <section class="w-full min-h-screen hidden">
                                  <div></div>
                                </section>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="contents">
                      <div class="mt-5">
                        <div>
                          <div class="pt-5 leading-none">
                            <div class="items-center flex pb-2.5 before:bg-red-500 before:w-2.5 before:h-6 before:mr-1.5 before:content-none">
                              <div class="uppercase text-ellipsis whitespace-nowrap flex-1 overflow-x-hidden overflow-y-hidden mr-5 text-base font-medium text-black/54">
                                <div>From The Same Shop</div>
                              </div><a class="cursor-pointer block active:outline-0 hover:outline-0 text-red-500 no-underline" tabindex="-1" href="/from_same_shop/806123574/28328592519/100012?isMart=false&amp;pageNumber=1"><button class="[appearance:auto] cursor-pointer tracking-[0] outline-0 justify-center text-sm font-light leading-none transition-colors duration-100 ease-in-out relative px-2 py-1.5 border-0 capitalize items-center flex focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87 text-red-500">See All&nbsp;<svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="align-baseline fill-current w-2.5 h-2.5 inline-block relative overflow-x-hidden overflow-y-hidden text-xs">
                                    <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                                  </svg></button></a>
                            </div>
                            <div class="relative -m-2"></div>
                          </div>
                          <div class="w-full h-full relative -mx-1.5 pt-1.5">
                            <div class="touch-pan-y h-full overflow-x-hidden overflow-y-hidden">
                              <ul class="h-full flex relative w-[400%]">
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Latest-trend-adult-men's-shoes-AB-variation-size-38-43-i.806123574.26771589322?extraParams=%7B%22display_model_id%22%3A237194267573%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=2fd3d64a-6388-4f1a-aacf-67b65dc6e949&amp;xptdk=2fd3d64a-6388-4f1a-aacf-67b65dc6e949">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rasi-m45kug5opktmf6_tn.webp" alt="Latest trend adult men's shoes, AB variation, size 38-43" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                            </div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Latest trend adult men's shoes, AB variation, size
                                              38-43</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 ml-1 shadow my-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">11.99</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">6k+ sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/NEWEST-MEN'S-SNEAKERS-SILHOUETTE-GRADE-CASUAL-SHOES-READY-SIZE-38-43-LATEST-VIRAL-SHOES-i.806123574.43522386515?extraParams=%7B%22display_model_id%22%3A271820796207%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=488a005d-280b-415f-9169-c7de5b2cd14b&amp;xptdk=488a005d-280b-415f-9169-c7de5b2cd14b">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-81ztp-mf983l2ddbf38b_tn.webp" alt="NEWEST MEN'S SNEAKERS, SILHOUETTE GRADE, CASUAL SHOES, READY SIZE 38-43, LATEST VIRAL SHOES" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-44%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-44%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">NEWEST MEN'S SNEAKERS, SILHOUETTE GRADE, CASUAL
                                              SHOES, READY SIZE 38-43, LATEST VIRAL SHOES</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 ml-1 shadow my-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">10.48</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">4k+ sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/NANDACOLLECTION-Latest-Men's-Sneakers-Black-Men's-Shoes-SPORT-Shoes-F30-i.806123574.44359390459?extraParams=%7B%22display_model_id%22%3A296861445130%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=c83a9b05-dd52-4187-9d31-f095bb8f143f&amp;xptdk=c83a9b05-dd52-4187-9d31-f095bb8f143f">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0l-mchcagk62qsva2_tn.webp" alt="NANDACOLLECTION - Latest Men's Sneakers Black Men's Shoes SPORT Shoes F30" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-47%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-47%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                            </div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">NANDACOLLECTION - Latest Men's Sneakers Black Men's
                                              Shoes SPORT Shoes F30</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 ml-1 shadow my-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">9.38</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">3k+ sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/NEWEST-MEN'S-SNEAKERS-XTRONE-CASUAL-SHOES-BEST-PRODUCT-SELLER-SPORTS-SCHOOL-SHOES-i.806123574.40375267779?extraParams=%7B%22display_model_id%22%3A360163653378%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=da7a09cc-b1b3-4dfe-92c3-bb4050b151b3&amp;xptdk=da7a09cc-b1b3-4dfe-92c3-bb4050b151b3">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-8224w-mha1dackfaq3d2_tn.webp" alt="NEWEST MEN'S SNEAKERS XTRONE CASUAL SHOES BEST PRODUCT SELLER SPORTS SCHOOL SHOES" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-5%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-5%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                            </div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">NEWEST MEN'S SNEAKERS XTRONE CASUAL SHOES BEST
                                              PRODUCT SELLER SPORTS SCHOOL SHOES</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 ml-1 shadow my-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">11.99</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">1k+ sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Latest-adult-men's-sneakers-trendy-casual-white-shoes-i.806123574.42659883107?extraParams=%7B%22display_model_id%22%3A275830577999%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=34a28a1f-04b1-428b-bb45-525165b340a5&amp;xptdk=34a28a1f-04b1-428b-bb45-525165b340a5">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0l-mck2y33il8af00_tn.webp" alt="Latest adult men's sneakers, trendy casual white shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-40%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-40%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Latest adult men's sneakers, trendy casual white
                                              shoes</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 ml-1 shadow my-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">11.14</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">2k+ sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/ADULT-WOMEN'S-SNEAKERS-WHITE-AND-BLACK-DHEA-SHOES-i.806123574.24200396621?extraParams=%7B%22display_model_id%22%3A242748521030%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=00fab93b-9073-41d2-a9f2-3fb2f62cccb1&amp;xptdk=00fab93b-9073-41d2-a9f2-3fb2f62cccb1">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7r992-lnt2qezpu681a2_tn.webp" alt="ADULT WOMEN'S SNEAKERS WHITE AND BLACK DHEA SHOES" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">ADULT WOMEN'S SNEAKERS WHITE AND BLACK DHEA SHOES
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 ml-1 shadow my-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">12.65</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">8k+ sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/SEMI-BOOTS-SNEAKERS-FOR-KIDS-AND-ADULTS-IN-S-TEDDY-BEAR-MOTIF-SHOES-i.806123574.24400588947?extraParams=%7B%22display_model_id%22%3A217137263824%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=5724b8e7-465e-45e9-9bd4-46ee8685b340&amp;xptdk=5724b8e7-465e-45e9-9bd4-46ee8685b340">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7r98x-lnvfs0b29f2fa2_tn.webp" alt="SEMI BOOTS SNEAKERS FOR KIDS AND ADULTS IN/S TEDDY BEAR MOTIF SHOES" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-11%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-11%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                            </div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">SEMI BOOTS SNEAKERS FOR KIDS AND ADULTS IN/S TEDDY
                                              BEAR MOTIF SHOES</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 ml-1 shadow my-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">18.14</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">10k+ sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Trendy-casual-women's-sneakers-full-white-eveline-white-women's-shoes-i.806123574.41756283512?extraParams=%7B%22display_model_id%22%3A99849450007%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=65747d7c-77d9-4e2a-af1e-fcf8a7a0a8fa&amp;xptdk=65747d7c-77d9-4e2a-af1e-fcf8a7a0a8fa">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0j-mbgh888z65dy1f_tn.webp" alt="Trendy casual women's sneakers, full white eveline, white, women's shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-40%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-40%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Trendy casual women's sneakers, full white eveline,
                                              white, women's shoes</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 ml-1 shadow my-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">8.25</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">20 sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/ADULT-WOMEN'S-SNEAKERS-VIRAL-RULFIN-SHOES-i.806123574.16199463015?extraParams=%7B%22display_model_id%22%3A177937766230%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=a07a87cd-210c-4787-9762-021508f90a74&amp;xptdk=a07a87cd-210c-4787-9762-021508f90a74">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7r992-lnvf9p2yn89215_tn.webp" alt="ADULT WOMEN'S SNEAKERS VIRAL RULFIN SHOES" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-40%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-40%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">ADULT WOMEN'S SNEAKERS VIRAL RULFIN SHOES</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 ml-1 shadow my-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">11.54</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">389 sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Latest-Men's-Sneakers-XIRON-Model-Grey-Size-38-43-Light-Comfortable-and-Stylish-i.806123574.42527764884?extraParams=%7B%22display_model_id%22%3A228230775979%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=84014450-89e7-4c8a-964c-b723ba004ff1&amp;xptdk=84014450-89e7-4c8a-964c-b723ba004ff1">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-82252-mj50djydyk8wda_tn.webp" alt="Latest Men's Sneakers, XIRON Model, Grey, Size 38-43, Light, Comfortable and Stylish" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-30%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-30%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Latest Men's Sneakers, XIRON Model, Grey, Size
                                              38-43, Light, Comfortable and Stylish</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default pointer-events-none flex items-center overflow-x-hidden overflow-y-hidden text-ellipsis rounded-[1px] border-[0.5px] border-yellow-500 bg-yellow-50 px-1 py-px ml-1"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/d7099d3fd1dfdaf705ab.svg" alt="vehicle compatible icon" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none mr-0.5">
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default text-ellipsis overflow-x-hidden overflow-y-hidden whitespace-nowrap text-xs leading-3 text-black">4.9</div>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">19.17</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">2k+ sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Latest-Men's-Sneakers-Boots-DOKICI-Cool-Casual-Shoes-for-Men-Ready-Size-38-43-i.806123574.40404630147?extraParams=%7B%22display_model_id%22%3A370146277503%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=a1ce3278-dda4-4e76-96ea-d8787d6b4a05&amp;xptdk=a1ce3278-dda4-4e76-96ea-d8787d6b4a05">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk3-maxkounl0a1i29_tn.webp" alt="Latest Men's Sneakers Boots DOKICI Cool Casual Shoes for Men Ready Size 38-43" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-8%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-8%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                            </div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Latest Men's Sneakers Boots DOKICI Cool Casual
                                              Shoes for Men Ready Size 38-43</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 ml-1 shadow my-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">13.09</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">3k+ sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Trendy-men's-and-women's-sneakers-casual-shoes-hangout-shoes-i.806123574.56804346994?extraParams=%7B%22display_model_id%22%3A340408191278%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=7d76f6b6-9304-4b18-bdad-6f19dfd200c4&amp;xptdk=7d76f6b6-9304-4b18-bdad-6f19dfd200c4">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-8224x-mj6ji90725mub3_tn.webp" alt="Trendy men's and women's sneakers, casual shoes, hangout shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-33%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-33%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Trendy men's and women's sneakers, casual shoes,
                                              hangout shoes</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">16.56</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">2 sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/NEWEST-MEN'S-SNEAKERS-UNISEX-SCHOOL-SHOES-CASUAL-SHOES-BEST-PRODUCT-SELLER-SIZE-38-43-i.806123574.28842481597?extraParams=%7B%22display_model_id%22%3A281833628494%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=b778bbc4-edbf-46b2-b4f4-3c38b8701d33&amp;xptdk=b778bbc4-edbf-46b2-b4f4-3c38b8701d33">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-81ztg-mfatfnk589oqe8_tn.webp" alt="NEWEST MEN'S SNEAKERS UNISEX SCHOOL SHOES CASUAL SHOES BEST PRODUCT SELLER SIZE 38-43" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-6%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-6%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">NEWEST MEN'S SNEAKERS UNISEX SCHOOL SHOES CASUAL
                                              SHOES BEST PRODUCT SELLER SIZE 38-43</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default pointer-events-none flex items-center overflow-x-hidden overflow-y-hidden text-ellipsis rounded-[1px] border-[0.5px] border-yellow-500 bg-yellow-50 px-1 py-px"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/d7099d3fd1dfdaf705ab.svg" alt="vehicle compatible icon" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none mr-0.5">
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default text-ellipsis overflow-x-hidden overflow-y-hidden whitespace-nowrap text-xs leading-3 text-black">4.6</div>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">17.49</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">1k+ sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/NEWEST-MEN'S-SNEAKERS-FULL-BLACK-GUNTUR-MOTIF-SHOES-READY-SIZE-(38-43)-i.806123574.40009106695?extraParams=%7B%22display_model_id%22%3A260760039639%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=a0581679-6c83-4802-b287-835162301a36&amp;xptdk=a0581679-6c83-4802-b287-835162301a36">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0k-mcd0ax2454l750_tn.webp" alt="NEWEST MEN'S SNEAKERS FULL BLACK GUNTUR MOTIF SHOES READY SIZE (38-43)" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-6%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-6%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">NEWEST MEN'S SNEAKERS FULL BLACK GUNTUR MOTIF SHOES
                                              READY SIZE (38-43)</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">18.15</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">183 sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men's-and-women's-sneakers-boots-with-TRS-image-motif-i.806123574.27308842778?extraParams=%7B%22display_model_id%22%3A252830370913%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=62e04f1e-ef74-46e8-8093-b63715a8996b&amp;xptdk=62e04f1e-ef74-46e8-8093-b63715a8996b">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/4e8c6fc9223d365308b99e1b6e8978d2_tn.webp" alt="Men's and women's sneakers boots with TRS image motif" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men's and women's sneakers boots with TRS image
                                              motif</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">17.05</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">2k+ sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Trendy-women's-casual-sneakers-viral-shoes-hangout-shoes-size-37-40-Korean-style-shoes-i.806123574.57304356733?extraParams=%7B%22display_model_id%22%3A385408232802%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=74097c22-f67b-4737-844f-10d10c497c3a&amp;xptdk=74097c22-f67b-4737-844f-10d10c497c3a">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-8224o-mj8jg1v8z85hf6_tn.webp" alt="Trendy women's casual sneakers, viral shoes, hangout shoes, size 37-40, Korean style shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-30%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-30%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Trendy women's casual sneakers, viral shoes,
                                              hangout shoes, size 37-40, Korean style shoes</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">16.56</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/NANDA-collection.-Children's-shoes-with-hello-kitty-motif-Kasut-Sekolah-Hitam-Budak-Kasut-Sekolah-Budak-Perempuan-Kasut-Sekolah-Hitam-Perempuan-Kasut-Sekolah-Hitam-Lelaki-Kasut-Sekolah-Hitam-i.806123574.25643643510?extraParams=%7B%22display_model_id%22%3A128288082679%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=d2f1a547-418a-43ff-8e86-6db2557ddd4d&amp;xptdk=d2f1a547-418a-43ff-8e86-6db2557ddd4d">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-22110-wmy03fb0wljv02_tn.webp" alt="NANDA collection. Children's shoes with hello kitty motif Kasut Sekolah Hitam Budak Kasut Sekolah Budak Perempuan Kasut Sekolah Hitam Perempuan Kasut Sekolah Hitam Lelaki Kasut Sekolah Hitam" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">NANDA collection. Children's shoes with hello kitty
                                              motif Kasut Sekolah Hitam Budak Kasut Sekolah Budak Perempuan Kasut
                                              Sekolah Hitam Perempuan Kasut Sekolah Hitam Lelaki Kasut Sekolah Hitam
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">13.75</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">145 sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/11.11-contemporary-shoes-korean-teddy-bear-boots-i.806123574.26408842649?extraParams=%7B%22display_model_id%22%3A166640508734%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=6fb14560-2c6d-4e3f-b939-8d0ee8bdb0c1&amp;xptdk=6fb14560-2c6d-4e3f-b939-8d0ee8bdb0c1">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-22120-ca3bcmjf4qkva5_tn.webp" alt="11.11 contemporary shoes korean teddy bear boots" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                            </div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">11.11 contemporary shoes korean teddy bear boots
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">13.75</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">25 sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Beautiful-women's-flatshoes-plain-Suede-flatshoes-for-work-i.806123574.41554556527?extraParams=%7B%22display_model_id%22%3A109514291846%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=aeebf0a4-c202-4d0e-9a30-772c64df725a&amp;xptdk=aeebf0a4-c202-4d0e-9a30-772c64df725a">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbkc-mb04wh4t4ga32c_tn.webp" alt="Beautiful women's flatshoes, plain Suede flatshoes for work" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-8%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-8%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Beautiful women's flatshoes, plain Suede flatshoes
                                              for work</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">11.99</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">16 sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Latest-yujiin-sneakers-contemporary-style-for-teenage-women-i.806123574.25754407533?extraParams=%7B%22display_model_id%22%3A222462183113%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=9e4f57ce-4812-4ee0-b555-6bd216aa879d&amp;xptdk=9e4f57ce-4812-4ee0-b555-6bd216aa879d">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7r990-lpkb1se3v4eh62_tn.webp" alt="Latest yujiin sneakers, contemporary style for teenage women" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-3%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-3%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Latest yujiin sneakers, contemporary style for
                                              teenage women</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">18.59</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">377 sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Alexa-Premium-Casual-Flatshoes-Women's-Shoes-for-work-and-casual-i.806123574.44751587669?extraParams=%7B%22display_model_id%22%3A350143343732%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=8bdcd36d-0e5e-4782-8727-b0d649d0d962&amp;xptdk=8bdcd36d-0e5e-4782-8727-b0d649d0d962">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk6-m7drq9n21ceedf_tn.webp" alt="Alexa Premium Casual Flatshoes Women's Shoes for work and casual" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-42%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-42%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Alexa Premium Casual Flatshoes Women's Shoes for
                                              work and casual</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default pointer-events-none flex items-center overflow-x-hidden overflow-y-hidden text-ellipsis rounded-[1px] border-[0.5px] border-yellow-500 bg-yellow-50 px-1 py-px"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/d7099d3fd1dfdaf705ab.svg" alt="vehicle compatible icon" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none mr-0.5">
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default text-ellipsis overflow-x-hidden overflow-y-hidden whitespace-nowrap text-xs leading-3 text-black">5.0</div>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">10.49</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">3 sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/JOLLY-Girls'-Flat-Shoes-Trendy-Anti-slip-Shoes-i.806123574.26284535715?extraParams=%7B%22display_model_id%22%3A168887936183%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=7a3c8483-dc50-4f96-bc88-72c89584dae0&amp;xptdk=7a3c8483-dc50-4f96-bc88-72c89584dae0">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk3-m8sgjayz5fql87_tn.webp" alt="JOLLY Girls' Flat Shoes, Trendy Anti-slip Shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-3%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-3%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">JOLLY Girls' Flat Shoes, Trendy Anti-slip Shoes
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">14.85</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">23 sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/BONEY-Cute-Girls'-Flat-Shoes-Trendy-Shoes-Size-22-30-FREE-BOX-i.806123574.26284531288?extraParams=%7B%22display_model_id%22%3A258267134948%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=c1fd2484-cc1e-4420-961f-bf0fdb8bfc97&amp;xptdk=c1fd2484-cc1e-4420-961f-bf0fdb8bfc97">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbkb-m8sgjayzdv5988_tn.webp" alt="BONEY Cute Girls' Flat Shoes, Trendy Shoes, Size 22-30, FREE BOX" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-3%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-3%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">BONEY Cute Girls' Flat Shoes, Trendy Shoes, Size
                                              22-30, FREE BOX</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">14.85</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">19 sold</div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                                <li class="float-left touch-pan-y overflow-x-hidden pt-1.5 px-1.5 w-2/12">
                                  <div class="h-full">
                                    <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Girls'-ballet-shoes-flatshoes-latest-middle-ribbon-cross-straps-lightweight-non-slip-shoes-i.806123574.46951587671?extraParams=%7B%22display_model_id%22%3A330143349184%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=83062016-4fc7-45c1-a57c-0a7b56985b01&amp;xptdk=83062016-4fc7-45c1-a57c-0a7b56985b01">
                                        <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbke-m8swqf15nm1q13_tn.webp" alt="Girls' ballet shoes, flatshoes, latest middle ribbon cross straps, lightweight, non-slip shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                              <span aria-label="-42%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-42%
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                          </div>
                                          <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Girls' ballet shoes, flatshoes, latest middle
                                              ribbon cross straps, lightweight, non-slip shoes</div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                                <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                              </div>
                                            </div>
                                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                                <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                                  <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">9.57</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </a></div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 left-0 bg-white w-6 h-6 leading-6 -mt-3 invisible translate-x-[calc(5px_-_50%)]" role="button" tabindex="0"><svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                                <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
                              </svg></div>
                            <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 right-0 bg-white w-6 h-6 leading-6 -mt-3 translate-x-[calc(50%_-_5px)]" role="button" tabindex="0"><svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                                <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
                              </svg></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="contents">
                      <div class="pt-5">
                        <div class="items-center flex pb-2.5 before:bg-red-500 before:w-2.5 before:h-6 before:mr-1.5 before:content-none">
                          <div class="uppercase text-ellipsis whitespace-nowrap flex-1 overflow-x-hidden overflow-y-hidden mr-5 text-base font-medium text-black/54">
                            <div>you may also like</div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                      <div class="flex-wrap flex -mx-1.5 pt-1.5">
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Latest-trend-adult-men's-shoes-AB-variation-size-38-43-i.806123574.26771589322?extraParams=%7B%22display_model_id%22%3A237194267573%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=e2d52064-258f-4820-b64d-14afb766bdf3&amp;xptdk=e2d52064-258f-4820-b64d-14afb766bdf3">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rdyg-mcsfjvxed7wc8b_tn.webp" alt="Latest trend adult men's shoes, AB variation, size 38-43" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-21%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-21%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Latest trend adult men's shoes, AB variation, size 38-43
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">11.99</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">6k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/GRAEAE-Men's-Trendy-Shoes-2026-Spring-New-Sports-Shoes-Versatile-Breathable-Flyknit-Sports-Shoes-Mesh-Casual-Dad-Shoes-i.1523051471.25594379626?extraParams=%7B%22display_model_id%22%3A243257000910%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=7a34d4e1-e0ba-4169-8680-3af578474966&amp;xptdk=7a34d4e1-e0ba-4169-8680-3af578474966">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-824h5-merhpkzvho8y2f_tn.webp" alt="GRAEAE Men's Trendy Shoes 2026 Spring New Sports Shoes Versatile Breathable Flyknit Sports Shoes Mesh Casual Dad Shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-55%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-55%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">GRAEAE Men's Trendy Shoes 2026 Spring New Sports Shoes
                                    Versatile Breathable Flyknit Sports Shoes Mesh Casual Dad Shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">17.90</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">7k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/NANDACOLLECTION-Latest-Men's-Sneakers-Black-Men's-Shoes-SPORT-Shoes-F30-i.806123574.44359390459?extraParams=%7B%22display_model_id%22%3A296861445130%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=1ce58d6b-a671-445d-abd5-1aac81a63a11&amp;xptdk=1ce58d6b-a671-445d-abd5-1aac81a63a11">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-821e3-mhblolz5mn7x5f_tn.webp" alt="NANDACOLLECTION - Latest Men's Sneakers Black Men's Shoes SPORT Shoes F30" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-47%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-47%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">NANDACOLLECTION - Latest Men's Sneakers Black Men's Shoes
                                    SPORT Shoes F30</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">9.38</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">3k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Latest-Sneakers-Men's-and-Women's-Fashion-Arrow-Shoes-Plain-Black-and-Grey-i.1268361671.51652176729?extraParams=%7B%22display_model_id%22%3A435210742362%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=a89836aa-f672-441c-8907-356dcb11ddaa&amp;xptdk=a89836aa-f672-441c-8907-356dcb11ddaa">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-81zvv-mih930hkrsawf7_tn.webp" alt="Latest Sneakers, Men's and Women's Fashion Arrow Shoes, Plain Black and Grey" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-56%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-56%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Latest Sneakers, Men's and Women's Fashion Arrow Shoes, Plain
                                    Black and Grey</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                    <div class="border-solid after:border-solid before:border-solid disabled:cursor-default pointer-events-none flex items-center overflow-x-hidden overflow-y-hidden text-ellipsis rounded-[1px] border-[0.5px] border-yellow-500 bg-yellow-50 px-1 py-px"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/d7099d3fd1dfdaf705ab.svg" alt="vehicle compatible icon" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none mr-0.5">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default text-ellipsis overflow-x-hidden overflow-y-hidden whitespace-nowrap text-xs leading-3 text-black">4.5</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">17.05</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/NEWEST-MEN'S-SNEAKERS-SILHOUETTE-GRADE-CASUAL-SHOES-READY-SIZE-38-43-LATEST-VIRAL-SHOES-i.806123574.43522386515?extraParams=%7B%22display_model_id%22%3A271820796207%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=6c347183-b63b-4b6c-a8fd-57d87fd670c3&amp;xptdk=6c347183-b63b-4b6c-a8fd-57d87fd670c3">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-82265-mhn37kqb0lj54b_tn.webp" alt="NEWEST MEN'S SNEAKERS, SILHOUETTE GRADE, CASUAL SHOES, READY SIZE 38-43, LATEST VIRAL SHOES" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-44%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-44%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">NEWEST MEN'S SNEAKERS, SILHOUETTE GRADE, CASUAL SHOES, READY
                                    SIZE 38-43, LATEST VIRAL SHOES</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">10.48</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">4k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Latest-Jogging-Running-Sneakers-for-Men-and-Women-ABB520-i.868546644.29632110033?extraParams=%7B%22display_model_id%22%3A188387362076%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=96c2eec4-8fa2-47a8-a92f-263444803fb4&amp;xptdk=96c2eec4-8fa2-47a8-a92f-263444803fb4">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rasj-m3f125n62d7zb2_tn.webp" alt="Latest Jogging Running Sneakers for Men and Women ABB520" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-51%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-51%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Latest Jogging Running Sneakers for Men and Women ABB520
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">15.29</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">6k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/READY-STOCK%F0%9F%92%9DWEBEE-KL-563-Unisex-Women-Men's-Outdoor-Sneakers-Sport-Shoes-Kasut-Sukan-Wanita-Man-Shoes-i.7940214.23667052810?extraParams=%7B%22display_model_id%22%3A165875739215%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=91390ca3-ba38-464e-9b5a-f21fc14f6360&amp;xptdk=91390ca3-ba38-464e-9b5a-f21fc14f6360">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-825ap-mgfonvuhafws57_tn.webp" alt="READY STOCK💝WEBEE KL 563 Unisex Women Men's Outdoor Sneakers Sport Shoes Kasut Sukan Wanita Man Shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-58%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-58%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">READY STOCK💝WEBEE KL 563 Unisex Women Men's Outdoor Sneakers
                                    Sport Shoes Kasut Sukan Wanita Man Shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden bg-amber-500 px-px text-xs leading-4 text-white">RM4 off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">20.99</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">9k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/%F0%9F%A6%84Murah-Sekali%F0%9F%A6%84-730-Sneaker-Men's-Sport's-Sport-Unisex-Shoes-Kasut-Shoe-Outdoor-Lelaki-Wanita-Women's-Kasut-Sekolah-i.30847063.18845015881?extraParams=%7B%22display_model_id%22%3A137348284920%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=e5a2770e-969b-4b43-a715-d811ea892845&amp;xptdk=e5a2770e-969b-4b43-a715-d811ea892845">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-821fd-mghqiangcsni35_tn.webp" alt="🦄Murah Sekali🦄 730  Sneaker Men's Sport's Sport Unisex Shoes Kasut Shoe Outdoor Lelaki Wanita Women's Kasut Sekolah" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">🦄Murah Sekali🦄 730 Sneaker Men's Sport's Sport Unisex Shoes
                                    Kasut Shoe Outdoor Lelaki Wanita Women's Kasut Sekolah</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">8.45</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">8k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men's-shoes-2026-new-youth-high-top-canvas-shoes-trendy-student-versatile-sports-casual-white-shoes-i.1399732910.28017365704?extraParams=%7B%22display_model_id%22%3A157550292488%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=be130cbc-2c83-4112-aa72-b451a61e5fed&amp;xptdk=be130cbc-2c83-4112-aa72-b451a61e5fed">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rask-m2hzqt30qdh9be_tn.webp" alt="Men's shoes 2026 new youth high-top canvas shoes trendy student versatile sports casual white shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-63%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-63%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men's shoes 2026 new youth high-top canvas shoes trendy
                                    student versatile sports casual white shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">24.12</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">4k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men's-and-women's-sneakers-jogging-shoes-casual-shoes-JO3-i.1689643174.50202385290?extraParams=%7B%22display_model_id%22%3A385230825864%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=ec829e68-2bdc-40b8-b4ef-d9c109703308&amp;xptdk=ec829e68-2bdc-40b8-b4ef-d9c109703308">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-81zuj-miryrlbzxl34e1_tn.webp" alt="Men's and women's sneakers, jogging shoes, casual shoes JO3" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-3%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-3%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men's and women's sneakers, jogging shoes, casual shoes JO3
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">14.65</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">7k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/NEWEST-MEN'S-AND-WOMEN'S-SNEAKERS-SIZE-(36-43)-RUNNING-SHOES-SCHOOL-SHOES-i.379258693.47453386345?extraParams=%7B%22display_model_id%22%3A355323418247%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=c4e807ac-ff5d-4d44-ba29-e5da957c5934&amp;xptdk=c4e807ac-ff5d-4d44-ba29-e5da957c5934">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ra0i-mck3ui07b7s79f_tn.webp" alt="NEWEST MEN'S AND WOMEN'S SNEAKERS SIZE (36-43) RUNNING SHOES SCHOOL SHOES" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-73%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-73%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">NEWEST MEN'S AND WOMEN'S SNEAKERS SIZE (36-43) RUNNING SHOES
                                    SCHOOL SHOES</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                    <div class="border-solid after:border-solid before:border-solid disabled:cursor-default pointer-events-none flex items-center overflow-x-hidden overflow-y-hidden text-ellipsis rounded-[1px] border-[0.5px] border-yellow-500 bg-yellow-50 px-1 py-px"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/d7099d3fd1dfdaf705ab.svg" alt="vehicle compatible icon" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none mr-0.5">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default text-ellipsis overflow-x-hidden overflow-y-hidden whitespace-nowrap text-xs leading-3 text-black">4.8</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">9.83</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">3k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men's-shoes-Korean-version-trendy-sports-casual-thick-soled-men's-fashion-sports-shoes-running-shoes-dad-men's-hiking-shoes-i.1391124694.27268043179?extraParams=%7B%22display_model_id%22%3A118514792111%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=263a7565-d7dc-411e-b961-7614948987a0&amp;xptdk=263a7565-d7dc-411e-b961-7614948987a0">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rdxj-mcserppkjtgm07_tn.webp" alt="Men's shoes Korean version trendy sports casual thick soled men's fashion sports shoes running shoes dad men's hiking shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-77%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-77%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men's shoes Korean version trendy sports casual thick soled
                                    men's fashion sports shoes running shoes dad men's hiking shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden bg-amber-500 px-px text-xs leading-4 text-white">RM2 off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">22.90</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">9k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/NEWEST-sneakers-quality-comfortable-trendy-casual-outdoor-running-school-shoes-shoes-i.379258693.28414731355?extraParams=%7B%22display_model_id%22%3A59476370159%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=1324ffa8-e3ef-405e-8376-8dcd5b755631&amp;xptdk=1324ffa8-e3ef-405e-8376-8dcd5b755631">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rasl-m1mhf2x5ta2jd7_tn.webp" alt="NEWEST sneakers, quality, comfortable, trendy, casual outdoor running school shoes -shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-21%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-21%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">NEWEST sneakers, quality, comfortable, trendy, casual outdoor
                                    running school shoes -shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">13.49</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/NEWEST-MEN'S-SNEAKERS-XTRONE-CASUAL-SHOES-BEST-PRODUCT-SELLER-SPORTS-SCHOOL-SHOES-i.806123574.40375267779?extraParams=%7B%22display_model_id%22%3A360163653378%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=9c0e532c-dd78-4b44-9ebc-361134791c89&amp;xptdk=9c0e532c-dd78-4b44-9ebc-361134791c89">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-8224v-mg36hubkinm2cd_tn.webp" alt="NEWEST MEN'S SNEAKERS XTRONE CASUAL SHOES BEST PRODUCT SELLER SPORTS SCHOOL SHOES" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-5%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-5%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">NEWEST MEN'S SNEAKERS XTRONE CASUAL SHOES BEST PRODUCT SELLER
                                    SPORTS SCHOOL SHOES</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">11.99</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men's-and-Women's-Casual-Sports-Sneakers-trendy-Casual-Sneakers-for-Men-and-Women-School-Shoes-i.965485259.40703128001?extraParams=%7B%22display_model_id%22%3A285258258244%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=041ad97f-2ce8-412d-9cd5-3e716cbe3205&amp;xptdk=041ad97f-2ce8-412d-9cd5-3e716cbe3205">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rdyg-md0end54jby40e_tn.webp" alt="Men's and Women's Casual Sports Sneakers / trendy Casual Sneakers for Men and Women School Shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-57%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-57%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men's and Women's Casual Sports Sneakers / trendy Casual
                                    Sneakers for Men and Women School Shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                    <div class="border-solid after:border-solid before:border-solid disabled:cursor-default pointer-events-none flex items-center overflow-x-hidden overflow-y-hidden text-ellipsis rounded-[1px] border-[0.5px] border-yellow-500 bg-yellow-50 px-1 py-px"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/d7099d3fd1dfdaf705ab.svg" alt="vehicle compatible icon" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none mr-0.5">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default text-ellipsis overflow-x-hidden overflow-y-hidden whitespace-nowrap text-xs leading-3 text-black">4.5</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">17.49</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">6k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Black-Casual-Men's-Children's-and-Adult's-Sneakers-i.868546644.29632110029?extraParams=%7B%22display_model_id%22%3A177087794141%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=35bdbdae-aa2e-47c2-b736-6fbf99a7a96d&amp;xptdk=35bdbdae-aa2e-47c2-b736-6fbf99a7a96d">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-824gm-med1rgbbd347ac_tn.webp" alt="Black Casual Men's Children's and Adult's Sneakers" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-43%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-43%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Black Casual Men's Children's and Adult's Sneakers</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">14.29</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">4k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men's-shoes-new-style-trendy-all-match-casual-men's-leather-shoes-one-step-slip-on-small-white-flat-shoes-i.1399732910.29067351749?extraParams=%7B%22display_model_id%22%3A197968756814%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=633da53f-51c6-434f-987b-29899ab82d27&amp;xptdk=633da53f-51c6-434f-987b-29899ab82d27">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7ras8-m2hv26nu6dcv09_tn.webp" alt="Men's shoes new style trendy all-match casual men's leather shoes one-step slip-on small white flat shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-63%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-63%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men's shoes new style trendy all-match casual men's leather
                                    shoes one-step slip-on small white flat shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">19.89</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">3k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Flying-woven-men's-shoes-fashion-soft-sole-casual-shoes-outdoor-sports-running-shoes-i.532869301.24826386028?extraParams=%7B%22display_model_id%22%3A207461483927%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=db3d0059-4af1-4092-b01d-b8442cdbef6a&amp;xptdk=db3d0059-4af1-4092-b01d-b8442cdbef6a">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rffo-m9it1w34slgi03_tn.webp" alt="Flying woven men's shoes fashion soft sole casual shoes outdoor sports running shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-44%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-44%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-mjnxa185sbuo4b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-mjnxa185sbuo4b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/1dfb8b91bdc55395e9fe.png" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-0.5 mr-0.5 inline-block h-3.5">Flying woven men's shoes fashion soft sole casual shoes
                                    outdoor sports running shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-[60%] shrink-0 items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden bg-amber-500 px-px text-xs leading-4 text-white">30% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">27.90</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Ready-Stock-Kasut-Lelaki-3Colors-Size-38-48-Large-Size-Men's-Shoes-Casual-Sneakers-Leather-Board-Trendy-Street-Shoes-i.1041265437.27416026618?extraParams=%7B%22display_model_id%22%3A246913423606%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=3e0f71c1-3073-4ad6-9615-d285c9b5704a&amp;xptdk=3e0f71c1-3073-4ad6-9615-d285c9b5704a">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-825b1-mgflg098xzwuaf_tn.webp" alt="Ready Stock Kasut Lelaki 3Colors Size 38-48 Large Size Men's Shoes Casual Sneakers Leather Board Trendy Street Shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-55%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-55%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/1dfb8b91bdc55395e9fe.png" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-0.5 mr-0.5 inline-block h-3.5">Ready Stock Kasut Lelaki 3Colors Size 38-48 Large Size
                                    Men's Shoes Casual Sneakers Leather Board Trendy Street Shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden bg-amber-500 px-px text-xs leading-4 text-white">RM4 off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">34.92</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Ready-Stock-Size-39-44-Fashion-Running-Sneakers-Kasut-Lelaki-Casual-Lace-Up-Wear-resistant-Trend-Sports-Shoes-Mesh-Breathable-Men's-Shoes-i.427552934.27593898686?extraParams=%7B%22display_model_id%22%3A365358155611%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=b6f5c862-0623-4ba2-91c9-968f6ba385d3&amp;xptdk=b6f5c862-0623-4ba2-91c9-968f6ba385d3">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-81zv1-mio73in9rrb7b4_tn.webp" alt="Ready Stock Size 39-44 Fashion Running Sneakers Kasut Lelaki Casual Lace-Up Wear-resistant Trend Sports Shoes Mesh Breathable Men's Shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-50%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-50%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Ready Stock Size 39-44 Fashion Running Sneakers Kasut Lelaki
                                    Casual Lace-Up Wear-resistant Trend Sports Shoes Mesh Breathable Men's Shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">Sea Shipping</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">36.00</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">8 sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men's-shoes-Korean-version-trendy-sports-casual-thick-soled-men's-fashion-sports-shoes-running-shoes-dad-men's-hiking-shoes-i.1391124694.28467951118?extraParams=%7B%22display_model_id%22%3A185564956029%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=f99d4196-1a9b-46b6-8a3c-dcac4b3980a6&amp;xptdk=f99d4196-1a9b-46b6-8a3c-dcac4b3980a6">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rdxs-mctf5kcxjta186_tn.webp" alt="Men's shoes Korean version trendy sports casual thick soled men's fashion sports shoes running shoes dad men's hiking shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-67%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-67%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men's shoes Korean version trendy sports casual thick soled
                                    men's fashion sports shoes running shoes dad men's hiking shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden bg-amber-500 px-px text-xs leading-4 text-white">RM2 off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">22.90</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">7k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men's-shoes-Korean-style-business-casual-leather-shoes-waterproof-soft-sole-running-shoes-anti-skate-shoes-i.1399732910.26167509960?extraParams=%7B%22display_model_id%22%3A197973571624%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=02d1b9f7-22b8-4927-9fd7-9e3f5eb2ae28&amp;xptdk=02d1b9f7-22b8-4927-9fd7-9e3f5eb2ae28">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rdya-mdg2lcva6vok35_tn.webp" alt="Men's shoes Korean style business casual leather shoes waterproof soft sole running shoes anti-skate shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-59%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-59%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men's shoes Korean style business casual leather shoes
                                    waterproof soft sole running shoes anti-skate shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">23.84</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/READY-STOCK%F0%9F%8E%81Hype-Fashion-Stripe-Sneakers-Men-Sneakers-Men-Sport-Shoes-Kasut-Lelaki-Murah-Walking-Running-Sport-i.911853760.20175807286?extraParams=%7B%22display_model_id%22%3A194028448391%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=1e578bff-3b96-4201-be34-656f79cd7b1f&amp;xptdk=1e578bff-3b96-4201-be34-656f79cd7b1f">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rdvh-mcrj2ocwa3zrd6_tn.webp" alt="READY STOCK🎁Hype Fashion Stripe Sneakers Men Sneakers Men Sport Shoes Kasut Lelaki Murah Walking Running Sport" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-75%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-75%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">READY STOCK🎁Hype Fashion Stripe Sneakers Men Sneakers Men
                                    Sport Shoes Kasut Lelaki Murah Walking Running Sport</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">12.25</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">6k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men-shoes-New-leather-surface-Men's-casual-shoes-all-match-trendy-men's-shoes-fashion-men-sneaker-i.1399732910.24488318291?extraParams=%7B%22display_model_id%22%3A69836600807%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=20e253c6-02c5-4750-b9be-131c9aff91c5&amp;xptdk=20e253c6-02c5-4750-b9be-131c9aff91c5">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rasm-maxnz55wj4v61a_tn.webp" alt="Men shoes New leather surface Men's casual shoes all match trendy men's shoes fashion men sneaker" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-62%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-62%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men shoes New leather surface Men's casual shoes all match
                                    trendy men's shoes fashion men sneaker</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">17.91</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">827 sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/NOVENCCI-Kasut-Sukan-Perempuan-Women's-Outdoor-Sneakers-Sport-Shoes-i.31213096.28459338784?extraParams=%7B%22display_model_id%22%3A226975558893%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=6b9a6089-bcf6-4b6b-be87-84233702bdbd&amp;xptdk=6b9a6089-bcf6-4b6b-be87-84233702bdbd">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rask-m27xy54dhi5b04_tn.webp" alt="NOVENCCI Kasut Sukan Perempuan Women's Outdoor Sneakers Sport Shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-64%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-64%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/f9e8bb78f6ee4593aaeb.png" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-0.5 mr-0.5 inline-block h-3.5">NOVENCCI Kasut Sukan Perempuan Women's Outdoor Sneakers
                                    Sport Shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">13.90</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Unisex-Casual-Sports-Shoes-Breathable-Lightweight-High-Top-Sneakers-i.1206023866.28016482667?extraParams=%7B%22display_model_id%22%3A233417334530%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=bede01a9-931f-4be8-b621-c0dd740799c7&amp;xptdk=bede01a9-931f-4be8-b621-c0dd740799c7">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-822zc-mi87pt5c4irrd3_tn.webp" alt="Unisex Casual Sports Shoes - Breathable, Lightweight, High-Top Sneakers" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-76%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-76%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/06ac2f74334798aeb1e0.png" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-0.5 mr-0.5 inline-block h-3.5">Unisex Casual Sports Shoes - Breathable, Lightweight,
                                    High-Top Sneakers</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden bg-amber-500 px-px text-xs leading-4 text-white">30% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">23.57</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">30k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men's-sneakers-casual-shoes-school-shoes-sports-shoes-canvas-shoes-AS04-trendy-fashion-i.322509502.27580873088?extraParams=%7B%22display_model_id%22%3A198351510919%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=a956d187-ab08-4f16-855f-cb5448eebb43&amp;xptdk=a956d187-ab08-4f16-855f-cb5448eebb43">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rash-m1zkvfkmgeai2b_tn.webp" alt="Men's sneakers, casual shoes, school shoes, sports shoes, canvas shoes AS04, trendy fashion" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-43%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-43%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men's sneakers, casual shoes, school shoes, sports shoes,
                                    canvas shoes AS04, trendy fashion</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">10.02</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/READY-STOCK%F0%9F%8E%81WEBEE-SP-787A-Men-Sport-Shoes-Modern-Casual-Shoes-For-Walking-Work-Outwear-Kasut-Sukan-Lelaki-SP-B672-i.7940214.22452402616?extraParams=%7B%22display_model_id%22%3A137981985717%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=1cec7b24-b697-4ade-897b-ce604e3a2860&amp;xptdk=1cec7b24-b697-4ade-897b-ce604e3a2860">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rdy3-mdg06hww407tf3_tn.webp" alt="READY STOCK🎁WEBEE SP 787A Men Sport Shoes Modern Casual Shoes For Walking Work Outwear Kasut Sukan Lelaki SP B672" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-48%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-48%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">READY STOCK🎁WEBEE SP 787A Men Sport Shoes Modern Casual
                                    Shoes For Walking Work Outwear Kasut Sukan Lelaki SP B672</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden bg-amber-500 px-px text-xs leading-4 text-white">RM4 off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">20.90</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">3k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/KANSA's-Latest-Korean-Style-Women's-Sneakers-i.1202208844.44802064951?extraParams=%7B%22display_model_id%22%3A420201075815%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=0f5c723f-a9af-4f77-811a-62a88ea53250&amp;xptdk=0f5c723f-a9af-4f77-811a-62a88ea53250">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-822zz-micef4gqiv44d4_tn.webp" alt="KANSA's Latest Korean Style Women's Sneakers" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-70%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-70%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">KANSA's Latest Korean Style Women's Sneakers</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                    <div class="border-solid after:border-solid before:border-solid disabled:cursor-default pointer-events-none flex items-center overflow-x-hidden overflow-y-hidden text-ellipsis rounded-[1px] border-[0.5px] border-yellow-500 bg-yellow-50 px-1 py-px"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/d7099d3fd1dfdaf705ab.svg" alt="vehicle compatible icon" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none mr-0.5">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default text-ellipsis overflow-x-hidden overflow-y-hidden whitespace-nowrap text-xs leading-3 text-black">4.5</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">16.86</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">416 sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/NOVENCCI-Kasut-Sukan-Perempuan-Women's-Outdoor-Sneakers-Sport-Shoes-i.31213096.14693194875?extraParams=%7B%22display_model_id%22%3A107483902021%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=fdde860d-e726-46a1-87c8-5ff953605422&amp;xptdk=fdde860d-e726-46a1-87c8-5ff953605422">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-821g2-mha1r057dlamf5_tn.webp" alt="NOVENCCI Kasut Sukan Perempuan Women's Outdoor Sneakers Sport Shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-33%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-33%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/f9e8bb78f6ee4593aaeb.png" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-0.5 mr-0.5 inline-block h-3.5">NOVENCCI Kasut Sukan Perempuan Women's Outdoor Sneakers
                                    Sport Shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">Sea Shipping</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">18.68</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Latest-men's-and-women's-jogging-shoes-running-shoes-run-3d-i.1315407833.29375787017?extraParams=%7B%22display_model_id%22%3A218204808282%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=a3736df7-f7c4-4e74-be3f-863a5c238216&amp;xptdk=a3736df7-f7c4-4e74-be3f-863a5c238216">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rasf-m63gnuy7jy7c7f_tn.webp" alt="Latest men's and women's jogging shoes running shoes run 3d" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-63%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-63%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Latest men's and women's jogging shoes running shoes run 3d
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">6.49</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men's-Shoes-Jogging-Men's-Shoes-Sports-Shoes-Men's-Sneakers-i.1478787944.29079584997?extraParams=%7B%22display_model_id%22%3A227514321946%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=4e079a59-160b-4025-8d9d-ff42560c3fbb&amp;xptdk=4e079a59-160b-4025-8d9d-ff42560c3fbb">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/cn-11134207-7ras8-m7bxqgb9t80y20_tn.webp" alt="Men's Shoes Jogging Men's Shoes Sports Shoes Men's Sneakers" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-50%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-50%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men's Shoes Jogging Men's Shoes Sports Shoes Men's Sneakers
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">19.90</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">158 sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/In-stock-ships-within-24-hours.-Men's-sneakers-casual-shoes-and-height-increasing-shoes.-i.1677796943.44126503923?extraParams=%7B%22display_model_id%22%3A385146777438%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=dc4bfdc7-6b79-42db-8f52-5db574dd447a&amp;xptdk=dc4bfdc7-6b79-42db-8f52-5db574dd447a">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-821ez-mh75wd7q4r2h25_tn.webp" alt="In stock, ships within 24 hours. Men's sneakers, casual shoes, and height-increasing shoes." class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-1%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-1%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">In stock, ships within 24 hours. Men's sneakers, casual
                                    shoes, and height-increasing shoes.</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">29.84</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">35 sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Latest-adult-men's-running-sneakers-G3.0-2025-i.409638845.40255578252?extraParams=%7B%22display_model_id%22%3A275470995226%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=160b96a4-02b6-4d4d-9e47-0b6803482f71&amp;xptdk=160b96a4-02b6-4d4d-9e47-0b6803482f71">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7rbk0-m707nsbrwzl6a0_tn.webp" alt="Latest adult men's running sneakers G3.0 2025" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-16%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-16%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Latest adult men's running sneakers G3.0 2025</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">14.73</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">757 sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Summer-New-Fashion-Brand-All-Matching-Breathable-Non-Slip-Student-Casual-Shoes-Youth-Platform-Height-Increasing-Sports-Men's-Shoes-i.1009796226.26261052049?extraParams=%7B%22display_model_id%22%3A246580114438%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=d93f572e-af2c-4cf8-80c9-edd489cd6bc0&amp;xptdk=d93f572e-af2c-4cf8-80c9-edd489cd6bc0">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rdy8-mcs1b3dt4ymsab_tn.webp" alt="Summer New Fashion Brand All-Matching Breathable Non-Slip Student Casual Shoes Youth Platform Height Increasing Sports Men's Shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-54%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-54%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/f9e8bb78f6ee4593aaeb.png" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-0.5 mr-0.5 inline-block h-3.5">Summer New Fashion Brand All-Matching Breathable Non-Slip
                                    Student Casual Shoes Youth Platform Height Increasing Sports Men's Shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden bg-amber-500 px-px text-xs leading-4 text-white">10% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">32.10</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">5k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men's-Casual-Sports-Sneakers-Black-School-Shoes-i.868546644.29632110008?extraParams=%7B%22display_model_id%22%3A168836247149%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=3da44579-3091-4237-a247-989562df5e49&amp;xptdk=3da44579-3091-4237-a247-989562df5e49">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7r98z-lykk2aj0knvia3_tn.webp" alt="Men's Casual Sports Sneakers / Black School Shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-42%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-42%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men's Casual Sports Sneakers / Black School Shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                    <div class="border-solid after:border-solid before:border-solid disabled:cursor-default pointer-events-none flex items-center overflow-x-hidden overflow-y-hidden text-ellipsis rounded-[1px] border-[0.5px] border-yellow-500 bg-yellow-50 px-1 py-px"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/d7099d3fd1dfdaf705ab.svg" alt="vehicle compatible icon" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none mr-0.5">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default text-ellipsis overflow-x-hidden overflow-y-hidden whitespace-nowrap text-xs leading-3 text-black">4.9</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">17.05</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/-High-Quality-Neutral-Carbon-Plate-Sports-shoes-Marathon-Running-Shoes-Black-Student-Rubber-Shoes-Christmas-Gifts-i.1669849739.47951010759?extraParams=%7B%22display_model_id%22%3A445089504969%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=46351a47-b2e9-4e2b-bc6b-13655f57e0a0&amp;xptdk=46351a47-b2e9-4e2b-bc6b-13655f57e0a0">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/cn-11134207-820l4-mgs64djeh5hm1a_tn.webp" alt="[High Quality] Neutral Carbon Plate Sports shoes Marathon Running Shoes Black Student Rubber Shoes Christmas Gifts" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-66%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-66%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/f9e8bb78f6ee4593aaeb.png" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-0.5 mr-0.5 inline-block h-3.5">[High Quality] Neutral Carbon Plate Sports shoes Marathon
                                    Running Shoes Black Student Rubber Shoes Christmas Gifts</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-[60%] shrink-0 items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden bg-amber-500 px-px text-xs leading-4 text-white">RM2 off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">47.00</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">214 sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/%F0%9F%92%A5Kasut-Lelaki-Sport-%F0%9F%92%A5Men-Casual-Sneakers-Sport-Shoes-Fashion-Black-Hitam-i.193312357.15120173291?extraParams=%7B%22display_model_id%22%3A124078739608%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=acdb5e8d-3633-46bd-bbfb-7225847121d2&amp;xptdk=acdb5e8d-3633-46bd-bbfb-7225847121d2">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/415fa1111e3f3db6cee071f817b0a239_tn.webp" alt="💥Kasut Lelaki Sport 💥Men Casual Sneakers Sport Shoes Fashion Black Hitam" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-84%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-84%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/f9e8bb78f6ee4593aaeb.png" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-0.5 mr-0.5 inline-block h-3.5">💥Kasut Lelaki Sport 💥Men Casual Sneakers Sport Shoes
                                    Fashion Black Hitam</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">16.38</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men's-Sneakers-for-Running-Hangout-School-i.316229593.42108580048?extraParams=%7B%22display_model_id%22%3A216161600129%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=519efc01-7a83-4de7-aa1d-454b420550d6&amp;xptdk=519efc01-7a83-4de7-aa1d-454b420550d6">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rdxp-mdsd2xu9lveyfa_tn.webp" alt="Men's Sneakers for Running, Hangout &amp; School" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-58%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-58%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men's Sneakers for Running, Hangout &amp; School</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                    <div class="border-solid after:border-solid before:border-solid disabled:cursor-default pointer-events-none flex items-center overflow-x-hidden overflow-y-hidden text-ellipsis rounded-[1px] border-[0.5px] border-yellow-500 bg-yellow-50 px-1 py-px"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/d7099d3fd1dfdaf705ab.svg" alt="vehicle compatible icon" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none mr-0.5">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default text-ellipsis overflow-x-hidden overflow-y-hidden whitespace-nowrap text-xs leading-3 text-black">4.5</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">19.25</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">5k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men's-and-women's-jogging-shoes-N-model-i.682306221.25363955503?extraParams=%7B%22display_model_id%22%3A166341013039%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=e3c463ef-f34f-4c32-9c9e-9cd234984894&amp;xptdk=e3c463ef-f34f-4c32-9c9e-9cd234984894">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-81zux-mih9unvfdrlvf0_tn.webp" alt="Men's and women's jogging shoes, N model" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-43%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-43%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men's and women's jogging shoes, N model</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">15.73</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">724 sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/SHEGOO-Flying-Burn-3-Professional-Marathon-Kasut-Sukan-Running-Perempuan-Sport-Shoes-Women-Men-Mesh-Breathable-Soft-Soled-Lightweight-Non-Slip-Jogging-Shoes-i.1639221919.43774941755?extraParams=%7B%22display_model_id%22%3A244120070676%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=22a861e0-2494-494a-a7f7-f661739a29f5&amp;xptdk=22a861e0-2494-494a-a7f7-f661739a29f5">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-821d4-mgirv6bb2olpb4_tn.webp" alt="SHEGOO Flying Burn 3 Professional Marathon Kasut Sukan Running Perempuan Sport Shoes Women Men Mesh Breathable Soft Soled Lightweight Non Slip Jogging Shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-59%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-59%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/f9e8bb78f6ee4593aaeb.png" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-0.5 mr-0.5 inline-block h-3.5">SHEGOO Flying Burn 3 Professional Marathon Kasut Sukan
                                    Running Perempuan Sport Shoes Women Men Mesh Breathable Soft Soled Lightweight Non
                                    Slip Jogging Shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden bg-amber-500 px-px text-xs leading-4 text-white">RM25.1 off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">90.00</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Women-Sneakers-Korean-Version-Breathable-Running-Shoes-i.532869301.41401261172?extraParams=%7B%22display_model_id%22%3A300101022456%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=e35ee8f5-7c2c-42ef-b57e-2ae92b0fad63&amp;xptdk=e35ee8f5-7c2c-42ef-b57e-2ae92b0fad63">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-821e1-mh9549m5lclo20_tn.webp" alt="Women Sneakers Korean Version Breathable Running Shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-59%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-59%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/1dfb8b91bdc55395e9fe.png" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-0.5 mr-0.5 inline-block h-3.5">Women Sneakers Korean Version Breathable Running Shoes
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden bg-amber-500 px-px text-xs leading-4 text-white">30% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                        </path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">19.90</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Flying-Burn-3-Professional-Marathon-Kasut-Sukan-Running-Perempuan-Sport-Shoes-Women-Men-Mesh-Breathable-Soft-Soled-Lightweight-Non-Slip-Jogging-Shoes-i.476872929.50951738675?extraParams=%7B%22display_model_id%22%3A430160574805%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=0ed76025-7d6f-46f5-876f-945af75196f6&amp;xptdk=0ed76025-7d6f-46f5-876f-945af75196f6">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-81zuw-misrlrb5urk224_tn.webp" alt="Flying Burn 3 Professional Marathon Kasut Sukan Running Perempuan Sport Shoes Women Men Mesh Breathable Soft Soled Lightweight Non Slip Jogging Shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-50%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-50%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Flying Burn 3 Professional Marathon Kasut Sukan Running
                                    Perempuan Sport Shoes Women Men Mesh Breathable Soft Soled Lightweight Non Slip
                                    Jogging Shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                    <div class="border-solid after:border-solid before:border-solid disabled:cursor-default pointer-events-none flex items-center overflow-x-hidden overflow-y-hidden text-ellipsis rounded-[1px] border-[0.5px] border-yellow-500 bg-yellow-50 px-1 py-px"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/d7099d3fd1dfdaf705ab.svg" alt="vehicle compatible icon" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none mr-0.5">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default text-ellipsis overflow-x-hidden overflow-y-hidden whitespace-nowrap text-xs leading-3 text-black">4.9</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">48.95</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/NEWEST-AND-BEST-TREND-SHOES-01-i.1315407833.28926088607?extraParams=%7B%22display_model_id%22%3A188211688408%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=be231955-1551-4f9a-b5d7-4a171f61caff&amp;xptdk=be231955-1551-4f9a-b5d7-4a171f61caff">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ras9-m5tudrms0iqw6e_tn.webp" alt="NEWEST AND BEST TREND SHOES 01" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-61%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-61%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">NEWEST AND BEST TREND SHOES 01</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">7.15</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">786 sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Black-Boys'-School-Shoes-for-Elementary-Middle-and-High-School-Latest-Men's-Sneakers-Casual-Shoes-i.868546644.29432110119?extraParams=%7B%22display_model_id%22%3A234049726306%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=c1382fb5-0de8-4198-9bfa-5210b1f969e5&amp;xptdk=c1382fb5-0de8-4198-9bfa-5210b1f969e5">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-824gf-mec6j93zcao56a_tn.webp" alt="Black Boys' School Shoes for Elementary, Middle, and High School / Latest Men's Sneakers Casual Shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-46%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-46%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Black Boys' School Shoes for Elementary, Middle, and High
                                    School / Latest Men's Sneakers Casual Shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">17.04</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/New-Man-Sneakers-Casual-Shoes-Lightweight-Breathable-Men-Shoes-Flat-Lace-Up-White-Business-Travel-Men-Size-39-44-i.549917810.24315306094?extraParams=%7B%22display_model_id%22%3A168078115510%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=86d77dc0-3457-4b4f-9bc1-07009ce90363&amp;xptdk=86d77dc0-3457-4b4f-9bc1-07009ce90363">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rdvp-mdluogbqyk7of5_tn.webp" alt="New Man Sneakers Casual Shoes Lightweight Breathable Men Shoes Flat Lace Up White Business Travel Men Size 39-44" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-75%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-75%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">New Man Sneakers Casual Shoes Lightweight Breathable Men
                                    Shoes Flat Lace Up White Business Travel Men Size 39-44</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">18.70</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">6k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men's-and-Women's-Casual-Sports-Sneakers-trendy-Casual-Sneakers-for-Men-and-Women-School-Shoes-i.1268361671.52252172771?extraParams=%7B%22display_model_id%22%3A355210890752%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=11c2bb7c-1cf0-4c94-b8ff-ee2280d8eb4b&amp;xptdk=11c2bb7c-1cf0-4c94-b8ff-ee2280d8eb4b">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-822yq-mi32aldm016scf_tn.webp" alt="Men's and Women's Casual Sports Sneakers / trendy Casual Sneakers for Men and Women School Shoes" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-57%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-57%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mjnxbk79faip35" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men's and Women's Casual Sports Sneakers / trendy Casual
                                    Sneakers for Men and Women School Shoes</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                    <div class="border-solid after:border-solid before:border-solid disabled:cursor-default pointer-events-none flex items-center overflow-x-hidden overflow-y-hidden text-ellipsis rounded-[1px] border-[0.5px] border-yellow-500 bg-yellow-50 px-1 py-px"><img src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/d7099d3fd1dfdaf705ab.svg" alt="vehicle compatible icon" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none mr-0.5">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default text-ellipsis overflow-x-hidden overflow-y-hidden whitespace-nowrap text-xs leading-3 text-black">4.6</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">16.49</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                        <div class="w-2/12 p-1.5">
                          <div class="[tab-size:4] contents"><a class="cursor-pointer border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Halilintar-x2-men's-and-women's-sneakers-i.1315407833.28513935946?extraParams=%7B%22display_model_id%22%3A223318508342%2C%22model_selection_logic%22%3A3%7D&amp;sp_atk=1b1ef350-c997-4485-b80e-715218f7c39e&amp;xptdk=1b1ef350-c997-4485-b80e-715218f7c39e">
                              <div class="border-solid after:border-solid before:border-solid disabled:cursor-default relative flex h-full cursor-pointer flex-col border border-black/9 bg-white duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:shadow active:shadow">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ras8-m1c6g3x1mjtb81_tn.webp" alt="Halilintar x2 men's and women's sneakers" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                    <span aria-label="-59%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-59%
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l4-mjnwb869sfszbc" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-1 [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Halilintar x2 men's and women's sneakers</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs leading-3" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-[60%] shrink-0 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                      <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">6.05</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">555 sold</div>
                                  </div>
                                </div>
                              </div>
                            </a></div>
                        </div>
                      </div>
                      <div class="items-center flex"><a class="no-underline w-96 mt-2.5 mx-auto text-ellipsis [-webkit-line-clamp:1] capitalize cursor-pointer flex-col justify-center items-center text-sm rounded-sm inline-flex min-w-16 max-w-56 h-10 px-5 outline-0 bg-white relative shadow-sm border border-solid border-black/9 text-neutral-600 hover:bg-black/2 active:shadow-inner active:bg-black/2 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87" href="/you_may_also_like/806123574/28328592519/100012?pageNumber=2">See
                          More</a></div>
                    </div>
                  </div>
                  <div>
                    <div class="contents"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-px h-px fixed"></div>
    <div></div>
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
@layer component {
  @keyframes HjzSc9 {
    0% {
      background-position:
        50%,
        100% 0;
    }
    to {
      background-position:
        50%,
        -100% 0;
    }
  }
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