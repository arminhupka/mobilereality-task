import React, { ReactElement, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../utils/api'
import { VoteDetailsResponseInterface } from '../interface/vote.interface'

const VoteDetails = (): ReactElement => {
	const [vote, setVote] = useState<VoteDetailsResponseInterface | null>(null)
	const [loading, setLoading] = useState<boolean>(false)
	const { id } = useParams()

	const getVoteDetails = async (voteId: string) => {
		try {
			setLoading(true)
			const { data }: { data: VoteDetailsResponseInterface } = await api({
				method: 'GET',
				url: `/votes/${voteId}`,
			})

			setVote(data)
			setLoading(false)
		} catch (err) {
			setLoading(false)
			console.log(err)
		}
	}

	useEffect(() => {
		if (id) {
			getVoteDetails(id)
		}
	}, [])

	if (loading) {
		return <span>Loading</span>
	}

	return (
		<div>
			<span>VOTE ID: {vote?.id}</span>
			<span>SUB ID: {vote?.sub_id}</span>
		</div>
	)
}

export default VoteDetails
