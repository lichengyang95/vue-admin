import router from "./router/index.js"
import store from "./store/index.js"


router.beforeEach((to, from, next) => {

    const logState = sessionStorage.getItem("loginState")
    console.log('logState', logState)
    if (logState == 'true') {
        next()
    } else {
        if (to.path == '/login') {

            next()
        } else {

            next({ path: '/login' })
        }

    }

})