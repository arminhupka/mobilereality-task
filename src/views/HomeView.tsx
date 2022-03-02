import React from 'react'
import styled from 'styled-components'

// Components
import AboutBox from '../componenst/AboutBox/AboutBox'
import ImagesBox from '../componenst/ImagesBox/ImagesBox'
import ServicesBox from '../componenst/ServicesBox/ServicesBox'
import OfferBox from '../componenst/OfferBox/OfferBox'

// Styled Components
const PageLayout = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr;

	@media screen and (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
		}
	}
`

const HomeView = () => (
	<PageLayout>
		<AboutBox />
		<ImagesBox />
		<ServicesBox />
		<OfferBox />
	</PageLayout>
)

export default HomeView
