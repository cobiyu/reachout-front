<template>
  <div class="row">
    <div class="pt-250"  style="text-align: center; width:100%;">
      <div class="main-sub-text mb-4 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
      <div class="main-text mb-4 "><strong>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit</strong></div>
    </div>

    <div class="nav">
      <div class="nav nav-tabs nav-fill">
        <a class="nav-item active">Tech</a>
        <a class="nav-item">Consulting</a>
        <a class="nav-item active">Banking</a>
        <a class="nav-item">Startup/VC</a>
      </div>
    </div>

    <div class="scroll-card-area">
      <div class="w-64 p-4 scroll-card">
        <ProfileCard/>
      </div>
      <div class="w-64 p-4 scroll-card">
        <ProfileCard/>
      </div>
      <div class="w-64 p-4 scroll-card">
        <ProfileCard/>
      </div>
      <div class="w-64 p-4 scroll-card">
        <ProfileCard/>
      </div>
      <div class="w-64 p-4 scroll-card">
        <ProfileCard/>
      </div>
      <div class="w-64 p-4 scroll-card">
        <ProfileCard/>
      </div>
    </div>



    <div class="col-md-6 gx-5 mb-4">
      <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5"
           data-mdb-ripple-color="light">
        <img src="https://mdbootstrap.com/img/new/slides/031.jpg" class="img-fluid"/>
        <a href="#!">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
      </div>
    </div>

    <div class="col-md-6 gx-5 mb-4">
      <h4><strong>Facilis consequatur eligendi</strong></h4>
      <p class="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
        eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
        sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
      </p>
      <p><strong>Doloremque vero ex debitis veritatis?</strong></p>
      <p class="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
        nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
        alias, unde optio accusantium soluta, iusto molestiae adipisci et?
      </p>
    </div>
  </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard'
export default {
  components : {
    ProfileCard,
  }
};
</script>

<style lang="scss" scoped>

.nav{
  width:100%;
}
.nav-item{
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
}
.nav-tabs .nav-item.show, .nav-tabs .nav-item.active {
  color: #f3f3f3;
  background-color: transparent;
  border-color: transparent transparent #f3f3f3;
  border-bottom: 4px solid !important;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.nav-tabs {
  color: #eee;
  font-size: 20px;
  cursor: pointer;
}

.scroll-card-area{
  display: flex;
  overflow: auto;
  white-space: nowrap;
}
.scroll-card{
  margin-right:15px;
}
.main-text {
  font-size:50px;
}
.main-sub-text{
  font-size:20px;
}
</style>