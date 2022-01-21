<template>
    <PostList :posts="posts"/>
</template>

<script>

    // import {AllPostsQuery} from "../graphql/query";
    import PostList from './../components/PostList.vue'

export default {
    props: ["posts"],
    components:{
        PostList
    },

}


</script>
