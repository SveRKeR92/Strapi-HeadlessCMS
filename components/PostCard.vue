<template>
    <article>
        <h1>{{posts}}</h1>
    </article>
</template>

<script>
console.log("loaded")

import {AllPostsQuery} from "../graphql/query";
export default {
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
    components:{
        PostList
    }
};

</script>