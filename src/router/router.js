import App from '../App'
import HomePage from '../page/home/index'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: HomePage
  }]
}]