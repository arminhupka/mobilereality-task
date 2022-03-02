import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Styled Components
const StyledButton = styled.button`
	position: relative;
	padding: 1rem 3rem;
	font-family: 'Bebas Neue', cursive;
	font-size: 1.8rem;
	color: #009eff;
	background: #fff;
	border: 0.2rem solid ${({ theme }) => theme.primaryColor};
	transition: background 0.3s, color 0.3s, border 0.3s;

	::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: block;
		background: red;
		box-shadow: 0 1rem 2rem ${({ theme }) => theme.primaryColor};
		opacity: 0;
		z-index: -1;
		transition: opacity 0.3s;
	}

	:hover {
		color: #fff;
		background: ${({ theme }) => theme.primaryColor};
		border: 0.2rem solid ${({ theme }) => theme.primaryColorDark};
		::before {
			opacity: 0.3;
		}
	}
`

// Props
interface Props {
	href: string
	title: string
}

const LinkButton = ({ href, title }: Props): ReactElement => (
	<Link to={href}>
		<StyledButton type='button'>{title}</StyledButton>
	</Link>
)

export default LinkButton
