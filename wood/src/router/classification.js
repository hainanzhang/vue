//这是分类路由

const classification ={
	path:'/classification',
   	component:()=>import ('../pages/classification/index.vue'),
   	children:[
   		{
   			path:'/classification/details/:id',
   			component:()=>import ('../pages/classification/child/details.vue')
   		}
   	
   	]
}
export default classification