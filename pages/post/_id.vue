<template>
    <div>   
            <span>{{post.data}}</span>
            <h1>{{post.data.attributes.Title}}</h1>
            <p>{{post.data.attributes}}</p>
            <!-- mettre en commentaire h1 et p pour voir de la data apparaitre comme par magie c: -->
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
                return { 
                    id: parseInt(this.$route.params.id),
                }
            }
            }
        },
    }
    </script>