import Vue from 'vue'
import Router from 'vue-router'
import store from './stores/store'

const session = require('express-session')

Vue.use(Router)
let appRouter = new Router({
    mode: 'history',
    routes: [
        {
            path: '/', redirect: '/Login'
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import(/* webpackChunkName: "about" */ './views/Admin.vue'),
            meta: {
              requiresAuth: true,
              isUser: 'adminUser'
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
        },
        {
            path: '/adduser',
            name: 'adduser',
            component: () => import(/* webpackChunkName: "about" */ './views/UserAdd.vue')
        },
        {
            path: '/products',
            name: 'Products',
            component: () => import(/* webpackChunkName: "about" */ './views/Products.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/products/NewProduct',
            name: 'NewProduct',
            component: () => import(/* webpackChunkName: "about" */ './views/ProductNew.vue')
        },
        {
            path: '/products/:id',
            name: 'EditProduct',
            component: () => import(/* webpackChunkName: "about" */ './views/ProductEdit.vue')
        },
        {
            path: '/Customers',
            name: 'Customers',
            component: () => import(/* webpackChunkName: "about" */ './views/Customers.vue')
        },
        {
            path: '/Customers/Organizations',
            name: 'Organizations',
            component: () => import(/* webpackChunkName: "about" */ './views/Organizations.vue')
        },
        {
            path: '/Customers/NewOrganization',
            name: 'NewOrganization',
            component: () => import(/* webpackChunkName: "about" */ './views/OrganizationNew.vue')
        },
        {
            path: '/Customers/Organizations/:id',
            name: 'EditOrganization',
            component: () => import(/* webpackChunkName: "about" */ './views/OrganizationEdit.vue')
        },
        // {
        //     path: '/Customers/ContactStatuses',
        //     name: 'ContactStatuses',
        //     component: () => import(/* webpackChunkName: "about" */ './views/ContactStatuses.vue')
        // },
        {
            path: '/Customers/Contacts',
            name: 'Contacts',
            component: () => import(/* webpackChunkName: "about" */ './views/Contacts.vue')
        },
        {
            path: '/Customers/NewContact',
            name: 'NewContact',
            component: () => import(/* webpackChunkName: "about" */ './views/ContactNew.vue')
        },
        {
            path: '/Customers/Contacts/:id',
            name: 'EditContacts',
            component: () => import(/* webpackChunkName: "about" */ './views/ContactEdit.vue')
        },
        {
            path: '/Customers/EquipmentProfiles',
            name: 'EquipmentProfiles',
            component: () => import(/* webpackChunkName: "about" */ './views/EquipmentProfiles.vue')
        },
        {
            path: '/Customers/NewEquipmentProfile',
            name: 'NewEquipmentProfile',
            component: () => import(/* webpackChunkName: "about" */ './views/EquipmentProfileNew.vue')
        },
        {
            path: '/Customers/EquipmentProfiles/:id',
            name: 'EditEquipmentProfile',
            component: () => import(/* webpackChunkName: "about" */ './views/EquipmentProfileEdit.vue')
        },
        {
            path: '/WorkOrders',
            name: 'WorkOrders',
            component: () => import(/* webpackChunkName: "about" */ './views/WorkOrders.vue')
        },
        {
            path: '/NewWorkOrder',
            name: 'NewWorkOrder',
            component: () => import(/* webpackChunkName: "about" */ './views/WorkOrderNew.vue')
        },
        // {
        //     path: '/WorkOrder/:id',
        //     name: 'EditWorkOrder',
        //     component: () => import(/* webpackChunkName: "about" */ './views/WorkOrderEdit.vue')
        //  }
        //,
        // {
        //     path: 'WorkOrderStatuses',
        //     name: 'WorkOrderStatuses',
        //     component: () => import(/* webpackChunkName: "about" */ './views/WorkOrderStatuses.vue')
        // }
    ]
})
appRouter.beforeEach((to, from, next) => {
    // First check all possible blocks to being able to access the route
    if (to.matched.some(record => record.meta.requiresAuth)) {  // Route requires logged in users
        if (!store.getters.isLoggedIn) {
            next('/login')
            return
        }
    }

    if (to.matched.some(record => record.meta.isUser)) {  // Route requires a specific username
        let user = store.getters.user
        if (to.meta.isUser != user.username) {
            next('/products')
            return
        }
    }

    // If no reason is found to keep the user from the route, then allow them through
    next()
})

export default appRouter