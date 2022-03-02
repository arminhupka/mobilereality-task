import React, { ReactElement } from 'react'
import styled from 'styled-components'

// Styled Components
const HeadingWrapper = styled.div``
const Title = styled.h1`
	font-size: 5rem;
`
const Subtitle = styled.h2`
	color: ${({ theme }) => theme.primaryColor};
`

// Props
interface Props {
	title: string
	subtitle: string
}

const Heading = ({ title, subtitle }: Props): ReactElement => (
	<HeadingWrapper>
		<Title>{title}</Title>
		<Subtitle>{subtitle}</Subtitle>
	</HeadingWrapper>
)

export default Heading
