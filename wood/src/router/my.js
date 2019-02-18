//我的路由

const my ={
	path:'/my',
   	component:()=>import ('../pages/my/index.vue'),
   	children:[
   		{
   			path:'/my/unpaid',
   			component:()=>import ('../pages/my/child/unpaid.vue')
   		},{
   			path:'/my/paid',
   			component:()=>import ('../pages/my/child/paid.vue')
   		},{
   			path:'/my/completed',
   			component:()=>import ('../pages/my/child/completed.vue')
   		},{
   			path:'/my/other',
   			component:()=>import ('../pages/my/child/other.vue')
   		},{
   			path:'/my/collection',
   			component:()=>import ('../pages/my/child/collectionaa.vue')
   		},
   		{
   			path:'/my/address',
   			component:()=>import ('../pages/my/child/address.vue')
   		},{
   			path:'/my/data',
   			component:()=>import ('../pages/my/child/data.vue')
   		},{
   			path:'/my/security',
   			component:()=>import ('../pages/my/child/security.vue')
   		},{
   			path:'/my/setup',
   			component:()=>import ('../pages/my/child/setup.vue')
   		},{
   			path:'/my/about',
   			component:()=>import ("../pages/my/child/about1.vue")
   		}
   	]
}
export default my