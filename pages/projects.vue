<template>
  <div class="text-white min-h-screen">
    <div class="max-w-6xl mx-auto px-4 py-16 w-full">
      <div
        class="bg-transparent backdrop-blur-[3px] rounded-2xl border border-green-500/20 shadow-xl p-8 w-full transition-all duration-300 mb-8"
      >
        <h1
          class="text-5xl md:text-6xl font-bold text-green-400 my-8 text-center [text-shadow:0_0_10px_rgba(34,197,94,0.8)]"
        >
          Cool stuff I made
        </h1>
        <p class="text-xl text-center text-white mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on! This is not all of them,
          but these are the projects I'm actually willing to show off
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="bg-black/40 backdrop-blur-[3px] rounded-xl border border-green-500/15 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-black/50 hover:border-green-500/30"
          >
            <div class="relative aspect-video overflow-hidden">
              <img
                :src="project.image"
                :alt="project.name"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
              ></div>
            </div>

            <div class="p-6">
              <h2 class="text-xl font-semibold mb-3 text-green-400">
                {{ project.name }}
              </h2>
              <p class="text-gray-300 mb-4">{{ project.desc }}</p>

              <div class="flex flex-wrap gap-2 mt-4">
                <div
                  v-for="tech in project.tech"
                  :key="tech"
                  class="bg-black/50 p-2 rounded-md text-green-400"
                  :title="tech"
                >
                  <img
                    :src="`/svg/${tech.toLowerCase()}.svg`"
                    :alt="tech"
                    class="h-5 w-5"
                  />
                </div>
              </div>

              <div class="mt-4 flex gap-2">
                <a
                  v-if="project.git"
                  :href="project.git"
                  class="flex-1 text-center px-4 py-2 bg-green-500/20 rounded-md text-white hover:bg-green-500/30 transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="flex items-center justify-center gap-1">
                    <svg
                      class="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82"
                      />
                    </svg>
                    Git Repo
                  </span>
                </a>

                <a
                  v-if="project.demo"
                  :href="project.demo"
                  class="flex-1 text-center px-4 py-2 bg-green-500/20 rounded-md text-white hover:bg-green-500/30 transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="flex items-center justify-center gap-1">
                    <svg
                      class="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.78 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"
                        fill="currentColor"
                      />
                    </svg>
                    Live Demo
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: "Stacked",
    image: "/img/7f4c103a-6e89-484a-af86-8a5eb6a41f3d.png",
    desc: "Stacked is an economy bot about collecting items, gambling, and using them to fight other players, all within Slack.",
    tech: ["JavaScript", "Supabase", "Slack"],
    git: "https://github.com/3kh0/stacked",
  },
  {
    name: "HCBScan",
    image: "/img/b23f69dc-9345-46e8-a1b2-abc6321b4bc3.png",
    desc: "HCBScan is an explorer for HCB that allows you to search for organizations, view transactions, and explore public financial data.",
    tech: ["JavaScript", "Vue", "Supabase", "TailwindCSS"],
    git: "https://github.com/3kh0/hcbscan",
    demo: "https://hcbscan.3kh0.net/app",
  },
  {
    name: "Echo net extras",
    image: "/img/f4ef3600-f370-4a6a-9313-3f1fbac9a95f.png",
    desc: "A collection of random tools, utilities, and other things that I have created and use somewhat regularly to make my life easier.",
    tech: ["Nuxt", "Vue", "JavaScript", "TailwindCSS"],
    git: "https://github.com/3kh0/echonet-extra-nuxt",
    demo: "https://extra.3kh0.net",
  },
  {
    name: "FileHunt",
    image: "/img/9afd94f1-892b-407d-86ea-f141377ed2e2.png",
    desc: "Search query builder for finding sensitive files on the web. Using Google Dorks, you are able to find much more.",
    tech: ["Nextjs", "Typescript", "TailwindCSS"],
    git: "https://github.com/3kh0/filehunt",
    demo: "https://filehunt.3kh0.net",
  },
  {
    name: "The ____ situation is crazy",
    image: "/img/9900a737-055a-43a6-bf2a-3e58a1240c85.png",
    desc: " Create screenshots in the style of penguinz0 videos with a custom text. This is a fun little project I made for my friends.",
    tech: ["Nextjs", "Typescript", "TailwindCSS"],
    git: "https://github.com/3kh0/the-situation",
    demo: "https://situation.3kh0.net",
  },
  {
    name: "3kh0 Games",
    image: "/img/0f7af44a-7951-4ad4-8d98-232d1d5c57c1.png",
    desc: "A online gaming website that allowed people to play games in their Chromebooks in school, lasted 2 years and was a huge success.",
    tech: ["HTML", "CSS", "JavaScript"],
    git: "https://codeberg.org/3kh0/website-v4/",
  },
  {
    name: "Oxide",
    image: "/img/55073d6a-ac98-4187-8fec-518fcc034a07.png",
    desc: "No tracking, no useless stuff, just a dead simple proxy - Built as a joke submission for the Titanium Network Proxathon 2024",
    tech: ["JavaScript", "HTML"],
    git: "https://github.com/3kh0/Oxide",
    demo: null,
  },
  {
    name: "Echodown",
    image: "/img/dd81eb68-3ec1-40ac-8fec-88bd872e3801.png",
    desc: "Fake DDoS attack tool that makes it look like you're performing a DDoS attack on a website, but it's just a harmless prank.",
    tech: ["Python"],
    git: "https://github.com/3kh0/echodown",
    demo: null,
  },
  {
    name: "3kh0 Lite",
    image: "/img/fd3401c3-88b1-4e33-a1cf-aed47ef7cbb6.png",
    desc: "A lightweight version of 3kh0 Games, designed to be a spiritual successor to the original while being much cleaner and faster.",
    tech: ["HTML", "CSS", "JavaScript"],
    git: "https://github.com/3kh0/3kh0-lite",
    demo: "https://lite.3kh0.net/",
  },
];

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("fade-in-up");
          }, index * 100);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".bg-black\\/40").forEach((card) => {
    observer.observe(card);
  });
});
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease forwards;
}

.bg-black\/40 {
  opacity: 0;
}
</style>
