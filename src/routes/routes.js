
// Layout Files
import LandingLayout from '@/layouts/Landing/LandingLayout.vue';
import AuthLayout from '@/layouts/Auth/AuthLayout.vue'
import AdminLayout from '@/layouts/Admin/AdminLayout.vue'

// Page files
import LandingPage from '@/pages/Landing/LandingPage.vue';
import Faq from '@/pages/Landing/Faq.vue'
import AboutUs from '@/pages/Landing/AboutUs.vue'
import Login from '@/pages/authentication/Login.vue'
import Register from '@/pages/authentication/Register.vue'
import ForgotPassword from '@/pages/authentication/ForgotPassword.vue'


const routes = [
    {
        path: '/auth',
        component: AuthLayout,
        children: [
            {
                name: 'Login',
                path: '/login',
                component: Login
            },
            {
                name: 'Register',
                path: '/register',
                component: Register
            },
            {
                name: 'ForgotPassword',
                path: '/forgot-password',
                component: ForgotPassword
            },
        ]
    },
    {
        path: '/admin',
        component: AdminLayout,
        children: [
            {
                name: 'Home',
                path: '/home',
                component: LandingPage,
            },
            {
                name: 'AboutUs',
                path: '/about-us',
                component: AboutUs,
            },
            {
                name: 'Faq',
                path: '/faq',
                component: Faq,
            }
        ]
    },
    {
        path: '/',
        component: LandingLayout,
        children: [
            {
                name: 'About Us',
                path: '/AboutUs',
                component: AboutUs
            }
        ]
    }
]

export default routes;