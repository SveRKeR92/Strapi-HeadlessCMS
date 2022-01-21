<template>
    <section>
        <NuxtLink to="{name: 'post-id', params: {id: post.id}}" v-for="post in posts.data" :key="post.id">
            <!-- <PostCard/> -->
            <div>
                {{post.attributes.Title}}
            </div>
            <br>
            <br>
        </NuxtLink>
    </section>
</template>

<script>
// import PostCard from './PostCard.vue'
export default {
    props: ["posts"],
    // components:{
    //     PostCard
    // },
};
</script>

<style>
</style>