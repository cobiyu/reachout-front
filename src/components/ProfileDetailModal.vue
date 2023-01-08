<template>
  <!--https://freefrontend.com/tailwind-profiles/-->
  <b-modal
      content-class="modal-content profile-detail"
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

          <div class="col-md-6 profile-text-area">
            <h2 class="text-white font-bold text-2xl">Jonathan Smith</h2>
            <p class="text-emerald-400 font-semibold mt-2.5">
              Amazon Web Service
            </p>
            <span class="text-gray-400 text-sm">Developer / 2 years</span>
            <div class="mt-2 tag-area" style="max-height:90px ">
              <span>Apple</span>
              <span>Amazon</span>
              <span>Amazon</span>
              <span>Amazon</span>
              <span>Amazon</span>
              <span>Amazon</span>
              <span>Amazon</span>
              <span>Samsung</span>
              <span>Datadog</span>
              <span>Apple</span>
              <span>Apple</span>
              <span>Amazon</span>
              <span>Samsung</span>
            </div>
          </div>

        </div>


        <div class="row mt-2">
          <div class="col-md-12 mt-8"  v-if="!isRequestMode">
            <div class="about-me-area">
              <div class="text-white font-bold text-2xl about-me-title">
                <span>About me</span>
              </div>
              <div class="mt-2" style="color: #8f9eb2;">
                I am, Jonathan SmithI am, Jonathan SmithI am, Jonathan SmithI am, Jonathan SmithI am, Jonathan SmithI am, Jonathan SmithI am, Jonathan SmithI am, Jonathan Smith
              </div>
              <div style="color: #8f9eb2;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar magna ut bibendum imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum id tempor libero. Praesent vel magna eget purus dignissim interdum. Sed efficitur malesuada dui, ac interdum ante scelerisque non. Curabitur quis euismod lorem, vel rutrum ante. Sed non vestibulum turpis. Phasellus sit amet nisl in diam congue tristique. Nullam convallis lectus ac nisl iaculis, non posuere ipsum interdum. Vivamus nec justo ac sapien convallis maximus.
              </div>
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

        <div class="schedule-area">
          <div>
            <span class="text-white font-bold text-2xl">Convenient schedule</span>
            <span class="text-gray-400 text-sm ml-3">timezone : EST</span>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <div style="display: flex;">
                <div class="schedule-circle" style="height:25px; width: 30px; background-color: #243873; border-radius: 100px; justify-content: center; display: flex; align-items: center;">
                  <svg aria-hidden="true" style="height:13px; color: #6c9ae3;"
                       fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="w-full" style="height:0.1rem; background-color: #374150;display: flex;margin-top:10px;margin-left: 5px;"></div>
              </div>
              <div class="possible-datetime">Sunday 20:22:22</div>
            </div>
            <div class="col-md-4">
              <div style="display: flex;">
                <div class="schedule-circle" style="height:25px; width: 30px; background-color: #243873; border-radius: 100px; justify-content: center; display: flex; align-items: center;">
                  <svg aria-hidden="true" style="height:13px; color: #6c9ae3;"
                       fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="w-full" style="height:0.1rem; background-color: #374150;display: flex;margin-top:10px;margin-left: 5px;"></div>
              </div>
              <div class="possible-datetime">Sunday 20:22:22</div>
            </div>
            <div class="col-md-4">
              <div style="display: flex;">
                <div class="schedule-circle" style="height:25px; width: 30px; background-color: #243873; border-radius: 100px; justify-content: center; display: flex; align-items: center;">
                  <svg aria-hidden="true" style="height:13px; color: #6c9ae3;"
                       fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="w-full" style="height:0.1rem; background-color: #374150;display: flex;margin-top:10px;margin-left: 5px;"></div>
              </div>
              <div class="possible-datetime">Sunday 20:22:22</div>
            </div>
          </div>
        </div>


      </div>

    </template>

    <template #modal-footer="{ ok, cancel, hide }">
      <div v-if="!isRequestMode">
        <b-button class="control-btn" @click="setRequestMode(true)">Request</b-button>
        <b-button class="control-btn" @click="hideDetailModal">Close</b-button>
      </div>
      <div v-else>
        <b-button class="control-btn" >Send</b-button>
        <b-button class="control-btn" @click="setRequestMode(false)">Back</b-button>
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
    border-radius: 10px;
  }
}
.control-btn{
  background-color: #05b4d2;
  border: none;
  color:white;
  font-size: 14px;
  letter-spacing: 0 !important;
  text-transform: inherit !important;
  font-weight: 450;
}
.profile-text-area{
  @media (max-width:767px) {
    margin-top : 10px;
  }
}
.about-me-area{
  background-color: #1f2a3b;
  border-radius: 10px;
  padding: 20px 20px;
  box-shadow: inset 0 0 0 0.25px #ffffff1a;
  .about-me-title{
    border-bottom: solid #293444 3px;
    padding-bottom:10px;
  }
}
.schedule-area{
  margin-top:20px;
  background-color: #1f2a3b;
  border-radius: 10px;
  padding: 20px 20px;
  box-shadow: inset 0 0 0 0.25px #ffffff1a;
  .schedule-area-title{
    border-bottom: solid #293444 3px;
    padding-bottom:10px;
  }
  .timezone{
    font-size:10px;
  }
}
.schedule-circle{
  height:25px;
  width: 30px;
  background-color: #243873;
  border-radius: 100px;
  justify-content: center;
  display: flex;
  align-items: center;
}
.possible-datetime {
  text-align: left;
  margin-top: -5px;
  font-weight: 800;
  margin-left:40px;
  @media (max-width:767px) {
    text-align: center;
    margin-left:0px;
  }
}
</style>