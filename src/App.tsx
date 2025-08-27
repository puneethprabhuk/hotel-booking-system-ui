import React, { lazy, Suspense } from "react"
import Header from "./components/Header"
import PropertyCard from "./components/PropertyCard"
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'));
const Auth = lazy(() => import('./pages/Auth'));

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
      { path: '/auth', element: <Auth mode="login" /> }
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