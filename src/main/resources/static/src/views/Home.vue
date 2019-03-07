<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" @click="testF">
        <!--<div style="text-align: center">{{test}}</div>-->
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <!--<chart></chart>-->
    </div>
</template>

<script lang="ts">
    // @ is an alias to /src
    import * as _ from "lodash"

    import HelloWorld from '@/components/HelloWorld.vue'
    import Chart from '@/views/Chart'
    // import Vue from 'vue'
    // import Component from 'vue-class-component'
    import {Vue, Component, Watch} from 'vue-property-decorator'
    import TestBdMapService from "@/service/bdMap/Test.bdMapService.ts"
    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace
    } from 'vuex-class'

    const exampleModule = namespace('example')
    const mState = namespace('example',State)


    @Component({
        props: {
//            propMessage: String
        },
        components: {
            HelloWorld,Chart
        },
    })
    export default class App extends Vue {

        // initial data
        test: string = ' this is test';

        obj = {...{name: 'test'}};

        @mState info;
        @exampleModule.State(state => state.hello) hello;
        @exampleModule.Getter('infoStrFromGetter') infoStrFromGetter;

        // @Action('foo') actionFoo
        @exampleModule.Mutation('updateInfo') updateInfo

        // lifecycle hook
        mounted() {
            console.log(_.last([1,2,3]));

            this.$eventHub.$on('event type',(data)=>{
                console.log('message from eventhub',data);
            })
        }

        // computed
//        get computedMsg () {
//            return 'computed ' + this.msg
//        }

        @Watch('obj', {deep: true})
        onObjChanged(val: object, oldVal: object) {
            console.log("obj change", val);
        }

        // method
        testF() {
//                debugger
            console.log(this.info);
            console.log(this.hello);
            console.log(this.infoStrFromGetter);
            this.updateInfo({info:'infoUpdate'});
            console.log(this.info);


            console.log(this.test);

            let ts: TestBdMapService = new TestBdMapService("");

            ts.printName();


            this.obj.name = 'click change';

//                console.log(this.obj.name);
        }
    }
</script>
