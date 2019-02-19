<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" @click="testF">
        <!--<div style="text-align: center">{{test}}</div>-->
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script lang="ts">
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import TestBdMapService from "@/service/bdMap/Test.bdMapService.ts"

    @Component({
        props: {
//            propMessage: String
        },
        components:{
            HelloWorld
        },
    })
    export default class App extends Vue {
        // initial data
        test:string = ' this is test';

        obj = {...{name: 'test'}};

        // lifecycle hook
        mounted () {

        }

        // computed
//        get computedMsg () {
//            return 'computed ' + this.msg
//        }

        // method
        testF(){
//                debugger
            console.log(this.test);


            let ts:TestBdMapService = new TestBdMapService("");

            ts.printName();


            this.test = 'click change';

//                console.log(this.obj.name);
        }
    }
</script>
