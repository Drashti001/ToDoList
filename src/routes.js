import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';
//import ToDoAdd from './components/ToDoAdd';
import PageNotFound from './components/PageNotFound';
import ToDoEdit from './components/ToDoEdit';

export default[
    {path:'/',component:HomePage},
  //  {path:'/add',component:ToDoAdd},
    {path:'/edit/:id',component:ToDoEdit},
    
   
    {
      path: '/login',
      name: "LoginPage",
      component:LoginPage
    },
     {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
]