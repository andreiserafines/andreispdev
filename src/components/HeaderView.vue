<template>
  <div>

    <header class="z-10 relative">
      <nav class="max-w-[1250px] mx-auto py-6 px-2 md:px-6">
        <div class="flex items-center justify-between">
          <a href="#" class="text-md font-semibold flex items-center text-gray-900">
            @Dreispdev
          </a>

          <!-- light and nightmode toggle -->
          <div :class="theme" class="p-4">
            <div class="flex items-center space-x-4">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only" v-model="isDarkMode" @change="applyTheme" />
                <span class="w-12 h-6 bg-gray-300 rounded-full shadow-inner transition-all"
                  :class="isDarkMode ? 'bg-gray-800' : 'bg-gray-300'"></span>
                <span class="absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform"
                  :class="isDarkMode ? 'translate-x-6' : 'translate-x-0'"></span>
              </label>
            </div>
          </div>
        </div>
      </nav>

      <div
        class="md:min-h-screen flex flex-col md:flex-row justify-between items-center max-w-[1250px] mx-auto mt-8 py-36 md:-mt-[60px]">
        <div class="flex flex-col items-start w-full py-6 px-4  md:px-6 md:w-1/2 md:text-start mx-auto md:items-start"
          data-aos="zoom-in">
          <h2 class="text-5xl font-extrabold text-gray-800 pb-3">Andrei Portugal.</h2>
          <p class="text-lg text-gray-500 pb-3">Front-End Developer</p>
          <p class="text-sm text-gray-500 pb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde eos delectus quod vel voluptatum fuga
            cupiditate repellat sunt nisi? Unde, saepe eaque.
            Inventore dolorum ea, sit autem quis enim nisi.</p>
          <div class="flex gap-2 items-center">
            <a
              class="flex items-center gap-1 rounded bg-gray-800 hover:bg-gray-600 duration-300 p-3 text-sm text-white cursor-pointer">
              Download CV <i class='bx bxs-download text-lg'></i>
            </a>
          </div>
        </div>

        <div class="hidden md:flex px-4 flex-row justify-end items-center w-full md:w-1/2" data-aos="zoom-in"
          data-aos-delay="500">
          <img src="/src/assets/img/me.jpg" class="md:-mr-[30px] shadow-md cursor-pointer parallelogram" alt="">
          <img src="/src/assets/img/nald.jpg" class="shadow-md cursor-pointer parallelogram" alt="">
          <img src="/src/assets/img/me2.jpg" class="md:-ml-[30px] shadow-md cursor-pointer parallelogram" alt="">
        </div>
      </div>
    </header>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isDarkMode: false,
      };
    },
    methods: {
      applyTheme() {
        this.theme = this.isDarkMode ? 'dark' : 'light';
        document.documentElement.className = this.theme;
        localStorage.setItem('theme', this.theme);
      },
    },
    computed: {
      theme() {
        return this.isDarkMode ? 'dark' : 'light';
      },
    },
    mounted() {
      const savedTheme = localStorage.getItem('theme') || 'light';
      this.isDarkMode = savedTheme === 'dark';
      document.documentElement.className = savedTheme;
    },
  };
</script>
