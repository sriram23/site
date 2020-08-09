import Vue from 'vue'
import Blog from '../components/page/blog.vue';
import BlogView from '../components/page/blog-view.vue'
import BlogCreate from '../components/page/blog-create.vue'
import BlogUpdate from '../components/page/blog-update.vue'
import Home from '../components/Home.vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
      // dynamic segments start with a colon
      { path: '/', name: 'Home', component: Home},
      { path: '/blog', name: 'Blog', component: Blog },
      { path: '/blog/:id/:title', name: 'BlogView', component: BlogView },
      { path: '/blog/create', name: 'CreateBlog', component: BlogCreate },
      { path: '/update/:id', name: 'UpdateBlog', component: BlogUpdate }
    ]
  })

  export default router;