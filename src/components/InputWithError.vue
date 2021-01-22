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

    <!-- <input
      v-bind:value="title"
      v-on:input="$emit('update:title', $event.target.value)"
    >
    <input
      v-bind:value="year"
      v-on:input="$emit('update:year', $event.target.value)"
    >
    <input
      v-bind:value="url"
      v-on:input="$emit('update:url', $event.target.value)"
    > -->
   
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >


</template>

<script>
export default {
    name: "InputWithError",
        props: ['value'],
    //      props: {
    //      title:{
    //          type: String,
    //          default: ''
    //      } ,
    //      year: Number,
    //      url: String
    //   },
    data() {
  	    return {
          titleMsg: '',
          yearMsg: '',
    }
    },
    computed:{
    // internalValue: {
    //   get() {return this.title},
    //   set(v){ this.$emit("input", v)}
    // }
    },
    methods:{
        checkTitle(){
        if (this.title.length < 3) {
            this.titleMsg = "Enter minimum 4 characters"
        }else{
            this.titleMsg = ""
        }
    },
    checkYear(){
        if(typeof this.year != "number"){
             this.yearMsg = "Must be a number"
        }else{
            this.yearMsg = ""
        }
    }
  }

}
</script>

<style lang="scss">
    p{
        color: #f00;
    }
</style>


