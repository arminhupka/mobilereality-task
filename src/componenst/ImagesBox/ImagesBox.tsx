import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'

// Assets
import logo from '../../assets/img/logo.png'
import home1 from '../../assets/img/home1.jpeg'
import home2 from '../../assets/img/home2.jpeg'

// Components
import InfoBox from '../InfoBox/InfoBox'

// Styled Components
const ImagesGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	@media screen and (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`

const ImageWrapper = styled.div<{ bg?: string }>`
	padding: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.gradient};
	aspect-ratio: 1;

	${({ bg }) =>
		bg &&
		css`
			background: url(${bg});
			background-size: cover;
			background-position: center;
		`}
`

const Image = styled.img`
	width: 50%;
	height: auto;
	vertical-align: bottom;
	object-fit: cover;
`

const ImagesBox = (): ReactElement => (
	<InfoBox>
		<ImagesGrid>
			<ImageWrapper>
				<Image src={logo} alt='Logo' />
			</ImageWrapper>
			<ImageWrapper bg={home1} />
			<ImageWrapper bg={home2} />
			<ImageWrapper bg={home1} />
		</ImagesGrid>
	</InfoBox>
)

export default ImagesBox
