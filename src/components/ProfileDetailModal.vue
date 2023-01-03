<template>
  <!--https://freefrontend.com/tailwind-profiles/-->
  <b-modal
      content-class="modal-content bg-[#20354b]"
      centered
      size="lg"
      v-model="localDetailShow"
      @hide="hideDetailModal"
      :no-close-on-backdrop="true">
    <template #modal-header="{ close }">
<div></div>
    </template>
    <template #default="{ hide }">
      <div class="container">


        <div class="row">

          <div class="col-md-4">
            <div class="profile-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
            </div>
          </div>

          <div class="col-md-6 mt-4">
            <h2 class="text-white font-bold text-2xl tracking-wide">Jonathan Smith</h2>
            <p class="text-emerald-400 font-semibold mt-2.5">
              Developer
            </p>
            <div class="mt-3 text-white text-sm">
              <span class="text-xs mt-2 font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
                apple
              </span>
              <span class="text-xs mt-2 font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200 uppercase last:mr-0 mr-1">
                amazon
              </span>
              <span class="text-xs mt-2 font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
                samsung
              </span>
              <span class="text-xs mt-2 font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
                greenlabs
              </span>
            </div>
          </div>

        </div>


        <div class="row mt-2">
          <div class="col-md-12"  v-if="!isRequestMode">
            <div class="text-white font-bold text-2xl">About me</div>
            <div class="font-bold mt-2">I am, Jonathan Smith</div>
            <div >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar magna ut bibendum imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum id tempor libero. Praesent vel magna eget purus dignissim interdum. Sed efficitur malesuada dui, ac interdum ante scelerisque non. Curabitur quis euismod lorem, vel rutrum ante. Sed non vestibulum turpis. Phasellus sit amet nisl in diam congue tristique. Nullam convallis lectus ac nisl iaculis, non posuere ipsum interdum. Vivamus nec justo ac sapien convallis maximus.
            </div>
          </div>

          <div class="container" v-else style="width:100%;">
            <div class="row">
              <div class="col-md-12">
                  <div class="form-outline mb-2">
                    <input type="email" id="form3Example3" class="form-control"/>
                    <label class="form-label" for="form3Example3">Email address</label>
                  </div>
              </div>
            </div>

            <div class="row">

              <div class="col-md-6">
                <input type="text" class="form-control"/>
                <label class="form-label">First name</label>
              </div>

              <div class="col-md-6">
                <input type="text" class="form-control"/>
                <label class="form-label">Last name</label>
              </div>

              <div class="col-md-4">
                <datetime v-model="date" type="datetime" use12-hour input-class="form-control">

                </datetime>
                <label class="form-label">Interview Time 1</label>
              </div>
              <div class="col-md-4">
                <datetime v-model="date" type="datetime" use12-hour input-class="form-control">

                </datetime>
                <label class="form-label">Interview Time 2</label>
              </div>
              <div class="col-md-4">
                <datetime v-model="date" type="datetime" use12-hour input-class="form-control">

                </datetime>
                <label class="form-label">Interview Time 3</label>
              </div>


            </div>
          </div>

        </div>


      </div>

    </template>

    <template #modal-footer="{ ok, cancel, hide }">
      <div v-if="!isRequestMode">
        <b-button class="control-btn" @click="setRequestMode(true)">request</b-button>
        <b-button class="control-btn" @click="hideDetailModal">close</b-button>
      </div>
      <div v-else>
        <b-button class="control-btn" >send</b-button>
        <b-button class="control-btn" @click="setRequestMode(false)">back</b-button>
      </div>
    </template>
  </b-modal>

</template>
<script>
export default {
  data() {
    return {
      localDetailShow: false,
      isRequestMode: false,
      date: '2018-05-12T17:19:06.151Z',
    }
  },
  props : {
    detailShow: Boolean
  },
  watch : {
    detailShow(value) {
      this.localDetailShow = value;
    }
  },
  methods  : {
    hideDetailModal() {
      this.$emit("hide-detail");
    },
    setRequestMode(isRequestMode) {
      this.isRequestMode = isRequestMode;
    },
  }
}
</script>

<style lang="scss" scoped>
.modal {
  height: 100vh;
  overflow-y: hidden;
}
.modal-header {
  border: none;
}
.modal-footer {
  border: none;
}
.profile-img{
  text-align: center;
  img{
    width: 100%;
  }
}
.control-btn{
  background-color: #05b4d2;
  border: none;
  color:white;
}

</style>