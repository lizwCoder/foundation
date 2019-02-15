<template>
    <div class="about">
        <!--<h1>This is an about page - {{time | timeAgoDesc}}</h1>-->
        <h1>This is an about page - {{timeAgo()}}</h1>
    </div>
</template>
<script>
    // @ is an alias to /src

    import filter from  "@/filter/filterForService.ts"

    import UserInfoHttpService from "@/service/http/UserInfoHttp.service"

    export default {
        name: 'about',
        data(){
            return {
                time: new Date(),
            }
        },
        mounted(){
            UserInfoHttpService.getUserInfo().then((resp)=>{
                console.log(resp);
            },(err)=>{
                console.log(err);
            })

//            this.getUser();
        },
        methods:{
            timeAgo(){

                return `${filter('timeAgoDesc')(new Date())}-来自方法` ;
            },
//            async getUser(){
//                let resp = await UserInfoHttpService.getUserInfo();
//                console.log(resp);
//            }


        }
    }
</script>