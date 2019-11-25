import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import PageSkeleton from '../components/page-skeleton';
import PageHeader from '../components/page-header';
import Card from '../components/card';
import ImportListItem from '../components/import-list-item';

// CSS
import { colors } from '../config/colors.js';

const importStart = () =>
	<PageSkeleton>
    <PageHeader
    	headerText="Import"
    	subheaderText="Move your site to WordPress.com"
    />
    <Card>
    	<ImportListItem title="WordPress" onClick={ linkTo( 'Enter Url' ) } />
    	<ImportListItem title="Blogger" />
    	<ImportListItem title="GoDaddy" />
    	<ImportListItem title="Medium" />
    	<ImportListItem title="Squarespace" />
    	<ImportListItem title="Wix" />
    </Card>
  </PageSkeleton>
;

storiesOf( 'Import', module ).add( 'Import', importStart );
