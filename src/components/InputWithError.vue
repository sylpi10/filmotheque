<template>
      <!-- <div class="">
           <label for="title">Title:</label>
            <input
                type="text"
                v-model="title"
                @keyup="$emit('update:title', title);"
                @keydown="checkTitle"
                required
            />
             <p>{{titleMsg}}</p>
      </div> 
      <div class="">
        <label for="year">Year:</label>
        <input
            type="number"
            v-model.number="year"
            @keyup="$emit('update:year', year);"
            @keydown="checkYear"
            required
        />
         <p>{{yearMsg}}</p>
      </div>
      <div class="">
        <label for="url">Image link:</label>
        <input
            type="text"
            v-model="url"
            @keyup="$emit('update:url', url);"
        />
      </div> -->

   <div class="inputs">
       <label for="value">{{label}}</label>
        <input 
         required = true
         v-bind:value="value"
         v-on:input="$emit('input', $event.target.value)"
        >
        <p>{{msg}}</p>

   </div>
</template>

<script>
export default {
    name: "InputWithError",
        props: ['value', 'label', 'msg', 'success'],
    data() {
  	    return {
            valid: true,
            message: null,
        }
    },
    computed:{
    // internalValue: {
    //   get() {return this.title},
    //   set(v){ this.$emit("input", v)}
    // }
    },
    methods:{
    
    }
}
</script>

<style lang="scss">
    p{
        color: #f00;
    }
</style>


