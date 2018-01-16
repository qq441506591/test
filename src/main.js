
import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


//import axios from 'axios'
//axios.get('/restapi/shopping/openapi/entries?latitude=22.54286&longitude=114.059563&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template')
//.then((response)=>{
//	console.log(response)
//})
//.catch((error)=>{
//	console.log('请求失败了')
//})
