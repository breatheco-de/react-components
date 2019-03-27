import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { days, menuItems, actionableMenu } from './data.js';

import { Theme, ActionableItem, DropLink, Button, CheckBox, BreadCrumb,
 List, TimeLine, Sidebar, Panel, ProgressKPI, Login, Forgot, Loading,
 LoadBar, MenuItem } from '../src/index';

import { text, boolean, number, array, object, select } from '@storybook/addon-knobs';



/**
 *  Actionable Item
 */

storiesOf('ActionableItem', module).add('default configuration', () => (<Theme.Theme>
    <ActionableItem label={text('Label', 'Make dinner')}
      onDropdownSelect={action('actionable-select')}
      dropdown={object('Options', actionableMenu)}
      done={boolean('Done', true)}
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
      className={text('className', 'w-50')} 
      icon={text('icon', 'trash')}
      type={select('Type', ['light'], 'light')}
      dropdown={[
        { label: 'First action', url: 'hello' }
      ]}
      onClick={action('checkbox-click')}
    >
      Click Me
    </Button>
</Theme.Theme>));


 
/**
 *  List
 */
 
storiesOf('List', module).add('default configuration', () => (<Theme.Theme>
    <List> 
      <ActionableItem label={text('Label', 'Make dinner')}
        onDropdownSelect={action('actionable-select')}
        dropdown={object('Options', actionableMenu)}
      />
      <ActionableItem label={text('Label', 'Make dinner')}
        onDropdownSelect={action('actionable-select')}
        dropdown={object('Options', actionableMenu)}
      />
    </List>
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
    /> 
</Theme.Theme>));

/**
 *  Sidebar
 */

storiesOf('Sidebar', module).add('default configuration', () => (<Theme.Theme>
    <Sidebar
      menu={() => <ul className="px-3">
				<MenuItem label="Syllabus" slug="syllabus" iconName="graduationCap" collapsed={false} onClick={action('menu-item-click')} />
				<MenuItem label="Attendancy" slug="attendancy" iconName="trash" collapsed={false} onClick={action('menu-item-click')} />
			</ul>}
			onBrandClick={action('brand-click')}
    > 
      <h1>This is the content of the page</h1>
    </Sidebar> 
</Theme.Theme>));

/**
 *  Sidebar
 */

storiesOf('Sidebar', module).add('with timeline', () => (<Theme.Theme>
    <Sidebar
      menu={() => <TimeLine 
        days={days} 
        height="100%"
      />}
			onBrandClick={action('brand-click')}
    > 
      <h1>This is the content of the page</h1>
    </Sidebar> 
</Theme.Theme>));

/**
 *  Sidebar
 */

storiesOf('Sidebar', module).add('with footer', () => (<Theme.Theme>
    <Sidebar
      menu={() => <TimeLine 
        days={days} 
        height="100%"
      />}
			onBrandClick={action('brand-click')}
      footer={() => <div className="sidebar-footer">
        <a href="#">
          <i className="fa fa-bell"></i>
          <span className="badge badge-pill badge-warning notification">3</span>
        </a>
        <a href="#">
          <i className="fa fa-envelope"></i>
          <span className="badge badge-pill badge-success notification">7</span>
        </a>
        <a href="#">
          <i className="fa fa-cog"></i>
          <span className="badge-sonar"></span>
        </a>
        <a href="#">
          <i className="fa fa-power-off"></i>
        </a>
      </div>}> 
      <h1>This is the content of the page</h1>
    </Sidebar> 
</Theme.Theme>));
/**
 *  Sidebar
 */

storiesOf('Sidebar', module).add('with small footer', () => (<Theme.Theme>
    <Sidebar
      menu={() => <TimeLine 
        days={days} 
        height="100%"
      />}
			onBrandClick={action('brand-click')}
      footer={() => <div className="sidebar-footer">
        <a href="#">
          <i className="fa fa-power-off"></i>
        </a>
      </div>}> 
      <h1>This is the content of the page</h1>
    </Sidebar> 
</Theme.Theme>));

/**
 *  MenuItem
 */

storiesOf('MenuItem', module).add('default configuration', () => (<Theme.Theme>
    <MenuItem 
      label={text('label', 'First option of the menu')} 
      iconName={text('icon', 'cog')} 
      collapsed={boolean('collapsed', true)} 
      onClick={action('menu-item-click')}
    /> 
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