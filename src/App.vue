<template>
	<div id="app">
		<m-header></m-header>
		<tab></tab>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
import MHeader from "components/m-header/m-header.vue"
import Tab from "components/tab/tab.vue"
import config from "api/config.js"
export default {
  name: 'app',
  created() {
  	// this.$ajax.get('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',{params:config})
  	// .then((response) =>{
  	//     let res = response.data;
  	//     console.log(res);
  	// })
  	// .catch(function(err){
  	//   console.log(err);
  	// });
  },
  components: {
  	MHeader,
  	Tab
  }
}
</script>

<style scoped>
 
</style>
