<template>
	<div class="loader">
		<div class="loader-inner ball-spin-fade-loader">
			  <div :style="{background:color}"></div>
			  <div :style="{background:color}"></div>
			  <div :style="{background:color}"></div>
			  <div :style="{background:color}"></div>
			  <div :style="{background:color}"></div>
			  <div :style="{background:color}"></div>
			  <div :style="{background:color}"></div>
			  <div :style="{background:color}"></div>
		</div>
    <!-- <div class="progress">
        <div class="bar"></div >
        <div class="percent">0%</div >
    </div> -->
      <p class="text">{{text}}</p>
	 </div>
</template>
<script type="text/javascript">
	export default{
		props:{
			"color":{
				type:String,
			},
      "text":{
        type:String
      }
		}
	}
</script>
<style type="text/css" scoped>
.progress { position:absolute; width:400px; left: 50%;top: 60%;margin-left: -200px; border: 1px solid #fff; padding: 1px; border-radius: 3px; }
.bar { background-color: #ff503f; width:0%; height:20px; border-radius: 3px; }
.percent { position:absolute; display:inline-block; top:3px; left:48%;color: #fff; }
.loader {
      height: 100%;
      width: 100%;
      background: rgba(0,0,0,0.5);
      margin:0 auto;
      position: fixed;
      left:0;
      top: 0;
      z-index: 10000;

      }
  .loader-inner{
        width: 30px;
        height: 30px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: 75px;
        margin-top: -100px;
      }
  .text{
    position: absolute;
    text-align: center;
    color: #fff;
    width: 100%;
    top: 50%;
    padding-left: 90px;
  }
	@-webkit-keyframes ball-spin-fade-loader {
  50% {
    opacity: 0.3;
    -webkit-transform: scale(0.4);
            transform: scale(0.4); }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes ball-spin-fade-loader {
  50% {
    opacity: 0.3;
    -webkit-transform: scale(0.4);
            transform: scale(0.4); }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

.ball-spin-fade-loader {
  position: relative; }
  .ball-spin-fade-loader > div:nth-child(1) {
    top: 25px;
    left: 0;
    -webkit-animation: ball-spin-fade-loader 1s 0s infinite linear;
            animation: ball-spin-fade-loader 1s 0s infinite linear; }
  .ball-spin-fade-loader > div:nth-child(2) {
    top: 17.04545px;
    left: 17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.12s infinite linear;
            animation: ball-spin-fade-loader 1s 0.12s infinite linear; }
  .ball-spin-fade-loader > div:nth-child(3) {
    top: 0;
    left: 25px;
    -webkit-animation: ball-spin-fade-loader 1s 0.24s infinite linear;
            animation: ball-spin-fade-loader 1s 0.24s infinite linear; }
  .ball-spin-fade-loader > div:nth-child(4) {
    top: -17.04545px;
    left: 17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.36s infinite linear;
            animation: ball-spin-fade-loader 1s 0.36s infinite linear; }
  .ball-spin-fade-loader > div:nth-child(5) {
    top: -25px;
    left: 0;
    -webkit-animation: ball-spin-fade-loader 1s 0.48s infinite linear;
            animation: ball-spin-fade-loader 1s 0.48s infinite linear; }
  .ball-spin-fade-loader > div:nth-child(6) {
    top: -17.04545px;
    left: -17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.6s infinite linear;
            animation: ball-spin-fade-loader 1s 0.6s infinite linear; }
  .ball-spin-fade-loader > div:nth-child(7) {
    top: 0;
    left: -25px;
    -webkit-animation: ball-spin-fade-loader 1s 0.72s infinite linear;
            animation: ball-spin-fade-loader 1s 0.72s infinite linear; }
  .ball-spin-fade-loader > div:nth-child(8) {
    top: 17.04545px;
    left: -17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.84s infinite linear;
            animation: ball-spin-fade-loader 1s 0.84s infinite linear; }
  .ball-spin-fade-loader > div {
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    position: absolute; }
</style>