<template>
    <div class="card">
            <slot name="name"> </slot>
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
        border: solid 1px #ccc;
        border-radius: 10px;
        h1{
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background-color: orange;
            margin-top: 0;
            padding: 10px;
        }
        .img img{
            // max-height: 320px;
            height: 240px;
            box-shadow:3px 3px 3px#ccc, -3px -3px 3px#ccc;
            border-radius: 6px;
            margin-bottom: 12px;
        }
    }
</style>
