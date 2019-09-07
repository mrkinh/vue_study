<template>
  <section class="content">
    <div class="container">
      <div class="row">

        <div class="newtopic">
                <div class="topwrap">
                    <div class="userinfo pull-left">
                        <div class="avatar">
                            <img src="images/avatar4.jpg" alt="">
                            <div class="status red">&nbsp;</div>
                        </div>

                        <div class="icons">
                            <img src="images/icon3.jpg" alt=""><img src="images/icon4.jpg" alt=""><img src="images/icon5.jpg" alt=""><img src="images/icon6.jpg" alt="">
                        </div>
                    </div>
                    <div class="posttext pull-left">
                        <div>
                            <input type="text" placeholder="Enter Topic Title" class="form-control">
                        </div>

                        <div id="app">
                            <vue-editor id="editor" useCustomImageHandler @imageAdded="handleImageAdded" v-model="htmlForEditor"> </vue-editor>
                        </div>
                    </div>
                </div>
                <div class="postinfobot">
                  <div class="notechbox pull-left">
                      <input type="checkbox" name="note" id="note" class="form-control">
                  </div>

                  <div class="pull-left">
                      <label for="note"> Email me when some one post a reply</label>
                  </div>

                  <div class="pull-right postreply">
                      <div class="pull-left smile"><a href="#"><i class="fa fa-smile-o"></i></a></div>
                      <div class="pull-left"><button type="submit" class="btn btn-primary">Post</button></div>
                      <div class="clearfix"></div>
                  </div>

                  <div class="clearfix"></div>
                </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import axios from 'axios'

export default {
  name: 'NewPost',

  components: {
    VueEditor
  },

  data () {
    return {
      htmlForEditor: ''
    }
  },

  methods: {
    handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData()
      formData.append('image', file)

      axios({
        url: 'https://fakeapi.yoursite.com/images',
        method: 'POST',
        data: formData
      })
        .then(result => {
          let url = result.data.url
          Editor.insertEmbed(cursorLocation, 'image', url)
          resetUploader()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
