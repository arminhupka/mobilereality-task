import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../utils/api'
import { VoteDetailsResponseInterface } from '../interface/vote.interface'

const VotesList = () => {
	const [votes, setVotes] = useState<VoteDetailsResponseInterface[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const getVotes = async () => {
		try {
			setIsLoading(true)
			const { data } = await api.get('votes')
			setVotes(data)
			setIsLoading(false)
		} catch (err) {
			setIsLoading(false)
			console.log(err)
		}
	}

	const deleteVote = async (voteId: number) => {
		try {
			const { data } = await api({
				method: 'DELETE',
				url: `/votes/${voteId}`,
			})

			console.log(data)

			await getVotes()
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		getVotes()
	}, [])

	if (isLoading) {
		return <span>Loading</span>
	}

	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to='/add'>
							<span>Add Vote</span>
						</Link>
					</li>
				</ul>
			</nav>
			<ul>
				{votes.map(vote => (
					<li key={vote.id}>
						<Link to={`/votes/${vote.id}`}>
							<span>Vote: {vote.id}</span>
						</Link>
						<button type='button' onClick={() => deleteVote(vote.id)}>
							DELETE VOTE
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default VotesList
