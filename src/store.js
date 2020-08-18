import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    mappushcount:0,
    map:new Map(),
    mapkeys:[],
    mapvalues:[],
    qaptimeline:[
      {image:'kanade.jpg', title:'奏' ,member:'Sephie,はかたろ,しぃなさん,ハリボテ,Orpheus'},
      {image:'wakuwaku.jpg', title:'ワクワクmeetsトリップ' ,member:'コマ,Sephie,おはしも,はかたろ,いっつん'},
      {image:'kiseki.png', title:'軌跡' ,member:'おはしも,はかたろ,いむ,しゅう,Sephie'},
      {image:'kiseki.png', title:'軌跡' ,member:'おはしも,おれい,はかたろ,Sephie,こだ'},
      {image:'yebang.jpg', title:'Yes!BanG_Dream!' ,member:'Sephie,かがみん,しっこく,こだ,しぃなさん'},
      {image:'unst.jpg', title:'UNSTOPPABLE' ,member:'Sephie,いっつん,こだ,あやか,ハリボテ'},
      {image:'zenryoku.jpg', title:'全力少年' ,member:'Sephie,じぇな,コマ,れもん,pao'},
      {image:'zenryoku.jpg', title:'全力少年' ,member:'ss,ゆき,いっつん,いむ,づき'},
      {image:'iaru.png', title:'いーあるふぁんくらぶEX' ,member:'しゅう,はかたろ,こだ,おはしも,いむ'},
      {image:'kouga.jpg', title:'甲賀忍法帖' ,member:'おはしも,れもん,コマ,ハリボテ,はかたろ'},
      {image:'piko.jpg', title:'ピコっと！パピっと！ガルパ⭐️ピコ！' ,member:'れもん,ハリボテ,一期一会,ss,づき'},
      {image:'hhp.jpg', title:'Happy!Happy!Party!' ,member:'ハリボテ,ゆき,れもん,かがみん,コマ'},
      {image:'brandnew.jpg', title:'いつも通りのBrand new days' ,member:'おはしも,いっつん,はかたろ,ハリボテ,コマ'},
      {image:'romio.jpg', title:'ロミオとシンデレラ' ,member:'はかたろ,おはしも,ss,いっつん,コマ'},
      {image:'romio.jpg', title:'ロミオとシンデレラ' ,member:'ハリボテ,れもん,はかたろ,おはしも,かがみん'},
      {image:'nopoi.jpeg', title:'ノーポイッ！' ,member:'はかたろ,おはしも,ss,いっつん,コマ'},
      {image:'dawn.jpg', title:'夏のドーン！' ,member:'はかたろ,おはしも,ss,いっつん,コマ'},
      {image:'kimagure.jpg', title:'気まぐれロマンティック' ,member:'はかたろ,おはしも,ss,いっつん,コマ'},
      {image:'sandglass.jpg', title:'切ないSandglass' ,member:'はかたろ,おはしも,ss,いっつん,コマ'},
      {image:'aketara.jpg', title:'開けたらDream!' ,member:'いむ,れもん,SIRO,コマ,こだ'},
      {image:'ngnc.jpg', title:'NO GIRL NO CRY' ,member:'こだ,はかたろ,おれい,おはしも,Sephie'},
      {image:'sakura.jpg', title:'SAKURA MEMORIES' ,member:'づき,ss,ゆき,いっつん,いむ'},
      {image:'hiiro.jpg', title:'緋色の空' ,member:'ss,ゆき,いっつん,いむ,づき'},
      {image:'bluebird.jpg', title:'ブルーバード' ,member:'ss,ゆき,いっつん,いむ,づき'},
      {image:'bluebird.jpg', title:'ブルーバード' ,member:'かがみん,ss,藤パン,虹,づき'},
      {image:'otomodachi.jpg', title:'オトモダチフィルム' ,member:'ss,ゆき,いっつん,いむ,づき'},
      {image:'huwahuwatime.jpg', title:'ふわふわ時間' ,member:'ss,ゆき,いっつん,いむ,づき'},
      {image:'R.jpg', title:'R' ,member:'ss,いっつん,づき,一期一会,かがみん'},
      {image:'stepstep.jpg', title:'Step×Step!' ,member:'Sephie,こだ,コマ,藤パン,SIRO'},
      {image:'akuerion.jpg', title:'創聖のアクエリオン' ,member:'Sephie,おれい,かがみん,ハリボテ,ゆき'},
      {image:'melancholic.png', title:'メランコリック' ,member:'かがみん,ハリボテ,ss,いっつん,づき'},
      {image:'omoide.jpg', title:'おもいでイルミネーション' ,member:'づき,かがみん,ハリボテ,ss,いっつん'},
      {image:'smilebouquet.jpg', title:'スマイルブーケでた〜まや〜！' ,member:'づき,かがみん,ハリボテ,ss,いっつん'},
      {image:'hitorija.png', title:'ひとりじゃないんだから' ,member:'づき,かがみん,ハリボテ,ss,いっつん'},
      {image:'aoishiori.jpg', title:'青い栞' ,member:'づき,かがみん,うりゃりんご,れもん,藤パン'},
      {image:'romeo.jpg', title:'ロメオ' ,member:'おはしも,づき,ss,はかたろ,Sephie'},
      {image:'wachamocha.jpg', title:'わちゃ・もちゃ・ぺったん行進曲' ,member:'づき,ss,おはしも,Sephie,はかたろ'},
      {image:'harehare.jpg', title:'ハレ晴レユカイ' ,member:'ss,ハリボテ,かがみん,づき,SIRO'},
      {image:'riot.jpg', title:'R・I・O・T' ,member:'づき,ハリボテ,れもん,いっつん,ss'},
    ],
  },
  getters:{
    qaptimeline(state) {
      return state.qaptimeline
    },
    mapkeys(state) {
      return state.mapkeys
    },
    mapvalues(state) {
      return state.mapvalues
    }
  },
  actions:{
    putRankingMap({ commit }){
      commit('putRankingMap')
    }
  },
  mutations:{
    putRankingMap(state){
      if(state.mappushcount == 0){
      for(var i = 0;i < state.qaptimeline.length; i++){
        var memberlist = state.qaptimeline[i].member.split(',')
        for(var j = 0; j < memberlist.length; j++){
          if(!state.map.has(memberlist[j])){
          state.map.set(memberlist[j],1)
        }else{
          state.map.set(memberlist[j],state.map.get(memberlist[j])+1)
        }
        }
      }
      for(var key of state.map.keys()){
        state.mapkeys.push(key)
        state.mapvalues.push(state.map.get(key))
      }
    }
      state.mappushcount++
    }
  }
})
export default store
