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
import axios from "./axios";
import { mapActions, mapState } from "vuex"

export default {
  components: {
    ProfileCard,
    AppHeader,
  },
  computed: mapState({
    selfMember: state => state.member.member
  }),
  async mounted() {
    let self = this;
    await self.getMemberData();


    setTimeout(() => {
      window.google.accounts.id.initialize({
        client_id: "494741755026-i7veq7qdrjurnlirbt89pi5kl739amjp.apps.googleusercontent.com",
        cancel_on_tap_outside: false,
        context: "use",
        ux_mode: "popup",
        callback: (jwt) => {
          axios.post('http://localhost:8080/sign_in', jwt)
          .then(() => {
            self.getMemberData();
          })
          .catch(error => {
            console.log(error);
          });

        },
      });

      if(!this.selfMember.email){
        window.google.accounts.id.prompt(); // also display the One Tap dialog
      }
    }, 500);
  },
  methods : {
    ...mapActions({
      getMemberData: 'member/getMemberData'
    })
  }
};
</script>

