import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Views
import HomeView from './views/HomeView'
import VotesList from './views/VotesList'
import AddVote from './views/AddVote'
import VoteDetails from './views/VoteDetails'

const App = () => (
	<Routes>
		<Route path='/' element={<HomeView />} />
		<Route path='/votes' element={<VotesList />} />
		<Route path='/add' element={<AddVote />} />
		<Route path='/votes/:id' element={<VoteDetails />} />
	</Routes>
)

export default App
