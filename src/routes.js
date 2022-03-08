import Search from './components/Search'
import About from './components/about'
import Track from './components/TrackDetail'



const routes = [
  {
    path:'/' , component: Search, name: 'search'
  },
  {
    path:'/about' , component: About, name: 'about'
  },
  {
    path:'/track/:id' , component: Track, name: 'track'
  }
]


export default routes
