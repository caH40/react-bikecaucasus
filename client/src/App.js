import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Home from './pages/Home'
import Trails from './pages/Trails'
import Gallery from './pages/Gallery'
import Dzhilsu from './pages/Dzhilsu'
import Page404 from './pages/Page404'

import Header from './components/Header'
import Footer from './components/Footer'

import './css/App.css'

function App() {
	return (
		<main className='container'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='trails' element={<Trails />} />
				<Route path='gallery' element={<Gallery />} />
				<Route path='dzhilsu' element={<Dzhilsu />} />
				<Route path='*' element={<Page404 />} />
			</Routes>
			<Footer />
		</main>
	)
}

export default App
