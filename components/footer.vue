<template>
  <footer
    ref="footer"
    class="fixed bottom-0 left-0 right-0 px-3 sm:px-4 md:px-6 transition-all duration-500 ease-in-out"
    :class="{
      'translate-y-full': !isVisible,
      'translate-y-[calc(100%-4rem)]': !expanded,
    }"
  >
    <div class="max-w-6xl mx-auto">
      <div
        class="bg-transparent backdrop-blur-[3px] border border-green-500/20 rounded-t-2xl transition-all duration-300"
      >
        <!-- Always visible part -->
        <div
          class="h-16 flex items-center justify-center cursor-pointer"
          @click="toggleFooter"
        >
          <div class="flex items-center gap-2 text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 transition-transform duration-500"
              :class="{ 'rotate-180': expanded }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
            <span class="text-sm"
              >Click to {{ expanded ? "hide" : "show" }} more</span
            >
          </div>
        </div>

        <div class="px-6 pb-6">
          <div class="flex flex-wrap justify-center gap-2 mb-6">
            <img
              src="~/assets/media/88x31/gay.png"
              alt="boykisser"
              class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
            />
            <a
              href="https://www.mozilla.org/en-US/firefox/new/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="~/assets/media/88x31/firefox.png"
                alt="Take Back the Web"
                class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
              />
            </a>
            <a
              href="https://getmonero.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="~/assets/media/88x31/xmr.png"
                alt="Get Monero"
                class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
              />
            </a>
            <a
              href="https://developer.valvesoftware.com/wiki/Source"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="~/assets/media/88x31/source.png"
                alt="Powered by Source"
                class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
              />
            </a>
            <a
              href="https://ublockorigin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="~/assets/media/88x31/ublock.png"
                alt="Get uBlock Origin now!"
                class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
              />
            </a>
            <a
              href="https://grapheneos.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="~/assets/media/88x31/graphene.png"
                alt="GrapheneOS"
                class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
              />
            </a>
            <img
              src="~/assets/media/88x31/fuckfb.png"
              alt="Fuck Facebook"
              class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
            />
            <!-- Add more buttons as needed -->
          </div>

          <!-- fuggin links and shi-->
          <div class="text-center text-md text-gray-400 space-y-2">
            <p class="flex items-center justify-center gap-1">
              Made with
              <span class="text-green-400">💚</span>
              by Echo
            </p>
            <p class="flex items-center justify-center gap-4">
              <a
                href="https://github.com/3kh0/mango"
                target="_blank"
                rel="noopener noreferrer"
                class="text-green-400 hover:underline flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                Source
              </a>
              <a
                href="https://status.3kh0.net"
                target="_blank"
                rel="noopener noreferrer"
                class="text-green-400 hover:underline flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M135.16 84.42a8 8 0 0 0-14.32 0l-72 144a8 8 0 0 0 14.31 7.16L77 208h102.1l13.79 27.58A8 8 0 0 0 200 240a8 8 0 0 0 7.15-11.58ZM128 105.89L155.06 160h-54.12Zm31.49-12.15a32 32 0 1 0-63 0a8 8 0 1 1-15.74 2.85a48 48 0 1 1 94.46 0a8 8 0 0 1-7.86 6.58a9 9 0 0 1-1.43-.13a8 8 0 0 1-6.43-9.3m-95.34 42.47a80 80 0 1 1 127.7 0a8 8 0 0 1-12.76-9.65a64 64 0 1 0-102.18 0a8 8 0 0 1-12.76 9.65"
                  />
                </svg>
                Status
              </a>
              <a
                href="http://aqjeignx5ussinaa64hq3s2phleke6jmworiqe2tmlh4kctklyq6pjqd.onion"
                target="_blank"
                rel="noopener noreferrer"
                class="text-green-400 hover:underline flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M23.438 16.266c-1.016-.922-2.297-1.667-3.604-2.411c-.594-.328-2.417-1.755-1.786-3.781l-1.135-.479c1.786-2.771 4.115-5.51 6.969-8.073c-2.292.771-4.318 1.964-5.839 4.078c.896-1.875 2.354-3.724 3.964-5.599c-2.203 1.578-4.109 3.365-5.302 5.75l.833-3.339c-1.193 2.146-2.026 4.323-2.354 6.495l-1.755-.714l-.297.24c1.547 2.771.745 4.229-.031 4.74c-1.547 1.042-3.781 2.38-4.917 3.542c-2.146 2.208-2.771 4.292-2.563 7.063c.208 3.547 2.802 6.495 6.229 7.656c1.521.51 2.917.568 4.469.568c2.5 0 5.063-.656 6.943-2.234a8.73 8.73 0 0 0 3.156-6.703a9.17 9.17 0 0 0-2.979-6.797zm-4.74 11.833c-.12.536-.505 1.193-.979 1.786c.177-.328.328-.656.417-1.016c.745-2.651 1.073-3.87.714-6.792c-.057-.297-.177-1.25-.625-2.292c-.625-1.583-1.578-3.073-1.698-3.401c-.208-.505-.505-2.651-.536-4.109c.031 1.25.12 3.542.448 4.438c.089.302.953 1.641 1.578 3.276c.417 1.135.505 2.177.594 2.474c.302 1.344-.057 3.609-.531 5.75c-.151.776-.568 1.672-1.104 2.354c.297-.417.536-.953.714-1.578c.359-1.25.505-2.859.474-3.875c-.026-.594-.297-1.875-.745-3.036c-.266-.625-.656-1.281-.922-1.729c-.297-.448-.297-1.427-.417-2.563c.026 1.224-.089 1.849.208 2.714c.177.505.833 1.219 1.01 1.906c.271.922.536 1.938.51 2.563c0 .714-.031 2.026-.359 3.458c-.208 1.068-.688 1.995-1.458 2.589a3 3 0 0 0 .594-1.25c.12-.625.151-1.224.208-1.969a8 8 0 0 0-.146-2.292c-.24-1.073-.625-2.146-.807-2.891c.031.833.359 1.875.51 2.979c.115.807.057 1.609.026 2.323c-.026.833-.297 2.297-.656 3.01c-.359-.151-.474-.359-.714-.656c-.302-.385-.479-.802-.656-1.281a7 7 0 0 1-.391-1.219a4.1 4.1 0 0 1 .745-2.953c.625-.896.75-.953.953-1.995c-.297.922-.505 1.01-1.161 1.786c-.745.865-.859 2.115-.859 3.13c0 .417.177.896.328 1.344c.177.474.354.948.594 1.307c.177.297.417.505.625.656c-.776-.208-1.578-.505-2.083-.922c-1.25-1.078-2.354-2.891-2.505-4.5c-.12-1.313 1.073-3.219 2.771-4.172c1.432-.833 1.76-1.76 2.057-3.281c-.417 1.313-.833 2.448-2.208 3.13c-1.964 1.073-2.979 2.802-2.885 4.469c.146 2.115.979 3.578 2.682 4.74c.385.271.922.536 1.49.745c-2.12-.505-2.385-.802-3.099-1.635c0-.063-.182-.182-.182-.208c-.953-1.073-2.141-2.922-2.563-4.62c-.146-.594-.297-1.219-.115-1.818c.771-2.802 2.469-3.875 4.167-5.031c.422-.302.839-.568 1.224-.865c.953-.75 1.193-2.682 1.401-3.786c-.385 1.344-.807 3.01-1.552 3.547c-.385.297-.865.536-1.25.802c-1.755 1.193-3.516 2.328-4.318 5.214c-.182.75-.063 1.286.115 2c.448 1.755 1.641 3.661 2.656 4.797l.177.177a4.3 4.3 0 0 0 1.698 1.161a8 8 0 0 1-1.729-.625c-2.771-1.339-4.615-4.229-4.734-6.583c-.24-4.797 2.057-6.198 4.198-7.958c1.193-.979 2.865-1.458 3.818-3.214c.177-.391.297-1.224.057-2.12c-.089-.297-.536-1.37-.714-1.609l2.651 1.167c-.057 1.25-.089 2.26.146 3.188c.271 1.01 1.583 2.469 2.12 4.172c1.042 3.214.776 7.411.026 10.693z"
                  />
                </svg>
                Onion
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footer = ref(null);
const expanded = ref(false);
const isVisible = ref(false);
let lastScrollY = 0;
const SHOW_THRESHOLD = 250; // Distance from bottom to show footer
const HIDE_THRESHOLD = 100; // Distance to scroll up before hiding footer

