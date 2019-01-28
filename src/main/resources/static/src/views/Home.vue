<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" @click="testF">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        data(){
            return {
                test: ' this is test',
                obj: {...{name: 'test'}}
            }
        },
        methods: {
            testF(){
//                debugger
                console.log(this.test);
//                console.log(this.obj.name);
            }
        },
        components: {
            HelloWorld
        }
    }
</script>
