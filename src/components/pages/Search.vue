<template>
	<div>
		<div class="inputWrapFixed">
			<div class="inputFix">
				<i class="iconfont icon-fanhui-copy" @click="back()"></i>
				<div class="inputContent">
					<input type="search"  name="keyword" placeholder="请输入搜索内容" class="inputIndex" 
						autocapitalize="off" autocomplete="off" autocorrect="off" 
						style="box-sizing:content-box" v-focus @click="show()" @focus="show()"  @blur="hide()" ref="keyword" v-model="keyword" @input="fetchData">
					<i class="searchIconIndex"></i>
					<input name="l" style="display:none">
					<router-link class="searchBtn" :to="{name:'search',query:{keyword:keyword}}">
						<span>搜索</span>
					</router-link>
				</div>
			</div>
		<ul  class="container" v-if="showli" >
			<li v-for="(item,index) in list" :key="index" v-if="index<=10" class="associateWrap" @click="getPhone(item.keyword)">
				<router-link  :to="{query:{keyword:item.keyword}}" class="associateItem">
					<div class="associateItemInnerLeft">
						<img src="../../img/searchIcon.jpg" alt="搜索标" class="associateItemIconLight"/>
							
						<span>
							{{item.keyword}}
							
						</span>
					</div>
				</router-link>
			
			</li>
		</ul>
		<Searchresult v-else :keyword="keyword"/>
		</div>

	</div>
</template>
<script>
	import Searchresult from './Searchresult'
	const delay = (function() {  
	let timer = 0;  
	return function(callback, ms) {    
		clearTimeout(timer);    
		timer = setTimeout(callback, ms);  
	};
})();
export default {
	components:{
		Searchresult
	},
	data(){
		return{
			keyword:'',
			list:[],
			showli:true
		}
	},
	directives: {
	    focus: {
	        // 自定义指令 进入页面focus到input框   input上加v-focus
	        inserted: function (el) {
	            el.focus()
	        }
	    }
	},
	watch: {    
		 value() {      
			 delay(() => {        
			 	this.fetchData();     
			  }, 300);    
		}  
	  },  
	 methods: {    
	  	async fetchData(val) {      
		    this.$http.get("https://i.snssdk.com/search/api/sug/?keyword="+this.keyword).then(res => {   
		         console.log(res.data.data);
		         this.list = res.data.data
	           });   
	   },
	  	show(){
            clearTimeout(this.timer);
            this.showli=true;
        },
//鼠标移出隐藏
        hide(){
            let that=this;
             this.timer = setTimeout(function(){//500ms以后在隐藏。因为这样点击了电话列表还是执行的下面的getPhone函数。然后才走的这里。
             that.showli=false;

          },500);
        },

		//点击电话列表获取内容。隐藏列表
		
		 getPhone(item){
		            this.keyword=item;
		            this.showli=false;
		 },
		back(){
			this.$router.push('/');
		}
	 }
}
</script>

<style lang="scss" scoped>
$sc:25;
.inputWrapFixed{		
	position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: #fff;
    overflow-y: scroll;
    .inputFix{
    	position: fixed;
	    width: 100%;
	    z-index: 1;
	    overflow: hidden;
	    background: #fff;
	    padding-bottom: 10/$sc+rem;
	   i{
	   	position: fixed;
	 		display: block;
	    	left: 7/$sc+rem;
	    	top: 18/$sc+rem;
	    	font-size: 20px;
	    }
	    .inputContent{
	    	/*display: inline-block;*/
    	    height: 44/$sc+rem;
  			padding-left: 14/$sc+rem;
        	display: flex;
		    -webkit-box-orient: horizontal;
		    -webkit-box-direction: normal;
		    flex-direction: row;
		    -webkit-box-align: center;
		    align-items: center;
		    margin-top: 10/$sc+rem;
		    margin-left: 37/$sc+rem;
		    margin-right: 17/$sc+rem;
		    border-radius: 3/$sc+rem;
		    /*border: 1/$sc+rem solid #333;*/
		    background: #eee;
    		.inputIndex{
    	   		flex: 1;
			    margin: 0;
			    padding: 0;
			    font-size: 16px;
			    color: #222;
			    background: none;
			    outline: none;
			    -webkit-appearance: none;
			    -webkit-user-select: text;
			    user-select: text;
			    caret-color: #ff373c;
			    object-fit: contain;
      			display: block;
   				width: 100%;
  				border: none;
    }
    .searchBtn{
    	padding: 0 20px;
    font-family: PingFangSC;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #000;
    font-weight: 600;
    position: relative;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    }
    .searchBtn:after{
    	content: "";
    	pointer-events: none;
    	position: absolute;
    	top: 50%;
    	left: 0;
    	height: 14px;
    	border-left: 1px solid #b5babd;
    	-webkit-transform: scaleX(.5) translateY(-50%);
    	transform: scaleX(.5) translateY(-50%);
    	
    }
   }
  }
    .container{
    	padding-top: 64/$sc+rem;
    	padding-bottom: 100/$sc+rem;
    	padding-left: 17/$sc+rem;
    	padding-right: 17/$sc+rem;
    	
	    width: 100%;
	    background-color: #fff;
	    overflow-x: hidden;
	    .associateItem{
	    	display: flex;
    	    align-items: center;
    	    width: 100%;
    	    position: relative;
    		-webkit-box-pack: justify;
	    	justify-content: space-between;
		    height: 46/$sc+rem;
		    color: #222;
		    font-size: 16px;
		    font-weight: bold;
		    .associateItemInnerLeft{
		    	.associateItemIconLight{
		    		width: 16/$sc+rem;
		    		height: auto;
		    	}
		    }
	    }
    }    
}
</style>