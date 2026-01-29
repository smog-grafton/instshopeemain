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

This html and css is extracted from `https://shopee.com.my/` via the selector `div.R3bOnT`. Don't call the component the name of the website, choose a name that is more generic.
The original background color for this html is `rgb(245, 245, 245)` (the color of the plane behind the html). When integrating the component into the project, make sure the background color of the location, where the new component is placed, matches the theme of the original background color. It doesn't need to be exactly the same, but the theme should match (light, dark, etc.).

**Skip any css if:**
- It is common and already included through Tailwind's Preflight styles (must be generic and not custom).
- It is already defined by the projects global css.

**Important:**
If the css contains a layer statement (e.g. `@layer base, component;`), you must not skip it and you must insert this statement at the top most position of the global css file, even above any Tailwind at-rules like `@import "tailwindcss"`, `@tailwind base;`, `@tailwind components;` or `@tailwind utilities;`. Furthermore, you must preserve any css layer blocks (e.g. `@layer base { ... }`) with their order, when including styles. Integrate the layer blocks somewhere in the global css file, most likely at the end of the file. Any deviation from this, and the styles might break.

```html
<div class="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 pt-5" id="component">
  <div class="bg-white justify-between items-center h-8 flex px-5 py-4">
    <div class="flex">
      <div class="uppercase h-8 leading-8 bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/c24d146bf7ed59b291bf.png')] bg-[50%_4px] bg-contain bg-no-repeat w-40 mr-3" aria-label="title Flash Deals" tabindex="0"></div>
      <div class="[backface-visibility:hidden] text-black cursor-default items-center flex scale-[0.84]" aria-label="ending in 3 hours 13 minutes" tabindex="0">
        <div class="box-content text-center bg-current justify-around min-w-5 h-4 text-xl leading-5 flex overflow-x-hidden overflow-y-hidden mb-1 px-[3px] py-px rounded-sm">
          <div class="w-2.5 h-48 inline-block overflow-x-hidden overflow-y-hidden [animation-name:hour-ten] [animation-duration:360000s] [animation-iteration-count:infinite] [animation-delay:-384442s]">
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
          <div class="w-2.5 h-48 inline-block overflow-x-hidden overflow-y-hidden [animation-name:hour-digit] [animation-duration:36000s] [animation-iteration-count:infinite] [animation-delay:-28042s]">
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
          <div class="w-2.5 h-48 inline-block overflow-x-hidden overflow-y-hidden [animation-name:minute-ten] [animation-duration:3600s] [animation-iteration-count:infinite] [animation-delay:-3442s]">
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
          <div class="w-2.5 h-48 inline-block overflow-x-hidden overflow-y-hidden [animation-name:minute-digit] [animation-duration:600s] [animation-iteration-count:infinite] [animation-delay:-502s]">
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
          <div class="w-2.5 h-48 inline-block overflow-x-hidden overflow-y-hidden [animation-name:second-ten] [animation-duration:60s] [animation-iteration-count:infinite] [animation-delay:-32s]">
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
          <div class="w-2.5 h-48 inline-block overflow-x-hidden overflow-y-hidden [animation-name:second-digit] [animation-duration:10s] [animation-iteration-count:infinite] [animation-delay:-3s]">
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
    </div><a class="no-underline text-red-500 active:outline-0 hover:outline-0" aria-label="click, enter flash sale button See All" href="/shocking_sale?promotionId=228338556026880">See All&nbsp;<svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="align-baseline fill-current w-2.5 h-2.5 inline-block relative overflow-x-hidden overflow-y-hidden text-xs">
        <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
      </svg></a>
  </div>
  <div class="w-full h-full relative">
    <div class="touch-pan-y h-full overflow-x-hidden overflow-y-hidden">
      <ul class="h-full flex relative w-[266.667%]">
        <li class="float-left touch-pan-y overflow-x-hidden w-2/12">
          <div class="h-full">
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="ZANZEA Women Vintage Loose Long Harem Elastic Waist Side Pockets Retro Pant  promotion off 51% current price RM28.32 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=13873413339&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                        </svg></div>-51%
                    </div>
                  </div>
                  <div class="bg-white w-full h-full relative">
                    <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                      <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                        <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/6ba14252b9facdb2a91c.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                      </div>
                    </div>
                    <div class="z-[2] w-full h-full absolute left-0 top-0">
                      <div class="transition-opacity duration-200 z-[2] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l6-mjntmvg4i0p279/_tn')] bg-no-repeat bg-contain"></div>
                    </div>
                    <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      <div class="transition-opacity duration-200 z-[1] bg-[50%] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/b73827d0b232271465df75c3be705439/_tn')] bg-no-repeat bg-contain"></div>
                    </div>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="h-[inherit] flex-col items-stretch flex py-4">
                    <div class="flex-col items-center flex mb-1.5">
                      <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                        <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                          <span class="text-lg font-medium mr-0.5">RM</span><strong>28.32</strong></div>
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
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="OMOS Unisex Kargo Seluar Panjang Perempuan Wanita Cargo Long Pants Fashion Women Warna Kasual 10 Warna Oversized Cutting  promotion off 29% current price RM9.41 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=41625656547&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                        </svg></div>-29%
                    </div>
                  </div>
                  <div class="bg-white w-full h-full relative">
                    <div class="z-[3] w-full h-full absolute left-0 -top-0.5"></div>
                    <div class="z-[2] w-full h-full absolute left-0 top-0">
                      <div class="transition-opacity duration-200 z-[2] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820lh-mjnuo72vjeo679/_tn')] bg-no-repeat bg-contain"></div>
                    </div>
                    <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      <div class="transition-opacity duration-200 z-[1] bg-[50%] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-820lb-mgc2newqrf9l5f/_tn')] bg-no-repeat bg-contain"></div>
                    </div>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="h-[inherit] flex-col items-stretch flex py-4">
                    <div class="flex-col items-center flex mb-1.5">
                      <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                        <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                          <span class="text-lg font-medium mr-0.5">RM</span><strong>9.41</strong></div>
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
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="🇲🇾READY STOCK UKLI TRANSPARENT POLARISED PREMIUM OKL HIGH QUALITY MEN WOMEN UNISEX SUNGLASSES PREMIUM CERMIN MATA HIT  promotion off 70% current price RM30.63 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=28102881814&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                    <div class="z-[3] w-full h-full absolute left-0 -top-0.5"></div>
                    <div class="z-[2] w-full h-full absolute left-0 top-0">
                      <div class="transition-opacity duration-200 z-[2] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l6-mjntmvg4i0p279/_tn')] bg-no-repeat bg-contain"></div>
                    </div>
                    <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      <div class="transition-opacity duration-200 z-[1] bg-[50%] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134207-7r98q-lwikwrk19njke2/_tn')] bg-no-repeat bg-contain"></div>
                    </div>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="h-[inherit] flex-col items-stretch flex py-4">
                    <div class="flex-col items-center flex mb-1.5">
                      <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                        <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                          <span class="text-lg font-medium mr-0.5">RM</span><strong>30.63</strong></div>
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
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="Daduhey raya 2024 Waist Adjustment Reduce Waist Size Anti-Glare Brooch  promotion off 26% current price RM4.44 Only 8 Left click, enter flash sale" href="/shocking_sale?fromItem=19106708135&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                        </svg></div>-26%
                    </div>
                  </div>
                  <div class="bg-white w-full h-full relative">
                    <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                      <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                        <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/6ba14252b9facdb2a91c.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                      </div>
                    </div>
                    <div class="z-[2] w-full h-full absolute left-0 top-0">
                      <div class="transition-opacity duration-200 z-[2] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l6-mjntmvg4i0p279/_tn')] bg-no-repeat bg-contain"></div>
                    </div>
                    <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      <div class="transition-opacity duration-200 z-[1] bg-[50%] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134201-7rce2-lskrirr2fttwf4/_tn')] bg-no-repeat bg-contain"></div>
                    </div>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="h-[inherit] flex-col items-stretch flex py-4">
                    <div class="flex-col items-center flex mb-1.5">
                      <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                        <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                          <span class="text-lg font-medium mr-0.5">RM</span><strong>4.44</strong></div>
                      </div>
                    </div>
                    <div class="px-2.5">
                      <div class="w-full relative h-4">
                        <div class="z-[4] bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/4f05fdd32e72cde6dc74.png')] bg-contain bg-no-repeat absolute left-[0.1875rem] -top-1.5 w-5 h-5"></div>
                        <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Only 8 Left</div>
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
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="80pcs Kitchen Cleaning Wipes - Heavy Duty Degreasing Wipes for Stove,  Stain Removal | Tisu Basah Dapur  promotion off 75% current price RM0.86 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=25276087091&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                      <div class="transition-opacity duration-200 z-[2] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l6-mjntmvg4i0p279/_tn')] bg-no-repeat bg-contain"></div>
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
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="《Mega Deal》Men Casual Pants Man Long Pants Sports Wear Seluar Lelaki Jogger Pants Seluar Sukan Casual  promotion off 56% current price RM6.10 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=23479543390&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                        </svg></div>-56%
                    </div>
                  </div>
                  <div class="bg-white w-full h-full relative">
                    <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                      <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                        <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/aafff91b7caa45e7284b.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                      </div>
                    </div>
                    <div class="z-[2] w-full h-full absolute left-0 top-0">
                      <div class="transition-opacity duration-200 z-[2] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820l6-mjntmvg4i0p279/_tn')] bg-no-repeat bg-contain"></div>
                    </div>
                    <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      <div class="transition-opacity duration-200 z-[1] bg-[50%] w-full h-full absolute left-0 top-0 bg-[url('https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134211-7r98u-lldhdy9lx8hga5/_tn')] bg-no-repeat bg-contain"></div>
                    </div>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="h-[inherit] flex-col items-stretch flex py-4">
                    <div class="flex-col items-center flex mb-1.5">
                      <div class="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                        <div class="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                          <span class="text-lg font-medium mr-0.5">RM</span><strong>6.10</strong></div>
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
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="《Mega Deal》Ice Silk Seamless Underwear Middle Waist Panties Women Clothing  promotion off 82% current price RM0.90 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=2167390081&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                        </svg></div>-82%
                    </div>
                  </div>
                  <div class="bg-white w-full h-full relative">
                    <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                      <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                        <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/aafff91b7caa45e7284b.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                      </div>
                    </div>
                    <div class="z-[2] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0"></div>
                      <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                    </div>
                    <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      </div>
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
                          <span class="text-lg font-medium mr-0.5">RM</span><strong>0.90</strong></div>
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
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="200GSM Unisex Seluar Budak Panjang Sekolah Rendah Sukan Budak / Unisex Kid Pants / Kid Long Pant School Pants for Kids  promotion off 28% current price RM4.55 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=24484225619&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                        </svg></div>-28%
                    </div>
                  </div>
                  <div class="bg-white w-full h-full relative">
                    <div class="z-[3] w-full h-full absolute left-0 -top-0.5"></div>
                    <div class="z-[2] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0"></div>
                      <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                    </div>
                    <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      </div>
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
                          <span class="text-lg font-medium mr-0.5">RM</span><strong>4.55</strong></div>
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
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="ELGINI E16230 Baju Polo Mikrofiber S-XXL | Microfiber Polo Shirt  promotion off 38% current price RM10.79 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=28901773890&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                        </svg></div>-38%
                    </div>
                  </div>
                  <div class="bg-white w-full h-full relative">
                    <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                      <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                        <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/6ba14252b9facdb2a91c.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                      </div>
                    </div>
                    <div class="z-[2] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0"></div>
                      <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                    </div>
                    <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      </div>
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
                          <span class="text-lg font-medium mr-0.5">RM</span><strong>10.79</strong></div>
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
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="seluar dalam bergaya lelaki 5 helai Set, seluar boxer bernafas, lembut, selesa, cepat kering, murah  promotion off 36% current price RM7.60 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=25336311970&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                        </svg></div>-36%
                    </div>
                  </div>
                  <div class="bg-white w-full h-full relative">
                    <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                      <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                        <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/aafff91b7caa45e7284b.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                      </div>
                    </div>
                    <div class="z-[2] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0"></div>
                      <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                    </div>
                    <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      </div>
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
                          <span class="text-lg font-medium mr-0.5">RM</span><strong>7.60</strong></div>
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
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="ELGINI E16028 Seluar Track Slim-Fit S-XXL | Slim-Fit Track Pants  promotion off 3% current price RM23.90 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=6571292577&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                        </svg></div>-3%
                    </div>
                  </div>
                  <div class="bg-white w-full h-full relative">
                    <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                      <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                        <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/6ba14252b9facdb2a91c.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                      </div>
                    </div>
                    <div class="z-[2] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0"></div>
                      <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                    </div>
                    <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      </div>
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
                          <span class="text-lg font-medium mr-0.5">RM</span><strong>23.90</strong></div>
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
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="《Mega Deal》Man Casual Long Pants Jogger Pants Long Sport Pants with Pocket Seluar Panjang Lekaki Straight Cut  promotion off 39% current price RM6.78 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=21488608574&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                        </svg></div>-39%
                    </div>
                  </div>
                  <div class="bg-white w-full h-full relative">
                    <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                      <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                        <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/aafff91b7caa45e7284b.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                      </div>
                    </div>
                    <div class="z-[2] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0"></div>
                      <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                    </div>
                    <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      </div>
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
                          <span class="text-lg font-medium mr-0.5">RM</span><strong>6.78</strong></div>
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
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="《Mega Deal》Men Long Pants Men Pants Men Sport Pants Jogging Pants Seluar Lelaki Seluar Panjang  promotion off 56% current price RM6.10 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=17770959401&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                        </svg></div>-56%
                    </div>
                  </div>
                  <div class="bg-white w-full h-full relative">
                    <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                      <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                        <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/aafff91b7caa45e7284b.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                      </div>
                    </div>
                    <div class="z-[2] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0"></div>
                      <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                    </div>
                    <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      </div>
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
                          <span class="text-lg font-medium mr-0.5">RM</span><strong>6.10</strong></div>
                      </div>
                    </div>
                    <div class="px-2.5">
                      <div class="w-full relative h-4">
                        <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                        <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[7%] rounded-tl-lg rounded-bl-lg"></div>
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
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="ELGINI E16043 Seluar Trek Kanak-Kanak S-XXL | Kids’ Track Pants  promotion off 7% current price RM19.15 Selling Fast click, enter flash sale" href="/shocking_sale?fromItem=7977596727&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                        </svg></div>-7%
                    </div>
                  </div>
                  <div class="bg-white w-full h-full relative">
                    <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                      <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                        <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/6ba14252b9facdb2a91c.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                      </div>
                    </div>
                    <div class="z-[2] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0"></div>
                      <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                    </div>
                    <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      </div>
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
                          <span class="text-lg font-medium mr-0.5">RM</span><strong>19.15</strong></div>
                      </div>
                    </div>
                    <div class="px-2.5">
                      <div class="w-full relative h-4">
                        <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">Selling Fast</div>
                        <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[9%] rounded-tl-lg rounded-bl-lg"></div>
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
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="《Mega Deal》High/Middle Waist Underwear Cotton Underpants Breathable Female Panties Innerwear Seluar Dalam Wanita  promotion off 63% current price RM2.55 25 sold click, enter flash sale" href="/shocking_sale?fromItem=13321169027&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                        </svg></div>-63%
                    </div>
                  </div>
                  <div class="bg-white w-full h-full relative">
                    <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                      <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                        <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/aafff91b7caa45e7284b.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                      </div>
                    </div>
                    <div class="z-[2] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0"></div>
                      <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                    </div>
                    <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      </div>
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
                          <span class="text-lg font-medium mr-0.5">RM</span><strong>2.55</strong></div>
                      </div>
                    </div>
                    <div class="px-2.5">
                      <div class="w-full relative h-4">
                        <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">25 sold</div>
                        <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[11%] rounded-tl-lg rounded-bl-lg"></div>
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
            <div class="bg-white flex-col flex relative w-52 h-64 px-4"><a aria-label="ELGINI E16222 Seluar Latihan Potongan Lurus S-XXL | Straight-Cut Training Pants  promotion off 3% current price RM25.90 19 sold click, enter flash sale" href="/shocking_sale?fromItem=25663673878&amp;promotionId=228338556026880" class="no-underline active:outline-0 hover:outline-0">
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
                        </svg></div>-3%
                    </div>
                  </div>
                  <div class="bg-white w-full h-full relative">
                    <div class="z-[3] w-full h-full absolute left-0 -top-0.5">
                      <div class="flex-col w-full flex ml-[-3px] mt-1.5 mb-1 pt-1" aria-hidden="true">
                        <div class="bg-[url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/6ba14252b9facdb2a91c.png')] bg-no-repeat bg-contain w-full h-5 relative"></div>
                      </div>
                    </div>
                    <div class="z-[2] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[2] w-full h-full absolute left-0 top-0"></div>
                      <div class="justify-center items-center w-full h-full flex absolute inset-0"></div>
                    </div>
                    <div class="z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      <div class="opacity-0 z-[1] bg-[50%] w-full h-full absolute left-0 top-0">
                      </div>
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
                          <span class="text-lg font-medium mr-0.5">RM</span><strong>25.90</strong></div>
                      </div>
                    </div>
                    <div class="px-2.5">
                      <div class="w-full relative h-4">
                        <div class="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">19 sold</div>
                        <div class="z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 w-[11%] rounded-tl-lg rounded-bl-lg"></div>
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
      <div role="button" aria-label="click, scroll left to see more" tabindex="0"></div><svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
        <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
      </svg>
    </div>
    <div class="cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 right-0 bg-white w-6 h-6 leading-6 -mt-3 translate-x-2/4" role="button" tabindex="0">
      <div role="button" aria-label="click, scroll right to see more" tabindex="0"></div><svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" class="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54">
        <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11">
        </polygon>
      </svg>
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