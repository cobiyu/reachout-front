<template>
  <div>
    <!--Main layout-->
    <main>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-4">
          <div class="sm:w-1/2 lg:w-1/3 xl:w-1/4 w-mentor-full p-4" @click="showDetailModal">
            <ProfileCard/>
          </div>
          <div class="sm:w-1/2 lg:w-1/3 xl:w-1/4 w-mentor-full p-4">
            <ProfileCard/>
          </div>
          <div class="sm:w-1/2 lg:w-1/3 xl:w-1/4 w-mentor-full p-4">
            <ProfileCard/>
          </div>
          <div class="sm:w-1/2 lg:w-1/3 xl:w-1/4 w-mentor-full p-4">
            <ProfileCard/>
          </div>
          <div class="sm:w-1/2 lg:w-1/3 xl:w-1/4 w-mentor-full p-4">
            <ProfileCard/>
          </div>
          <div class="sm:w-1/2 lg:w-1/3 xl:w-1/4 w-mentor-full p-4">
            <ProfileCard/>
          </div>
        </div>
      </div>
    </main>

    <ProfileDetailModal
        :detail-show="detailShow"
        @hide-detail="hideDetailModal"
    />

    <!--Main layout-->
  </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard'
import ProfileDetailModal from '@/components/ProfileDetailModal'

export default {
  components : {
    ProfileCard,
    ProfileDetailModal,
  },
  data() {
    return {
      detailShow : false
    }
  },
  methods : {
    showDetailModal() {
      this.detailShow = true;
    },
    hideDetailModal() {
      this.detailShow = false;
    }
  }
};

</script>
<style lang="scss" scoped>
.modal-backdrop {
  background-color: #000000a1 !important;
}
.w-mentor-full{
  width:100%;
}
@media (min-width:768px) {
  .sm\:w-1\/2 {
    width: 50%;
  }
}
@media (min-width:1024px) {
  .lg\:w-1\/3 {
    width: 33.3333%;
  }
}
@media (min-width:1280px) {
  .xl\:w-1\/4 {
    width: 25%;
  }
}
</style>