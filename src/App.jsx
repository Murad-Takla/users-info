import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './components/Home'
import AddUser from './AddUser'
import Update from './components/update'

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Home></Home>,
      // loader : ()=> fetch('http://localhost:3000/users')
    },
    {
      path : "/add-user",
      element : <AddUser></AddUser>
    },
    {
      path: "/update/:id",
      element: <Update></Update>,
      loader : ({params}) => fetch(`http://localhost:3000/users/${params.id}`)
    }
  ])
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
