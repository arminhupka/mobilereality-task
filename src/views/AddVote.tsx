import React, { ReactElement, useState } from 'react'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import api from '../utils/api'
import { NewVoteInterface } from '../interface/vote.interface'

// Styled Components
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

const AddVote = (): ReactElement => {
	const navigate = useNavigate()
	const [voteAdded, setVoteAdded] = useState<boolean>(false)
	const [message, setMessage] = useState<string>('')

	const handleAddVoteButton = async () => {
		setMessage('')
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
			setVoteAdded(true)
			setMessage(data.message)
		} catch (err) {
			console.log(err)
		}
	}

	const handleBackButton = () => navigate(-1)

	return (
		<Wrapper>
			{voteAdded && (
				<button type='button' onClick={handleBackButton}>
					Back to list
				</button>
			)}
			<button type='button' onClick={handleAddVoteButton}>
				VOTE
			</button>
			<span>{message}</span>
		</Wrapper>
	)
}

export default AddVote
