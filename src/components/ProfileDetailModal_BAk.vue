<template>
  <div>
    <div class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" style="display: block;padding-right: 15px;background: #000000a1;trans: 10%;">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-header">
            <img src="img/brand/white.png" alt="logo" style="max-width: 100px;">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Woohoo, you're reading this text in a modal!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {}
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
</style>