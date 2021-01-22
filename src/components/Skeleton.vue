<template>
    <div class="skeleton">
     <Header>
     </Header>
     <h1>{{pageTitle}}</h1>
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
       pageTitle: String
    }
}
</script>

