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

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: scroll;
`;

const Header = styled.header`
  background: ${ colors.highlight };
  display: flex;
  align-items: center;
  height: 46px;
`;

const Sidebar = styled.div`
  background: ${ colors.white };
  width: 273px;
  border-right: 1px solid ${ colors.gray5 };
`;

const Container = styled.div`
  background: ${ colors.gray0 };
  display: flex;
  height: 100%;
  justify-content: space-around;
`;

const Primary = styled.div`
  width: 720px;
  margin: 40px auto;
`;

export default class PageSkeleton extends PureComponent {
	render() {
		return(
			<Page>
				<Header />
				<Container>
					<Sidebar />
					<Primary>
						{ this.props.children }
					</Primary>
				</Container>
			</Page>
		);
	}
}
