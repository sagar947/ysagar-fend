import axios from 'axios'

export const state = () => ({
  posts: [],
  featuredPost: {},
  post: {}
})

export const mutations = {
  SET_FEATURED_POST (state, post) {
    state.featuredPost = post
  },
  SET_POST_BY_SLUG (state, post) {
    state.post = post
  }
}

export const actions = {
  async getFeaturedPost ({ commit }) {
    await axios.get('https://api.ysagar.in/wp-json/wp/v2/posts?filter[orderby]=date&order=desc&per_page=1&_embed').then((res) => {
      commit('SET_FEATURED_POST', res.data[0])
    }).catch((err) => {
      console.error(err)
    })
  },
  async getPostBySlug ({ commit }, slug) {
    await axios.get(`https://api.ysagar.in/wp-json/wp/v2/posts?slug=${slug}&_embed`).then((res) => {
      commit('SET_POST_BY_SLUG', res.data[0])
    }).catch((err) => {
      console.error(err)
    })
  }
}
