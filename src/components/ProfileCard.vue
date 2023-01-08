<template>
  <div class="profile-card w-64 bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg mx-auto">
    <div class="flex items-center justify-between">
      <div class="text-gray-400 text-sm">
        <span style="font-size: 10px;padding-right:2px;">$</span>
        <span>144</span>
        <span> / 30 minutes</span>
      </div>
<!--      <span class="text-emerald-400">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"-->
<!--                     viewBox="0 0 24 24" stroke="currentColor">-->
<!--                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>-->
<!--              </svg>-->
<!--            </span>-->
    </div>
    <div class="mt-6 w-fit mx-auto">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
    </div>

    <div class="mt-8 ">
      <h2 class="text-white font-bold text-2xl">Jonathan Smith</h2>
    </div>
    <p class="text-emerald-400 font-semibold mt-2.5">
      Amazon Web Service
    </p>
    <span class="text-gray-400 text-sm">Developer / 2 years</span>

    <div class="mt-2 tag-area">
      <span>Apple</span>
      <span>Amazon</span>
      <span>Samsung</span>
      <span>Datadog</span>
      <span>Apple</span>
    </div>

  </div>
</template>

<script>
import ProfileTag from './ProfileTag'

export default {
  components: {
    ProfileTag,
  }
};
//https://mdbootstrap.com/snippets/standard/mdbootstrap/2898316?view=side
</script>

<style lang="scss" scoped>
.profile-card {
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}
</style>