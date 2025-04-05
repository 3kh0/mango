<template>
  <footer
    ref="footer"
    class="fixed bottom-0 left-0 right-0 px-3 sm:px-4 md:px-6 transition-all duration-500 ease-in-out"
    :class="{
      'translate-y-full': !visible,
      'translate-y-[calc(100%-4rem)]': !expanded,
    }"
  >
    <div class="max-w-6xl mx-auto">
      <div
        class="bg-transparent backdrop-blur-[3px] border border-green-500/20 rounded-t-2xl transition-all duration-300"
      >
        <div
          class="h-16 flex items-center justify-center cursor-pointer"
          @click="toggle"
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

        <!-- 88x31 -->
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
          </div>

          <!-- fuggin links and shi-->
          <div class="text-center text-md text-gray-400 space-y-2">
            <p class="flex items-center justify-center gap-1">
              Made with
              <span class="text-green-400">💚</span>
              by Echo. Dedicated to the fallen friends.
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
                  viewBox="0 0 640 512"
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M576 0c17.7 0 32 14.3 32 32v448c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32M448 96c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32m-96 128v256c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32m-160 64c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32M96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32"
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
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M144 144v48h160v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80m-64 48v-48C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64z"
                  />
                </svg>
                Onion
              </a>
              <a
                href="/canary.txt"
                target="_blank"
                rel="noopener noreferrer"
                class="text-green-400 hover:underline flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M32 512h448v-64H32zm384-256h-66.56c-16.26 0-29.44-13.18-29.44-29.44v-9.46c0-27.37 8.88-53.41 21.46-77.72c9.11-17.61 12.9-38.39 9.05-60.42c-6.77-38.78-38.47-70.7-77.26-77.45C212.62-9.04 160 37.33 160 96c0 14.16 3.12 27.54 8.69 39.58C182.02 164.43 192 194.7 192 226.49v.07c0 16.26-13.18 29.44-29.44 29.44H96c-53.02 0-96 42.98-96 96v32c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-32c0-53.02-42.98-96-96-96"
                  />
                </svg>
                Canary
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
const visible = ref(false);
let lastScrollY = 0;

const toggle = () => {
  expanded.value = !expanded.value;
};

const scrolling = () => {
  const wy = window.scrollY;
  const wh = window.innerHeight;
  const dh = document.documentElement.scrollHeight;
  const dtob = dh - (wy + wh);
  const goingUp = wy < lastScrollY;
  const nearBottom = dtob < 250;

  if (nearBottom) {
    visible.value = true;
  } else if (goingUp && !nearBottom && wy < dh - wh - 100) {
    visible.value = false;
    expanded.value = false;
  }

  lastScrollY = wy;
};

const clickOut = (event) => {
  if (expanded.value && footer.value && !footer.value.contains(event.target)) {
    expanded.value = false;
  }
};

onMounted(() => {
  document.addEventListener("scroll", scrolling, { passive: true });
  document.addEventListener("click", clickOut);
  scrolling();
});

onUnmounted(() => {
  document.removeEventListener("scroll", scrolling);
  document.removeEventListener("click", clickOut);
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
