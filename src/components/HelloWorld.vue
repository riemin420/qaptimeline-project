<template>
  <div>
    <v-timeline dense>
      <v-timeline-item
        v-for="qap in qaptimeline"
        :key="qap"
      >
      <template v-slot:icon>
      <v-avatar>
        <img :src="`${convertImg(qap.image)}`">
      </v-avatar>
    </template>
        <span slot="opposite">Tus eu perfecto</span>

        <v-card class="elevation-2" max-width="95%">
          <v-card-title class="headline">{{ qap.title }}</v-card-title>
          <v-card-text>
            {{ qap.member }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      pnameImageMap:new Map([['Sephie','Sephie.jpg'],['はかたろ','はかたろ.jpg']]),
    }),
    methods: {
      convertImg: function(url) {
        return require("../static/"+url);
      }
    },
    computed: {
      qaptimeline(){
        return this.$store.getters.qaptimeline
      }
    },
    created: function(){
      this.$store.dispatch('putRankingMap')
    }
  }
</script>
