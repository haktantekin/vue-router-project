import Home from './components/Home';
import Header from './components/Header';

/* Componentlara ihtiyaç olunca yükleme */


// const User = resolve =>{
//     require.ensure(["./components/user/User.vue"],() => {
//         resolve(require("./components/user/User.vue"));
//     },"User")
// } User yüklenince hepsi yüklensin isteniyorsa


const User = resolve =>{
    require.ensure(["./components/user/User.vue"],() => {
        resolve(require("./components/user/User.vue"));
    })
}

const UserStart = resolve =>{
    require.ensure(["./components/user/UserStart.vue"],() => {
        resolve(require("./components/user/UserStart.vue"));
    })
}

const UserDetail = resolve =>{
    require.ensure(["./components/user/UserDetail.vue"],() => {
        resolve(require("./components/user/UserDetail.vue"));
    })
}

const UserEdit = resolve =>{
    require.ensure(["./components/user/UserEdit.vue"],() => {
        resolve(require("./components/user/UserEdit.vue"));
    })
}

/* Componentlara ihtiyaç olunca yükleme */

export const routes = [
    {path: '/', name : 'anasayfa', components:{
        default: Home,
        "header-top" : Header
    }},
    {path: '/user', name : 'kullanıcı', 
    components : {
        default: User,
        "header-top": Header
        // "header-bottom": Header
    },
    children : [
        {path:'', component : UserStart}, // /user
        {path:':id', component : UserDetail}, // /user/12
        {path:':id/edit', component : UserEdit, name: 'userEdit', beforeEnter: (to, from, next) => {
            console.log("Root seviyesinde kontrol");
            next();
        }} // /user/12/edit
     ]
    },
    {path: '/redirect', redirect : "/user"},
    {path: '*', redirect:"/"}

];