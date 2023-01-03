<template>
  <div id="app" >
    <div class="w-100 h-100 p-3 .container-fluid">
      <AppHeader/>

      <router-view/>
    </div>
    <!--Footer-->
    <footer class="text-lg-start" style="background-color: #131A22;">
      <div class="py-4 text-center">
        <a href="#" class="">Conditions of Use</a>
        <a href="#" class="ml-3">Privacy Notice</a>
        <a href="#" class="ml-3">Your Ads Privacy Choices</a>
      </div>
      <div class="text-center" style="padding-bottom: 50px;">
        © 1996-2022, Amazon.com, Inc. or its affiliates

      </div>

    </footer>
    <!--Footer-->


  </div>
</template>
<script>

import ProfileCard from "@/components/ProfileCard";
import AppHeader from "@/layout/AppHeader";

export default {
  components: {
    ProfileCard,
    AppHeader,
  }
};
</script>

