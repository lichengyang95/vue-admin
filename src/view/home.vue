<template>
    <div>
        <div>首页</div>
        <div><button @click="handleLoginOut">退出</button></div>
    </div>
    
</template>

<script>
export default {
    name:'home',
    methods:{
        handleLoginOut(){
            sessionStorage.setItem('loginState','false')
            this.$router.push('/login')
        }
    }
}
</script>

<style >

</style>