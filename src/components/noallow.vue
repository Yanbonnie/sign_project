<template>
  <div class="noallow">
    <img src="../assets/images/noAnyThing.png" alt="">
    <p>您所访问的页面不存在</p>
    <a @click="jump">跳转到首页</a>
  </div>
</template>

<script>
export default {
  name: 'noallow',
  data () {
    return {
  		
    }
  },
  methods:{
    jump(){
      window.location.href=this.apiPath.substring(0,this.apiPath.length-1)+"/cus/account/accountIndex";     
    }
  },
  mounted(){
    document.title = "404"; 
    $('body').css('background',"#fff")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
  .noallow{
    img{
      display:block;
      margin:20px auto;
    }
    p{
      text-align:center;
    }
    a{
      text-align:center;
      display:block;
      margin:50px auto;
      background:#ff503f;
      border-radius:4px;
      color:#fff;
      width:150px;
      height: 35px;
      line-height: 35px;
      cursor: pointer;
    }
  }
</style>
