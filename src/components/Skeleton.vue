<template>
    <div class="skeleton">
     <Header>
     </Header>
     <h1>{{msg}}</h1>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
    name: "Skeleton",
     components: {
      Header
    },
    props: {
       msg: String
    }
}
</script>

