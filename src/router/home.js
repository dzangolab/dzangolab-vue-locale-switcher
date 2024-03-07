import {defineAsyncComponent} from 'vue'

const Home = defineAsyncComponent(() => import('@/components/Home'))

const routes = [
  {
    component: Home,
    name: 'home_en',
    path: '/'
  },
  {
    component: Home,
    name: 'home_fr',
    path: '/fr'
  }
]

export default routes
