<template>
<section class="content">
    <div class="container">
      <div class="row">
        <div class="detail-post">
          <h1>This is the detail of Post </h1>
        </div>

        <div class="comment-box">
          <comments-grid
            baseURL="/static/data/"
            apiKey="your-api-key"
            nodeName="10_Kids_Unaware_of_Their_Halloween_Costume" >
          </comments-grid>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Comments from '@/components/comment/Comments'

export default {
  name: 'PostDetail',

  components: {
    'comments-grid': Comments
  },

  data () {
    return {
      all_posts: [],
      errors: []
    }
  },

  created () {
    console.log('asaspostdeteail created')
  }
}
</script>
