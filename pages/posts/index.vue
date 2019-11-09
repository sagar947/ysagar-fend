<template>
  <div>
    <section class="featured_post" :style="{height: '600px', background: `linear-gradient(0deg,rgba(255, 255, 255,0.6),rgba(255,255,255,0.6)), url(${featuredPost._embedded['wp:featuredmedia'][0].source_url})`, backgroundPosition: 'center'}">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-8 offset-md-2 featured_post_content">
            <div class="featured_post_title">
              <h3>
                {{ featuredPost.title.rendered }}
              </h3>
              <p>
                <i>
                  Written by {{ featuredPost._embedded['author'][0].name }} on {{ featuredPost.date | date }}
                </i>
              </p>
              <a :href="`/posts/${featuredPost.slug}`" class="btn btn-danger">Read more...</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Blog | Yashwanth Sagar',
      meta: [
        { hid: 'og:title', name: 'og:title', content: 'Blog | Yashwanth Sagar' },
        { hid: 'description', name: 'description', content: 'Learn, share, evolve, repeat!' },
        { hid: 'og:image', name: 'og:image', content: '/img/Logo.png' },
        { hid: 'og:description', name: 'og:description', content: 'Learn, share, evolve, repeat!' }
      ]
    }
  },
  computed: {
    featuredPost () {
      return this.$store.state.posts.featuredPost
    }
  },
  async fetch ({ store, params }) {
    await store.dispatch('posts/getFeaturedPost')
  }
}
</script>
