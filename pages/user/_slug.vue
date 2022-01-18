<template>
      <Tutorial />      
</template>

<script>
export default {
      name: "IndexPage",
      middleware: ["auth", "middleware2"],
      async asyncData() {
            // console.log(this.$route.params);
            await new Promise( (r) => {
                  setTimeout(r, 5000);
            })

            return{}
      },
      
};
</script>