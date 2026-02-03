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

This html and css is extracted from `https://shopee.com.my/` via the selector `div.home-page`. Don't call the component the name of the website, choose a name that is more generic.
The original background color for this html is `rgb(245, 245, 245)` (the color of the plane behind the html). When integrating the component into the project, make sure the background color of the location, where the new component is placed, matches the theme of the original background color. It doesn't need to be exactly the same, but the theme should match (light, dark, etc.).

**Skip any css if:**
- It is common and already included through Tailwind's Preflight styles (must be generic and not custom).
- It is already defined by the projects global css.

**Important:**
If the css contains a layer statement (e.g. `@layer base, component;`), you must not skip it and you must insert this statement at the top most position of the global css file, even above any Tailwind at-rules like `@import "tailwindcss"`, `@tailwind base;`, `@tailwind components;` or `@tailwind utilities;`. Furthermore, you must preserve any css layer blocks (e.g. `@layer base { ... }`) with their order, when including styles. Integrate the layer blocks somewhere in the global css file, most likely at the end of the file. Any deviation from this, and the styles might break.

```html
<div class="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 flex-col flex bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-micre1954zyf4e')] bg-top bg-size-[100%] bg-no-repeat min-w-[1200px] mb-16 mx-auto" id="component">
  <div class="mt-8">
    <div>
      
  </div>
  <div role="main" class="w-[1200px] mx-auto">
    <div class="min-h-[50rem]">
      <div class="bg-white min-h-72 mt-5">
        <div class="group">
          <div class="items-center flex before:bg-red-500 before:w-2.5 before:h-6 before:mr-1.5 bg-white [border-bottom-style:solid] h-16 px-5 border-b border-b-black/5 before:content-none">
            <div class="uppercase text-ellipsis whitespace-nowrap flex-1 overflow-x-hidden overflow-y-hidden mr-5 text-base font-medium text-black/54 group-lang:leading-6">Categories</div>
          </div>
          <div>
            <div class="w-full h-full relative">
              <div class="touch-pan-y h-full overflow-x-hidden overflow-y-hidden">
                <ul class="flex relative flex-col flex-wrap content-start h-72 w-[120%]">
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Mobile-Accessories-cat.11000979">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/7ea3e07f2e6f57272c6641e4ce3f1632@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/7ea3e07f2e6f57272c6641e4ce3f1632@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/7ea3e07f2e6f57272c6641e4ce3f1632@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/7ea3e07f2e6f57272c6641e4ce3f1632@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/7ea3e07f2e6f57272c6641e4ce3f1632">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Mobile &amp; Accessories</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Women-Clothes-cat.11000538">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/537b6270462a686b4e733a0813c3e4ad@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/537b6270462a686b4e733a0813c3e4ad@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/537b6270462a686b4e733a0813c3e4ad@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/537b6270462a686b4e733a0813c3e4ad@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/537b6270462a686b4e733a0813c3e4ad">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Women Clothes</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Watches-cat.11001724">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/30f3b8033f0eeafa09dfa266016e62a5@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/30f3b8033f0eeafa09dfa266016e62a5@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/30f3b8033f0eeafa09dfa266016e62a5@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/30f3b8033f0eeafa09dfa266016e62a5@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/30f3b8033f0eeafa09dfa266016e62a5">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Watches</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Men-Clothes-cat.11000587">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/59c2de7794065c2418dcf32dc3adc765@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/59c2de7794065c2418dcf32dc3adc765@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/59c2de7794065c2418dcf32dc3adc765@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/59c2de7794065c2418dcf32dc3adc765@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/59c2de7794065c2418dcf32dc3adc765">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Men Clothes</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Health-Beauty-cat.11000168">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/d9e864c5bcfa65c518457265193db103@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/d9e864c5bcfa65c518457265193db103@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/d9e864c5bcfa65c518457265193db103@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/d9e864c5bcfa65c518457265193db103@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/d9e864c5bcfa65c518457265193db103">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Health &amp; Beauty</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Home-Living-cat.11001155">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/3f4c5c2134b758f4e9de6e7de839a843@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/3f4c5c2134b758f4e9de6e7de839a843@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/3f4c5c2134b758f4e9de6e7de839a843@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/3f4c5c2134b758f4e9de6e7de839a843@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/3f4c5c2134b758f4e9de6e7de839a843">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Home &amp; Living</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Baby-Toys-cat.11000345">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/b453fdb439f647028a92bc138c2a588e@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/b453fdb439f647028a92bc138c2a588e@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/b453fdb439f647028a92bc138c2a588e@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/b453fdb439f647028a92bc138c2a588e@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/b453fdb439f647028a92bc138c2a588e">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Baby &amp; Toys</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Home-Appliances-cat.11000824">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/ab588c674c86512429124f9bf0d0112a@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/ab588c674c86512429124f9bf0d0112a@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/ab588c674c86512429124f9bf0d0112a@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/ab588c674c86512429124f9bf0d0112a@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/ab588c674c86512429124f9bf0d0112a">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Home Appliances</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Groceries-Pets-cat.11000003">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/52e34825491214323c486d96d9649a2c@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/52e34825491214323c486d96d9649a2c@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/52e34825491214323c486d96d9649a2c@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/52e34825491214323c486d96d9649a2c@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/52e34825491214323c486d96d9649a2c">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Groceries &amp; Pets</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Women-Shoes-cat.11000764">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/656b20a51610605ed163d9a37349d50f@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/656b20a51610605ed163d9a37349d50f@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/656b20a51610605ed163d9a37349d50f@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/656b20a51610605ed163d9a37349d50f@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/656b20a51610605ed163d9a37349d50f">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Women Shoes</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Automotive-cat.11001440">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/081a08b39f2468c85263194ab3287fee@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/081a08b39f2468c85263194ab3287fee@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/081a08b39f2468c85263194ab3287fee@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/081a08b39f2468c85263194ab3287fee@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/081a08b39f2468c85263194ab3287fee">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Automotive</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Fashion-Accessories-cat.11000690">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/e08026a4ee4eb7087acb4bf5127b1018@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/e08026a4ee4eb7087acb4bf5127b1018@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/e08026a4ee4eb7087acb4bf5127b1018@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/e08026a4ee4eb7087acb4bf5127b1018@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/e08026a4ee4eb7087acb4bf5127b1018">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Fashion Accessories</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Women's-Bags-cat.11000710">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/a3637aaab755ca9bba43f63a9592638c@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/a3637aaab755ca9bba43f63a9592638c@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/a3637aaab755ca9bba43f63a9592638c@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/a3637aaab755ca9bba43f63a9592638c@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/a3637aaab755ca9bba43f63a9592638c">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Women's Bags</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Computer-Accessories-cat.11000910">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/9adf5814aab1a1c241ca9310a4e48186@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/9adf5814aab1a1c241ca9310a4e48186@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/9adf5814aab1a1c241ca9310a4e48186@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/9adf5814aab1a1c241ca9310a4e48186@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/9adf5814aab1a1c241ca9310a4e48186">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Computer &amp; Accessories</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Men's-Bags-Wallets-cat.11000745">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/8fe4e09f99f52db2fef12dabddf9aee0@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/8fe4e09f99f52db2fef12dabddf9aee0@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/8fe4e09f99f52db2fef12dabddf9aee0@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/8fe4e09f99f52db2fef12dabddf9aee0@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/8fe4e09f99f52db2fef12dabddf9aee0">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Men's Bags &amp; Wallets</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Sports-Outdoor-cat.11001273">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Sports &amp; Outdoor</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Muslim-Fashion-cat.11000616">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/bced2f5f9d62806e087e917540b0614f@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/bced2f5f9d62806e087e917540b0614f@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/bced2f5f9d62806e087e917540b0614f@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/bced2f5f9d62806e087e917540b0614f@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/bced2f5f9d62806e087e917540b0614f">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Muslim Fashion</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Men-Shoes-cat.11000781">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/fa97e6d0a367546a699768c947cdc48b@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/fa97e6d0a367546a699768c947cdc48b@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/fa97e6d0a367546a699768c947cdc48b@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/fa97e6d0a367546a699768c947cdc48b@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/fa97e6d0a367546a699768c947cdc48b">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Men Shoes</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Games-Books-Hobbies-cat.11001378">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/ff8fda5211492988ec6096aaa7e8b121@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/ff8fda5211492988ec6096aaa7e8b121@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/ff8fda5211492988ec6096aaa7e8b121@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/ff8fda5211492988ec6096aaa7e8b121@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/ff8fda5211492988ec6096aaa7e8b121">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Games, Books &amp; Hobbies</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Gaming-Consoles-cat.11001085">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/d29f9032307651e49696a3c8b5b300fe@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/d29f9032307651e49696a3c8b5b300fe@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/d29f9032307651e49696a3c8b5b300fe@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/d29f9032307651e49696a3c8b5b300fe@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/d29f9032307651e49696a3c8b5b300fe">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Gaming &amp; Consoles</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Travel-Luggage-cat.11000799">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/6382db1a8afafa723c2f68389e0045a6@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/6382db1a8afafa723c2f68389e0045a6@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/6382db1a8afafa723c2f68389e0045a6@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/6382db1a8afafa723c2f68389e0045a6@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/6382db1a8afafa723c2f68389e0045a6">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Travel &amp; Luggage</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Cameras-Drones-cat.11001100">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/999cb908a9efc8a9feba08d2b87a34fe@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/999cb908a9efc8a9feba08d2b87a34fe@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/999cb908a9efc8a9feba08d2b87a34fe@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/999cb908a9efc8a9feba08d2b87a34fe@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/999cb908a9efc8a9feba08d2b87a34fe">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Cameras &amp; Drones</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Others-cat.11032871">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/368c8e7fdd622206df53e944b5b2d287@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/368c8e7fdd622206df53e944b5b2d287@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/368c8e7fdd622206df53e944b5b2d287@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/368c8e7fdd622206df53e944b5b2d287@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/368c8e7fdd622206df53e944b5b2d287">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Others</div>
                        </div>
                      </div>
                    </a></li>
                  <li class="touch-pan-y [overflow-x:unset] h-36 w-32"><a class="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[&quot;&quot;] before:block before:pt-[126%] hover:z-[1] hover:shadow hover:border-l hover:border-t hover:border-black/12" href="/Tickets-Vouchers-cat.11001536">
                      <div class="flex-col justify-center items-center flex absolute inset-0">
                        <div class="w-8/12 h-4/6 mt-[10%]">
                          <picture class="contents">
                            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/84e08db3af6b3032797168d87f6787b8@resize_w320_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/84e08db3af6b3032797168d87f6787b8@resize_w640_nl.webp 2x" type="image/webp" class="contents"><img width="320" loading="lazy" class="inline align-bottom object-contain max-h-full" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/84e08db3af6b3032797168d87f6787b8@resize_w320_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/84e08db3af6b3032797168d87f6787b8@resize_w640_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/84e08db3af6b3032797168d87f6787b8">
                          </picture>
                        </div>
                        <div class="text-center w-11/12 h-12">
                          <div class="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden mb-2.5 text-black/80 h-11 leading-6">Tickets &amp; Vouchers</div>
                        </div>
                      </div>
                    </a></li>
                </ul>
              </div>
              <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 left-0 bg-white w-6 h-6 leading-6 -mt-3 invisible -translate-x-2/4" role="button" tabindex="0"><svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                  <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9">
                  </polygon>
                </svg></div>
              <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 right-0 bg-white w-6 h-6 leading-6 -mt-3 translate-x-2/4" role="button" tabindex="0"><svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                  <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
                </svg></div>
            </div>
          </div>
        </div>
      </div>
      <div class="contents">
        <div class="pt-5">
          <div class="bg-white justify-between items-center h-8 flex px-5 py-4">
            <div class="flex">
              <div class="uppercase h-8 leading-8 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/c24d146bf7ed59b291bf.png')] bg-[50%_4px] bg-contain bg-no-repeat w-40 mr-3" aria-label="title Flash Deals" tabindex="0"></div>
              <div class="[backface-visibility:hidden] text-black cursor-default items-center flex scale-[0.84]" aria-label="ending in 6 hours 35 minutes" tabindex="0">
                <div class="box-content text-center bg-current justify-around min-w-5 h-4 text-xl leading-5 flex overflow-x-hidden overflow-y-hidden mb-1 px-[3px] py-px rounded-sm">
                  <div class="w-2.5 h-48 inline-block overflow-x-hidden overflow-y-hidden [animation-name:hour-ten] [animation-duration:360000s] [animation-iteration-count:infinite] [animation-delay:-372273s]">
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 41.701 69.001" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43.503 67.701" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M5.501 67.701h14.4l16.4-26.1c4.512-7.165 6.676-12.531 7.115-17.896a25.743 25.743 0 0 0 .085-2.104c0-11.759-8.183-20.64-19.519-21.527a24.115 24.115 0 0 0-1.881-.073c-12.5 0-22.1 9.5-22.1 22 0 11.3 8.3 19.9 19.3 19.9.851 0 1.523-.089 2.777-.352a55.135 55.135 0 0 0 .223-.048l-16.8 26.2zm25.797-46.447a9.47 9.47 0 0 0-9.297-9.353 10.339 10.339 0 0 0-.503.013 9.524 9.524 0 0 0-9.197 9.487c0 5.4 4.1 9.6 9.4 9.6 2.785 0 5.25-1.09 6.985-2.886a9.421 9.421 0 0 0 2.615-6.614 10.005 10.005 0 0 0-.003-.247z" vector-effect="non-scaling-stroke"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43.204 69.004" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M33.603 32.802a31.686 31.686 0 0 0 .79-.423c2.107-1.169 3.051-2.091 4.378-4.03a32.68 32.68 0 0 0 .032-.047c1.9-2.9 2.8-6.1 2.8-9.7 0-10.8-8.2-18.6-19.6-18.6-11.335 0-19.479 7.414-19.976 17.97a21.882 21.882 0 0 0-.024 1.03 17.926 17.926 0 0 0 1.016 6.155 13.457 13.457 0 0 0 6.884 7.645C4.606 35.049 1.434 38.971.389 44.62a24.628 24.628 0 0 0-.386 4.482c0 11.8 8.7 19.9 21.4 19.9a24.237 24.237 0 0 0 11.074-2.514c6.306-3.218 10.335-9.304 10.699-16.947a23.948 23.948 0 0 0 .027-1.139 20.81 20.81 0 0 0-.846-6.134c-1.294-4.206-4.073-7.299-8.337-9.278a20.642 20.642 0 0 0-.417-.188zm-11.9 6.1c4.9 0 9.1 4.2 9.1 9.3 0 5.1-4.1 9.2-9.2 9.2a9.644 9.644 0 0 1-5.269-1.484c-2.255-1.453-3.734-3.872-3.991-6.794a10.51 10.51 0 0 1-.04-.922 9.237 9.237 0 0 1 2.404-6.318c1.703-1.853 4.18-2.982 6.996-2.982zm.2-27.9c4.5 0 8.4 3.8 8.4 8.2 0 4.4-4 8.2-8.5 8.2-4.6 0-8.2-3.7-8.2-8.4a7.892 7.892 0 0 1 1.919-5.273c1.232-1.404 2.986-2.353 5.055-2.638a9.726 9.726 0 0 1 1.326-.089z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 39.5 66.3" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M21.6 11.6L0 66.3h13.3L39.5 0H.1v11.6h21.5z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43.402 67.6" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M38.501 0h-14.6l-16.6 26.2a87.112 87.112 0 0 0-2.841 4.806C1.956 35.606.636 39.352.184 43.098A25.786 25.786 0 0 0 .001 46.2c0 11.983 8.875 21.071 20.561 21.391a23.329 23.329 0 0 0 .639.009c12.3 0 22.2-9.9 22.2-22.2a20.356 20.356 0 0 0-5.04-13.557 17.916 17.916 0 0 0-13.46-6.143c-1.043 0-1.817.09-3.26.526a26.98 26.98 0 0 0-.24.074L38.501 0zm-7.326 44.352a9.309 9.309 0 0 0-9.274-8.052 10.442 10.442 0 0 0-.638.019A9.653 9.653 0 0 0 12.101 46a10.844 10.844 0 0 0 .031.817c.196 2.596 1.324 4.831 3.063 6.396a9.473 9.473 0 0 0 6.406 2.387c5.4 0 9.7-4.3 9.7-9.6a10.703 10.703 0 0 0-.126-1.648z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.8 67.6" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M15.2 11.6h22.3V0h-34v39.5h8.4a13.796 13.796 0 0 1 2.081-2.256A9.364 9.364 0 0 1 20.4 35c5.6 0 9.9 4.5 9.9 10.3 0 5.8-4.3 10.2-9.8 10.2a9.594 9.594 0 0 1-3.975-.775c-2.283-1.024-3.971-3.081-5.231-6.281a22.17 22.17 0 0 1-.094-.244L0 52.4a62.066 62.066 0 0 0 .565 1.425c1.46 3.548 2.682 5.38 4.659 7.484a37.124 37.124 0 0 0 .276.291 21.422 21.422 0 0 0 13.729 5.945 25.179 25.179 0 0 0 1.671.055 21.976 21.976 0 0 0 13.258-4.2c4.31-3.202 7.279-8.057 8.275-13.942A26.715 26.715 0 0 0 42.8 45c0-11.9-8.3-20.9-19.4-20.9a20.186 20.186 0 0 0-2.2.112c-1.856.203-3.576.691-5.716 1.57a41.606 41.606 0 0 0-.284.118V11.6z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.9 66.9" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M24.5 53.2v13.7h12.3V53.2h6.1v-11h-6.1V0H23.4L0 42.5v10.7h24.5zm0-11h-14l14-24.8v24.8z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43 67" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M22.5 11L7.3 31.3l7.2 6.1c1.9-1.2 3.8-1.7 6.1-1.7a10.732 10.732 0 0 1 5.741 1.573c2.816 1.762 4.559 4.87 4.559 8.627a10.175 10.175 0 0 1-2.626 6.924A10.165 10.165 0 0 1 20.7 56.1c-4.086 0-7.199-2.156-8.584-5.887A12.3 12.3 0 0 1 11.5 47.8L0 48.2c.595 4.955 1.386 7.553 3.347 10.52a24.795 24.795 0 0 0 .053.08 19.859 19.859 0 0 0 13.535 8.466A24.541 24.541 0 0 0 21 67.6c11.745 0 20.628-8.083 22.012-19.459A25.999 25.999 0 0 0 43.2 45a22.484 22.484 0 0 0-2.049-9.694c-2.825-5.949-8.41-9.794-15.751-10.406L43.9 0H3.3v11h19.2z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.3 67.703" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M21.6 56.403l12.5-18.3c5.081-7.491 7.492-12.684 8.063-17.877a22.986 22.986 0 0 0 .137-2.523A17.062 17.062 0 0 0 30.133 1.242 24.304 24.304 0 0 0 22.3.003a23.551 23.551 0 0 0-9.787 1.948C5.323 5.212 1.199 12.42 1.199 22.443a36.776 36.776 0 0 0 .001.26H13a70.067 70.067 0 0 1 .052-1.368c.118-2.398.351-3.497.948-5.032a7.181 7.181 0 0 1 5.187-4.431 9.74 9.74 0 0 1 2.313-.269c4.599 0 7.899 3.099 7.9 7.398a5.467 5.467 0 0 1 0 .002 11.162 11.162 0 0 1-.092 1.496c-.29 2.167-1.352 4.335-4.331 9.011a261.731 261.731 0 0 1-1.677 2.593L0 67.703h40.5v-11.3H21.6z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 25 68.1" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M12.1 18.4v49.7H25V0L0 13v11.9l12.1-6.5z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 41.701 69.001" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"></path>
                      </svg></div>
                  </div>
                  <div class="w-2.5 h-48 inline-block overflow-x-hidden overflow-y-hidden [animation-name:hour-digit] [animation-duration:36000s] [animation-iteration-count:infinite] [animation-delay:-15873s]">
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 41.701 69.001" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43.503 67.701" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M5.501 67.701h14.4l16.4-26.1c4.512-7.165 6.676-12.531 7.115-17.896a25.743 25.743 0 0 0 .085-2.104c0-11.759-8.183-20.64-19.519-21.527a24.115 24.115 0 0 0-1.881-.073c-12.5 0-22.1 9.5-22.1 22 0 11.3 8.3 19.9 19.3 19.9.851 0 1.523-.089 2.777-.352a55.135 55.135 0 0 0 .223-.048l-16.8 26.2zm25.797-46.447a9.47 9.47 0 0 0-9.297-9.353 10.339 10.339 0 0 0-.503.013 9.524 9.524 0 0 0-9.197 9.487c0 5.4 4.1 9.6 9.4 9.6 2.785 0 5.25-1.09 6.985-2.886a9.421 9.421 0 0 0 2.615-6.614 10.005 10.005 0 0 0-.003-.247z" vector-effect="non-scaling-stroke"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43.204 69.004" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M33.603 32.802a31.686 31.686 0 0 0 .79-.423c2.107-1.169 3.051-2.091 4.378-4.03a32.68 32.68 0 0 0 .032-.047c1.9-2.9 2.8-6.1 2.8-9.7 0-10.8-8.2-18.6-19.6-18.6-11.335 0-19.479 7.414-19.976 17.97a21.882 21.882 0 0 0-.024 1.03 17.926 17.926 0 0 0 1.016 6.155 13.457 13.457 0 0 0 6.884 7.645C4.606 35.049 1.434 38.971.389 44.62a24.628 24.628 0 0 0-.386 4.482c0 11.8 8.7 19.9 21.4 19.9a24.237 24.237 0 0 0 11.074-2.514c6.306-3.218 10.335-9.304 10.699-16.947a23.948 23.948 0 0 0 .027-1.139 20.81 20.81 0 0 0-.846-6.134c-1.294-4.206-4.073-7.299-8.337-9.278a20.642 20.642 0 0 0-.417-.188zm-11.9 6.1c4.9 0 9.1 4.2 9.1 9.3 0 5.1-4.1 9.2-9.2 9.2a9.644 9.644 0 0 1-5.269-1.484c-2.255-1.453-3.734-3.872-3.991-6.794a10.51 10.51 0 0 1-.04-.922 9.237 9.237 0 0 1 2.404-6.318c1.703-1.853 4.18-2.982 6.996-2.982zm.2-27.9c4.5 0 8.4 3.8 8.4 8.2 0 4.4-4 8.2-8.5 8.2-4.6 0-8.2-3.7-8.2-8.4a7.892 7.892 0 0 1 1.919-5.273c1.232-1.404 2.986-2.353 5.055-2.638a9.726 9.726 0 0 1 1.326-.089z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 39.5 66.3" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M21.6 11.6L0 66.3h13.3L39.5 0H.1v11.6h21.5z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43.402 67.6" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M38.501 0h-14.6l-16.6 26.2a87.112 87.112 0 0 0-2.841 4.806C1.956 35.606.636 39.352.184 43.098A25.786 25.786 0 0 0 .001 46.2c0 11.983 8.875 21.071 20.561 21.391a23.329 23.329 0 0 0 .639.009c12.3 0 22.2-9.9 22.2-22.2a20.356 20.356 0 0 0-5.04-13.557 17.916 17.916 0 0 0-13.46-6.143c-1.043 0-1.817.09-3.26.526a26.98 26.98 0 0 0-.24.074L38.501 0zm-7.326 44.352a9.309 9.309 0 0 0-9.274-8.052 10.442 10.442 0 0 0-.638.019A9.653 9.653 0 0 0 12.101 46a10.844 10.844 0 0 0 .031.817c.196 2.596 1.324 4.831 3.063 6.396a9.473 9.473 0 0 0 6.406 2.387c5.4 0 9.7-4.3 9.7-9.6a10.703 10.703 0 0 0-.126-1.648z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.8 67.6" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M15.2 11.6h22.3V0h-34v39.5h8.4a13.796 13.796 0 0 1 2.081-2.256A9.364 9.364 0 0 1 20.4 35c5.6 0 9.9 4.5 9.9 10.3 0 5.8-4.3 10.2-9.8 10.2a9.594 9.594 0 0 1-3.975-.775c-2.283-1.024-3.971-3.081-5.231-6.281a22.17 22.17 0 0 1-.094-.244L0 52.4a62.066 62.066 0 0 0 .565 1.425c1.46 3.548 2.682 5.38 4.659 7.484a37.124 37.124 0 0 0 .276.291 21.422 21.422 0 0 0 13.729 5.945 25.179 25.179 0 0 0 1.671.055 21.976 21.976 0 0 0 13.258-4.2c4.31-3.202 7.279-8.057 8.275-13.942A26.715 26.715 0 0 0 42.8 45c0-11.9-8.3-20.9-19.4-20.9a20.186 20.186 0 0 0-2.2.112c-1.856.203-3.576.691-5.716 1.57a41.606 41.606 0 0 0-.284.118V11.6z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.9 66.9" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M24.5 53.2v13.7h12.3V53.2h6.1v-11h-6.1V0H23.4L0 42.5v10.7h24.5zm0-11h-14l14-24.8v24.8z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43 67" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M22.5 11L7.3 31.3l7.2 6.1c1.9-1.2 3.8-1.7 6.1-1.7a10.732 10.732 0 0 1 5.741 1.573c2.816 1.762 4.559 4.87 4.559 8.627a10.175 10.175 0 0 1-2.626 6.924A10.165 10.165 0 0 1 20.7 56.1c-4.086 0-7.199-2.156-8.584-5.887A12.3 12.3 0 0 1 11.5 47.8L0 48.2c.595 4.955 1.386 7.553 3.347 10.52a24.795 24.795 0 0 0 .053.08 19.859 19.859 0 0 0 13.535 8.466A24.541 24.541 0 0 0 21 67.6c11.745 0 20.628-8.083 22.012-19.459A25.999 25.999 0 0 0 43.2 45a22.484 22.484 0 0 0-2.049-9.694c-2.825-5.949-8.41-9.794-15.751-10.406L43.9 0H3.3v11h19.2z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.3 67.703" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M21.6 56.403l12.5-18.3c5.081-7.491 7.492-12.684 8.063-17.877a22.986 22.986 0 0 0 .137-2.523A17.062 17.062 0 0 0 30.133 1.242 24.304 24.304 0 0 0 22.3.003a23.551 23.551 0 0 0-9.787 1.948C5.323 5.212 1.199 12.42 1.199 22.443a36.776 36.776 0 0 0 .001.26H13a70.067 70.067 0 0 1 .052-1.368c.118-2.398.351-3.497.948-5.032a7.181 7.181 0 0 1 5.187-4.431 9.74 9.74 0 0 1 2.313-.269c4.599 0 7.899 3.099 7.9 7.398a5.467 5.467 0 0 1 0 .002 11.162 11.162 0 0 1-.092 1.496c-.29 2.167-1.352 4.335-4.331 9.011a261.731 261.731 0 0 1-1.677 2.593L0 67.703h40.5v-11.3H21.6z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 25 68.1" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M12.1 18.4v49.7H25V0L0 13v11.9l12.1-6.5z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 41.701 69.001" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"></path>
                      </svg></div>
                  </div>
                </div>
                <div class="text-center [background-position-y:3px] flex-col w-[3px] h-4 text-xl flex mx-0.5 opacity-0">
                  <div class="w-full h-3/6 relative">
                    <span class="bg-current w-[3px] h-[3px] absolute rounded-[100%] left-0 top-[10%] flex"></span>
                  </div>
                  <div class="w-full h-3/6 relative">
                    <span class="bg-current w-[3px] h-[3px] absolute rounded-[100%] left-0 top-[10%] flex"></span>
                  </div>
                </div>
                <div class="box-content text-center bg-current justify-around min-w-5 h-4 text-xl leading-5 flex overflow-x-hidden overflow-y-hidden mb-1 px-[3px] py-px rounded-sm">
                  <div class="w-2.5 h-48 inline-block overflow-x-hidden overflow-y-hidden [animation-name:minute-ten] [animation-duration:3600s] [animation-iteration-count:infinite] [animation-delay:-2073s]">
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 41.701 69.001" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.8 67.6" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M15.2 11.6h22.3V0h-34v39.5h8.4a13.796 13.796 0 0 1 2.081-2.256A9.364 9.364 0 0 1 20.4 35c5.6 0 9.9 4.5 9.9 10.3 0 5.8-4.3 10.2-9.8 10.2a9.594 9.594 0 0 1-3.975-.775c-2.283-1.024-3.971-3.081-5.231-6.281a22.17 22.17 0 0 1-.094-.244L0 52.4a62.066 62.066 0 0 0 .565 1.425c1.46 3.548 2.682 5.38 4.659 7.484a37.124 37.124 0 0 0 .276.291 21.422 21.422 0 0 0 13.729 5.945 25.179 25.179 0 0 0 1.671.055 21.976 21.976 0 0 0 13.258-4.2c4.31-3.202 7.279-8.057 8.275-13.942A26.715 26.715 0 0 0 42.8 45c0-11.9-8.3-20.9-19.4-20.9a20.186 20.186 0 0 0-2.2.112c-1.856.203-3.576.691-5.716 1.57a41.606 41.606 0 0 0-.284.118V11.6z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.9 66.9" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M24.5 53.2v13.7h12.3V53.2h6.1v-11h-6.1V0H23.4L0 42.5v10.7h24.5zm0-11h-14l14-24.8v24.8z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43 67" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M22.5 11L7.3 31.3l7.2 6.1c1.9-1.2 3.8-1.7 6.1-1.7a10.732 10.732 0 0 1 5.741 1.573c2.816 1.762 4.559 4.87 4.559 8.627a10.175 10.175 0 0 1-2.626 6.924A10.165 10.165 0 0 1 20.7 56.1c-4.086 0-7.199-2.156-8.584-5.887A12.3 12.3 0 0 1 11.5 47.8L0 48.2c.595 4.955 1.386 7.553 3.347 10.52a24.795 24.795 0 0 0 .053.08 19.859 19.859 0 0 0 13.535 8.466A24.541 24.541 0 0 0 21 67.6c11.745 0 20.628-8.083 22.012-19.459A25.999 25.999 0 0 0 43.2 45a22.484 22.484 0 0 0-2.049-9.694c-2.825-5.949-8.41-9.794-15.751-10.406L43.9 0H3.3v11h19.2z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.3 67.703" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M21.6 56.403l12.5-18.3c5.081-7.491 7.492-12.684 8.063-17.877a22.986 22.986 0 0 0 .137-2.523A17.062 17.062 0 0 0 30.133 1.242 24.304 24.304 0 0 0 22.3.003a23.551 23.551 0 0 0-9.787 1.948C5.323 5.212 1.199 12.42 1.199 22.443a36.776 36.776 0 0 0 .001.26H13a70.067 70.067 0 0 1 .052-1.368c.118-2.398.351-3.497.948-5.032a7.181 7.181 0 0 1 5.187-4.431 9.74 9.74 0 0 1 2.313-.269c4.599 0 7.899 3.099 7.9 7.398a5.467 5.467 0 0 1 0 .002 11.162 11.162 0 0 1-.092 1.496c-.29 2.167-1.352 4.335-4.331 9.011a261.731 261.731 0 0 1-1.677 2.593L0 67.703h40.5v-11.3H21.6z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 25 68.1" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M12.1 18.4v49.7H25V0L0 13v11.9l12.1-6.5z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 41.701 69.001" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"></path>
                      </svg></div>
                  </div>
                  <div class="w-2.5 h-48 inline-block overflow-x-hidden overflow-y-hidden [animation-name:minute-digit] [animation-duration:600s] [animation-iteration-count:infinite] [animation-delay:-333s]">
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 41.701 69.001" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43.503 67.701" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M5.501 67.701h14.4l16.4-26.1c4.512-7.165 6.676-12.531 7.115-17.896a25.743 25.743 0 0 0 .085-2.104c0-11.759-8.183-20.64-19.519-21.527a24.115 24.115 0 0 0-1.881-.073c-12.5 0-22.1 9.5-22.1 22 0 11.3 8.3 19.9 19.3 19.9.851 0 1.523-.089 2.777-.352a55.135 55.135 0 0 0 .223-.048l-16.8 26.2zm25.797-46.447a9.47 9.47 0 0 0-9.297-9.353 10.339 10.339 0 0 0-.503.013 9.524 9.524 0 0 0-9.197 9.487c0 5.4 4.1 9.6 9.4 9.6 2.785 0 5.25-1.09 6.985-2.886a9.421 9.421 0 0 0 2.615-6.614 10.005 10.005 0 0 0-.003-.247z" vector-effect="non-scaling-stroke"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43.204 69.004" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M33.603 32.802a31.686 31.686 0 0 0 .79-.423c2.107-1.169 3.051-2.091 4.378-4.03a32.68 32.68 0 0 0 .032-.047c1.9-2.9 2.8-6.1 2.8-9.7 0-10.8-8.2-18.6-19.6-18.6-11.335 0-19.479 7.414-19.976 17.97a21.882 21.882 0 0 0-.024 1.03 17.926 17.926 0 0 0 1.016 6.155 13.457 13.457 0 0 0 6.884 7.645C4.606 35.049 1.434 38.971.389 44.62a24.628 24.628 0 0 0-.386 4.482c0 11.8 8.7 19.9 21.4 19.9a24.237 24.237 0 0 0 11.074-2.514c6.306-3.218 10.335-9.304 10.699-16.947a23.948 23.948 0 0 0 .027-1.139 20.81 20.81 0 0 0-.846-6.134c-1.294-4.206-4.073-7.299-8.337-9.278a20.642 20.642 0 0 0-.417-.188zm-11.9 6.1c4.9 0 9.1 4.2 9.1 9.3 0 5.1-4.1 9.2-9.2 9.2a9.644 9.644 0 0 1-5.269-1.484c-2.255-1.453-3.734-3.872-3.991-6.794a10.51 10.51 0 0 1-.04-.922 9.237 9.237 0 0 1 2.404-6.318c1.703-1.853 4.18-2.982 6.996-2.982zm.2-27.9c4.5 0 8.4 3.8 8.4 8.2 0 4.4-4 8.2-8.5 8.2-4.6 0-8.2-3.7-8.2-8.4a7.892 7.892 0 0 1 1.919-5.273c1.232-1.404 2.986-2.353 5.055-2.638a9.726 9.726 0 0 1 1.326-.089z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 39.5 66.3" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M21.6 11.6L0 66.3h13.3L39.5 0H.1v11.6h21.5z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43.402 67.6" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M38.501 0h-14.6l-16.6 26.2a87.112 87.112 0 0 0-2.841 4.806C1.956 35.606.636 39.352.184 43.098A25.786 25.786 0 0 0 .001 46.2c0 11.983 8.875 21.071 20.561 21.391a23.329 23.329 0 0 0 .639.009c12.3 0 22.2-9.9 22.2-22.2a20.356 20.356 0 0 0-5.04-13.557 17.916 17.916 0 0 0-13.46-6.143c-1.043 0-1.817.09-3.26.526a26.98 26.98 0 0 0-.24.074L38.501 0zm-7.326 44.352a9.309 9.309 0 0 0-9.274-8.052 10.442 10.442 0 0 0-.638.019A9.653 9.653 0 0 0 12.101 46a10.844 10.844 0 0 0 .031.817c.196 2.596 1.324 4.831 3.063 6.396a9.473 9.473 0 0 0 6.406 2.387c5.4 0 9.7-4.3 9.7-9.6a10.703 10.703 0 0 0-.126-1.648z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.8 67.6" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M15.2 11.6h22.3V0h-34v39.5h8.4a13.796 13.796 0 0 1 2.081-2.256A9.364 9.364 0 0 1 20.4 35c5.6 0 9.9 4.5 9.9 10.3 0 5.8-4.3 10.2-9.8 10.2a9.594 9.594 0 0 1-3.975-.775c-2.283-1.024-3.971-3.081-5.231-6.281a22.17 22.17 0 0 1-.094-.244L0 52.4a62.066 62.066 0 0 0 .565 1.425c1.46 3.548 2.682 5.38 4.659 7.484a37.124 37.124 0 0 0 .276.291 21.422 21.422 0 0 0 13.729 5.945 25.179 25.179 0 0 0 1.671.055 21.976 21.976 0 0 0 13.258-4.2c4.31-3.202 7.279-8.057 8.275-13.942A26.715 26.715 0 0 0 42.8 45c0-11.9-8.3-20.9-19.4-20.9a20.186 20.186 0 0 0-2.2.112c-1.856.203-3.576.691-5.716 1.57a41.606 41.606 0 0 0-.284.118V11.6z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.9 66.9" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M24.5 53.2v13.7h12.3V53.2h6.1v-11h-6.1V0H23.4L0 42.5v10.7h24.5zm0-11h-14l14-24.8v24.8z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43 67" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M22.5 11L7.3 31.3l7.2 6.1c1.9-1.2 3.8-1.7 6.1-1.7a10.732 10.732 0 0 1 5.741 1.573c2.816 1.762 4.559 4.87 4.559 8.627a10.175 10.175 0 0 1-2.626 6.924A10.165 10.165 0 0 1 20.7 56.1c-4.086 0-7.199-2.156-8.584-5.887A12.3 12.3 0 0 1 11.5 47.8L0 48.2c.595 4.955 1.386 7.553 3.347 10.52a24.795 24.795 0 0 0 .053.08 19.859 19.859 0 0 0 13.535 8.466A24.541 24.541 0 0 0 21 67.6c11.745 0 20.628-8.083 22.012-19.459A25.999 25.999 0 0 0 43.2 45a22.484 22.484 0 0 0-2.049-9.694c-2.825-5.949-8.41-9.794-15.751-10.406L43.9 0H3.3v11h19.2z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.3 67.703" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M21.6 56.403l12.5-18.3c5.081-7.491 7.492-12.684 8.063-17.877a22.986 22.986 0 0 0 .137-2.523A17.062 17.062 0 0 0 30.133 1.242 24.304 24.304 0 0 0 22.3.003a23.551 23.551 0 0 0-9.787 1.948C5.323 5.212 1.199 12.42 1.199 22.443a36.776 36.776 0 0 0 .001.26H13a70.067 70.067 0 0 1 .052-1.368c.118-2.398.351-3.497.948-5.032a7.181 7.181 0 0 1 5.187-4.431 9.74 9.74 0 0 1 2.313-.269c4.599 0 7.899 3.099 7.9 7.398a5.467 5.467 0 0 1 0 .002 11.162 11.162 0 0 1-.092 1.496c-.29 2.167-1.352 4.335-4.331 9.011a261.731 261.731 0 0 1-1.677 2.593L0 67.703h40.5v-11.3H21.6z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 25 68.1" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M12.1 18.4v49.7H25V0L0 13v11.9l12.1-6.5z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 41.701 69.001" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"></path>
                      </svg></div>
                  </div>
                </div>
                <div class="text-center [background-position-y:3px] flex-col w-[3px] h-4 text-xl flex mx-0.5 opacity-0">
                  <div class="w-full h-3/6 relative">
                    <span class="bg-current w-[3px] h-[3px] absolute rounded-[100%] left-0 top-[10%] flex"></span>
                  </div>
                  <div class="w-full h-3/6 relative">
                    <span class="bg-current w-[3px] h-[3px] absolute rounded-[100%] left-0 top-[10%] flex"></span>
                  </div>
                </div>
                <div class="box-content text-center bg-current justify-around min-w-5 h-4 text-xl leading-5 flex overflow-x-hidden overflow-y-hidden mb-1 px-[3px] py-px rounded-sm">
                  <div class="w-2.5 h-48 inline-block overflow-x-hidden overflow-y-hidden [animation-name:second-ten] [animation-duration:60s] [animation-iteration-count:infinite] [animation-delay:-43s]">
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 41.701 69.001" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.8 67.6" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M15.2 11.6h22.3V0h-34v39.5h8.4a13.796 13.796 0 0 1 2.081-2.256A9.364 9.364 0 0 1 20.4 35c5.6 0 9.9 4.5 9.9 10.3 0 5.8-4.3 10.2-9.8 10.2a9.594 9.594 0 0 1-3.975-.775c-2.283-1.024-3.971-3.081-5.231-6.281a22.17 22.17 0 0 1-.094-.244L0 52.4a62.066 62.066 0 0 0 .565 1.425c1.46 3.548 2.682 5.38 4.659 7.484a37.124 37.124 0 0 0 .276.291 21.422 21.422 0 0 0 13.729 5.945 25.179 25.179 0 0 0 1.671.055 21.976 21.976 0 0 0 13.258-4.2c4.31-3.202 7.279-8.057 8.275-13.942A26.715 26.715 0 0 0 42.8 45c0-11.9-8.3-20.9-19.4-20.9a20.186 20.186 0 0 0-2.2.112c-1.856.203-3.576.691-5.716 1.57a41.606 41.606 0 0 0-.284.118V11.6z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.9 66.9" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M24.5 53.2v13.7h12.3V53.2h6.1v-11h-6.1V0H23.4L0 42.5v10.7h24.5zm0-11h-14l14-24.8v24.8z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43 67" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M22.5 11L7.3 31.3l7.2 6.1c1.9-1.2 3.8-1.7 6.1-1.7a10.732 10.732 0 0 1 5.741 1.573c2.816 1.762 4.559 4.87 4.559 8.627a10.175 10.175 0 0 1-2.626 6.924A10.165 10.165 0 0 1 20.7 56.1c-4.086 0-7.199-2.156-8.584-5.887A12.3 12.3 0 0 1 11.5 47.8L0 48.2c.595 4.955 1.386 7.553 3.347 10.52a24.795 24.795 0 0 0 .053.08 19.859 19.859 0 0 0 13.535 8.466A24.541 24.541 0 0 0 21 67.6c11.745 0 20.628-8.083 22.012-19.459A25.999 25.999 0 0 0 43.2 45a22.484 22.484 0 0 0-2.049-9.694c-2.825-5.949-8.41-9.794-15.751-10.406L43.9 0H3.3v11h19.2z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.3 67.703" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M21.6 56.403l12.5-18.3c5.081-7.491 7.492-12.684 8.063-17.877a22.986 22.986 0 0 0 .137-2.523A17.062 17.062 0 0 0 30.133 1.242 24.304 24.304 0 0 0 22.3.003a23.551 23.551 0 0 0-9.787 1.948C5.323 5.212 1.199 12.42 1.199 22.443a36.776 36.776 0 0 0 .001.26H13a70.067 70.067 0 0 1 .052-1.368c.118-2.398.351-3.497.948-5.032a7.181 7.181 0 0 1 5.187-4.431 9.74 9.74 0 0 1 2.313-.269c4.599 0 7.899 3.099 7.9 7.398a5.467 5.467 0 0 1 0 .002 11.162 11.162 0 0 1-.092 1.496c-.29 2.167-1.352 4.335-4.331 9.011a261.731 261.731 0 0 1-1.677 2.593L0 67.703h40.5v-11.3H21.6z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 25 68.1" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M12.1 18.4v49.7H25V0L0 13v11.9l12.1-6.5z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 41.701 69.001" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"></path>
                      </svg></div>
                  </div>
                  <div class="w-2.5 h-48 inline-block overflow-x-hidden overflow-y-hidden [animation-name:second-digit] [animation-duration:10s] [animation-iteration-count:infinite] [animation-delay:-4s]">
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 41.701 69.001" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43.503 67.701" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M5.501 67.701h14.4l16.4-26.1c4.512-7.165 6.676-12.531 7.115-17.896a25.743 25.743 0 0 0 .085-2.104c0-11.759-8.183-20.64-19.519-21.527a24.115 24.115 0 0 0-1.881-.073c-12.5 0-22.1 9.5-22.1 22 0 11.3 8.3 19.9 19.3 19.9.851 0 1.523-.089 2.777-.352a55.135 55.135 0 0 0 .223-.048l-16.8 26.2zm25.797-46.447a9.47 9.47 0 0 0-9.297-9.353 10.339 10.339 0 0 0-.503.013 9.524 9.524 0 0 0-9.197 9.487c0 5.4 4.1 9.6 9.4 9.6 2.785 0 5.25-1.09 6.985-2.886a9.421 9.421 0 0 0 2.615-6.614 10.005 10.005 0 0 0-.003-.247z" vector-effect="non-scaling-stroke"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43.204 69.004" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M33.603 32.802a31.686 31.686 0 0 0 .79-.423c2.107-1.169 3.051-2.091 4.378-4.03a32.68 32.68 0 0 0 .032-.047c1.9-2.9 2.8-6.1 2.8-9.7 0-10.8-8.2-18.6-19.6-18.6-11.335 0-19.479 7.414-19.976 17.97a21.882 21.882 0 0 0-.024 1.03 17.926 17.926 0 0 0 1.016 6.155 13.457 13.457 0 0 0 6.884 7.645C4.606 35.049 1.434 38.971.389 44.62a24.628 24.628 0 0 0-.386 4.482c0 11.8 8.7 19.9 21.4 19.9a24.237 24.237 0 0 0 11.074-2.514c6.306-3.218 10.335-9.304 10.699-16.947a23.948 23.948 0 0 0 .027-1.139 20.81 20.81 0 0 0-.846-6.134c-1.294-4.206-4.073-7.299-8.337-9.278a20.642 20.642 0 0 0-.417-.188zm-11.9 6.1c4.9 0 9.1 4.2 9.1 9.3 0 5.1-4.1 9.2-9.2 9.2a9.644 9.644 0 0 1-5.269-1.484c-2.255-1.453-3.734-3.872-3.991-6.794a10.51 10.51 0 0 1-.04-.922 9.237 9.237 0 0 1 2.404-6.318c1.703-1.853 4.18-2.982 6.996-2.982zm.2-27.9c4.5 0 8.4 3.8 8.4 8.2 0 4.4-4 8.2-8.5 8.2-4.6 0-8.2-3.7-8.2-8.4a7.892 7.892 0 0 1 1.919-5.273c1.232-1.404 2.986-2.353 5.055-2.638a9.726 9.726 0 0 1 1.326-.089z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 39.5 66.3" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M21.6 11.6L0 66.3h13.3L39.5 0H.1v11.6h21.5z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43.402 67.6" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M38.501 0h-14.6l-16.6 26.2a87.112 87.112 0 0 0-2.841 4.806C1.956 35.606.636 39.352.184 43.098A25.786 25.786 0 0 0 .001 46.2c0 11.983 8.875 21.071 20.561 21.391a23.329 23.329 0 0 0 .639.009c12.3 0 22.2-9.9 22.2-22.2a20.356 20.356 0 0 0-5.04-13.557 17.916 17.916 0 0 0-13.46-6.143c-1.043 0-1.817.09-3.26.526a26.98 26.98 0 0 0-.24.074L38.501 0zm-7.326 44.352a9.309 9.309 0 0 0-9.274-8.052 10.442 10.442 0 0 0-.638.019A9.653 9.653 0 0 0 12.101 46a10.844 10.844 0 0 0 .031.817c.196 2.596 1.324 4.831 3.063 6.396a9.473 9.473 0 0 0 6.406 2.387c5.4 0 9.7-4.3 9.7-9.6a10.703 10.703 0 0 0-.126-1.648z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.8 67.6" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M15.2 11.6h22.3V0h-34v39.5h8.4a13.796 13.796 0 0 1 2.081-2.256A9.364 9.364 0 0 1 20.4 35c5.6 0 9.9 4.5 9.9 10.3 0 5.8-4.3 10.2-9.8 10.2a9.594 9.594 0 0 1-3.975-.775c-2.283-1.024-3.971-3.081-5.231-6.281a22.17 22.17 0 0 1-.094-.244L0 52.4a62.066 62.066 0 0 0 .565 1.425c1.46 3.548 2.682 5.38 4.659 7.484a37.124 37.124 0 0 0 .276.291 21.422 21.422 0 0 0 13.729 5.945 25.179 25.179 0 0 0 1.671.055 21.976 21.976 0 0 0 13.258-4.2c4.31-3.202 7.279-8.057 8.275-13.942A26.715 26.715 0 0 0 42.8 45c0-11.9-8.3-20.9-19.4-20.9a20.186 20.186 0 0 0-2.2.112c-1.856.203-3.576.691-5.716 1.57a41.606 41.606 0 0 0-.284.118V11.6z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.9 66.9" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M24.5 53.2v13.7h12.3V53.2h6.1v-11h-6.1V0H23.4L0 42.5v10.7h24.5zm0-11h-14l14-24.8v24.8z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 43 67" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M22.5 11L7.3 31.3l7.2 6.1c1.9-1.2 3.8-1.7 6.1-1.7a10.732 10.732 0 0 1 5.741 1.573c2.816 1.762 4.559 4.87 4.559 8.627a10.175 10.175 0 0 1-2.626 6.924A10.165 10.165 0 0 1 20.7 56.1c-4.086 0-7.199-2.156-8.584-5.887A12.3 12.3 0 0 1 11.5 47.8L0 48.2c.595 4.955 1.386 7.553 3.347 10.52a24.795 24.795 0 0 0 .053.08 19.859 19.859 0 0 0 13.535 8.466A24.541 24.541 0 0 0 21 67.6c11.745 0 20.628-8.083 22.012-19.459A25.999 25.999 0 0 0 43.2 45a22.484 22.484 0 0 0-2.049-9.694c-2.825-5.949-8.41-9.794-15.751-10.406L43.9 0H3.3v11h19.2z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 42.3 67.703" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M21.6 56.403l12.5-18.3c5.081-7.491 7.492-12.684 8.063-17.877a22.986 22.986 0 0 0 .137-2.523A17.062 17.062 0 0 0 30.133 1.242 24.304 24.304 0 0 0 22.3.003a23.551 23.551 0 0 0-9.787 1.948C5.323 5.212 1.199 12.42 1.199 22.443a36.776 36.776 0 0 0 .001.26H13a70.067 70.067 0 0 1 .052-1.368c.118-2.398.351-3.497.948-5.032a7.181 7.181 0 0 1 5.187-4.431 9.74 9.74 0 0 1 2.313-.269c4.599 0 7.899 3.099 7.9 7.398a5.467 5.467 0 0 1 0 .002 11.162 11.162 0 0 1-.092 1.496c-.29 2.167-1.352 4.335-4.331 9.011a261.731 261.731 0 0 1-1.677 2.593L0 67.703h40.5v-11.3H21.6z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 25 68.1" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M12.1 18.4v49.7H25V0L0 13v11.9l12.1-6.5z"></path>
                      </svg></div>
                    <div class="w-2.5 h-4 relative"><svg viewBox="0 0 41.701 69.001" role="img" class="align-baseline inline fill-white stroke-white w-4 h-3.5 absolute overflow-x-visible overflow-y-visible -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                        <path fill-rule="evenodd" stroke-linecap="round" stroke-width=".945" d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"></path>
                      </svg></div>
                  </div>
                </div>
              </div>
            </div><a class="no-underline text-red-500 active:outline-0 hover:outline-0" aria-label="click, enter flash sale button See All" href="/shocking_sale?promotionId=222901710438400">See All&nbsp;<svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="align-baseline fill-current w-2.5 h-2.5 inline-block relative overflow-x-hidden overflow-y-hidden text-xs">
                <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
              </svg></a>
          </div>
          <div class="w-full h-full relative">
            <div class="touch-pan-y h-full overflow-x-hidden overflow-y-hidden">
              <ul class="h-full flex relative w-[266.667%]">
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="80pcs Kitchen Cleaning Wipes - Heavy Duty Degreasing Wipes for Stove,  Stain Removal | Tisu Basah Dapur  promotion off 75% current price RM0.86 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=25276087091&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-75%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                              <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                                <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/4a0a35a9c169de389428.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                              </div>
                            </div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="transition-opacity duration-200 z-[2] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mhzolz7l9ngg7b/_tn')] bg-no-repeat bg-contain"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="transition-opacity duration-200 z-[1] bg-[50%] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-822yi-mi3yg909qf46e7/_tn')] bg-no-repeat bg-contain"></div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>0.86</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[10%] rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="《Mega Deal》M-5XL Men Short Pants Sport Shorts Beach Shorts Casual Fashion Men Pants Seluar Pendek Lelaki Men's Pant  promotion off 70% current price RM4.19 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=12855869293&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-70%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                              <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                                <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/aafff91b7caa45e7284b.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                              </div>
                            </div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="transition-opacity duration-200 z-[2] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l9-miv06nh9sute9b/_tn')] bg-no-repeat bg-contain"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="transition-opacity duration-200 z-[1] bg-[50%] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/2f651955ffd525235d33f2150577c646/_tn')] bg-no-repeat bg-contain"></div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>4.19</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[12%] rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="《Mega Deal》Ice Silk Seamless Underwear Middle Waist Panties Women Clothing  promotion off 72% current price RM2.09 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=2167390081&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-72%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                              <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                                <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/aafff91b7caa45e7284b.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                              </div>
                            </div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="transition-opacity duration-200 z-[2] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mhzolz7l9ngg7b/_tn')] bg-no-repeat bg-contain"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="transition-opacity duration-200 z-[1] bg-[50%] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-7rbkd-lqrc3s7fhovgf8/_tn')] bg-no-repeat bg-contain"></div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>2.09</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[5%] rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="P9 Wireless Bluetooth Sports Headphones with Mic &amp; Noise Reduction | On-Ear Stereo Headset  promotion off 75% current price RM7.74 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=24878743362&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-75%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                              <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                                <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/4a0a35a9c169de389428.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                              </div>
                            </div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="transition-opacity duration-200 z-[2] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l9-miv06nh9sute9b/_tn')] bg-no-repeat bg-contain"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="transition-opacity duration-200 z-[1] bg-[50%] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-822wu-mi3ygzbu1b0h72/_tn')] bg-no-repeat bg-contain"></div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>7.74</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[5%] rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="《Mega Deal》Unisex Adult The Best Ever Round Neck Plain Microfiber T-Shirt Jersey T Shirt Anti-Bacteria  promotion off 58% current price RM4.13 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=25427545588&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-58%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                              <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                                <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/aafff91b7caa45e7284b.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                              </div>
                            </div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="transition-opacity duration-200 z-[2] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l8-mhzolz7l9ngg7b/_tn')] bg-no-repeat bg-contain"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="transition-opacity duration-200 z-[1] bg-[50%] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-7rdx7-lynnly7h4uoq94/_tn')] bg-no-repeat bg-contain"></div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>4.13</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[5%] rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="Red Panda Facial Tissue | 10 Pck x 300 Sheets Premium Tissue | 3000 Sheets, Extra Soft &amp; Absorbent  promotion off 37% current price RM4.39 41 sold click, enter flash sale" href="/shocking_sale?fromItem=26317741591&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-37%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                              <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                                <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/4a0a35a9c169de389428.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                              </div>
                            </div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="transition-opacity duration-200 z-[2] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l9-miv06nh9sute9b/_tn')] bg-no-repeat bg-contain"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="transition-opacity duration-200 z-[1] bg-[50%] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-822wj-mi3yds2mjjlzcb/_tn')] bg-no-repeat bg-contain"></div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>4.39</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">41 sold</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-5/12 rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="David jones Paris for men waist bag Polyester  promotion off 73% current price RM24.90 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=2968199662&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-73%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                              <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                                <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/6ba14252b9facdb2a91c.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                              </div>
                            </div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0">
                              </div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0"></div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0 bg-zinc-100">
                                <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>24.90</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[6%] rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="200GSM Unisex Kid Pants Seluar Panjang Budak Sekolah Slim Flit Tracksuit Fashion Seluar Panjang Budak Sukan 童装长裤男女  promotion off 13% current price RM7.39 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=24651808320&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-13%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5"></div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0">
                              </div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0"></div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0 bg-zinc-100">
                                <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>7.39</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[5%] rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="Five Claw Buckle Installation Tool Set - Snap Fastener Plier for Clothing Buttons  promotion off 74% current price RM1.72 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=27080691506&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-74%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                              <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                                <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/4a0a35a9c169de389428.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                              </div>
                            </div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0">
                              </div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0"></div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0 bg-zinc-100">
                                <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>1.72</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[10%] rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="LABER LEE Men Crossbody Pouch Bag Waterproof Nylon Polyester  promotion off 65% current price RM19.50 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=19430633555&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-65%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                              <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                                <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/6ba14252b9facdb2a91c.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                              </div>
                            </div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0">
                              </div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0"></div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0 bg-zinc-100">
                                <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>19.50</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[10%] rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="LABER LEE Men‘s Messenger Bag Sling Chest Bag Waterproof Trendy Cool Messenger Shoulder Bag  promotion off 74% current price RM22.99 Only 3 Left click, enter flash sale" href="/shocking_sale?fromItem=28767695830&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-74%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                              <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                                <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/6ba14252b9facdb2a91c.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                              </div>
                            </div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0">
                              </div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0"></div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0 bg-zinc-100">
                                <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>22.99</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[4] bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/4f05fdd32e72cde6dc74.png')] bg-contain bg-no-repeat absolute left-[0.1875rem] -top-1.5 w-5 h-5"></div>
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Only 3 Left</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-10/12 rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="B.S.B 1Kg/1000g Sleeping hilton Pillow Viral Bantal Tidur Bantal Hotel  promotion off 23% current price RM9.87 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=4854960706&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-23%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5"></div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0">
                              </div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0"></div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0 bg-zinc-100">
                                <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>9.87</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[5%] rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="(HARGA BORONG) TRACKSUIT PLAIN ADULT / KIDS SPORT SCHOOL (TRACKSUIT SUKAN SEKOLAH KOPERASI DEWASA / BUDAK) TRCH12  promotion off 87% current price RM5.19 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=12343237766&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-87%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5"></div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0">
                              </div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0"></div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0 bg-zinc-100">
                                <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>5.19</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[5%] rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="HTC NE51 AI Translator Earbud TWS Wireless Bluetooth Earphone Noise Reduction HiFi Music HD Call Bluetooth 6.0 Headset With Microphone  promotion off 64% current price RM25.98 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=41524126639&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-64%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                              <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                                <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/6ba14252b9facdb2a91c.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                              </div>
                            </div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0">
                              </div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0"></div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0 bg-zinc-100">
                                <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>25.98</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[5%] rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="LABER LEE Unisex Leisure Shoulder Bag Multi Pocket Messenger Shoulder Bag Large Capacity Nylon Tablet Netbook Umbrella  promotion off 62% current price RM25.99 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=26828374105&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-62%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                              <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                                <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/6ba14252b9facdb2a91c.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                              </div>
                            </div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0">
                              </div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0"></div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0 bg-zinc-100">
                                <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>25.99</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[10%] rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
                <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
                  <div class="h-full">
                    <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="Kids Pants Slim Flit Tracksuit Fashion Seluar Panjang Budak Sukan 童装长裤男女  promotion off 10% current price RM6.87 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=21586497026&amp;promotionId=222901710438400" class="no-underline active:outline-0 hover:outline-0">
                        <div class="relative h-44">
                          <div class="z-[3] absolute right-0">
                            <div class="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                              <div class="absolute -left-1"><svg width="10" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" class="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden">
                                  <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" class="fill-[url(#paint0\_linear\_2216\_10611)]"></path>
                                  <defs>
                                    <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#EE4D2D"></stop>
                                      <stop offset="1" stop-color="#FF7337"></stop>
                                    </linearGradient>
                                  </defs>
                                </svg></div>-10%
                            </div>
                          </div>
                          <div class="bg-white w-full h-full relative">
                            <div class="z-[3] w-full h-full absolute left-0 -top-0.5"></div>
                            <div class="z-[2] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0">
                              </div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                            </div>
                            <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                              <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0"></div>
                              <div class="justify-center items-center w-full h-full flex absolute inset-0 bg-zinc-100">
                                <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="h-[inherit] flex-col items-stretch flex py-4">
                            <div class="flex-col items-center flex mb-1.5">
                              <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                                <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                                  <span class="text-lg font-medium mr-0.5">RM</span><strong>6.87</strong></div>
                              </div>
                            </div>
                            <div class="px-2.5">
                              <div class="w-full relative h-4">
                                <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                                <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[5%] rounded-tl-lg rounded-bl-lg"></div>
                                <div class="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 left-0 bg-white w-6 h-6 leading-6 -mt-3 invisible -translate-x-2/4" role="button" tabindex="0">
              <div role="button" aria-label="click, scroll left to see more" tabindex="0"></div>
              <svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9">
                </polygon>
              </svg>
            </div>
            <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 right-0 bg-white w-6 h-6 leading-6 -mt-3 translate-x-2/4" role="button" tabindex="0">
              <div role="button" aria-label="click, scroll right to see more" tabindex="0"></div>
              <svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11">
                </polygon>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <section id="HomePageSkinnyBannerSection" class="pt-5 w-[1200px]" aria-label="Banner">
        <div class="w-full relative">
          <picture class="contents">
            <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134252-81zwr-miwn85d5tssm8f@resize_w1200_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134252-81zwr-miwn85d5tssm8f@resize_w2400_nl.webp 2x" type="image/webp" class="contents"><img width="1200" loading="lazy" class="inline h-28 align-bottom" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134252-81zwr-miwn85d5tssm8f@resize_w1200_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134252-81zwr-miwn85d5tssm8f@resize_w2400_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134252-81zwr-miwn85d5tssm8f" alt="Banner">
          </picture>
          <div class="w-full h-full flex absolute left-0 top-0"><a class="w-full no-underline block active:outline-0 hover:outline-0 flex-[33.3333]" href="/collections/8843138"></a><a class="w-full no-underline block active:outline-0 hover:outline-0 flex-[33.3333]" href="/m/welcome-series"></a><a class="w-full no-underline block active:outline-0 hover:outline-0 flex-[33.3333]" href="/collections/8843138"></a></div>
        </div>
      </section>
      <div class="mt-5">
        <div>
          <div class="items-center flex before:bg-red-500 before:w-2.5 before:h-6 before:mr-1.5 bg-white [border-bottom-style:solid] h-16 px-5 border-b border-b-black/5 before:content-none">
            <div class="uppercase text-ellipsis whitespace-nowrap flex-1 overflow-x-hidden overflow-y-hidden mr-5 text-base font-medium text-black/54">
              <div class="flex"><a class="active:outline-0 hover:outline-0 no-underline text-red-700 uppercase self-center text-lg font-medium leading-4 block cursor-pointer" href="/mall">Shopee Mall</a>
                <div class="capitalize [border-left-style:solid] flex-1 items-center font-normal flex ml-4 pl-4 border-l border-l-zinc-300">
                  <div class="text-zinc-800 whitespace-nowrap items-center flex mr-4 h-6 leading-6" tabindex="0"><img class="align-baseline inline w-4 h-4 mr-1.5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/7077c70ab0445eaaf96a.png" role="presentation">100% Authentic</div>
                  <div class="text-zinc-800 whitespace-nowrap items-center flex mr-4 h-6 leading-6" tabindex="0"><img class="align-baseline inline w-4 h-4 mr-1.5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/2b0c3538f050999fef02.png" role="presentation">15 Days Return*</div>
                  <div class="text-zinc-800 whitespace-nowrap items-center flex mr-4 h-6 leading-6" tabindex="0"><img class="align-baseline inline w-4 h-4 mr-1.5" src="https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/437f0ea51f2e59a271cd.png" role="presentation">Free Shipping</div>
                </div>
              </div>
            </div>
            <div class="text-black/87"><button class="[appearance:auto] cursor-pointer tracking-[0] outline-0 justify-center text-sm font-light leading-none transition-colors duration-100 ease-in-out relative px-2 py-1.5 border-0 text-red-500 capitalize items-center flex focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87"><a class="cursor-pointer items-baseline flex active:outline-0 hover:outline-0 text-red-500 no-underline" href="/mall">
                  <div class="text-red-700 items-baseline h-5 flex">See All<div class="bg-red-700 justify-center items-center w-5 h-5 flex ml-2 rounded-[50%]"><svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="align-baseline fill-current h-2.5 inline-block relative overflow-x-hidden overflow-y-hidden stroke-white w-2 text-xs">
                        <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                      </svg></div>
                  </div>
                </a></button></div>
          </div>
          <div>
            <div class="align-top bg-white w-96 h-96 inline-block pl-2.5 py-2.5">
              <div class="w-full"><shopee-carousel-stateful spacekey="PC-MY-HOME_MALL_01" baseurl="https://shopee.com.my" ratio="1.1894736842105262">
                  <div class="pt-[84.0708%]"></div>
                </shopee-carousel-stateful></div>
            </div>
            <div class="[overflow:unset] bg-white w-[50rem] inline-block">
              <div class="w-full h-full relative">
                <div class="touch-pan-y h-full overflow-x-hidden overflow-y-hidden">
                  <ul class="relative [column-width:200px] [column-fill:auto] gap-x-0 h-[472px] w-full">
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52">
                      <div class="h-full">
                        <div class="relative overflow-x-hidden overflow-y-hidden p-2.5" location="0" recommendation_info="AB:59747,REQID:b11ba3af4834fb0906db955b8382aa00,BND:officialshop,QUES:SHOPPOP_zmap,SECKEY:officialshop_sec,ROI:0,DT:1768242247448" shopid="52784309"><a class="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87" href="/supermarket">
                            <div class="w-full relative pt-[120%]">
                              <picture class="contents">
                                <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rase-m7vrncy3uo5p70@resize_w201_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rase-m7vrncy3uo5p70@resize_w402_nl.webp 2x" type="image/webp" class="contents"><img width="201" loading="lazy" class="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rase-m7vrncy3uo5p70@resize_w201_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rase-m7vrncy3uo5p70@resize_w402_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rase-m7vrncy3uo5p70" role="presentation">
                              </picture>
                            </div>
                          </a>
                          <div class="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">Shop Now</div>
                        </div>
                      </div>
                    </li>
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52">
                      <div class="h-full">
                        <div class="relative overflow-x-hidden overflow-y-hidden p-2.5" location="1" recommendation_info="AB:59747,REQID:b11ba3af4834fb0906db955b8382aa00,BND:officialshop,QUES:SHOPPOP_zmap,SECKEY:officialshop_sec,ROI:0,DT:1768242247448" shopid="21516516"><a class="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87" href="/watsons.my">
                            <div class="w-full relative pt-[120%]">
                              <picture class="contents">
                                <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasj-md2owlai5mad32@resize_w201_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasj-md2owlai5mad32@resize_w402_nl.webp 2x" type="image/webp" class="contents"><img width="201" loading="lazy" class="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasj-md2owlai5mad32@resize_w201_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasj-md2owlai5mad32@resize_w402_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasj-md2owlai5mad32" role="presentation">
                              </picture>
                            </div>
                          </a>
                          <div class="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">Shop Now</div>
                        </div>
                      </div>
                    </li>
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52">
                      <div class="h-full">
                        <div class="relative overflow-x-hidden overflow-y-hidden p-2.5" location="2" recommendation_info="AB:59747,REQID:b11ba3af4834fb0906db955b8382aa00,BND:officialshop,QUES:SHOPPOP_zmap,SECKEY:officialshop_sec,ROI:0,DT:1768242247448" shopid="822280677"><a class="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87" href="/glad2glowofficialstore">
                            <div class="w-full relative pt-[120%]">
                              <picture class="contents">
                                <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lf-mhlim5gaaqrq29@resize_w201_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lf-mhlim5gaaqrq29@resize_w402_nl.webp 2x" type="image/webp" class="contents"><img width="201" loading="lazy" class="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lf-mhlim5gaaqrq29@resize_w201_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lf-mhlim5gaaqrq29@resize_w402_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lf-mhlim5gaaqrq29" role="presentation">
                              </picture>
                            </div>
                          </a>
                          <div class="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">Shop Now</div>
                        </div>
                      </div>
                    </li>
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52">
                      <div class="h-full">
                        <div class="relative overflow-x-hidden overflow-y-hidden p-2.5" location="3" recommendation_info="AB:59747,REQID:b11ba3af4834fb0906db955b8382aa00,BND:officialshop,QUES:SHOPPOP_zmap,SECKEY:officialshop_sec,ROI:0,DT:1768242247448" shopid="135870504"><a class="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87" href="/guardian.os">
                            <div class="w-full relative pt-[120%]">
                              <picture class="contents">
                                <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasj-m9zo2m0rmork1e@resize_w201_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasj-m9zo2m0rmork1e@resize_w402_nl.webp 2x" type="image/webp" class="contents"><img width="201" loading="lazy" class="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasj-m9zo2m0rmork1e@resize_w201_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasj-m9zo2m0rmork1e@resize_w402_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasj-m9zo2m0rmork1e" role="presentation">
                              </picture>
                            </div>
                          </a>
                          <div class="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">Shop Now</div>
                        </div>
                      </div>
                    </li>
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52">
                      <div class="h-full">
                        <div class="relative overflow-x-hidden overflow-y-hidden p-2.5" location="4" recommendation_info="AB:59747,REQID:b11ba3af4834fb0906db955b8382aa00,BND:officialshop,QUES:SHOPPOP_zmap,SECKEY:officialshop_sec,ROI:0,DT:1768242247448" shopid="1430310740"><a class="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87" href="/skintificofficial.shop">
                            <div class="w-full relative pt-[120%]">
                              <picture class="contents">
                                <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820ld-mico7ajs893755@resize_w201_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820ld-mico7ajs893755@resize_w402_nl.webp 2x" type="image/webp" class="contents"><img width="201" loading="lazy" class="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820ld-mico7ajs893755@resize_w201_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820ld-mico7ajs893755@resize_w402_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820ld-mico7ajs893755" role="presentation">
                              </picture>
                            </div>
                          </a>
                          <div class="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">Shop Now</div>
                        </div>
                      </div>
                    </li>
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52">
                      <div class="h-full">
                        <div class="relative overflow-x-hidden overflow-y-hidden p-2.5" location="5" recommendation_info="AB:59747,REQID:b11ba3af4834fb0906db955b8382aa00,BND:officialshop,QUES:SHOPPOP_zmap,SECKEY:officialshop_sec,ROI:0,DT:1768242247448" shopid="445279067"><a class="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87" href="/lovito.os">
                            <div class="w-full relative pt-[120%]">
                              <picture class="contents">
                                <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-mimhh3h2oi6f65@resize_w201_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-mimhh3h2oi6f65@resize_w402_nl.webp 2x" type="image/webp" class="contents"><img width="201" loading="lazy" class="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-mimhh3h2oi6f65@resize_w201_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-mimhh3h2oi6f65@resize_w402_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-mimhh3h2oi6f65" role="presentation">
                              </picture>
                            </div>
                          </a>
                          <div class="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">Shop Now</div>
                        </div>
                      </div>
                    </li>
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52">
                      <div class="h-full">
                        <div class="relative overflow-x-hidden overflow-y-hidden p-2.5" location="6" recommendation_info="AB:59747,REQID:b11ba3af4834fb0906db955b8382aa00,BND:officialshop,QUES:SHOPPOP_zmap,SECKEY:officialshop_sec,ROI:0,DT:1768242247448" shopid="370480745"><a class="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87" href="/dessini_malaysia">
                            <div class="w-full relative pt-[120%]">
                              <picture class="contents">
                                <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rase-m4irkjra34wp97@resize_w201_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rase-m4irkjra34wp97@resize_w402_nl.webp 2x" type="image/webp" class="contents"><img width="201" loading="lazy" class="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rase-m4irkjra34wp97@resize_w201_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rase-m4irkjra34wp97@resize_w402_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rase-m4irkjra34wp97" role="presentation">
                              </picture>
                            </div>
                          </a>
                          <div class="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">Shop Now</div>
                        </div>
                      </div>
                    </li>
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52">
                      <div class="h-full">
                        <div class="relative overflow-x-hidden overflow-y-hidden p-2.5" location="7" recommendation_info="AB:59747,REQID:b11ba3af4834fb0906db955b8382aa00,BND:officialshop,QUES:SHOPPOP_zmap,SECKEY:officialshop_sec,ROI:0,DT:1768242247448" shopid="68461810"><a class="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87" href="/shop/68461810/">
                            <div class="w-full relative pt-[120%]">
                              <picture class="contents">
                                <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l6-mfj6wd9wmw3vce@resize_w201_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l6-mfj6wd9wmw3vce@resize_w402_nl.webp 2x" type="image/webp" class="contents"><img width="201" loading="lazy" class="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l6-mfj6wd9wmw3vce@resize_w201_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l6-mfj6wd9wmw3vce@resize_w402_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l6-mfj6wd9wmw3vce" role="presentation">
                              </picture>
                            </div>
                          </a>
                          <div class="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">Shop Now</div>
                        </div>
                      </div>
                    </li>
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52">
                      <div class="h-full">
                        <div class="relative overflow-x-hidden overflow-y-hidden p-2.5" location="8" recommendation_info="AB:59747,REQID:b11ba3af4834fb0906db955b8382aa00,BND:officialshop,QUES:SHOPPOP_zmap,SECKEY:officialshop_sec,ROI:0,DT:1768242247448" shopid="154039251"><a class="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87" href="/smartlifestyle99">
                            <div class="w-full relative pt-[120%]">
                              <picture class="contents">
                                <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasc-m3k66wvvjvcs07@resize_w201_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasc-m3k66wvvjvcs07@resize_w402_nl.webp 2x" type="image/webp" class="contents"><img width="201" loading="lazy" class="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasc-m3k66wvvjvcs07@resize_w201_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasc-m3k66wvvjvcs07@resize_w402_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasc-m3k66wvvjvcs07" role="presentation">
                              </picture>
                            </div>
                          </a>
                          <div class="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">Shop Now</div>
                        </div>
                      </div>
                    </li>
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52">
                      <div class="h-full">
                        <div class="relative overflow-x-hidden overflow-y-hidden p-2.5" location="9" recommendation_info="AB:59747,REQID:b11ba3af4834fb0906db955b8382aa00,BND:officialshop,QUES:SHOPPOP_zmap,SECKEY:officialshop_sec,ROI:0,DT:1768242247448" shopid="119540322"><a class="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87" href="/huggies.os">
                            <div class="w-full relative pt-[120%]">
                              <picture class="contents">
                                <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820la-mf1bl8wadafj4f@resize_w201_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820la-mf1bl8wadafj4f@resize_w402_nl.webp 2x" type="image/webp" class="contents"><img width="201" loading="lazy" class="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820la-mf1bl8wadafj4f@resize_w201_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820la-mf1bl8wadafj4f@resize_w402_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820la-mf1bl8wadafj4f" role="presentation">
                              </picture>
                            </div>
                          </a>
                          <div class="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">Shop Now</div>
                        </div>
                      </div>
                    </li>
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52">
                      <div class="h-full">
                        <div class="relative overflow-x-hidden overflow-y-hidden p-2.5" location="10" recommendation_info="AB:59747,REQID:b11ba3af4834fb0906db955b8382aa00,BND:officialshop,QUES:SHOPPOP_zmap,SECKEY:officialshop_sec,ROI:0,DT:1768242247448" shopid="331309804"><a class="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87" href="/ugreen.my">
                            <div class="w-full relative pt-[120%]">
                              <picture class="contents">
                                <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rash-m9znsyqrtvsk7e@resize_w201_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rash-m9znsyqrtvsk7e@resize_w402_nl.webp 2x" type="image/webp" class="contents"><img width="201" loading="lazy" class="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rash-m9znsyqrtvsk7e@resize_w201_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rash-m9znsyqrtvsk7e@resize_w402_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rash-m9znsyqrtvsk7e" role="presentation">
                              </picture>
                            </div>
                          </a>
                          <div class="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">Shop Now</div>
                        </div>
                      </div>
                    </li>
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52">
                      <div class="h-full">
                        <div class="relative overflow-x-hidden overflow-y-hidden p-2.5" location="11" recommendation_info="AB:59747,REQID:b11ba3af4834fb0906db955b8382aa00,BND:officialshop,QUES:SHOPPOP_zmap,SECKEY:officialshop_sec,ROI:0,DT:1768242247448" shopid="134516310"><a class="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87" href="/drcardin.os">
                            <div class="w-full relative pt-[120%]">
                              <picture class="contents">
                                <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820la-mie76g8k2iva19@resize_w201_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820la-mie76g8k2iva19@resize_w402_nl.webp 2x" type="image/webp" class="contents"><img width="201" loading="lazy" class="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820la-mie76g8k2iva19@resize_w201_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820la-mie76g8k2iva19@resize_w402_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820la-mie76g8k2iva19" role="presentation">
                              </picture>
                            </div>
                          </a>
                          <div class="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">Shop Now</div>
                        </div>
                      </div>
                    </li>
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52">
                      <div class="h-full">
                        <div class="relative overflow-x-hidden overflow-y-hidden p-2.5" location="12" recommendation_info="AB:59747,REQID:b11ba3af4834fb0906db955b8382aa00,BND:officialshop,QUES:SHOPPOP_zmap,SECKEY:officialshop_sec,ROI:0,DT:1768242247448" shopid="120593423"><a class="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87" href="/baseusofficial.os">
                            <div class="w-full relative pt-[120%]">
                              <picture class="contents">
                                <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lg-mhpynx6xex3af6@resize_w201_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lg-mhpynx6xex3af6@resize_w402_nl.webp 2x" type="image/webp" class="contents"><img width="201" loading="lazy" class="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lg-mhpynx6xex3af6@resize_w201_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lg-mhpynx6xex3af6@resize_w402_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lg-mhpynx6xex3af6" role="presentation">
                              </picture>
                            </div>
                          </a>
                          <div class="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">Shop Now</div>
                        </div>
                      </div>
                    </li>
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52">
                      <div class="h-full">
                        <div class="relative overflow-x-hidden overflow-y-hidden p-2.5" location="13" recommendation_info="AB:59747,REQID:b11ba3af4834fb0906db955b8382aa00,BND:officialshop,QUES:SHOPPOP_zmap,SECKEY:officialshop_sec,ROI:0,DT:1768242247448" shopid="405249365"><a class="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87" href="/montigomy.os">
                            <div class="w-full relative pt-[120%]">
                              <picture class="contents">
                                <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lb-mflywelsqryhb2@resize_w201_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lb-mflywelsqryhb2@resize_w402_nl.webp 2x" type="image/webp" class="contents"><img width="201" loading="lazy" class="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lb-mflywelsqryhb2@resize_w201_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lb-mflywelsqryhb2@resize_w402_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lb-mflywelsqryhb2" role="presentation">
                              </picture>
                            </div>
                          </a>
                          <div class="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">Shop Now</div>
                        </div>
                      </div>
                    </li>
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52">
                      <div class="h-full">
                        <div class="relative overflow-x-hidden overflow-y-hidden p-2.5" location="14" recommendation_info="AB:59747,REQID:b11ba3af4834fb0906db955b8382aa00,BND:officialshop,QUES:SHOPPOP_zmap,SECKEY:officialshop_sec,ROI:0,DT:1768242247448" shopid="1123507148"><a class="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87" href="/baseus.flagship.my">
                            <div class="w-full relative pt-[120%]">
                              <picture class="contents">
                                <source srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasj-m9jktfy2rsaa32@resize_w201_nl.webp, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasj-m9jktfy2rsaa32@resize_w402_nl.webp 2x" type="image/webp" class="contents"><img width="201" loading="lazy" class="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0" srcset="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasj-m9jktfy2rsaa32@resize_w201_nl, https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasj-m9jktfy2rsaa32@resize_w402_nl 2x" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7rasj-m9jktfy2rsaa32" role="presentation">
                              </picture>
                            </div>
                          </a>
                          <div class="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">Shop Now</div>
                        </div>
                      </div>
                    </li>
                    <li class="touch-pan-y overflow-x-hidden h-60 w-52"><a class="active:outline-0 hover:outline-0 text-red-700 whitespace-nowrap cursor-pointer no-underline block relative overflow-x-hidden overflow-y-hidden p-2.5" href="/mall">
                        <div class="w-full relative pt-[120%]"></div>
                        <div class="justify-center items-center text-base flex absolute inset-0">
                          See All<div class="bg-red-700 justify-center items-center w-6 h-6 flex ml-2 rounded-[50%]"><svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="align-baseline fill-current h-4 inline-block relative overflow-x-hidden overflow-y-hidden stroke-white w-2">
                              <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                            </svg></div>
                        </div>
                      </a></li>
                  </ul>
                </div>
                <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 left-0 bg-white w-6 h-6 leading-6 -mt-3 invisible -translate-x-2/4" role="button" tabindex="0"><svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                    <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9">
                    </polygon>
                  </svg></div>
                <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 right-0 bg-white w-6 h-6 leading-6 -mt-3 translate-x-2/4" role="button" tabindex="0"><svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                    <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
                  </svg></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contents">
        <div tabindex="0">
          <div class="pt-5">
            <div class="items-center flex before:bg-red-500 before:w-2.5 before:h-6 before:mr-1.5 bg-white [border-bottom-style:solid] h-16 px-5 border-b border-b-black/5 before:content-none">
              <div class="uppercase text-ellipsis whitespace-nowrap flex-1 overflow-x-hidden overflow-y-hidden mr-5 text-base font-medium text-black/54"><span class="text-red-500">Top Products</span></div><a class="block active:outline-0 hover:outline-0 text-red-500 no-underline" tabindex="-1" href="/top_products?catId=MY_BITL0_1312%3Atop_sold"><button class="[appearance:auto] cursor-pointer tracking-[0] outline-0 justify-center text-sm font-light leading-none transition-colors duration-100 ease-in-out relative px-2 py-1.5 border-0 text-red-500 capitalize items-center flex focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87">See All&nbsp;<svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="align-baseline fill-current w-2.5 h-2.5 inline-block relative overflow-x-hidden overflow-y-hidden text-xs">
                    <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                  </svg></button></a>
            </div>
            <div class="bg-white flex">
              <div class="w-full h-full relative transition-all"><button class="[appearance:auto] z-[5] cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] border-[none] top-2/4 left-0 bg-white w-6 h-6 leading-6 -mt-3 invisible -translate-x-2/4"><svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                    <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9">
                    </polygon>
                  </svg></button>
                <div class="touch-pan-y h-full overflow-x-hidden overflow-y-hidden">
                  <ul class="[scroll-snap-type:x_mandatory] h-full duration-300 ease-in-out flex relative [overflow-x:-moz-scrollbars-none] [overflow-y:-moz-scrollbars-none] [-ms-overflow-style:none] [scrollbar-width:none]">
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden snap-start w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_1312%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img width="invalid-value" height="invalid-value" class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 transition-opacity duration-200 align-bottom object-contain" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/2332ec0c48b809b95fe766917a84f40e" elementtiming="shopee:heroComponentPaint"></div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 1k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Jeep Men's Leather Long Wallet</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_26837%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img width="invalid-value" height="invalid-value" class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 transition-opacity duration-200 align-bottom object-contain" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/8265327e9b1159b3a41bdce583e8828d" elementtiming="shopee:heroComponentPaint"></div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 33k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Minyak Wangi Lelaki</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_4961%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img width="invalid-value" height="invalid-value" class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 transition-opacity duration-200 align-bottom object-contain" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/9e3632a6b838faff4a851aefc034bab7" elementtiming="shopee:heroComponentPaint"></div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 39k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Spender Panties</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_183%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img width="invalid-value" height="invalid-value" class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 transition-opacity duration-200 align-bottom object-contain" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/c885bf8b14d6ec39adc6e1dc81e76c33" elementtiming="shopee:heroComponentPaint"></div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 40k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Women's Loose Jeans</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_3274%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img width="invalid-value" height="invalid-value" class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 transition-opacity duration-200 align-bottom object-contain" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/a0fba1cc29a8e6c1e608dc3499ea37d5" elementtiming="shopee:heroComponentPaint"></div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 28k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Solar Light Panel</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_17231%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img width="invalid-value" height="invalid-value" class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 transition-opacity duration-200 align-bottom object-contain" src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/91abac9b175402aa44b989d130ca50b8" elementtiming="shopee:heroComponentPaint"></div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 21k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Queen Bedsheet Set</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden snap-start w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_76%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 opacity-0 align-bottom">
                            <div class="justify-center items-center w-full h-full flex absolute inset-0">
                              <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                            </div>
                          </div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 5k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Women's Long Purse</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_1052%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 opacity-0 align-bottom">
                            <div class="justify-center items-center w-full h-full flex absolute inset-0">
                              <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                            </div>
                          </div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 23k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Men's Casual Pants</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_124%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 opacity-0 align-bottom">
                            <div class="justify-center items-center w-full h-full flex absolute inset-0">
                              <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                            </div>
                          </div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 23k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Microfiber Mop</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_237%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 opacity-0 align-bottom">
                            <div class="justify-center items-center w-full h-full flex absolute inset-0">
                              <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                            </div>
                          </div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 48k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Seamless Silk Panties</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_1305%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 opacity-0 align-bottom">
                            <div class="justify-center items-center w-full h-full flex absolute inset-0">
                              <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                            </div>
                          </div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 22k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">SKIN1004 Madagascar</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_2992%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 opacity-0 align-bottom">
                            <div class="justify-center items-center w-full h-full flex absolute inset-0">
                              <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                            </div>
                          </div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 22k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Tofu Cat Litter</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden snap-start w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_220%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 opacity-0 align-bottom">
                            <div class="justify-center items-center w-full h-full flex absolute inset-0">
                              <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                            </div>
                          </div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 23k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Stainless Steel Thermos</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_1601%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 opacity-0 align-bottom">
                            <div class="justify-center items-center w-full h-full flex absolute inset-0">
                              <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                            </div>
                          </div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 23k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Pigeon PPSU Bottle</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_74%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 opacity-0 align-bottom">
                            <div class="justify-center items-center w-full h-full flex absolute inset-0">
                              <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                            </div>
                          </div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 22k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Cotton Socks</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_446%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 opacity-0 align-bottom">
                            <div class="justify-center items-center w-full h-full flex absolute inset-0">
                              <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                            </div>
                          </div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 22k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Boys Top &amp; Bottom Set</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_677%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 opacity-0 align-bottom">
                            <div class="justify-center items-center w-full h-full flex absolute inset-0">
                              <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                            </div>
                          </div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 18k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Portable Usb Mini Fan</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_26%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 opacity-0 align-bottom">
                            <div class="justify-center items-center w-full h-full flex absolute inset-0">
                              <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                            </div>
                          </div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 25k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Solar-powered Light</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden snap-start w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_140%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 opacity-0 align-bottom">
                            <div class="justify-center items-center w-full h-full flex absolute inset-0">
                              <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                            </div>
                          </div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 25k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Car Phone Holder</div>
                      </a></li>
                    <li class="float-left touch-pan-y min-w-52 overflow-x-hidden w-2/12"><a class="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:-outline-offset-2 focus-visible:outline-black/87" href="/top_products?catId=MY_BITL0_954%3Atop_sold">
                        <div class="flex relative">
                          <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png')] bg-no-repeat z-[1] bg-size-[2rem_2.5rem] w-8 h-10 absolute left-0 top-0"></div>
                          <div class="w-full pt-[100%] relative"><img class="inline w-full max-h-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 opacity-0 align-bottom">
                            <div class="justify-center items-center w-full h-full flex absolute inset-0">
                              <div class="bg-[url(&quot;data:image/svg+xml,%3Csvg%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20clip-rule=%27evenodd%27%20d=%27M21.4%2023.95a4.19%204.19%200%200%201-2.64%203.4c-0.83.35-1.94.54-2.82.48a9.28%209.28%200%200%201-3.84-0.97%209.62%209.62%200%200%201-1.55-1.03c-0.1-0.1-0.16-0.17-0.06-0.32l.63-0.89c.09-0.14.24-0.15.39-0.04l.19.15a7.53%207.53%200%200%200%204.25%201.58C18%2026.3%2019.5%2025.4%2019.78%2024c.3-1.54-0.96-2.86-3.37-3.6-0.77-0.23-2.7-0.98-3.05-1.19-1.68-0.96-2.46-2.22-2.35-3.77.17-2.14%202.21-3.75%204.8-3.77a8.94%208.94%200%200%201%204.76%201.4c.17.13.16.27.1.37l-0.54.83c-0.09.13-0.2.15-0.36.05a7.29%207.29%200%200%200-3.92-1.18c-1.77.03-3.1%201.06-3.2%202.46-0.01%201.27.98%202.2%203.08%202.9%204.34%201.36%205.99%202.96%205.67%205.46zM16.05%201.87c2.8%200%205.1%202.6%205.2%205.85H10.84c.1-3.25%202.4-5.85%205.2-5.85zm13.92%205.85h-6.75C23.05%203.42%2019.9%200%2016.05%200s-7%203.43-7.17%207.72H2.1a.62.62%200%200%200-0.6.66l.96%2020.7.01.18v.08A2.86%202.86%200%200%200%205.16%2032h21.45a3.06%203.06%200%200%200%200.06%200h.04a2.93%202.93%200%200%200%202.82-2.68v-0.02a2.3%202.3%200%200%200%200-0.15L30.6%208.36v-0.03a.62.62%200%200%200-0.62-0.6z%27%20fill=%27%23e5e4e4%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E&quot;)] bg-[50%] bg-no-repeat bg-contain w-16 max-w-full h-16 max-h-full"></div>
                            </div>
                          </div>
                          <div class="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26">Monthly Sales 27k+</div>
                        </div>
                        <div class="text-ellipsis [-webkit-line-clamp:2] text-neutral-600 text-left capitalize [word-break:break-word] text-lg font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-5">Inner Baju Muslimah</div>
                      </a></li>
                  </ul>
                </div><button class="[appearance:auto] z-[5] cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] border-[none] top-2/4 right-0 bg-white w-6 h-6 leading-6 -mt-3 translate-x-2/4"><svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
                    <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
                  </svg></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="z-0 relative">
        <div class="contents">
          <div>
            <div class="-mt-24">
              <div></div>
              <nav class="z-[999] w-full sticky bg-white shadow-sm mt-28 top-28">
                <ul class="[border-bottom-style:solid] flex border-b border-b-black/9">
                  <li class="select-none cursor-pointer justify-center items-center [font-family:SHPBurmese,SHPKhmer,-apple-system,Helvetica_Neue,Helvetica,Roboto,Droid_Sans,Arial,sans-serif] flex text-red-500 flex-none h-16 text-base font-medium relative px-12 py-4 w-full">
                    <div class="content-[&quot;&quot;] bg-red-500 w-full h-1 transition-opacity duration-300 absolute left-0 bottom-0"></div>
                    <div tabindex="0" class="text-ellipsis whitespace-nowrap text-red-500 uppercase items-center max-w-full flex relative overflow-x-hidden overflow-y-hidden group"><span class="leading-8">DAILY DISCOVER</span></div>
                  </li>
                </ul><i class="bg-red-500 h-0.5 transition-transform duration-500 ease-in-out absolute bottom-0 w-full hidden translate-x-[0%]"></i>
              </nav>
              <div>
                <section class="w-full min-h-16">
                  <div class="flex-wrap content-start min-h-[calc(100vh-theme(minHeight.44))] flex pt-1.5">
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/【READY-STOCK】ProMan-Men's-Loose-Saiz-Besar-Wide-Leg-High-end-Casual-Sports-Pants-joggers-pants-baggy-seluar-i.1651313091.49551769802?extraParams=%7B%22display_model_id%22%3A420162335242%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-821fr-mh9xity27z7u13_tn.webp" alt="【READY STOCK】ProMan Men's Loose Saiz Besar Wide Leg High-end Casual Sports Pants  joggers pants baggy seluar" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-50%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-50%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyanex37v2aoc2" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">【READY STOCK】ProMan Men's Loose Saiz Besar Wide Leg
                                    High-end Casual Sports Pants joggers pants baggy seluar</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">10.90</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">4k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">4k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100011&amp;itemid=49551769802&amp;shopid=1651313091">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Women's-volleyball-pants-with-a-slit-i.409642877.46253336033?extraParams=%7B%22display_model_id%22%3A196348382155%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/43b5664b276a4b9410034ea66f25957b_tn.webp" alt="Women's volleyball pants with a slit" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820lf-miv3cghuedxe44"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lf-miv3cghuedxe44" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Women's volleyball pants with a slit</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">New Arrival</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">7.59</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">5k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">5k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100637&amp;itemid=46253336033&amp;shopid=409642877">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/3-5bji-lok-dlm-laivv-je-i.294360246.45704139958?extraParams=%7B%22display_model_id%22%3A370391640687%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820li-mj3je93lkuf68c_tn.webp" alt="3-5bji lok dlm laivv je" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820lf-miv3cghuedxe44"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lf-miv3cghuedxe44" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">3-5bji lok dlm laivv je</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">New Arrival</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">10.00</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">53 sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">53 sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100533&amp;itemid=45704139958&amp;shopid=294360246">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Necklace-With-Heart-For-Women-Heart-Golden-Color-Necklace-Creative-Chain-Gift-i.537943747.24024440659?extraParams=%7B%22display_model_id%22%3A217436799467%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-7rd62-lu6a6suwlngv16_tn.webp" alt="Necklace With Heart For Women Heart Golden Color Necklace Creative Chain Gift" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-27%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-27%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyanex37v2aoc2" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">Necklace With Heart For Women Heart Golden Color Necklace
                                    Creative Chain Gift</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">2.84</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">5k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">5k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100009&amp;itemid=24024440659&amp;shopid=537943747">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Emas-RATU-(70.49g)-Gelang-Coco-King-Lebar-2.55cm-Daily-Wear-Premium-Fashion-Bracelet-Plated-Jewellery-(37RJ)-i.306269993.42369739356?extraParams=%7B%22display_model_id%22%3A234512541881%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-824j0-mesrfrd5bd3b70_tn.webp" alt="Emas RATU (70.49g) Gelang Coco King / Lebar 2.55cm / Daily Wear Premium Fashion Bracelet Plated Jewellery (37RJ)" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-95%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-95%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Emas RATU (70.49g) Gelang Coco King / Lebar 2.55cm / Daily
                                    Wear Premium Fashion Bracelet Plated Jewellery (37RJ)</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">RM6 off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">87.99</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">129 sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">129 sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100009&amp;itemid=42369739356&amp;shopid=306269993">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/BGM-POLO-LADIES-H-SHAPED-SLIP-ON-DENIM-SANDAL-BP-LS146HSD-KC-i.258404361.41726200625?extraParams=%7B%22display_model_id%22%3A350086401378%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820lc-mhk279tpof7m6f_tn.webp" alt="BGM POLO LADIES H-SHAPED SLIP-ON DENIM SANDAL-BP-LS146HSD-KC" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv2n0xs0pa843"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv2n0xs0pa843" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-63%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-63%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98t-lyaneblda3c031" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">BGM POLO LADIES H-SHAPED SLIP-ON DENIM
                                    SANDAL-BP-LS146HSD-KC</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">30% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">29.90</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100532&amp;itemid=41726200625&amp;shopid=258404361">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Cille-1.5L-2L-Trendy-Large-Capacity-Leakproof-Tritan-BPA-Free-Water-Bottle-i.500469301.15983998413?extraParams=%7B%22display_model_id%22%3A184337799137%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-821g2-mgwf9y7hzqx900_tn.webp" alt="Cille 1.5L/2L Trendy Large Capacity Leakproof Tritan BPA-Free Water Bottle" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-56%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-56%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyanex37v2aoc2" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">Cille 1.5L/2L Trendy Large Capacity Leakproof Tritan
                                    BPA-Free Water Bottle</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">19.47</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">50k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">50k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100636&amp;itemid=15983998413&amp;shopid=500469301">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Shawl-Floral-hoodie-Panjang-2-Meter-Materia-Chiffon-Easy-to-Wear-i.150704420.45504012593?extraParams=%7B%22display_model_id%22%3A440379065612%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820l5-miwzx63u7w1y53_tn.webp" alt="Shawl Floral hoodie | Panjang 2 Meter | Materia Chiffon| Easy to Wear" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820lf-miv3cghuedxe44"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lf-miv3cghuedxe44" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-25%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-25%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Shawl Floral hoodie | Panjang 2 Meter | Materia Chiffon| Easy
                                    to Wear</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">New Arrival</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">15% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">13.13</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10 sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10 sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100014&amp;itemid=45504012593&amp;shopid=150704420">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Aipods-4th-generation-wireless-Bluetooth-headphones-high-performance-audio-headphones-for-music-and-gaming-compatible-with-all-mobile-phones.-i.1578409975.41460929644?extraParams=%7B%22display_model_id%22%3A138381794592%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-824i1-mfe3zvrue97184_tn.webp" alt="Aipods 4th generation wireless Bluetooth headphones, high-performance audio headphones for music and gaming, compatible with all mobile phones." class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-79%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-79%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Aipods 4th generation wireless Bluetooth headphones,
                                    high-performance audio headphones for music and gaming, compatible with all mobile
                                    phones.</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">15.30</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">8k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">8k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100535&amp;itemid=41460929644&amp;shopid=1578409975">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/B.E.G-Fashion-Underarm-Bag-Women-Bow-Elegant-Bag-Handbag-Casual-Girls-Sling-Shoulder-Crossbody-Bag-Tote-Bag-murah-i.265057699.29515063661?extraParams=%7B%22display_model_id%22%3A215487694410%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-7repv-m2uljnfl00e3f1_tn.webp" alt="B.E.G Fashion Underarm Bag Women Bow Elegant Bag Handbag Casual Girls Sling Shoulder Crossbody Bag Tote Bag murah" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-1%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-1%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">B.E.G Fashion Underarm Bag Women Bow Elegant Bag Handbag
                                    Casual Girls Sling Shoulder Crossbody Bag Tote Bag murah</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">17.89</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100016&amp;itemid=29515063661&amp;shopid=265057699">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/-CLEARANCE-STOCKS-Ooobun-by-Neutrovis-HALAL-Assorted-Flavoured-Toast-Bread-Cake-12pcs-Value-Set-i.1096200606.48102822705?extraParams=%7B%22display_model_id%22%3A405271177361%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820lg-mj4zl3se5d6s91_tn.webp" alt="[CLEARANCE STOCKS] Ooobun by Neutrovis HALAL Assorted Flavoured Toast Bread &amp; Cake | 12pcs Value Set" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">[CLEARANCE STOCKS] Ooobun by Neutrovis HALAL Assorted
                                    Flavoured Toast Bread &amp; Cake | 12pcs Value Set</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">9.90</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">3k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">3k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100629&amp;itemid=48102822705&amp;shopid=1096200606">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/-READY-STOCK-G-SHOCK-56BB-KING-GX56BB-Watches-Sports-Men-Women-Watch-Jam-Tangan-Lelaki-Perempuan-i.1023968928.24163672971?extraParams=%7B%22display_model_id%22%3A245762522044%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-824hb-me5dolj8g4qpa4_tn.webp" alt="[READY STOCK] G-SHOCK 56BB KING GX56BB Watches Sports Men Women Watch Jam Tangan Lelaki Perempuan" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-81%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-81%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">[READY STOCK] G-SHOCK 56BB KING GX56BB Watches Sports Men
                                    Women Watch Jam Tangan Lelaki Perempuan</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">9.11</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">4k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">4k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100534&amp;itemid=24163672971&amp;shopid=1023968928">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/【0.00~-6.00】Magister-Contact-Lens-Power-Roze-14mm-Nude-Brown-Contact-Lenses-Natural-Korean-6-Months-i.1467000232.47800171115?extraParams=%7B%22display_model_id%22%3A385014222985%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-8225t-mhnmg1j106wwee_tn.webp" alt="【0.00~-6.00】Magister Contact Lens Power Roze 14mm Nude Brown Contact Lenses Natural Korean 6 Months" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-62%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-62%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">【0.00~-6.00】Magister Contact Lens Power Roze 14mm Nude Brown
                                    Contact Lenses Natural Korean 6 Months</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">5% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">9.60</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100001&amp;itemid=47800171115&amp;shopid=1467000232">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Yey-Mart-Premium-Men-PU-Leather-Clutch-Bag-Business-Pouch-Bag-Ipad-Sleeve-Case-Wallet-Pouch-Beg-Duit-Lelaki-i.870957280.25515044454?extraParams=%7B%22display_model_id%22%3A187330161994%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasc-m4lvtff9x4hl74_tn.webp" alt="Yey Mart Premium Men PU Leather Clutch Bag Business Pouch Bag Ipad Sleeve Case Wallet Pouch Beg Duit Lelaki" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-52%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-52%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyanex37v2aoc2" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">Yey Mart Premium Men PU Leather Clutch Bag Business Pouch
                                    Bag Ipad Sleeve Case Wallet Pouch Beg Duit Lelaki</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">14.45</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">307 sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">307 sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100533&amp;itemid=25515044454&amp;shopid=870957280">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/CkeyiN-2-in-1-13mm-Mini-Hair-Straightener-Man-Hair-Curler-Men-Iron-Hair-Cueler-Device-Hair-Styler-At-Home-or-Barber-夹发板-HF011-i.43706140.25627130829?extraParams=%7B%22display_model_id%22%3A207909642422%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/cn-11134207-820l4-micjo2413tae9d_tn.webp" alt="CkeyiN 2 in 1 13mm Mini Hair Straightener Man Hair Curler Men Iron Hair Cueler Device Hair Styler At Home or Barber 夹发板 HF011" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-55%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-55%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyandxizv3vkc1" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">CkeyiN 2 in 1 13mm Mini Hair Straightener Man Hair Curler
                                    Men Iron Hair Cueler Device Hair Styler At Home or Barber 夹发板 HF011</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">15% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">33.98</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">6k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">6k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100630&amp;itemid=25627130829&amp;shopid=43706140">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Latest-Casual-Black-School-Sneakers-for-Kids-i.868546644.28382105747?extraParams=%7B%22display_model_id%22%3A208387369155%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7r98v-lzczpir5o4zp69_tn.webp" alt="Latest Casual Black School Sneakers for Kids" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-49%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-49%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Latest Casual Black School Sneakers for Kids</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">15.94</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">20k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">20k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100633&amp;itemid=28382105747&amp;shopid=868546644">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Striped-V-neck-Blouse-Women-Casual-Korean-Style-Short-sleeve-T-shirt-i.804461328.29234088270?extraParams=%7B%22display_model_id%22%3A138309297766%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-7rep7-m8rywzrnmjtz94_tn.webp" alt="Striped V-neck Blouse Women Casual Korean Style Short-sleeve T-shirt" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-56%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-56%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyanex37v2aoc2" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">Striped V-neck Blouse Women Casual Korean Style
                                    Short-sleeve T-shirt</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">RM0.5 off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">18.70</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">848 sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">848 sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100017&amp;itemid=29234088270&amp;shopid=804461328">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/0.9-1.2-1.5-1.8-2.1-2.4M-Christmas-Tree-XMAS-Decor-Santa-Claus-Pokok-rsmas-Hiasan-Krismas-Gift-圣诞树-i.1351343849.25236826009?extraParams=%7B%22display_model_id%22%3A59833262409%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rdwv-md22urjw7romc1_tn.webp" alt="0.9/1.2/1.5/1.8/2.1/2.4M Christmas Tree XMAS Decor Santa Claus Pokok rsmas Hiasan Krismas Gift 圣诞树" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-96%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-96%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyanex37v2aoc2" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">0.9/1.2/1.5/1.8/2.1/2.4M Christmas Tree XMAS Decor Santa
                                    Claus Pokok rsmas Hiasan Krismas Gift 圣诞树</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">1.99</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">7k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">7k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100636&amp;itemid=25236826009&amp;shopid=1351343849">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Men's-Cotton-Combed-T-shirts-KOPI-Men's-Short-Sleeve-T-shirts-Men's-T-shirt-Tops-Men's-T-shirts-i.526176129.28905558688?extraParams=%7B%22display_model_id%22%3A88961966023%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-81zvw-mir6mzzktzba49_tn.webp" alt="Men's Cotton Combed T-shirts KOPI Men's Short Sleeve T-shirts Men's T-shirt Tops Men's T-shirts" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-6%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-6%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Men's Cotton Combed T-shirts KOPI Men's Short Sleeve T-shirts
                                    Men's T-shirt Tops Men's T-shirts</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">9.78</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">20k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">20k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100011&amp;itemid=28905558688&amp;shopid=526176129">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/seluar-dalam-bergaya-lelaki-5-helai-Set-seluar-boxer-bernafas-lembut-selesa-cepat-kering-murah-i.1363611523.25336311970?extraParams=%7B%22display_model_id%22%3A236800029302%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasj-m0fgy4n9b1hg67_tn.webp" alt="seluar dalam bergaya lelaki 5 helai Set, seluar boxer bernafas, lembut, selesa, cepat kering, murah" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-42%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-42%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyandxizv3vkc1" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">seluar dalam bergaya lelaki 5 helai Set, seluar boxer
                                    bernafas, lembut, selesa, cepat kering, murah</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">6.87</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">100k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">100k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100011&amp;itemid=25336311970&amp;shopid=1363611523">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/M-5XL-Men's-Ice-Silk-Loose-Casual-Wide-Leg-Sweatpants-baggy-seluar-slack-lelaki-sukan-tracksuit-man-straight-cut-Joggers-Plus-Size-Black-Grey-i.1252464999.26103037265?extraParams=%7B%22display_model_id%22%3A195553369179%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11110113-6v8hw-mfw9pyktnbpr7a_tn.webp" alt="M-5XL Men's Ice Silk Loose Casual Wide Leg Sweatpants baggy seluar slack lelaki sukan tracksuit man straight cut Joggers Plus Size Black\Grey" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyandxizv3vkc1" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">M-5XL Men's Ice Silk Loose Casual Wide Leg Sweatpants baggy
                                    seluar slack lelaki sukan tracksuit man straight cut Joggers Plus Size Black\Grey
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">10.90</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">20k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">20k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100011&amp;itemid=26103037265&amp;shopid=1252464999">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Botare-AIR-cushion-Cheerful-Tissue-hanging-tissue-tisu-gantung-tisu-muka-face-tissue-1280-sheets-175*175mm-i.238638062.27910428822?extraParams=%7B%22display_model_id%22%3A218324734350%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11110113-6v8ih-mfwa67m39zpo6b_tn.webp" alt="Botare AIR-cushion Cheerful Tissue hanging tissue tisu gantung tisu muka face tissue 1280 sheets 175*175mm" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-38%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-38%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Botare AIR-cushion Cheerful Tissue hanging tissue tisu
                                    gantung tisu muka face tissue 1280 sheets 175*175mm</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1 w-16">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">New User Exclusive</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">2.00</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">60k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">60k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100636&amp;itemid=27910428822&amp;shopid=238638062">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/【READY-STOCK-AT-Johor】-Hotgirl⭐Women's-casual-wide-leg-pants-loose-pants-straight-trousers(SIZE-S-3XL)-i.1569542449.41257158024?extraParams=%7B%22display_model_id%22%3A271410706684%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-7rdy2-mbqi414jhgt2f5_tn.webp" alt="【READY STOCK AT Johor】 Hotgirl⭐Women's casual wide leg pants loose pants straight trousers(SIZE: S-3XL)" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820la-miv1vifqo5jb2c"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820la-miv1vifqo5jb2c" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-51%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-51%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyandxizv3vkc1" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">【READY STOCK AT Johor】 Hotgirl⭐Women's casual wide leg
                                    pants loose pants straight trousers(SIZE: S-3XL)</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">12.69</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">7k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">7k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100017&amp;itemid=41257158024&amp;shopid=1569542449">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/NEW【-199-Speed-】-Rechargeable-Mini-Small-Fan-100-199-Wind-Speeds-Handheld-Super-Mute-High-Wind-Power-Desktop-Turbo-Fan-i.12609016.22364326554?extraParams=%7B%22display_model_id%22%3A138909797405%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820lf-mis80zq9akn608_tn.webp" alt="NEW【 199 Speed 】 Rechargeable Mini Small Fan 100-199-Wind-Speeds Handheld Super-Mute High Wind Power Desktop Turbo Fan" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-50%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-50%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyandxizv3vkc1" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">NEW【 199 Speed 】 Rechargeable Mini Small Fan
                                    100-199-Wind-Speeds Handheld Super-Mute High Wind Power Desktop Turbo Fan</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1 w-16">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">New User Exclusive</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">2.00</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">40k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">40k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100013&amp;itemid=22364326554&amp;shopid=12609016">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/【Tempat-Malaysia】CLIFF-men-seluar-slack-hitam-lelakis-lacks-panjang-peluh-longgar-kasual-Kelabu-Unis-Grey-trousers-i.1198160535.40304262040?extraParams=%7B%22display_model_id%22%3A340275968477%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasa-mcrfw6qvreol8d_tn.webp" alt="【Tempat Malaysia】CLIFF men seluar slack hitam lelakis lacks panjang peluh longgar kasual Kelabu Unis Grey trousers" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-59%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-59%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyanex37v2aoc2" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">【Tempat Malaysia】CLIFF men seluar slack hitam lelakis lacks
                                    panjang peluh longgar kasual Kelabu Unis Grey trousers</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">10.70</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">8k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">8k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100011&amp;itemid=40304262040&amp;shopid=1198160535">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Acesc-Latest-Women's-Sandals-A-Stylish-Trend-for-All-Outfits-i.1593340892.46104033882?extraParams=%7B%22display_model_id%22%3A365381339219%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-8224u-miyihc3u4idj69_tn.webp" alt="Acesc Latest Women's Sandals: A Stylish Trend for All Outfits" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820lf-miv3cghuedxe44"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lf-miv3cghuedxe44" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-59%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-59%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Acesc Latest Women's Sandals: A Stylish Trend for All Outfits
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">New Arrival</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">17.05</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">80 sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">80 sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100532&amp;itemid=46104033882&amp;shopid=1593340892">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Original-Pro4-Bluetooth-Earphone-With-Mic-Headphone-Mini-In-Ear-For-Android-Ios-i.789227979.19470160956?extraParams=%7B%22display_model_id%22%3A214539355157%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-22120-jf9fc1g9rnlv6f_tn.webp" alt="Original Pro4 Bluetooth Earphone With Mic Headphone Mini In-Ear For Android Ios" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-81%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-81%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Original Pro4 Bluetooth Earphone With Mic Headphone Mini
                                    In-Ear For Android Ios</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">1.79</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100535&amp;itemid=19470160956&amp;shopid=789227979">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/【Premium-220GSM-100-Cotton-T-Shirt】GXG-A-Bathing-Ape-Adults-Shark-Camouflage-Printed-Graphic-Tee-casual-men-i.1253146351.41362414981?extraParams=%7B%22display_model_id%22%3A281039460236%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-824ie-met9cjwgk26867_tn.webp" alt="【Premium 220GSM 100% Cotton T-Shirt】GXG&nbsp;A Bathing Ape   Adults  Shark Camouflage Printed Graphic Tee casual men" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820la-miv3m2h8g4qt82"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820la-miv3m2h8g4qt82" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-50%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-50%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">【Premium 220GSM 100% Cotton T-Shirt】GXG&nbsp;A Bathing Ape
                                    Adults Shark Camouflage Printed Graphic Tee casual men</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">Sea Shipping</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">12.68</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">675 sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">675 sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100011&amp;itemid=41362414981&amp;shopid=1253146351">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Dari-Johor~BeCoolMAN-Seluar-warna-pepejal-lelaki-Men-casual-pants-korean-Darkgray-Wide-leg-Long-Pants-seluar-hitam-i.1599979288.40914700796?extraParams=%7B%22display_model_id%22%3A262239418708%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-7rdxl-mdqusxunimck9f_tn.webp" alt="Dari Johor~BeCoolMAN Seluar warna pepejal lelaki Men casual pants korean Darkgray Wide-leg Long Pants seluar hitam" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820la-miv1vifqo5jb2c"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820la-miv1vifqo5jb2c" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-59%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-59%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyanex37v2aoc2" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">Dari Johor~BeCoolMAN Seluar warna pepejal lelaki Men casual
                                    pants korean Darkgray Wide-leg Long Pants seluar hitam</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-1">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">10.70</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">8k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">8k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100011&amp;itemid=40914700796&amp;shopid=1599979288">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/T-Shirt-POLO-Shirt-Horse-collar-8-Text-Black-Adult-Collar-T-Shirt-Shirt-Wangki-Men's-Polo-T-Shirt-Uniform-T-Shirt-i.935943483.25043547746?extraParams=%7B%22display_model_id%22%3A237626171102%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7r98s-lvrpzajdlh1r26_tn.webp" alt="T-Shirt POLO Shirt Horse collar 8 Text Black Adult Collar T-Shirt Shirt / Wangki Men's Polo T-Shirt / Uniform T-Shirt" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820lf-miv3cghuedxe44"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lf-miv3cghuedxe44" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-51%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-51%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">T-Shirt POLO Shirt Horse collar 8 Text Black Adult Collar
                                    T-Shirt Shirt / Wangki Men's Polo T-Shirt / Uniform T-Shirt</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">14.85</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100011&amp;itemid=25043547746&amp;shopid=935943483">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Salama-Baby-Diapers-Pants-50PCS-Ultra-thin-and-breathable-All-Size-S-M-L-XL-XXL-XXXL-Comfortable-Premium-Baby-Diaper-Tape-Pull-Up-i.1505485229.27232714375?extraParams=%7B%22display_model_id%22%3A39546694204%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/cn-11134207-7ras8-m8d6ut9z6wil1b_tn.webp" alt="Salama Baby Diapers Pants 50PCS Ultra-thin and breathable All Size S/M/L/XL/XXL/XXXL Comfortable Premium Baby Diaper Tape/ Pull Up" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-79%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-79%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyanex37v2aoc2" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">Salama Baby Diapers Pants 50PCS Ultra-thin and breathable
                                    All Size S/M/L/XL/XXL/XXXL Comfortable Premium Baby Diaper Tape/ Pull Up</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">14.99</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">80k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">80k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100632&amp;itemid=27232714375&amp;shopid=1505485229">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/-WATERPROOF-Hoodie-Boleh-Tanggal-Topi-Water-Resistant-Windbreaker-Unisex-Bomber-Jacket-EX-i.1364165199.28622928349?extraParams=%7B%22display_model_id%22%3A247426093039%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rasm-m4qy3hkzu11597_tn.webp" alt="[WATERPROOF] Hoodie Boleh Tanggal Topi Water-Resistant Windbreaker Unisex Bomber Jacket EX" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-83%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-83%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">[WATERPROOF] Hoodie Boleh Tanggal Topi Water-Resistant
                                    Windbreaker Unisex Bomber Jacket EX</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">RM2 off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">18.00</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100637&amp;itemid=28622928349&amp;shopid=1364165199">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/MODERN-BACKPACKS-FOR-KINDERGARTEN-OR-PAUD-CHILDREN-i.1510833143.28040048781?extraParams=%7B%22display_model_id%22%3A266126142502%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-7ras8-m4mc83d0x1a2b5_tn.webp" alt="MODERN BACKPACKS FOR KINDERGARTEN OR PAUD CHILDREN" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-40%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-40%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">MODERN BACKPACKS FOR KINDERGARTEN OR PAUD CHILDREN</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">3.23</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100633&amp;itemid=28040048781&amp;shopid=1510833143">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/《Mega-Deal》Cartoon-Animal-Insulated-Lunch-Bag-Reusable-Lunch-Box-Bag-Thermal-Bag-Suitable-For-Adults-Children-i.138500883.22811416011?extraParams=%7B%22display_model_id%22%3A240973958229%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rdxx-mcrxoklv87jw81_tn.webp" alt="《Mega Deal》Cartoon Animal Insulated Lunch Bag Reusable Lunch Box Bag Thermal Bag Suitable For Adults Children" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-65%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-65%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyanex37v2aoc2" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">《Mega Deal》Cartoon Animal Insulated Lunch Bag Reusable
                                    Lunch Box Bag Thermal Bag Suitable For Adults Children</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">30% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">3.50</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">200k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">200k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100636&amp;itemid=22811416011&amp;shopid=138500883">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Korean-Minus-Glasses-1-2-3-4-5-6-Zhijing-01-Korean-Fashion-Retro-Anti-Blue-Light-Anti-Radiation-Cat-Eye-Model-Minus-Reading-Glasses-cateye-zhijing-01-10.8-i.594730819.47201234727?extraParams=%7B%22display_model_id%22%3A292146971517%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-8227g-mhls3oqe0em8df_tn.webp" alt="Korean Minus Glasses -1,-2,-3,-4,-5 -6 Zhijing-01 Korean Fashion Retro Anti Blue Light Anti Radiation Cat Eye Model Minus Reading Glasses cateye zhijing-01 10.8" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820lf-miv3cghuedxe44"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lf-miv3cghuedxe44" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-66%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-66%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Korean Minus Glasses -1,-2,-3,-4,-5 -6 Zhijing-01 Korean
                                    Fashion Retro Anti Blue Light Anti Radiation Cat Eye Model Minus Reading Glasses
                                    cateye zhijing-01 10.8</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">8.69</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">4k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">4k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100009&amp;itemid=47201234727&amp;shopid=594730819">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Shades-Sunglasses-For-Women-Men-Sunglasses-Korean-Ladies-Big-Eyeglass-fashion-glasses-Aesthetic-shades-sunglasses-square-i.411756789.22957761046?extraParams=%7B%22display_model_id%22%3A89506975561%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-824hs-meou2o167w1s9b_tn.webp" alt="Shades Sunglasses For Women/Men Sunglasses Korean Ladies Big Eyeglass fashion glasses Aesthetic shades sunglasses square" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-92%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-92%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Shades Sunglasses For Women/Men Sunglasses Korean Ladies Big
                                    Eyeglass fashion glasses Aesthetic shades sunglasses square</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">30% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">0.40</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100009&amp;itemid=22957761046&amp;shopid=411756789">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/【MY-Stock】Mens-Watches-Quartz-Original-Stainless-Steel-Luminous-Dual-Calendar-Charm-Waterproof-Watch-i.1049673888.25885047577?extraParams=%7B%22display_model_id%22%3A256424746576%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/cn-11134207-820l4-mglo28nyji1b3e_tn.webp" alt="【MY Stock】Mens Watches Quartz Original Stainless Steel Luminous Dual Calendar Charm Waterproof Watch" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-50%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-50%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyandxizv3vkc1" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">【MY Stock】Mens Watches Quartz Original Stainless Steel
                                    Luminous Dual Calendar Charm Waterproof Watch</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">10% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">17.52</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">7k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">7k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100534&amp;itemid=25885047577&amp;shopid=1049673888">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Foldable-Laundry-Basket-Storage-Box-Waterproof-Large-Bag-Dirty-Clothes-Big-Laundry-Basket-i.411756789.8999179567?extraParams=%7B%22display_model_id%22%3A281665512229%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rff7-m9kogdk3kd91e5_tn.webp" alt="Foldable Laundry Basket Storage Box Waterproof Large Bag Dirty Clothes Big Laundry Basket" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-50%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-50%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Foldable Laundry Basket Storage Box Waterproof Large Bag
                                    Dirty Clothes Big Laundry Basket</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">30% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">3.99</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100636&amp;itemid=8999179567&amp;shopid=411756789">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Seagloca-New-Fashion-Korean-Solid-Simple-Multifunction-Short-Bifold-Wallet-For-Women-No-1643-i.243128102.22852746824?extraParams=%7B%22display_model_id%22%3A29724583966%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rdxe-mdgd2sky6ghoae_tn.webp" alt="Seagloca New Fashion Korean Solid Simple Multifunction Short Bifold Wallet For Women No 1643" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-40%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-40%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyandxizv3vkc1" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">Seagloca New Fashion Korean Solid Simple Multifunction
                                    Short Bifold Wallet For Women No 1643</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">30% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">15.84</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">10k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100016&amp;itemid=22852746824&amp;shopid=243128102">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/200GSM-Unisex-Seluar-Budak-Panjang-Sekolah-Rendah-Sukan-Budak-Unisex-Kid-Pants-Kid-Long-Pant-School-Pants-for-Kids-i.102768125.24484225619?extraParams=%7B%22display_model_id%22%3A157401750757%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11110113-6v8hd-mfwayss1se89b1_tn.webp" alt="200GSM Unisex Seluar Budak Panjang Sekolah Rendah Sukan Budak / Unisex Kid Pants / Kid Long Pant School Pants for Kids" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-11%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-11%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">200GSM Unisex Seluar Budak Panjang Sekolah Rendah Sukan Budak
                                    / Unisex Kid Pants / Kid Long Pant School Pants for Kids</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-16">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">New User Exclusive</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">8.00</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">70k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">70k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100633&amp;itemid=24484225619&amp;shopid=102768125">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/AMELIA-GARY-SLING-BAG-Unisex-Fashion-Korean-Style-Sling-Bag-i.256020598.27591650875?extraParams=%7B%22display_model_id%22%3A301591364159%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/id-11134207-8224w-mh7ara1akop616_tn.webp" alt="AMELIA GARY SLING BAG - Unisex Fashion Korean Style Sling Bag" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820lf-miv3cghuedxe44"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lf-miv3cghuedxe44" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-89%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-89%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">AMELIA GARY SLING BAG - Unisex Fashion Korean Style Sling Bag
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">4.29</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">3k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">3k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100016&amp;itemid=27591650875&amp;shopid=256020598">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/-Ready-Stock-5-PAIRS-PACK-Cute-Cartoon-Fruits-Embroidery-Cotton-Socks-Women-Low-Cut-Stocking-Stokin-Comel-Women-袜子-i.667054736.43962481472?extraParams=%7B%22display_model_id%22%3A271975885887%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-8262i-mj5l93ncvapt63_tn.webp" alt="[Ready Stock] 5 PAIRS/PACK Cute Cartoon &amp; Fruits Embroidery Cotton Socks Women Low-Cut Stocking Stokin Comel Women 袜子" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyanex37v2aoc2" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">[Ready Stock] 5 PAIRS/PACK Cute Cartoon &amp; Fruits
                                    Embroidery Cotton Socks Women Low-Cut Stocking Stokin Comel Women 袜子</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">4.50</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">1k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100017&amp;itemid=43962481472&amp;shopid=667054736">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/7-in1-Cordless-Vacuum-Cleaner-and-blower-26000Pa-USB-Rechargeable-Wireless-Car-Vacuum-portable-Small-Vacuum-Wet-And-Dry-i.1263063774.27353481107?extraParams=%7B%22display_model_id%22%3A205191716945%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/cn-11134207-7ras8-m2o3ov20ks7n53_tn.webp" alt="7 in1 Cordless Vacuum Cleaner and blower 26000Pa USB Rechargeable Wireless Car Vacuum portable Small Vacuum Wet And Dry" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-49%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-49%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">7 in1 Cordless Vacuum Cleaner and blower 26000Pa USB
                                    Rechargeable Wireless Car Vacuum portable Small Vacuum Wet And Dry</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">10% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">16.90</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">5k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">5k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100010&amp;itemid=27353481107&amp;shopid=1263063774">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/KECREA-Mini-Whisk-Egg-Beater-Milk-Coffee-Frother-i.1223217335.26443201815?extraParams=%7B%22display_model_id%22%3A267039515279%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/cn-11134207-820l4-mg1xnkuot24ue3_tn.webp" alt="KECREA Mini Whisk Egg Beater Milk Coffee Frother" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-91%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-91%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98t-lyaneblda3c031" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">KECREA Mini Whisk Egg Beater Milk Coffee Frother</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">2.10</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">5k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">5k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100636&amp;itemid=26443201815&amp;shopid=1223217335">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/Adjustable-Unisex-Classic-Bracelet-316L-Stainless-Steel-for-Women-and-Man-i.1032167676.29061819007?extraParams=%7B%22display_model_id%22%3A147470592816%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-7rdwd-mdh0zqmc5lqtff_tn.webp" alt="Adjustable Unisex Classic Bracelet 316L Stainless Steel for Women and Man" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-20%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-20%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">Adjustable Unisex Classic Bracelet 316L Stainless Steel for
                                    Women and Man</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">18% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">7.85</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">30k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">30k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100009&amp;itemid=29061819007&amp;shopid=1032167676">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/LABER-LEE-Men's-Long-Wallets-Multi-function-Business-Clutch-Bag-Multi-card-Large-Capacity-Mens-Wallet-Coin-Pouch-i.345524236.41674642165?extraParams=%7B%22display_model_id%22%3A271997410756%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-82592-mfxhcvu6xt6zca_tn.webp" alt="LABER LEE Men's Long Wallets Multi-function Business Clutch Bag Multi-card Large Capacity Mens Wallet Coin Pouch" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-75%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-75%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyandxizv3vkc1" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">LABER LEE Men's Long Wallets Multi-function Business Clutch
                                    Bag Multi-card Large Capacity Mens Wallet Coin Pouch</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">50% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">15.36</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">137 sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">137 sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100533&amp;itemid=41674642165&amp;shopid=345524236">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/1PCS-T10-W5W-lens-Led-Flash-Strobe-Bulb-194-WY5W-Flashing-Interior-Parking-License-Plate-Signal-Lamp-12V-Car-Tail-Light-i.171111387.29471968170?extraParams=%7B%22display_model_id%22%3A198104429441%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134253-824j0-menxcub1wxs0c2_tn.webp" alt="1PCS T10 W5W lens Led Flash Strobe Bulb 194 WY5W Flashing Interior Parking License Plate Signal Lamp 12V Car Tail Light" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-93%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-93%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98w-lyanex37v2aoc2" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">1PCS T10 W5W lens Led Flash Strobe Bulb 194 WY5W Flashing
                                    Interior Parking License Plate Signal Lamp 12V Car Tail Light</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-teal-500">COD</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">1.19</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">70k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">70k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100640&amp;itemid=29471968170&amp;shopid=171111387">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="w-2/12 p-1.5">
                      <div class="[tab-size:4] contents">
                        <div class="disabled:cursor-default relative h-full border border-solid border-black/9 duration-100 ease-in-out hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow active:shadow rounded-md group" aria-hidden="true"><a class="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents" href="/POLO-HILL-Ladies-Casual-Slide-Sandals-PLSS-LS5428-i.29993877.25090322541?extraParams=%7B%22display_model_id%22%3A178654062974%2C%22model_selection_logic%22%3A3%7D">
                            <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-full cursor-pointer flex-col overflow-x-hidden overflow-y-hidden bg-white rounded-md">
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7rash-mcugzjwfqxat26_tn.webp" alt="POLO HILL Ladies Casual Slide Sandals PLSS-LS5428" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain" loading="lazy" aria-hidden="true">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 left-0 z-10 w-full" aria-label="image overlay,src:https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l7-miv275mlx79f2b" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default w-full" alt="custom-overlay"></div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden="true">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default h-5 w-5 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee/_/_item-card-centralisation/0.0.64/pc/43bd6a890841685e2fea.svg')] bg-no-repeat bg-cover"></div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
                                  <span aria-label="-75%" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>-75%
                                </div>
                              </div>
                              <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mb-2 flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5"><img src="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-7r98t-lyaneblda3c031" alt="flag-label" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-0.5 inline-block h-3.5">POLO HILL Ladies Casual Slide Sandals PLSS-LS5428</div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex h-5 items-center overflow-x-hidden overflow-y-hidden text-xs mt-1" aria-hidden="true">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none relative flex h-4 max-w-full items-center overflow-x-hidden overflow-y-hidden text-ellipsis px-1 py-0.5 text-xs leading-4 shadow m-px rounded-sm">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-red-500">Shopee Lagi Murah</span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-x-hidden overflow-y-hidden text-ellipsis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -mr-px h-full flex-none">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                        <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden px-px text-xs leading-4 text-white bg-amber-500">30% off</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="border-0 border-solid border-gray-200 overflow-x-hidden overflow-y-hidden after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default -ml-px h-full flex-none rotate-180">
                                          <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" class="fill-amber-500 stroke-amber-500 border-0 border-solid border-gray-200 after:border-0 after:border-solid after:border-gray-200 before:border-0 before:border-solid before:border-gray-200 disabled:cursor-default">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-col justify-between">
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-1 flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                                      <span aria-label="promotion price" class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default"></span>
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                                        <span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">RM</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">29.90</span><span class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium"></span>
                                      </div>
                                    </div>
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default ml-auto whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">9k+ sold</div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full items-center justify-between mt-2">
                                    <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center">
                                      <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87">9k+ sold</div>
                                    </div>
                                  </div>
                                  <div class="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex grow items-center justify-center mt-2"></div>
                                </div>
                              </div>
                            </div>
                          </a><a class="active:outline-0 hover:outline-0 disabled:cursor-default absolute -left-px top-[calc(100%-6px)] z-[-1] box-content h-8 w-full rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 pt-1.5 text-center text-sm leading-8 text-white opacity-0 duration-100 group-hover:opacity-100" href="/find_similar_products?catid=100532&amp;itemid=25090322541&amp;shopid=29993877">Find Similar</a></div>
                      </div>
                    </div>
                    <div class="text-center w-full mt-5"><a class="no-underline text-ellipsis [-webkit-line-clamp:1] capitalize cursor-pointer flex-col justify-center items-center text-sm rounded-sm inline-flex max-w-56 px-5 outline-0 bg-white relative shadow-sm border border-solid border-black/9 text-neutral-600 min-w-96 h-10 hover:bg-black/2 active:shadow-inner active:bg-black/2 focus-visible:before:content-[&quot;&quot;] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87" href="/daily_discover?pageNumber=2">See More</a></div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  @keyframes second-ten {
    0% {
      transform: translateY(0);
    }
    15% {
      transform: translateY(0);
    }
    16.66% {
      transform: translateY(-17px);
    }
    31.66% {
      transform: translateY(-17px);
    }
    33.33% {
      transform: translateY(-34px);
    }
    48.33% {
      transform: translateY(-34px);
    }
    50% {
      transform: translateY(-51px);
    }
    65% {
      transform: translateY(-51px);
    }
    66.66% {
      transform: translateY(-68px);
    }
    81.66% {
      transform: translateY(-68px);
    }
    83.33% {
      transform: translateY(-85px);
    }
    98.33% {
      transform: translateY(-85px);
    }
    to {
      transform: translateY(-102px);
    }
  }
  @keyframes second-digit {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(-17px);
    }
    20% {
      transform: translateY(-34px);
    }
    30% {
      transform: translateY(-51px);
    }
    40% {
      transform: translateY(-68px);
    }
    50% {
      transform: translateY(-85px);
    }
    60% {
      transform: translateY(-102px);
    }
    70% {
      transform: translateY(-119px);
    }
    80% {
      transform: translateY(-136px);
    }
    90% {
      transform: translateY(-153px);
    }
    to {
      transform: translateY(-170px);
    }
  }
  @keyframes minute-ten {
    0% {
      transform: translateY(0);
    }
    16.6389% {
      transform: translateY(0);
    }
    16.6667% {
      transform: translateY(-17px);
    }
    33.3056% {
      transform: translateY(-17px);
    }
    33.3333% {
      transform: translateY(-34px);
    }
    49.9722% {
      transform: translateY(-34px);
    }
    50% {
      transform: translateY(-51px);
    }
    66.6389% {
      transform: translateY(-51px);
    }
    66.6667% {
      transform: translateY(-68px);
    }
    83.3056% {
      transform: translateY(-68px);
    }
    83.3333% {
      transform: translateY(-85px);
    }
    99.9722% {
      transform: translateY(-85px);
    }
    to {
      transform: translateY(-102px);
    }
  }
  @keyframes minute-digit {
    0% {
      transform: translateY(0);
    }
    9.833% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(-17px);
    }
    19.833% {
      transform: translateY(-17px);
    }
    20% {
      transform: translateY(-34px);
    }
    29.833% {
      transform: translateY(-34px);
    }
    30% {
      transform: translateY(-51px);
    }
    39.833% {
      transform: translateY(-51px);
    }
    40% {
      transform: translateY(-68px);
    }
    49.833% {
      transform: translateY(-68px);
    }
    50% {
      transform: translateY(-85px);
    }
    59.833% {
      transform: translateY(-85px);
    }
    60% {
      transform: translateY(-102px);
    }
    69.833% {
      transform: translateY(-102px);
    }
    70% {
      transform: translateY(-119px);
    }
    79.833% {
      transform: translateY(-119px);
    }
    80% {
      transform: translateY(-136px);
    }
    89.833% {
      transform: translateY(-136px);
    }
    90% {
      transform: translateY(-153px);
    }
    99.833% {
      transform: translateY(-153px);
    }
    to {
      transform: translateY(-170px);
    }
  }
  @keyframes hour-ten {
    0% {
      transform: translateY(0);
    }
    9.99972% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(-17px);
    }
    19.9997% {
      transform: translateY(-17px);
    }
    20% {
      transform: translateY(-34px);
    }
    29.9997% {
      transform: translateY(-34px);
    }
    30% {
      transform: translateY(-51px);
    }
    39.9997% {
      transform: translateY(-51px);
    }
    40% {
      transform: translateY(-68px);
    }
    49.9997% {
      transform: translateY(-68px);
    }
    50% {
      transform: translateY(-85px);
    }
    59.9997% {
      transform: translateY(-85px);
    }
    60% {
      transform: translateY(-102px);
    }
    69.9997% {
      transform: translateY(-102px);
    }
    70% {
      transform: translateY(-119px);
    }
    79.9997% {
      transform: translateY(-119px);
    }
    80% {
      transform: translateY(-136px);
    }
    89.9997% {
      transform: translateY(-136px);
    }
    90% {
      transform: translateY(-153px);
    }
    99.9997% {
      transform: translateY(-153px);
    }
    to {
      transform: translateY(-170px);
    }
  }
  @keyframes hour-digit {
    0% {
      transform: translateY(0);
    }
    9.99722% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(-17px);
    }
    19.9972% {
      transform: translateY(-17px);
    }
    20% {
      transform: translateY(-34px);
    }
    29.9972% {
      transform: translateY(-34px);
    }
    30% {
      transform: translateY(-51px);
    }
    39.9972% {
      transform: translateY(-51px);
    }
    40% {
      transform: translateY(-68px);
    }
    49.9972% {
      transform: translateY(-68px);
    }
    50% {
      transform: translateY(-85px);
    }
    59.9972% {
      transform: translateY(-85px);
    }
    60% {
      transform: translateY(-102px);
    }
    69.9972% {
      transform: translateY(-102px);
    }
    70% {
      transform: translateY(-119px);
    }
    79.9972% {
      transform: translateY(-119px);
    }
    80% {
      transform: translateY(-136px);
    }
    89.9972% {
      transform: translateY(-136px);
    }
    90% {
      transform: translateY(-153px);
    }
    99.9972% {
      transform: translateY(-153px);
    }
    to {
      transform: translateY(-170px);
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