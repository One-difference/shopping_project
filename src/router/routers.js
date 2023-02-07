export default
   [
      {
         path: '/center',
         name: 'center',
         component: ()=>import('../views/Center'),
         children: [{
            path: 'mylist',
            name: 'mylist',
            component: ()=>import('../views/Center/mylist'),
         }, {
            path: 'ourlist',
            name: 'ourlist',
            component: ()=>import('../views/Center/ourlist'),
         },
         {
            path: '/center',
            redirect: '/center/mylist'
         }
      
      ]
      }, {
         path: '/paysuccess',
         name: 'paysuccess',
         component: ()=>import('../views/PaySuccess'),
         beforeEnter: (to, from, next) => {
            if(from.path=='/pay'){
               next()
            }else{
               next(false)
            }
         }
      }, {
         path: '/pay',
         name: 'pay',
         component: ()=>import('../views/Pay'),
         beforeEnter: (to, from, next) => {
            if(from.path=='/trade'){
               next()
            }else{
               next(false)
            }
         }
      },
      {
         path: '/trade',
         name: 'trade',
         component: ()=>import('../views/Trade'),
         beforeEnter: (to, from, next) => {
            if(from.path=='/shopcart'){
               next()
            }else{
               next(false)
            }
         }
      },
      {
         path: '/search/:keyword?',
         name: 'search',
         component: ()=>import('../views/Search')
      },
      {
         path: '/home',
         name: 'home',
         component: ()=>import('../views/Home')
      },
      {
         path: '/login',
         name: 'login',
         component: ()=>import('../views/Login')
      },
      {
         path: '/register',
         component: ()=>import('../views/Register')
      },

      {
         path: '/detail/:skuid?',
         name: 'detail',
         component: ()=>import('../views/Detail')

      },
      {
         path: '/addcartsuccess',
         name: 'addcartsuccess',
         component: ()=>import('../views/AddCartSuccess')
      },
      {
         path: '/shopcart',
         name: 'shopcart',
         component: ()=>import('../views/ShopCart')
      },
      {
         path: '*',
         redirect: '/home'
      }
   ]
