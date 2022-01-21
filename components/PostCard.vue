<template>
    <article>
        <h1>{{posts}}</h1>
    </article>
</template>

<script>
console.log("loaded")

export default {
    props: ["posts"],
};

</script>