import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import PageSkeleton from '../components/page-skeleton';
import SectionHeading from '../components/section-heading';
import Card from '../components/card';
import TextInput from '../components/text-input';
import Button from '../components/button';

// CSS
import { colors } from '../config/colors.js';
import '../config/index.css';

const Actions = styled.div`
	display: flex;
	align-items: center;
`;

const TextLink = styled.div`
	color: ${ colors.blue50 };
	font-weight: 600;
	text-decoration: none;
	margin-left: 24px;

	:hover {
		cursor: pointer;
	}
`;

const enterUrl = () =>
	<PageSkeleton>
    <SectionHeading
    	text="Import from WordPress"
    	backLink={ linkTo( 'Import' ) }
    />
		<Card>
			<h1>What WordPress site do you want to import?</h1>
			<p>Enter a URL and we’ll help you move your site to WordPress.com.</p>
			<TextInput placeholder="example.com" />
			<Actions>
				<Button
					buttonText="Continue"
					onClick={ linkTo( 'Import Jetpack Site' ) }
				/>
				<TextLink>Upload a file instead</TextLink>
			</Actions>
		</Card>
	</PageSkeleton>
;

storiesOf( 'Enter Url', module ).add( 'Enter Url', enterUrl );