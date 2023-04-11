import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';
import FeaturesJob from './components/FeaturesJob/FeaturesJob';
import FeatureDetails from './components/FeatureDetails/FeatureDetails';
import { cartAndJobData } from './loaders/getCart&JobData';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <FeaturesJob></FeaturesJob>,
        loader: () => fetch('/features.json')
      },
      {
        path: '/feature/:featureId',
        element: <FeatureDetails></FeatureDetails>,
        loader: ({params}) => {
          // const id = params.Id
          const data = fetch('/features.json')
          return data
        }
      },
      {
        path: '/applied',
        element: <AppliedJob></AppliedJob>,
        loader: cartAndJobData
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
  
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
