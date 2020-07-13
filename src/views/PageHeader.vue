<template>
    <div class="header">
        <div class="bg"></div>
        <div class="container">
            <div class="container_title"># {{title}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: ['title']
}
</script>

<style lang="less" scoped>
.header{
    // display: flex;
    // flex-direction: column;
    // justify-content: end;
    // align-items: center;
    @media screen and (max-width: 800px){
        display: none;
    }
    background-color: hsl(var(--base-hue),10% ,10%);
    height: 160px;
    .bg::before{
        content: '';
        background-image: linear-gradient(90deg,hsl(var(--base-hue),10% ,10%),transparent 200px,transparent 1000px,hsl(var(--base-hue),10% ,10%) 1200px);
        position: absolute;
        width: 1200px;
        height: 100%;
        background-position: 50%;
        display: block;
        flex: none;
    }
    .bg{
        width: 100%;
        height: 100%;
        max-width: 1200px;
        margin: auto;
        background-color: hsl(var(--base-hue), 20%, 15%);
        opacity: .7;
        background-size: cover;
        background-repeat: no-repeat;
        background-position-x: 50%;
        background-image: url("~@/img/generic@2x.jpg");
    }
    .container{
        width: 100%;
        position: absolute;
        bottom: 0px;
        left: 0px;
    }
    .container_title{
        max-width: 1000px;
        width: calc(100% - 40px);
        padding: 15px 50px;
        text-align: left;
        font-size: 20px;
        margin: auto;
        background-color: hsl(var(--base-hue),20%, 15%);
    }
}
</style>
