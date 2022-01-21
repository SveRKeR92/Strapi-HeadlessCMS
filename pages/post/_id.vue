<template>
<div>
        <h1>{{post.data.attributes.Title}}</h1>

    <p>{{post.data.attributes.Content}}</p>
    <img :src="post.data.attributes.Image.data.attributes.url" alt="">
</div>
</template>

<script>
    import {PostQuery} from '../../graphql/query'
    export default {
        data() {
            return {
                post: {},
            }
        },
        mounted () {
            console.log(this.post);;
        },
        apollo: {
            post: {
            prefetch: true,
            query: PostQuery,
            variables () {
                return { id: parseInt(this.$route.params.id), }
            }
            }
        },
    }
    </script>