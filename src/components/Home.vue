<template>
<section class="content">
      <div class="container">
        <div class="row">
            <div v-if="all_posts && all_posts.length" class="col-lg-8 col-md-8">
              <div v-for="post of all_posts" :key="post.Id" class="post">
                <div class="wrap-ut pull-left">
                    <div class="userinfo pull-left">
                        <div class="avatar">
                            <img src="images/avatar3.jpg" alt="" />
                            <div class="status red">&nbsp;</div>
                        </div>

                        <div class="icons">
                            <img src="images/icon2.jpg" alt="" /><img src="images/icon4.jpg" alt="" />
                        </div>
                    </div>
                    <div class="posttext pull-left">
                        <h2><a v-bind:href="'#/' + post.Id"> {{post.Title}}</a></h2>
                        <p>{{post.Content}}</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="postinfo pull-left">
                    <div class="comments">
                        <div class="commentbg">
                            456
                            <div class="mark"></div>
                        </div>
                    </div>
                    <div class="views"><i class="fa fa-eye"></i> 1,568</div>
                    <div class="time"><i class="fa fa-clock-o"></i> 2 days</div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>

          <div class="col-lg-4 col-md-4">
            <div class="sidebarblock">
              <h3>Categories</h3>
              <div class="divline"></div>
              <div class="blocktxt">
                <ul class="cats">
                  <li><a href="#">Trading for Money <span class="badge pull-right">20</span></a></li>
                  <li><a href="#">Vault Keys Giveway <span class="badge pull-right">10</span></a></li>
                  <li><a href="#">Misc Guns Locations <span class="badge pull-right">50</span></a></li>
                  <li><a href="#">Looking for Players <span class="badge pull-right">36</span></a></li>
                  <li><a href="#">Stupid Bugs &amp; Solves <span class="badge pull-right">41</span></a></li>
                  <li><a href="#">Video &amp; Audio Drivers <span class="badge pull-right">11</span></a></li>
                  <li><a href="#">2K Official Forums <span class="badge pull-right">5</span></a></li>
                </ul>
              </div>
            </div>

            <div class="sidebarblock">
              <h3>Poll of the Week</h3>
              <div class="divline"></div>
              <div class="blocktxt">
                  <p>Which game you are playing this week?</p>
                  <form action="#" method="post" class="form">
                      <table class="poll">
                          <tr>
                              <td>
                                  <div class="progress">
                                      <div class="progress-bar color1" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 90%">
                                          Call of Duty Ghosts
                                      </div>
                                  </div>
                              </td>
                              <td class="chbox">
                                  <input id="opt1" type="radio" name="opt" value="1">
                                  <label for="opt1"></label>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div class="progress">
                                      <div class="progress-bar color2" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 63%">
                                          Titanfall
                                      </div>
                                  </div>
                              </td>
                              <td class="chbox">
                                  <input id="opt2" type="radio" name="opt" value="2" checked>
                                  <label for="opt2"></label>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div class="progress">
                                      <div class="progress-bar color3" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 75%">
                                          Battlefield 4
                                      </div>
                                  </div>
                              </td>
                              <td class="chbox">
                                  <input id="opt3" type="radio" name="opt" value="3">
                                  <label for="opt3"></label>
                              </td>
                          </tr>
                      </table>
                  </form>
                  <p class="smal">Voting ends on 19th of October</p>
              </div>
            </div>

            <!-- -->
            <div class="sidebarblock">
              <h3>My Active Threads</h3>
              <div class="divline"></div>
              <div class="blocktxt">
                  <a href="#">This Dock Turns Your iPhone Into a Bedside Lamp</a>
              </div>
              <div class="divline"></div>
              <div class="blocktxt">
                  <a href="#">Who Wins in the Battle for Power on the Internet?</a>
              </div>
              <div class="divline"></div>
              <div class="blocktxt">
                  <a href="#">Sony QX10: A Funky, Overpriced Lens Camera for Your Smartphone</a>
              </div>
              <div class="divline"></div>
              <div class="blocktxt">
                  <a href="#">FedEx Simplifies Shipping for Small Businesses</a>
              </div>
              <div class="divline"></div>
              <div class="blocktxt">
                  <a href="#">Loud and Brave: Saudi Women Set to Protest Driving Ban</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      all_posts: [],
      errors: []
    }
  },
  // Fetches posts when the component is created.
  created () {
    console.log('AllPosts created')
    axios.get(`/static/data/example_data.json`)
      .then(response => {
        // JSON responses are automatically parsed.
        console.log('AllPosts got data all_posts.length ' + response.data.length)
        this.all_posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
