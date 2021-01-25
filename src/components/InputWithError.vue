<template>

   <div class="inputs">
       <label for="value">{{label}}</label>
        <input 
         required = true
         v-bind:value="value"
         v-on:input="$emit('input', $event.target.value)"
        >
        <p>{{errorMsg}}</p>

   </div>
</template>

<script>
export default {
    name: "InputWithError",
        props: ['value', 'label', 'errorMsg', 'success'],
    
}
</script>

<style lang="scss">
    p{
        color: #f00;
    }
</style>


