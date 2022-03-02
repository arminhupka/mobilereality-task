import React, { ReactElement } from 'react'
import styled from 'styled-components'

// Assets
import home from '../../assets/img/home1.jpeg'

// Components
import InfoBox from '../InfoBox/InfoBox'

// Styled Components
const InnerContainer = styled.div`
	padding: 4rem;
`

const StyledList = styled.ul`
	list-style: none;
`
const StyledItem = styled.li`
	margin-bottom: 1rem;
	font-family: 'Bebas Neue', cursive;
	font-size: 2.5rem;

	:last-child {
		margin-bottom: 0;
	}
`

const ServicesBox = (): ReactElement => (
	<InfoBox bgImage={home}>
		<InnerContainer>
			<StyledList>
				<StyledItem>Budowa domów z drewna</StyledItem>
				<StyledItem>Budowa bram wjazdowych</StyledItem>
				<StyledItem>Wykończenia wnętrz</StyledItem>
				<StyledItem>Altany ogrodowe</StyledItem>
				<StyledItem>Kamienne elementy architektury</StyledItem>
				<StyledItem>Remonty</StyledItem>
			</StyledList>
		</InnerContainer>
	</InfoBox>
)

export default ServicesBox
