<template>
  <transition name="slide">
    <music-list :title="title" :bgImage="bgImage"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
import musicList from 'components/music-list/music-list.vue'
import {mapGetters} from 'vuex'
import {getSongList} from 'api/recommend.js'
import {ERR_OK} from 'api/config.js'
export default {
	computed:{
		title(){
			return this.disc.dissname;
		},
		bgImage(){
			return this.disc.imgurl;
		},
		...mapGetters([
			'disc'
		])
	},
	created(){
		this._getSongList();
	},
	methods:{
		_getSongList(){
			getSongList(this.disc.disstid).then((res) => {
				if(res.code === ERR_OK){
					console.log(res.data);
				}
			})
		}
	},
  components:{
  	musicList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  
  .singer-detail
    position:fixed
    z-index:100
    top:0
    left:0
    right:0
    bottom:0
    background:$color-background
  
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
