<template>
  <div>
    <!--Main layout-->
    <main>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4" @click="showDetailModal">
            <ProfileCard/>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <ProfileCard/>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <ProfileCard/>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <ProfileCard/>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <ProfileCard/>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
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
<style lang="scss">
.modal-backdrop {
  background-color: #000000a1 !important;
}
//.modal-header {
//  border-bottom: none !important;
//}
//.modal-footer {
//  border-top: none !important;
//}
</style>