/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Gridicon from 'gridicons';

/**
 * Style dependencies
 */
import { colors } from '../../config/colors.js';
import '../../config/index.css';

const Card = styled.div`
  border: 1px solid ${ colors.gray5 };
  background: ${ colors.white };
  padding: 16px 24px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const Title = styled.div`
	text-align: center;
	width: 100%;
`;

const Back = styled.div`
	display: flex;
	font-size: 12px;
	align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export default class SectionHeading extends PureComponent {
	render() {
		return(
			<Card>
        <Back onClick={ this.props.backLink }>
        	<Gridicon icon="arrow-left" size={ 18 } />
        	Back
        </Back>
        <Title>{ this.props.text }</Title>
        <div>&nbsp;</div>
			</Card>
		);
	}
}
