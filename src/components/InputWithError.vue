<template>
   <div class="form">
       <form action="">
           <input type="text" name="" id="">
           <input type="text" name="" id="">
           <input type="text" name="" id="">
           <button>Create</button>
       </form>
   </div>
</template>

<script>
export default {
    name: "InputWithError",
      props: {
         
    }
  
}
</script>

<style lang="scss">
    .form{
        background-color: rgb(184, 246, 184);
        width: 50%;
        margin: auto;
        border-radius: 20px;
        padding: 20px;
        form{
            display: flex;
            flex-direction: column;
            input{
                margin: 20px;
            }
            button{
                border-radius: 4px;
                width: 240px;
                background-color: rgb(64, 64, 206);
                border: none;
                padding: 12px;
                color: #fff;
                margin:10px auto;
                cursor: pointer;
                &:hover{
                    opacity: .85;
                }
            }
        }
    }
</style>
