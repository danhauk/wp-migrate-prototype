/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';

/**
 * Style dependencies
 */
import { colors } from '../../config/colors.js';
import '../../config/index.css';

const Btn = styled.button`
	display: inline-block;
	font-size: 14px;
	font-weight: 600;
	border-radius: 4px;
	padding: 7px 14px 9px;
	background: ${ colors.primary };
	border: 1px solid ${ colors.pink70 };
	border-bottom-width: 2px;
	color: ${ colors.white };
	font-weight: 16px;
	text-decoration: none;

	:hover {
		cursor: pointer;
		background: ${ colors.pink60 };
		text-decoration: none;
	}
`;

export default class Button extends PureComponent {
	render() {
		return(
			<Btn
				href={ this.props.href }
				onClick={ this.props.onClick }
			>
				{ this.props.buttonText }
			</Btn>
		);
	}
}
