import './App.css'; 
import React from 'react'
import * as ReactDOM from "react-dom/client"; 
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

import About from './components/About';
import Projects from './components/Projects';
import Other from './components/Other';
import Mockups from './components/info/Mockups';

const App = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <About />
        },
        {
          path: "projects",
          element: <Projects />
        },
        {
            path: "other", 
            element: <Other />
        }, 
        {
            path: "mockups", 
            element: <Mockups />
        }
      ]);

  return (
    <div className="main-container">
        <RouterProvider router = {router} />
    </div>
  )
}
export default App;
