<template>
  <div class="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 md:px-6">
    <header
      class="bg-black/20 backdrop-blur-md shadow-md max-w-6xl mx-auto rounded-2xl sm:rounded-4xl mt-3 sm:mt-4 md:mt-5 border border-green-500/40 transition-all duration-300 relative"
    >
      <div class="w-full mx-auto px-3 sm:px-4 lg:px-6">
        <div class="flex justify-between items-center h-14 sm:h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <NuxtLink
              to="/"
              class="text-white text-xl sm:text-2xl font-bold transition-colors hover:scale-105 transform"
            >
              3kh0.net
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-4 lg:space-x-6">
            <NuxtLink
              to="/"
              class="text-white hover:text-green-400 transition-colors hover:scale-105 transform"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/projects"
              class="text-white hover:text-green-400 transition-colors hover:scale-105 transform"
            >
              Projects
            </NuxtLink>
            <a
              href="https://blog.3kh0.net"
              target="_blank"
              class="text-white hover:text-green-400 transition-colors hover:scale-105 transform"
            >
              Blog
            </a>
            <a
              href="https://extra.3kh0.net"
              target="_blank"
              class="text-white hover:text-green-400 transition-colors hover:scale-105 transform"
            >
              Extras
            </a>
            <NuxtLink
              to="/contact"
              class="text-white hover:text-green-400 transition-colors hover:scale-105 transform"
            >
              Contact
            </NuxtLink>
          </div>

          <!-- Hamburger Button -->
          <button
            @click="toggleMenu"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-green-300 focus:outline-none"
            aria-label="Main menu"
          >
            <svg
              class="h-5 w-5 sm:h-6 sm:w-6"
              :class="{ hidden: isOpen, block: !isOpen }"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="h-5 w-5 sm:h-6 sm:w-6"
              :class="{ block: isOpen, hidden: !isOpen }"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        :class="[
          isOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none',
        ]"
        class="absolute top-full left-2 right-2 sm:left-3 sm:right-3 z-20 transition-all duration-300 transform origin-top md:hidden mt-2"
      >
        <div
          class="bg-black/80 backdrop-blur-md px-3 py-4 rounded-xl border border-green-500/40 shadow-lg shadow-green-500/20"
        >
          <div class="flex flex-col space-y-3">
            <NuxtLink
              to="/"
              @click="closeMenu"
              class="text-white hover:text-green-400 transition-colors px-3 py-2 rounded-md text-lg"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/projects"
              @click="closeMenu"
              class="text-white hover:text-green-400 transition-colors px-3 py-2 rounded-md text-lg"
            >
              Projects
            </NuxtLink>
            <a
              href="https://blog.3kh0.net"
              target="_blank"
              @click="closeMenu"
              class="text-white hover:text-green-400 transition-colors px-3 py-2 rounded-md text-lg"
            >
              Blog
            </a>
            <a
              href="https://extras.3kh0.net"
              target="_blank"
              @click="closeMenu"
              class="text-white hover:text-green-400 transition-colors px-3 py-2 rounded-md text-lg"
            >
              Extras
            </a>
            <NuxtLink
              to="/contact"
              @click="closeMenu"
              class="text-white hover:text-green-400 transition-colors px-3 py-2 rounded-md text-lg"
            >
              Contact
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;

  // When menu is open, prevent scrolling
  if (isOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const closeMenu = () => {
  isOpen.value = false;
  document.body.style.overflow = "";
};

// Close the mobile menu when window is resized to desktop size
onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  };

  window.addEventListener("resize", handleResize);

  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
  });
});
</script>

<style scoped>
header {
  backdrop-filter: blur(8px);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
}

header:hover {
  box-shadow: 0 8px 20px rgba(34, 197, 94, 0.2);
  transform: translateY(-2px);
}

.lgbt {
  background: linear-gradient(
    to right,
    #ff0000,
    #ff7f00,
    #ffff00,
    #00ff00,
    #0000ff,
    #4b0082,
    #8f00ff
  );
  background-size: 400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: lgbt 10s ease-in-out infinite;
  display: inline-block;
}

@keyframes lgbt {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
