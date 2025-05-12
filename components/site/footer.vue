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
            <Icon
              name="fa6-solid:chevron-up"
              class="h-6 w-6 transition-transform duration-500"
              :class="{ 'rotate-180': expanded }"
            />
            <span class="text-sm"
              >Click to {{ expanded ? "hide" : "show" }} more</span
            >
          </div>
        </div>

        <!-- 88x31 -->
        <div class="px-6 pb-6">
          <div class="flex flex-wrap justify-center gap-2 mb-2">
            <img
              src="~/assets/media/88x31/gay.png"
              alt="boykisser"
              class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
            />
            <a
              href="https://www.mozilla.org/en-US/firefox/new/"
              target="_blank"
            >
              <img
                src="~/assets/media/88x31/firefox.png"
                alt="Take Back the Web"
                class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
              />
            </a>
            <a href="https://getmonero.org/" target="_blank">
              <img
                src="~/assets/media/88x31/xmr.png"
                alt="Get Monero"
                class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
              />
            </a>
            <a
              href="https://developer.valvesoftware.com/wiki/Source"
              target="_blank"
            >
              <img
                src="~/assets/media/88x31/source.png"
                alt="Powered by Source"
                class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
              />
            </a>
            <a href="https://ublockorigin.com/" target="_blank">
              <img
                src="~/assets/media/88x31/ublock.png"
                alt="Get uBlock Origin now!"
                class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
              />
            </a>
            <a href="https://grapheneos.org/" target="_blank">
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

          <p class="flex items-center justify-center mb-2">Friends :D</p>

          <div class="flex flex-wrap justify-center gap-2 mb-6">
            <a href="https://prpl.wtf" target="_blank">
              <img
                src="~/assets/media/88x31/prpl_wtf.gif"
                alt="Emma"
                class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
              />
            </a>
            <a href="https://wearr.dev/" target="_blank">
              <img
                src="~/assets/media/88x31/wearr.gif"
                alt="wearr"
                class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
              />
            </a>
            <a href="https://bunnyguy.foo/" target="_blank">
              <img
                src="~/assets/media/88x31/snipchu.gif"
                alt="Tuyet"
                class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
              />
            </a>
            <a href="https://bomberfish.ca/" target="_blank">
              <img
                src="~/assets/media/88x31/bomberfish.gif"
                alt="bomberfish"
                class="w-[88px] h-[31px] transition-transform duration-200 hover:scale-110 hover:z-10"
              />
            </a>
          </div>

          <!-- fuggin links and shi-->
          <div class="text-center text-md text-gray-400 space-y-2 mb-4">
            <p class="flex items-center justify-center gap-4">
              <a
                href="https://github.com/3kh0/mango"
                target="_blank"
                class="text-green-400 hover:underline flex items-center gap-1"
              >
                <Icon name="radix-icons:github-logo" size="1.25rem" />
                Source
              </a>
              <a
                href="https://status.3kh0.net"
                target="_blank"
                class="text-green-400 hover:underline flex items-center gap-1"
              >
                <Icon name="heroicons-solid:status-online" size="1.25rem" />
                Status
              </a>
              <a
                href="http://aqjeignx5ussinaa64hq3s2phleke6jmworiqe2tmlh4kctklyq6pjqd.onion"
                target="_blank"
                class="text-green-400 hover:underline flex items-center gap-1"
              >
                <Icon name="lucide-lab:onion" size="1.25rem" />
                Onion
              </a>
              <a
                href="/canary.txt"
                target="_blank"
                class="text-green-400 hover:underline flex items-center gap-1"
              >
                <Icon
                  name="material-symbols:check-circle-rounded"
                  size="1.25rem"
                />
                Canary
              </a>
              <a
                href="/pgp.txt"
                target="_blank"
                class="text-green-400 hover:underline flex items-center gap-1"
              >
                <Icon name="fa6-solid:key" size="1.25rem" />
                PGP
              </a>
            </p>
            <p class="flex items-center justify-center gap-1">
              Made with
              <span class="text-green-400">💚</span> and my two paws.
            </p>
            <p class="flex items-center justify-center gap-1">
              Dedicated to the friends that have fallen and the ones that
              continue to fight.
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
