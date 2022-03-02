import React, { ReactElement, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import api from '../utils/api'
import { NewVoteInterface } from '../interface/vote.interface'

const AddVote = (): ReactElement => {
	const [voteMessage, setVoteMessage] = useState<string>('')

	const addVote = async () => {
		try {
			const { data }: { data: NewVoteInterface } = await api({
				method: 'POST',
				url: '/votes',
				data: {
					image_id: 'asf2',
					sub_id: nanoid(8),
					value: 1,
				},
			})
			setVoteMessage(data.message)
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		if (voteMessage) {
			alert(voteMessage)
		}
	}, [voteMessage])

	return (
		<button type='button' onClick={addVote}>
			VOTE
		</button>
	)
}

export default AddVote
