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
export default {
  head () {
    return {
      title: this.post._yoast_wpseo_title,
      meta: [
        { hid: 'description', name: 'description', content: this.post._yoast_wpseo_metadesc },
        { hid: 'og:image', name: 'og:image', content: this.post._embedded['wp:featuredmedia'][0].source_url }
      ]
    }
  },
  computed: {
    post () {
      return this.$store.state.posts.post
    }
  },
  async fetch ({ store, params }) {
    await store.dispatch('posts/getPostBySlug', params.id)
  }
}
</script>
