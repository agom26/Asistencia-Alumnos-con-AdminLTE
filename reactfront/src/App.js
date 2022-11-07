import React from 'react'
import Aside from './components/Aside'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <div>
      <Header/>
      <Aside/>
      <Content/>
      <Footer/>
    </div>
  )
}

