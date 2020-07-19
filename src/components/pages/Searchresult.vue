<template>
	<div class="resultbox">
		<div class="navbarbox">
				<swiper :options="swiperOption" ref="swiper-box">
		            <swiper-slide v-for="(item, index) in bar" :class="activeClass===index?'active':''" @click.native="getIndex(index)" :key="index">{{item}}</swiper-slide>
		        </swiper>
		
		</div>
       <ul class="result">
       	<li v-for="(item,index) in list" :key="index" class="result-content">
       		<a :href="item.link_url" class="todetail">
       			<div class="resultview">
       				<div class="resultheader">{{item.title}}</div>
       				<div class="resultview">{{item.description}}</div>
       				<div class="resultsource">
       					<div class="resultsourceleft">
       						{{item.user_name}}
       					</div>
       					<div class="resultsourceright">
       						{{item.comments_count}}评论
       					</div>
       				</div>
       				
       			</div>
       		</a>
       			</li>
       </ul>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: "auto",
		
		pagination: {
		el: '.swiper-pagination',
		freeMode : false,
		freeModeMomentum : true,
		},
	});
	export default{
		components:{
			Swiper,SwiperSlide
		},
		props:["keyword"],
		data(){
			return{
				swiperOption:{
					
stopOnLastSlide:true,
					slidesPerView: 7,
			          spaceBetween: 30,
			          // effect : 'flip',
			          pagination: {
			            el: '.swiper-pagination',
			            clickable: true
			          },
			          //左右点击
			          navigation: {
			              nextEl: '.swiper-button-next',
			              prevEl: '.swiper-button-prev',
			          }
				},
				bar:["综合","视频","资讯","小视频","图片","音乐","用户","微头条"],
				activeClass:0,
				list:[]
			}
		},
		created(){
			this.fetchData();
		},
	/*	mounted(){
			this.Swiper.slideTo(0, 0, false)
		},*/
		watch: {    
		 value() {      
			 delay(() => {        
			 	this.fetchData();     
			  }, 300);    
		}  
	  },
		methods:{
			async fetchData(val) {      
		    this.$http.get("https://i.snssdk.com/search/api/study?keyword="+this.keyword+"&offset=0").then(res => {   
		         console.log(res.data);
		         this.list = res.data.data
	           });   
	   },
			getIndex(index){
				this.activeClass = index;
			}
		},
		
	}
</script>

<style lang="scss" scoped>
$sc:25;
.active{
    color: #222!important;
}
.active:after{
	content: "";
    pointer-events: none;
    position: absolute;
    bottom: 0;
    width: 30px;
    height: 2px;
    margin-left: -18/$sc+rem;
    border-bottom: 2px solid #222;
    -webkit-transform: translateX(-15px);
    transform: translateX(-15px);
}
.resultbox{
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding-top: 65/$sc+rem;
	.navbarbox{
		/*overflow-y: hidden;*/
		
		position: relative;
	    width: 100%;
	    height: 44px;	
    }
    .result{
    	/*position: fixed;*/
    	/*margin-top: 110/$sc+rem;*/
    	flex:1;
	  	width:100%;
	  	overflow:auto;
    	background-color: #f4f4f4;
    	.result-content{
    		.todetail{
    			display: block;
    			color: #000!important;
			    font-size: 14px;
			    line-height: 22px;
			    padding: 0 17px;
			    background-color: #fff;
			    margin-top: 6/$sc+rem;
			    padding-bottom: 15/$sc+rem;
			    padding-top: 15/$sc+rem;
			    padding-left: 17/$sc+rem;
			    padding-right: 17/$sc+rem;
			    font-size: 14px;
   				line-height: 22/$sc+rem;
   				.resultheader{
    			display: -webkit-box;
			    -webkit-box-orient: vertical;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    -webkit-line-clamp: 1;
			    white-space: normal;
       			font-size: 19px!important;
    			line-height: 29px!important;
    			color: #333;
   				}
   				.resultview{
   					margin-top: 5/$sc+rem;
   					color: #555;
   					display: -webkit-box;
				    -webkit-box-orient: vertical;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    -webkit-line-clamp:3;
				    white-space: normal;

   				}
   				.resultsource{
   					font-size: 14px;
   					display: flex;
   					flex-wrap: nowrap;
   					align-items: center;
   					vertical-align: middle;
   					height: 20/$sc+rem;
   					padding-top: 1/$sc+rem;
   					padding-bottom: 1/$sc+rem;
   					color: #999;
   					margin-top: 5/$sc+rem;
   					.resultsourceright{
   						margin-left: 10/$sc+rem;
   					}
   				}
    		}
    	}
    }
}
</style>