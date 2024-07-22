import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '../pages/login'
import Main from '../pages/main'

const routes = [
    {
        path: '/',
        Component: Main,
    },
    {
        path: '/login',
        Component: Login
    }
]
export default createBrowserRouter(routes)