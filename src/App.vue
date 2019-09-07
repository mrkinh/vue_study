<template>
  <div id="app" class="container-fluid">
    <div class="headernav">
      <div class="container">
          <div class="row">
              <div class="col-lg-1 col-xs-3 col-sm-2 col-md-2 logo "><a href="index.html"><img src="images/logo.jpg" alt=""  /></a></div>
              <div class="col-lg-3 col-xs-9 col-sm-5 col-md-3 selecttopic">
                  <div class="dropdown">
                      <a data-toggle="dropdown" href="/#" >Borderlands 2</a> <b class="caret"></b>
                      <ul class="dropdown-menu" role="menu">
                          <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Borderlands 1</a></li>
                          <li role="presentation"><a role="menuitem" tabindex="-2" href="#">Borderlands 2</a></li>
                          <li role="presentation"><a role="menuitem" tabindex="-3" href="#">Borderlands 3</a></li>
                      </ul>
                  </div>
              </div>
              <div class="col-lg-4 search hidden-xs hidden-sm col-md-3">
                  <div class="wrap">
                      <form action="#" method="post" class="form">
                          <div class="pull-left txt"><input type="text" class="form-control" placeholder="Search Topics"></div>
                          <div class="pull-right"><button class="btn btn-default" type="button"><i class="fa fa-search"></i></button></div>
                          <div class="clearfix"></div>
                      </form>
                  </div>
              </div>
              <div class="col-lg-4 col-xs-12 col-sm-5 col-md-4 avt">
                  <div class="stnt pull-left">
                      <a href="#/new_post">
                          <button class="btn btn-primary">Start New Topic</button>
                      </a>
                  </div>
                  <div class="env pull-left"><i class="fa fa-envelope"></i></div>

                  <div class="avatar pull-left dropdown">
                      <a data-toggle="dropdown" href="#"><img src="src/assets/images/avatar.jpg" alt="" /></a> <b class="caret"></b>
                      <div class="status green">&nbsp;</div>
                      <ul class="dropdown-menu" role="menu">
                          <li role="presentation"><a role="menuitem" tabindex="-1" href="#">My Profile</a></li>
                          <li role="presentation"><a role="menuitem" tabindex="-2" href="#">Inbox</a></li>
                          <li role="presentation"><a role="menuitem" tabindex="-3" href="#">Log Out</a></li>
                          <li role="presentation"><a role="menuitem" tabindex="-4" href="04_new_account.html">Create account</a></li>
                      </ul>
                  </div>

                  <div class="clearfix"></div>
              </div>
          </div>
      </div>
    </div>

    <router-view></router-view>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-1 col-xs-3 col-sm-2 logo "><a href="#"><img src="src/assets/logo.png" alt=""  /></a></div>
          <div class="col-lg-8 col-xs-9 col-sm-5 ">Copyrights 2014, websitename.com</div>
          <div class="col-lg-3 col-xs-12 col-sm-5 sociconcent">
            <ul class="socialicons">
              <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
              <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a href="#"><i class="fa fa-cloud"></i></a></li>
              <li><a href="#"><i class="fa fa-rss"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App'
}
console.log('App.vue')
</script>
