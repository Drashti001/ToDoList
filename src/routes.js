import HomePage from './components/HomePage.vue';
import ToDoAdd from './components/ToDoAdd';
import PageNotFound from './components/PageNotFound';
import ToDoEdit from './components/ToDoEdit';

export default[
    {path:'/',component:HomePage},
    {path:'/add',component:ToDoAdd},
    {path:'/edit/:id',component:ToDoEdit},
    
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
    
]