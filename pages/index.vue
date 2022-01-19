<template>
<!-- <div></div> -->
    <PostCard :posts="posts"/>
    <!-- <Tutorial /> -->
</template>

<script>

    import {AllPostsQuery} from "../graphql/query";

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
        }
    };


</script>
