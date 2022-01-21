<template>
    <article>
        <h1>{post.data.attributes.Title}</h1>
    </article>
</template>

<script>
console.log("loaded")
// import {AllPostsQuery} from "../graphql/query";
export default {
    
    props:["post"],
    // data(){
    //     return{
    //         posts: [],
    //     }
    // },
    // apollo: {
    //     posts:{
    //         prefetch: true,
    //         query: AllPostsQuery,
    //     }
    // },
};

</script>