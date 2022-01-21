<template>
    <section>
          <div 
       v-for="post in posts"
       :key="post.id">
            <PostCard>
                <NuxtLink to="{name: 'post-id', params: {id: post.id}}"/>
            </PostCard>
       </div>
    </section>
</template>

<script>
import PostCard from './PostCard.vue'
export default {
    props: ["posts"],
    components:{
        PostCard
    },

}
</script>

<style>

</style>