const toggleFooter = () => {
  expanded.value = !expanded.value;
};

// Handle scroll events to show/hide footer
const handleScroll = () => {
  const currentScrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const distanceFromBottom = documentHeight - (currentScrollY + windowHeight);
  const isScrollingUp = currentScrollY < lastScrollY;
  const isNearBottom = distanceFromBottom < SHOW_THRESHOLD;

  // Show footer when near bottom
  if (isNearBottom) {
    isVisible.value = true;
  }
  // Hide footer when scrolling up and not near bottom
  else if (
    isScrollingUp &&
    !isNearBottom &&
    currentScrollY < documentHeight - windowHeight - HIDE_THRESHOLD
  ) {
    isVisible.value = false;
    // Also collapse the expanded state when hiding
    expanded.value = false;
  }

  lastScrollY = currentScrollY;
};

// Handle clicks outside the footer
const handleClickOutside = (event) => {
  if (expanded.value && footer.value && !footer.value.contains(event.target)) {
    expanded.value = false;
  }
};

onMounted(() => {
  document.addEventListener("scroll", handleScroll, { passive: true });
  document.addEventListener("click", handleClickOutside);
  // Initial check for page load
  handleScroll();
});

onUnmounted(() => {
  document.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.transform-gpu {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

img.hover\:scale-110 {
  transform-origin: center;
  will-change: transform;
}
</style>
