<template>
  <v-app>
    <v-tabs background-color="primary">
      <v-tab><router-link to="/"><span style="color:black">QAPリスト</span></router-link></v-tab>
      <v-tab><router-link id="home-nav" to="/ranking"><span style="color:black">ランキング</span></router-link></v-tab>
    </v-tabs>

      <v-spacer></v-spacer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style>

<style>
