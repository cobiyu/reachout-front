<template>
    <nav class="navbar navbar-expand-lg top-fixed">
        <div class="container">
            <div class="navbar-brand">
              <a href="/">
                <img src="img/brand/logo.png" alt="logo">
              </a>
            </div>

          <div class="navbar-nav">
            <a href="#" class="top-btn opacity-75">
              Register Tutor
            </a>
            <button v-if="isValidMember" @click="localSignOut()" href="#" class="top-btn opacity-75">
              Sign out
            </button>

          </div>

        </div>
    </nav>
</template>
<script>
import {mapActions, mapState} from "vuex";

export default {
  computed: {
    isValidMember() {
      return !!this.selfMember.email;
    },
    ...mapState({
      selfMember: state => state.member.member,
    })
  },
  methods : {
    ...mapActions({
      signOut: 'member/signOut'
    }),
    localSignOut() {
      this.signOut();
      window.google.accounts.id.prompt();
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar-brand{
  margin-left: -12px;
  img {
    @media (max-width:375px) {
      height: 57px;
    }
  }
}
.top-fixed{
  position: fixed;
  overflow: hidden;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: #051C2C;
}
.top-btn{
  background-color: #15283e;
  padding: 10px 30px;
  border-radius: 5px;
  color:#38bdf8;
  font-weight: 600;
  &:hover {
    color: #38bdf8;
  }
  margin-right:1.5em;
}
</style>
