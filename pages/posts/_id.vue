<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{ post.title.rendered }}
      </h1>
      <div v-html="post.content.rendered" />
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  head () {
    return {
      title: this.post._yoast_wpseo_title
    }
  },
  data () {
    return {
      post: {},
      error: []
    }
  },
  asyncData ({ params }) {
    return axios.get('https://api.ysagar.in/wp-json/wp/v2/posts/54')
      .then((response) => {
        return {
          post: response.data
        }
      })
      .catch((error) => {
        return {
          error
        }
      })
  }
}
</script>
