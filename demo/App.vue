<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    >

    <v-app>
      <v-content>
        <v-container>
          <h1>
            The Tiptap Editor Package
          </h1>

          <div class="element-with-relative-position-to-test-bugs">
            <router-view />
          </div>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.element-with-relative-position-to-test-bugs
  position: relative
</style>
