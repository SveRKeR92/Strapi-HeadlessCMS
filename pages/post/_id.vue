<template>
    <h1>{{post.data.attributes.Title}}</h1>
</template>

<script>
// console.log(parseInt(this.$route.params.id))
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