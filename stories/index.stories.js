import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { days } from './data.js';

import { Theme, ActionableItem, DropLink, Button, CheckBox, BreadCrumb,
 List, TimeLine, Sidebar, Panel, ProgressKPI, Login, Forgot, Loading,
 LoadBar } from '../src/index';

import { text, boolean, number, array, object, select } from '@storybook/addon-knobs';



/**
 *  Actionable Item
 */

const actionableItemOptions = [
    { label: 'Mark as read', url: 'hello' },
    { label: 'Other sample action', url: 'hello'}
];
storiesOf('ActionableItem', module).add('default configuration', () => (<Theme.Theme>
    <ActionableItem label={text('Label', 'Make dinner')}
      onDropdownSelect={action('actionable-select')}
      dropdown={object('Options', actionableItemOptions)}
    />
</Theme.Theme>));
  
  
  
/**
 *  BreatheCrumb
 */
  
const levels = [
    { label: 'Home', slug: 'home' },
    { label: 'Contact Us', slug: 'contact-us' }
];
storiesOf('BreatheCrumb', module).add('default configuration', () => (<Theme.Theme>
    <BreadCrumb 
      levels={object('Levels', levels)}
      logoURL={null}
      onClick={action('breadcrumb-click')}
    />
</Theme.Theme>));

  
/**
 *  DropLink
 */
  
const droplinkOptions = [
    { label: 'Mark as read', url: 'hello' },
    { label: 'Other sample action', url: 'hello'}
];
storiesOf('DropLink', module).add('default configuration', () => (<Theme.Theme>
    <DropLink label={text('Label', 'Click me to see the options available for this action')}
      dropdown={object('Options', droplinkOptions)}
      onSelect={action('droplink-select')}
    > I am a dropdown</DropLink>
</Theme.Theme>));



/**
 *  CheckBox
 */

storiesOf('CheckBox', module).add('default configuration', () => (<Theme.Theme>
    <CheckBox 
      label={text('Label', 'Finish replits about react.js')} 
      onClick={action('checkbox-click')}
    />
</Theme.Theme>),{
  notes: { markdown: 'welele' }
});
 
 
 
 
/**
 *  Button
 */
 
storiesOf('Button', module).add('default configuration', () => (<Theme.Theme>
    <Button 
      label={text('Label', 'Click Me!')} 
      icon={text('Label', 'fab fa-trash')}
      type={select('Type', ['light'], 'light')}
      dropdown={[
        { label: 'First action', url: 'hello' }
      ]}
      onClick={action('checkbox-click')}
    > 
    I am a dropdown
    </Button>
</Theme.Theme>));


 
/**
 *  List
 */
 
storiesOf('List', module).add('default configuration', () => (<Theme.Theme>
    <Button 
      label={text('Label', 'Click Me!')} 
      className={text('Classname')}
      type={select('Type', ['light'], 'light')}
      dropdown={[
        { label: 'First action', url: 'hello' }
      ]}
      onClick={action('checkbox-click')}
    > 
    I am a dropdown
    </Button>
</Theme.Theme>));


/**
 *  List
 */
 
storiesOf('List', module).add('default configuration', () => (<Theme.Theme>
    <Button 
      label={text('Label', 'Click Me!')} 
      className={text('Classname')}
      type={select('Type', ['light'], 'light')}
      dropdown={[
        { label: 'First action', url: 'hello' }
      ]}
      onClick={action('checkbox-click')}
    > 
    I am a dropdown
    </Button>
</Theme.Theme>));

/**
 *  Loading
 */
 
storiesOf('Loading', module).add('default configuration', () => (<Theme.Theme>
    <Loading 
      show={boolean('show', true)} 
    /> 
</Theme.Theme>));

/**
 *  LoadBar
 */
 
storiesOf('Load bar', module).add('default configuration', () => (<Theme.Theme>
    <LoadBar />
</Theme.Theme>));


/**
 *  Timeline
 */

storiesOf('TimeLine', module).add('default configuration', () => (<Theme.Theme>
    <TimeLine 
      days={object('Days', days)} 
      onClick={action('timline-day-click')}
    > 
    I am a dropdown
    </TimeLine>
</Theme.Theme>));

/**
 *  Sidebar
 */

storiesOf('Sidebar', module).add('default configuration', () => (<Theme.Theme>
    <Sidebar 
      days={object('Days', days)} 
      onClick={action('timline-day-click')}
    > 
    I am a Sidebar
    </Sidebar>
</Theme.Theme>));

/**
 *  Panel
 */

storiesOf('Panel', module).add('default configuration', () => (<Theme.Theme>
    <Panel 
      style={object('style', {padding: "10px"})} 
      zDepth={text('zDepth', '1')}
    > 
    I am a Panel, you can change my deph and I will look more 3D. Similar to matirial design panels.
    </Panel>
</Theme.Theme>));


/**
 *  KPI Progress
 */

storiesOf('ProgressKPI', module).add('default configuration', () => (<Theme.Theme>
    <ProgressKPI 
      progress={text('progress', '80')}
    />
</Theme.Theme>));


/**
 *  Login
 */

storiesOf('Login', module).add('default configuration', () => (<Theme.Theme>
    <Login 
      onSubmit={action('login-submission-click')}
      onForgot={action('forgot-click')}
      logoHeight={text('logoHeight', '100px')}
      appName={text('appName', 'BreatheCode Test App v0.1')}
      logoURL={text('logoURL', 'http://assets.breatheco.de/apis/img/icon/breathecode.png')}
    />
</Theme.Theme>));

/**
 *  Login
 */

storiesOf('Forgot', module).add('default configuration', () => (<Theme.Theme>
    <Forgot 
      onSubmit={action('login-submission-click')}
      onBackToLogin={action('back-to-login-click')}
      logoHeight={text('logoHeight', '100px')}
      appName={text('appName', 'BreatheCode Test App v0.1')}
      logoURL={text('logoURL', 'http://assets.breatheco.de/apis/img/icon/breathecode.png')}
    />
</Theme.Theme>));