<template>
   <div class="form">
       <!-- <form action="">
           <h2>New Movie</h2> 
           <label for="title">Title</label>
           <input type="text" name="title" id="">
           <label for="year">Year</label>
           <input type="number" name="year" id="">
           <label for="image">Image link</label>
           <input type="text" name="image" id="">
           <button>Create</button>
       </form> -->
      <div class="">
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
      </div>
       
   </div>
</template>

<script>
export default {
    name: "InputWithError",
        // props: ['name'],
         props: {
         title:{
             type: String,
             default: ''
         } ,
         year: Number,
         url: String
      },
    data() {
  	    return {
          titleMsg: '',
          yearMsg: '',
    }
    },
    computed:{
    internalValue: {
      get() {return this.title},
      set(v){ this.$emit("input", v)}
    }
    },
    methods:{
        checkTitle(){
        if (this.title.length < 3) {
            this.titleMsg = "min 4 chars"
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


