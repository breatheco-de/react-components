import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Theme, ActionableItem, DropLink, Button, CheckBox } from '../src/index';

import { text, boolean, number, array, object, select } from '@storybook/addon-knobs';

const Welcome = () => (<h1>Welcome to the BreatheCode UI!</h1>);
storiesOf('Welcome', module).add('to BreatheCode UI', () => (<Welcome />));


const actionableItemOptions = [
    { label: 'Mark as read', url: 'hello' },
    { label: 'Other sample action', url: 'hello'}
];
storiesOf('ActionableItem', module).add('with text', () => (<Theme.Theme>
    <ActionableItem label={text('Label', 'Make dinner')}
      onDropdownSelect={action('actionable-select')}
      dropdown={object('Options', actionableItemOptions)}
    />
</Theme.Theme>));
  
  
  
  
const droplinkOptions = [
    { label: 'Mark as read', url: 'hello' },
    { label: 'Other sample action', url: 'hello'}
];
storiesOf('DropLink', module).add('with text', () => (<Theme.Theme>
    <DropLink label={text('Label', 'Click me to see the options available for this action')}
      dropdown={object('Options', droplinkOptions)}
      onSelect={action('droplink-select')}
    > I am a dropdown</DropLink>
</Theme.Theme>));





storiesOf('CheckBox', module).add('with text', () => (<Theme.Theme>
    <CheckBox 
      label={text('Label', 'Finish replits about react.js')} 
      onClick={action('checkbox-click')}
    />
</Theme.Theme>),{
  notes: { markdown: 'welele' }
});
 
storiesOf('Button', module).add('with text', () => (<Theme.Theme>
    <Button 
      label={text('Label', 'Click Me!')} 
      icon={text('Label', 'Click Me!')}
      type={select('Type', ['light'], 'light')}
      dropdown={[
        { label: 'First action', url: 'hello' }
      ]}
    > 
    I am a dropdown
    </Button>
</Theme.Theme>));
