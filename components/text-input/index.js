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

const Input = styled.input`
	border: 1px solid ${ colors.gray10 }
	padding: 8px 16px;
	margin-bottom: 24px;
	font-size: 16px;
	box-sizing: border-box;
	width: 100%;
`;

export default class TextInput extends PureComponent {
	render() {
		return(
			<Input type="text" placeholder={ this.props.placeholder } />
		);
	}
}
