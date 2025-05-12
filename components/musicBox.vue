<template>
  <div
    class="fixed bottom-6 right-6 z-40 transition-all duration-500 ease-in-out"
    :class="{ 'w-80 h-16': expanded, 'w-12 h-12': !expanded }"
  >
    <!-- Collapsed View -->
    <div
      v-if="!expanded"
      class="bg-zinc-900 rounded-full shadow-lg p-2 flex items-center justify-center"
    >
      <button
        @click="firstPlay"
        class="w-10 h-10 flex items-center justify-center text-white rounded-full hover:text-green-400 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!-- Expanded View -->
    <div
      v-else
      class="bg-zinc-900 rounded-lg shadow-lg p-3 flex items-center transition-all duration-500"
    >
      <!-- Album Cover -->
      <img
        :src="`/music/${currentSong.src.replace('.mp3', '.png')}`"
        alt="Album Cover"
        class="w-12 h-12 rounded-md object-cover mr-3"
      />

      <div class="flex-1">
        <div class="text-white text-sm font-semibold truncate">
          {{ currentSong.title }}
        </div>
        <div class="text-gray-400 text-xs truncate mt-1 flex items-center">
          <span
            v-if="currentSong.explicit"
            class="uppercase bg-gray-300 text-zinc-900 font-semibold mr-1 flex items-center justify-center"
            style="width: 16px; height: 16px; border-radius: 3px"
          >
            E
          </span>
          {{ currentSong.artist }}
        </div>
      </div>

      <div class="flex items-center space-x-3">
        <button
          @click="play"
          aria-label="Play/Pause"
          class="text-white hover:text-green-400 transition-colors"
        >
          <svg
            v-if="playing"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"
            />
          </svg>
        </button>

        <button
          @click="skip"
          aria-label="Skip"
          class="text-white hover:text-green-400 transition-colors mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6"
            fill="currentColor"
          >
            <path
              d="m7.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82M16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1"
            />
          </svg>
        </button>
      </div>
    </div>

    <audio
      ref="player"
      :src="`/music/${currentSong.src}`"
      @ended="skip"
      volume="0.3"
      @canplaythrough="canPlay = true"
    ></audio>
  </div>
</template>

<script setup>
const songs = [
  {
    title: "enby",
    artist: "fauxx",
    src: "music1.mp3",
    explicit: false,
  },
  {
    title: "too late",
    artist: "snuffles",
    src: "music2.mp3",
    explicit: false,
  },
  {
    title: "spinnin round my head",
    artist: "phimtown & fauxx",
    src: "music3.mp3",
    explicit: true,
  },
  {
    title: "IRIS",
    artist: "blackwinterwells",
    src: "music4.mp3",
    explicit: true,
  },
  {
    title: "HEAL",
    artist: "{ELSEIF} & Aural Alliance",
    src: "music5.mp3",
    explicit: false,
  },
  {
    title: "downtown dreams",
    artist: "fauxx & deers",
    src: "music6.mp3",
    explicit: false,
  },
  {
    title: "tiny windows",
    artist: "Frizk & Tanger",
    src: "music7.mp3",
    explicit: false,
  },
  {
    title: "Wreck",
    artist: "Fly To The Night",
    src: "music8.mp3",
    explicit: true,
  },
  {
    title: "Philosophy of a Knife",
    artist: "do not resurrect",
    src: "music9.mp3",
    explicit: true,
  },
  {
    title: "Moonflowers",
    artist: "meganeko",
    src: "music10.mp3",
    explicit: false,
  },
  {
    title: "Metamodernity",
    artist: "Vansire",
    src: "music11.mp3",
    explicit: false,
  },
  {
    title: "судно (Борис Рыжий)",
    artist: "молчат дома",
    src: "music12.mp3",
    explicit: false,
  },
  {
    title: "Федерико Феллини",
    artist: "Galibri & Mavik",
    src: "music13.mp3",
    explicit: false,
  },
  {
    title: "Life Letters",
    artist: "Never Get Used To People",
    src: "music14.mp3",
    explicit: false,
  },
  {
    title: "GET SILLY!!",
    artist: "Swaige",
    src: "music15.mp3",
    explicit: false,
  },
  {
    title: "hero",
    artist: "juno",
    src: "music16.mp3",
    explicit: true,
  },
  {
    title: "Alps",
    artist: "Motorama",
    src: "music17.mp3",
    explicit: false,
  },
  {
    title: "Timebomb Zone",
    artist: "The Prodigy",
    src: "music18.mp3",
    explicit: false,
  },
  {
    title: "WTF 2 (sped up)",
    artist: "Ugovhb, EF",
    src: "music20.mp3",
    explicit: true,
  },
  {
    title: "Where U From?",
    artist: "DJ TWI$T II",
    src: "music21.mp3",
    explicit: true,
  },
  { title: "Oh Yeah?", artist: "Frizk", src: "music22.mp3", explicit: false },
  { title: "RETRY!", artist: "GASPXR", src: "music23.mp3", explicit: false },
  {
    title: "Dark Triads",
    artist: "Powernerd",
    src: "music24.mp3",
    explicit: false,
  },
  {
    title: "Valley of Fools",
    artist: "Marzuku",
    src: "music25.mp3",
    explicit: false,
  },
  {
    title: "OVERRIDE",
    artist: "KSLV Noh",
    src: "music26.mp3",
    explicit: true,
  },
];

const expanded = ref(false);
const playing = ref(false);
const player = ref(null);
const canPlay = ref(false);
const current = ref(0); // ssr
const currentSong = computed(() => songs[current.value]);

onMounted(() => {
  current.value = Math.floor(Math.random() * songs.length);
  player.value.load();
  player.value.volume = 0.3;
});

const play = async () => {
  if (!canPlay.value) return;
  if (playing.value) {
    player.value.pause();
    playing.value = false;
    expanded.value = false;
  } else {
    try {
      await player.value.play();
      playing.value = true;
    } catch (err) {
      console.error(err);
      playing.value = false;
    }
  }
};

const firstPlay = async () => {
  expanded.value = true;
  await nextTick(); // wait for next
  if (!canPlay.value) {
    skip(); // fuck you we move on
    const waitForAudioReady = new Promise((resolve) => {
      const onCanPlayThrough = () => {
        canPlay.value = true;
        player.value.removeEventListener("canplaythrough", onCanPlayThrough);
        resolve();
      };
      player.value.addEventListener("canplaythrough", onCanPlayThrough);
    });
    await waitForAudioReady;
  }

  try {
    await player.value.play();
    playing.value = true;
  } catch (err) {
    console.error(err);
    playing.value = false;
    expanded.value = false;
  }
};

const skip = () => {
  setTimeout(() => {
    player.value.play();
  }, 50);
  current.value = (current.value + 1) % songs.length;
  nextTick(() => {
    if (playing.value && canPlay.value) {
      player.value.play().catch((err) => {
        console.error(err);
      });
    }
  });
};

onBeforeUnmount(() => {
  if (player.value) {
    player.value.pause();
    player.value.src = "";
  }
});
</script>
