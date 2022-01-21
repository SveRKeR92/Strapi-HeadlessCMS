<template>
    <PostList :posts="posts"/>
</template>

<script>

    import {AllPostsQuery} from "../graphql/query";
    // import PostList from './../components/PostList.vue'

    export default {
        name: "IndexPage",
        data(){
            return{
                posts: [],
            }
        },
        apollo: {
            posts:{
                prefetch: true,
                query: AllPostsQuery,
            }
        }, 
        // components:{
        //     PostList
        // }
    };


</script>
