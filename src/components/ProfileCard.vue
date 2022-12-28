<template>
  <div class="profile-card w-64 bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg mx-auto">
    <div class="flex items-center justify-between">
      <span class="text-gray-400 text-sm">2d ago</span>
      <span class="text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
              </svg>
            </span>
    </div>
    <div class="mt-6 w-fit mx-auto">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
    </div>

    <div class="mt-8 ">
      <h2 class="text-white font-bold text-2xl tracking-wide">Jonathan <br/> Smith</h2>
    </div>
    <p class="text-emerald-400 font-semibold mt-2.5">
      Developer
    </p>

    <div class="mt-3 text-white text-sm">
        <span
            class="text-xs mt-2 font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
          apple
        </span>
      <span
          class="text-xs mt-2 font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200 uppercase last:mr-0 mr-1">
          amazon
        </span>
      <span
          class="text-xs mt-2 font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
          samsung
        </span>
      <span
          class="text-xs mt-2 font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
          greenlabs
        </span>
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