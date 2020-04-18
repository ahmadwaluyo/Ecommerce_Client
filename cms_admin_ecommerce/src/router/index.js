import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import DashboardPage from '../views/DashboardPage.vue'
import AllProduct from '../components/AllProduct.vue'
import Dashboard from '../components/Dashboard.vue'
import Customers from '../components/Customers.vue'
import AddForm from '../components/AddForm.vue'
import EditForm from '../components/EditForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: DashboardPage,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        component: Dashboard,
        name: 'Dashboard'
      },
      {
        path: 'customers',
        component: Customers,
        name: 'Customers'
      },
      {
        path: 'products',
        component: AllProduct,
        name: 'AllProduct'
      },
      {
        path: 'add',
        component: AddForm,
        name: 'AddForm'
      },
      {
        path: 'edit/:id',
        component: EditForm,
        name: 'EditForm'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
