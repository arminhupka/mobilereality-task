import React, { ReactElement } from 'react'
import styled from 'styled-components'

// Components
import InfoBox from '../InfoBox/InfoBox'
import Heading from '../Heading/Heading'
import LinkButton from '../LinkButton/LinkButton'

// Styled Components
const InnerContainer = styled.div`
	padding: 4rem;

	& > * {
		margin-bottom: 4rem;
		:last-child {
			margin-bottom: 0;
		}
	}
`

const OfferBox = (): ReactElement => (
	<InfoBox>
		<InnerContainer>
			<Heading
				title='Nasza oferta'
				subtitle='Dowiedz się co możemy tobie zaoferować'
			/>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus
				sapiente velit? Cum cupiditate ducimus eaque excepturi iste molestias nisi
				officia quia tenetur! Consequuntur cumque impedit ipsa nihil nobis quaerat
				quia quo sequi soluta? Adipisci aperiam aut earum facere fugiat id illum
				maxime, molestiae neque odio, perferendis porro repellat vel voluptate
				voluptatibus. Architecto assumenda at labore nesciunt officiis. Corporis
				delectus, esse eveniet natus omnis pariatur, quibusdam quis quisquam,
				reprehenderit repudiandae sint veniam voluptatum. Atque consequuntur, dicta
				laboriosam magnam obcaecati suscipit.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet at beatae
				commodi ducimus ea est fuga harum, ipsum itaque libero magnam, neque nisi
				nobis officia quam quibusdam quos ratione repudiandae similique sunt vel
				veniam voluptate! Alias eos expedita unde?
			</p>
			<LinkButton href='/votes' title='Zobacz więcej' />
		</InnerContainer>
	</InfoBox>
)

export default OfferBox
