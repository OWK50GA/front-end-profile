import { 
  createBrowserRouter, 
  Route,  
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import { useState } from 'react'
import './App.css'
import ScheduleForm from './Components/ScheduleForm'
import ScheduleList from "./Components/ScheduleList";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="schedule-form" element={<ScheduleForm/>}></Route>
        <Route path="/" element={<ScheduleList/>}/>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
