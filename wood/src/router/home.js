//这是首页的路由


const home ={
	path:'/home',
   	component:()=>import ('../pages/home/index.vue'),
   	children:[
   		{
   			path:'/home/home01',
   			component:()=>import ('../pages/home/home01.vue')
   		},
   	]
}
//http://localhost:8080/home/home01
export default home