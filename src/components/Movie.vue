<template>
    <div class="card">
        <slot name="name"> </slot>
        <slot name="id"> </slot>
        <slot name="year"> </slot>
        <div class="img">
            <slot name="image"> </slot>
        </div>
        <div>
            <slot name="buttons"> </slot>
        </div>
    </div>    
</template>

<script>
export default {
    name: "Movie"
}
</script>

<style lang="scss">
    .card{
        width: 340px;
        margin: 20px;
        box-shadow:3px 3px 4px rgba(236, 234, 234, .65), -3px -3px 4px rgba(236, 234, 234, .65);
        border-radius: 10px;
        h1{
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background-color: rgb(255, 157, 0);
            margin-top: 0;
            padding: 12px;
            font-size: 1.6rem;
        }
        .img img{
            // max-height: 320px;
            height: 240px;
            border-radius: 6px;
            margin-bottom: 12px;
            border: solid 1px rgba(236, 234, 234, .5),;
        }
    .btns{
        margin: 8px;
        display: flex;
        justify-content: space-around;
    }
    .btns .btn {
        border: none;
        padding: 4px 12px;
        border-radius: 8px;
    cursor: pointer;
        text-decoration: none;
        color:#fff;
    }
    .btns .btn:hover{
        opacity: .8;
    }
    .btns .update{
         background-color: rgb(16, 93, 238);
    }
    .btns .delete{
        background-color: darkorange;
        padding: 0px 10px;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        font-size: 1.4rem;
        &:hover{
          opacity: .9;
        }
    }
   .like-container{
       input {
              display: none;
              &:checked + label i {
                color: rgb(251, 38, 38);
                animation: heart 1.3s forwards ease;

                @keyframes heart {
                  0% {
                    filter: hue-rotate(0deg);
                    transform: scale(1);
                  }
                  50% {
                    filter: hue-rotate(-270deg);
                    transform: scale(1.3);
                  }
                  100% {
                    filter: hue-rotate(0deg);
                    transform: scale(1);
                  }
                }
              }
              
            }
            label{
                  cursor: pointer;
              }
        }
    }
</style>
