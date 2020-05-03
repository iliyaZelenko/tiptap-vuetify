<template>
  <div class="d-flex flex-row flex-wrap">
    <v-img
      v-for="(img, i) in images"
      :key="'img-' + i"
      :alt="img.alt"
      :src="img.src"
      class="ma-2 selectable"
      max-height="100"
      max-width="100"
      @click="selectImage(img)"
    />
  </div>
</template>

<script>
  /**
   * Example of a custom Image selector
   * Key is to emit a select-file event when a file needs to be added
   */
  import { VImg } from 'vuetify/lib'
  export default {
    name: "FileSelector",
    components: { VImg },
    data() {
      // Some public domain images from wikimedia.
      return {
        images: [
          { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Streifenhoernchen.jpg/1024px-Streifenhoernchen.jpg', alt: 'Siberian Chipmunk' },
          { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NASA_Mars_Rover.jpg/750px-NASA_Mars_Rover.jpg', alt: 'NASA Mars Rover' },
          { src: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Muybridge_race_horse_animated.gif', alt: 'Muybridge race horse animated' },
          { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Locomotive_TEM2M-063_2006_G2.jpg', alt: 'Locomotive TEM2M-063 2006 G2' },
          { src: 'https://upload.wikimedia.org/wikipedia/commons/8/80/ISS_March_2009.jpg', alt: 'ISS March 2009' },
          { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/F-18F_after_launch_from_USS_Abraham_Lincoln_%28CVN-72%29.jpg', alt: 'F-18F after launch from USS Abraham Lincoln (CVN-72)' },
        ]
      };
    },
    methods: {
      selectImage(img) {
        this.$emit('select-file', img);
      }
    }
  }
</script>

<style scoped>
  .selectable {
    cursor: pointer;
  }
</style>
