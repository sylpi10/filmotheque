<template>
    <header>
           <nav>
               <ul>
                    <!-- <li> <router-link to="/">Home</router-link></li> -->
                    <!-- <li> <router-link to="/new-movie">Add Movie</router-link></li> -->
                    <li> <router-link :to="{name: 'Home'}">Home</router-link></li>
                    <li> <router-link :to="{name: 'NewMovie'}">Add Movie</router-link></li>
               </ul>
           </nav>
     <slot name="pageTitle" > </slot>
    </header>    
</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss">
    header{
        nav{
            margin-bottom: 80px;
            background-color: #333;
            color: #fff;
            position: fixed;
            width: 100%;
            top: 0;   
            ul{
                display: flex;
                justify-content: space-around;
                padding: 12px;
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
            li a:hover{
                color: rgb(248, 108, 15);
            }
        }
    }
</style>
