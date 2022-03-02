import React, { ReactElement, ReactNode } from 'react'
import styled, { css } from 'styled-components'

// Styled Components
const InfoBoxWrapper = styled.div<{ bg?: string }>`
	height: 100%;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	& > * {
		margin-bottom: 4rem;
		:last-child {
			margin-bottom: 0;
		}
	}

	${({ bg }) =>
		bg &&
		css`
			::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: url(${bg}) no-repeat center;
				background-size: cover;
				z-index: -1;
			}

			::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: ${({ theme }) => theme.gradient};
				opacity: 0.7;
				z-index: -1;
			}
		`}
`

const InnerContainer = styled.div``

// Props
interface Props {
	children: ReactNode
	// eslint-disable-next-line react/require-default-props
	bgImage?: string
}

const InfoBox = ({ children, bgImage }: Props): ReactElement => (
	<InfoBoxWrapper bg={bgImage}>
		<InnerContainer>{children}</InnerContainer>
	</InfoBoxWrapper>
)

export default InfoBox
