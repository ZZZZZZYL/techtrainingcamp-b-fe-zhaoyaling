<template>
  <div class="home">
  	<!--上部分 logo-->
  	 <header>
				<div class="headerTop"></div>
				<div class="logo">
					<img src="../img/logo.jpg" alt="头条搜索"/>				
				</div>
			</header>
			
			<!--中部分 搜索框-->
			<div class="formWrap">
				<form action="" class="form">
					<div class="inputWrap">
						<div>
							<div class="inputContent">
			
								<input type="search" value="" name="keyword" placeholder="搜你想看" 
									class="inputIndex" autocapitalize="off" autocomplete="off" autocorrect="off" 
									style="box-sizing:content-box" @click="tosearch">
									<input name="l" style="display:none">
									<i class="searchIconIndex"></i>
							</div>
						</div>
					</div>
				</form>
			</div>	
			
			<Nav />
  </div>
</template>

<script>
	import Nav from './common/Nav'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name:'home',
	components:{swiper, 
            swiperSlide,Nav},
	data () {
	    return {
	     isfirst:true,
	     keyword:'js',
	     swiperOption: {
                    slidesPerView: 6
         },
         isTopBarBox: false
	    }
	},
	methods:{
		tosearch(){
			
			this.$router.push({name: 'search'})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$sc:25;
header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 18/$sc+rem;
    .headerTop{
    	height: 120/$sc+rem;
    }
    .logo{
    	margin: 0;
    	width: 132/$sc+rem;
    	height: 40/$sc+rem;
    	overflow: hidden;
   		img{
    		width: 100%;
  	  }
    }
	}
	
	.formWrap{
		border-radius: 3/$sc+rem;
    background: #fff;
    .form{
    	display: block;
	    margin-top: 0;
	    margin-left: auto;
	    margin-right: auto;
	    width: auto;
	    min-height: 54/$sc+rem;
	    max-width: 736/$sc+rem;
	    overflow: hidden;
	    .inputWrap{
	    	position: relative;
	    	.inputContent{
	    		display: flex;
	    		flex-direction: row;
	    		align-items: center;
	    		height: 52/$sc+rem;
   				padding-left: 18/$sc+rem;
   				padding-right: 18/$sc+rem;   				
       	 		margin-top: 10/$sc+rem;
       	 		margin-left: 17/$sc+rem;
       	 		margin-right: 17/$sc+rem;
   				border-radius: 1/$sc+rem;
    			border: 1/$sc+rem solid #333;
  				background: #fff;
  				.inputIndex{
  			  		font-size: 18/$sc+rem;
				    color: #9b9b9b;
				    flex: 1;
				    margin: 0;
				    padding: 0;
				    background: none;
				    outline: none;
				    caret-color: #ff373c;
				    user-select: text;
				    object-fit: contain;
				    width: 100%;
				    border: none;
  			  }
  			  .searchIconIndex{
  			  		width: 24/$sc+rem;
   					height: 24/$sc+rem;
   					background-image: url(../img/searchIcon.jpg);
   					background-size: 100%;
   					background-repeat: no-repeat;
  			  }
	    	}
	    }
    }
	}	
</style>
