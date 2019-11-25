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

const Item = styled.div`
	font-size: 24px;
	padding: 16px 0;
	display: flex;
	align-items: center;
	border-bottom: 1px solid ${ colors.gray5 };

	:hover {
		cursor: pointer;
	}
`;

const Icon = styled.div`
	display: inline-block;
	height: 48px;
	width: 48px;
	background: ${ colors.gray20 };
	margin-right: 16px;
`;

export default class ImportListItem extends PureComponent {
	render() {
		return(
			<Item onClick={ this.props.onClick }>
				<Icon />
        { this.props.title }
			</Item>
		);
	}
}
