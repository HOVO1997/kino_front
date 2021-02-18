<template>
  <div class="content__head">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- content title -->
          <h2 class="content__title">New items</h2>
          <!-- end content title -->

          <!-- content tabs nav -->
          <ul class="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">NEW RELEASES</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">MOVIES</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">TV SERIES</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">CARTOONS</a>
            </li>
          </ul>
          <!-- end content tabs nav -->

          <!-- content mobile tabs nav -->
          <div class="content__mobile-tabs" id="content__mobile-tabs">
            <div class="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <input type="button" value="New items">
              <span></span>
            </div>

            <div class="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item" data-value="new releases"><a class="nav-link active" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">NEW RELEASES</a></li>

                <li class="nav-item" data-value="movies"><a class="nav-link" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">MOVIES</a></li>

                <li class="nav-item" data-value="tv series"><a class="nav-link" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">TV SERIES</a></li>

                <li class="nav-item" data-value="cartoons"><a class="nav-link" id="4-tab" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">CARTOONS</a></li>
              </ul>
            </div>
          </div>
          <!-- end content mobile tabs nav -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Home_content"
}
</script>

<style scoped>
.nav-tabs .nav-link.active {
  color: white;
  background-color: transparent;
  border-color: transparent;
  border-bottom: 1px solid #FF5682 !important;
}
.nav-link:hover {
  border-color: transparent;
}
.nav-tabs {
   border-bottom: 1px solid transparent;
}
  .content__tabs a:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    display: block;
    background-image: linear-gradient(
        90deg
        , #ff55a5 0%, #ff5860 100%);
  }
</style>
