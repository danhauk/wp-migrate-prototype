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

const Header = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: ${ colors.gray80 };
  margin: 0 0 4px;
`;

const Subheader = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: ${ colors.gray60 };
  margin: 0 0 16px;
`;

export default class PageHeader extends PureComponent {
	render() {
		return(
			<div>
        <Header>{ this.props.headerText }</Header>
        <Subheader>{ this.props.subheaderText }</Subheader>
			</div>
		);
	}
}
