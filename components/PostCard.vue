<template>
    <div>
        <NuxtLink
            to="{name: 'post-id', params: {id: post.id}}"
            v-for="post in posts"
            :key="post.id"
        >
            <article>
                <h1>{{ post[0].attributes }}</h1>
            </article>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    props: ["posts"],
};

</script>