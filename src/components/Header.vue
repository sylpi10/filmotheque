<template>
    <header>
           <nav>
               <ul>
                    <li> <router-link to="/">Home</router-link></li>
                    <li> <router-link to="/new-movie">Add Movie</router-link></li>
               </ul>
           </nav>
          <h1><slot name="page-title"></slot></h1>
    </header>    
</template>

<script>
export default {
    name: "Header",
      props: {
         msg: String
    }
  
}
</script>

<style lang="scss">
    header{
        margin-bottom: 40px;
        h1{
            margin-top: 80px;
        }
        nav{
            background-color: #333;
            color: #fff;
            position: fixed;
            width: 100%;
            top: 0;   
            ul{
                display: flex;
                justify-content: space-around;
                padding: 10px;
                width: 50%;   
                list-style-type: none;
                margin: auto;
            }
            li a{
                text-decoration: none;
                color: yellow;
            }
            li a:visited{
                color: rgb(202, 202, 13);
            }

        }
    }
</style>
