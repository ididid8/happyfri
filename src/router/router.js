import App from '../App'
import HomePage from '../page/home/index'
import ItemPage from '../page/item/index'
import ScorePage from '../page/score/index'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: HomePage
  }, {
    path: '/item',
    component: ItemPage
  }, {
    path: '/score',
    component: ScorePage
  }]
}]