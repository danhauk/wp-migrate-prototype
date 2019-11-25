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

const NewCard = styled.div`
  border: 1px solid ${ colors.gray5 };
  background: ${ colors.white };
  padding: 16px 24px;
`;

export default class Card extends PureComponent {
	render() {
		return(
			<NewCard>
        { this.props.children }
			</NewCard>
		);
	}
}
