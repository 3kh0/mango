<template>
  <div class="fixed top-0 left-0 w-full h-16">
    <header
      class="bg-transparent backdrop-blur-md shadow-md z-10 max-w-4xl mx-auto rounded-4xl mt-5 border border-green-500 transition-all duration-300"
    >
      <nav class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <NuxtLink
              to="/"
              class="text-white text-2xl font-bold gay transition-colors hover:scale-105 transform"
            >
              3kh0.net
            </NuxtLink>
          </div>
          <!-- Navigation Links -->
          <div class="hidden md:flex space-x-4">
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
              href="https://extras.3kh0.net"
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
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
header {
  backdrop-filter: blur(3px); /* Adds a blur effect */
  z-index: 10; /* Ensure it is above the starry background */
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
}

header:hover {
  box-shadow: 0 8px 20px rgba(0, 255, 0, 0.3); /* Green glow on hover */
  transform: translateY(-2px); /* Slight lift effect */
}

.lgbt {
  background: linear-gradient(
    to right,
    red,
    #ff7f00,
    #ff0,
    #0f0,
    #00f,
    indigo,
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

.gay {
  background: linear-gradient(
    to right,
    #018e71,
    #21cfac,
    #99e9c2,
    #fff,
    #7cafe3,
    #4f47cd,
    #3b1379
  );
  background-size: 400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: lgbt 10s ease-in-out infinite;
  display: inline-block;
}
</style>
