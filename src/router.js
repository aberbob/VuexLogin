import Vue from 'vue'
import Router from 'vue-router'
import store from './stores/store'

const session = require('express-session')

function checkjwt(to, from, next) {
    if (req.session.user.id) {
        next();
    } else {
        next('/login');
    }
}

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/', redirect: '/Login'
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
            beforeEnter: checkjwt
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import(/* webpackChunkName: "about" */ './views/Admin.vue'),
            beforeEnter: checkjwt
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
            component: () => import(/* webpackChunkName: "about" */ './views/Products.vue')
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