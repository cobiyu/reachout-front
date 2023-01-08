<template>
    <div class="row main-section">
      <div class="col-md-12 gx-5 mb-4" style="text-align: center;">
        <img class="mx-auto pb-100" src="img/brand/main.png"/>
        <div class="main-text mb-4 "><strong>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit</strong></div>
        <div class="main-sub-text mb-4 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
        <button class="font-semibold text-2xl  rounded-full shadow-sm main-btn">
          Request Interview →
        </button>

      </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-section{
  height:100vh;
  @media (max-height: 850px) {
    height: 850px;
  }
}
.main-text {
  font-size:50px;
}
.main-sub-text{
  font-size:20px;
}
.main-btn{
  background-color: #05b4d2;
  padding: 18.27px 44.28px;
  &:hover {
    background-color: #fff;
    color:#05b4d2;
  }
}
</style>