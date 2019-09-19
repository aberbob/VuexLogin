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
            path: '/PartsAvailability/:id',
            name: 'PartsAvailability',
            component: () => import(/* webpackChunkName: "about" */ './views/PartsAvailability.vue'),
            meta: {
              noAuth: true,
            }
        },
        {
            path: '/LocationInventory/:id',
            name: 'LocationInventory',
            component: () => import(/* webpackChunkName: "about" */ './views/LocationInventory.vue'),
            meta: {
              noAuth: true,
            }
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
            component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
            meta: {
                noAuth: true,
              }
        },
        {
            path: '/adduser',
            name: 'adduser',
            component: () => import(/* webpackChunkName: "about" */ './views/UserAdd.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/parts',
            name: 'parts',
            component: () => import(/* webpackChunkName: "about" */ './views/Parts.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/parts/NewPart',
            name: 'NewPart',
            component: () => import(/* webpackChunkName: "about" */ './views/PartNew.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/Parts/:id',
            name: 'EditPart',
            component: () => import(/* webpackChunkName: "about" */ './views/PartEdit.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/Customers',
            name: 'Customers',
            component: () => import(/* webpackChunkName: "about" */ './views/Customers.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/Customers/Organizations',
            name: 'Organizations',
            component: () => import(/* webpackChunkName: "about" */ './views/Organizations.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/Customers/NewOrganization',
            name: 'NewOrganization',
            component: () => import(/* webpackChunkName: "about" */ './views/OrganizationNew.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/Customers/Organizations/:id',
            name: 'EditOrganization',
            component: () => import(/* webpackChunkName: "about" */ './views/OrganizationEdit.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/Cart',
            name: 'Cart',
            component: () => import(/* webpackChunkName: "about" */ './views/Cart.vue')
        },
        {
            path: '/Customers/Contacts',
            name: 'Contacts',
            component: () => import(/* webpackChunkName: "about" */ './views/Contacts.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/Customers/NewContact',
            name: 'NewContact',
            component: () => import(/* webpackChunkName: "about" */ './views/ContactNew.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/Customers/Contacts/:id',
            name: 'EditContacts',
            component: () => import(/* webpackChunkName: "about" */ './views/ContactEdit.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/Customers/EquipmentProfiles',
            name: 'EquipmentProfiles',
            component: () => import(/* webpackChunkName: "about" */ './views/EquipmentProfiles.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/Customers/NewEquipmentProfile',
            name: 'NewEquipmentProfile',
            component: () => import(/* webpackChunkName: "about" */ './views/EquipmentProfileNew.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/Customers/EquipmentProfiles/:id',
            name: 'EditEquipmentProfile',
            component: () => import(/* webpackChunkName: "about" */ './views/EquipmentProfileEdit.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/InventoryLocations/:id',
            name: 'InventoryLocationsEdit',
            component: () => import(/* webpackChunkName: "about" */ './views/InventoryLocationEdit.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/WorkOrders',
            name: 'WorkOrders',
            component: () => import(/* webpackChunkName: "about" */ './views/WorkOrders.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/NewWorkOrder',
            name: 'NewWorkOrder',
            component: () => import(/* webpackChunkName: "about" */ './views/WorkOrderNew.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/InventoryLocations',
            name: 'InventoryLocations',
            component: () => import(/* webpackChunkName: "about" */ './views/InventoryLocations.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/NewInventoryLocation',
            name: 'NewInventoryLocation',
            component: () => import(/* webpackChunkName: "about" */ './views/InventoryLocationNew.vue'),
            meta: {
              requiresAuth: true
            }
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

    if (to.matched.some(record => record.meta.noAuth)) {  // Route requires unlogged in users
        if (store.getters.isLoggedIn) {
            next('/WorkOrders')
            return
        }
    }

    if (to.matched.some(record => record.meta.isUser)) {  // Route requires a specific username
        let user = store.getters.user
        if (to.meta.isUser != user.username) {
            next('/parts')
            return
        }
    }

    // If no reason is found to keep the user from the route, then allow them through
    next()
})

export default appRouter