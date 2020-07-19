<template>
	<ul class="nav">
	    <li>
	      <router-link class="addrouter"  to="/toutiao" exact>
	      	<i class="iconfont icon-wenjian"></i>	      
	        <span>头条</span>
	      </router-link>
	    </li>
	    <li>
	      <router-link class="addrouter"  to="/" exact>	      
	        <div class="searchbox">
	      		<i class="iconfont icon-sousuo"></i>
	        </div>
	      </router-link>
	    </li>
	    <li>
	      <router-link class="addrouter"  to="/my" exact>
	      	<i class="iconfont icon-wodedangxuan"></i>
	     	<span>我的</span>
	      </router-link>
	    </li>
    </ul>
</template>

<script>
	 export default {
    name: "app-nav"
	 }
</script>

<style lang="scss" scoped>
	$sc: 25;
	.searchbox{
		width: 70/$sc+rem;
		height: 30/$sc+rem;
		background: #ddd;
		border-radius: 15/$sc+rem;
		padding-top: 3/$sc+rem;
		text-align: center;
	}
	i{			
		font-size: 20px;			
	}

 .nav{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49/$sc+rem;
    width: 100%;
    background: #fff;
   	display: flex;
   	padding-top: 8/$sc+rem;
   	border-top: 1px solid #DCDDDD;
  }
  .nav li{
    flex: 1;
    font-size: 10/$sc+rem;
  }
  .nav li .addrouter{
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	color: #333;
  }
  
  
   .nav li  .router-link-active{
    color: red;
    .searchbox{   	
    	background-color: red;
    	color: white;
    }
  }
</style>