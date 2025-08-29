import React, { lazy, Suspense } from "react"
import Header from "./components/Header"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'));
const Auth = lazy(() => import('./features/auth/Auth'));
const UserProfile = lazy(() => import('./pages/UserProfile'));

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/auth', element: <Auth mode="login" /> },
      { path: '/profile', element: <UserProfile /> }
    ]
  }
])




export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}