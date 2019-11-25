import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { withState } from '@dump247/storybook-state';

// Components
import PageSkeleton from '../components/page-skeleton';
import SectionHeading from '../components/section-heading';
import Card from '../components/card';
import Button from '../components/button';
import RadioButton from '../components/radio-button';

// CSS
import { colors } from '../config/colors.js';
import '../config/index.css';

const importWithJetpack = () =>
	<PageSkeleton>
    <SectionHeading
    	text="Import bicyclemayonnaise.com"
    	backLink={ linkTo( 'Enter Url' ) }
    />
		<Card>
			<h1>What do you want to import?</h1>

			<RadioButton 
			 	label="Everything" 
			 	value="everything"
			/>

			<RadioButton 
			 	label="Content only" 
			 	value="content"
			/>

			<Button buttonText="Continue" />
		</Card>
	</PageSkeleton>
;

storiesOf( 'Import Jetpack Site', module ).add( 'Import Jetpack Site', importWithJetpack );