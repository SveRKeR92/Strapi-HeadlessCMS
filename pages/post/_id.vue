<template>
    <h1>{{post.attributes.Title}}</h1>
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
                return { id: parseInt(this.$route.params.id) }
            }
            }
        },
    }
    </script>