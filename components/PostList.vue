<template>
    <section>
        <NuxtLink :to="{name: 'post-id', params: {id: post.id}}" v-for="post in posts.data" :key="post.id">
            <div>
                {{post.id}}
                -
                {{post.attributes.Title}}
            </div>
            <br>
            <br>
        </NuxtLink>
    </section>
</template>

<script>

export default {
    props: ["posts"],
};
</script>

<style>
</style>