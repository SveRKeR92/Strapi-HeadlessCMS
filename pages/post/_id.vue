<template>
    <div>
        <span>{{post.data}}</span>
        <h1>{{post.data}}</h1>
        <!-- <img :src="post.data.attributes.Image.data.attributes.url" :alt="post.data.attributes.Image.data.attributes.caption"> -->
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
            console.log(this.post);
        },
        apollo: {
            post: {
            prefetch: true,
            query: PostQuery,
            variables () {
                return { id: parseInt(this.$route.params.id) }
            }
            }
        },
    }
    </script>