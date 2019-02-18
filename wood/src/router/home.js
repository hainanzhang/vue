//这是首页的路由


const home ={
	path:'/home',
   	component:()=>import ('../pages/home/index.vue'),
   	children:[
   		{
   			path:'/home/details/:id',
   			component:()=>import ('../pages/home/child/details.vue')
   		},
   	]
}
//http://localhost:8080/home/home01
export default home