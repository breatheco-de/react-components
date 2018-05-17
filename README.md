# BreatheCode Platform JS Components

This is the main UI Library used in all BreatheCode interfaces based on react.
> Note: This is a very early development library, please help us debug it.

## Philosophy

The BreatheCode UX is based on Markdown, it mainly relys on typography to create
a neat experience but with a very minimalis approach.

## Instalation

1. Clone the repository
```
$ git clone https://github.com/breatheco-de/react-components.git
```
2. Import any component that you want to use
```
import { Panel, DropLink } from '../path/to/library/index.js';
```

## Component Table of Contents:

| Component     | Description                                                                               |
|---------------|-------------------------------------------------------------------------------------------|
| Button        |Simple button                                                                              | 
| Checkbox      |It's a very simple checkbot                                                                | 
| Droplink      |It's a minimalist bootstrap dropdown                                                       | 
| List          |Just a list of stuff                                                                       | 
| Loading       |Loading animation                                                                          | 
| MenuItem      |Item on the left sidebar                                                                   | 
| Modal         |Show stuff in the center of the screen                                                     | 
| Notifier      |Notifications in the top of the viewport                                                   | 
| Panel         |To display a box with material design shadow level                                         | 
| PrivateRoute  |React Route that requiers autentication to display                                         | 
| ProgressKPI   |Small indicator of progress                                                                | 
| Sidebar       |The Main Navegation component in BreatheCode's UI                                          | 
| BreatheCrumb  |Show the path were the user is standing and allos the user to go back to previous levels   | 

### Actionable
![alt text](https://breatheco-de.github.io/react-components/img/actionable.png "Logo Title Text 1")

### Checkbox
![alt text](https://breatheco-de.github.io/react-components/img/checkbox.png "Logo Title Text 1")

### Droplink
It displays a list of options when you click on it
> Demo:
> ![alt text](https://breatheco-de.github.io/react-components/img/droplink.png "Logo Title Text 1")

```html
        <DropLink
            className='list_card' 
            dropdown={[
                { label: 'review students', slug: 'cohort_students', to: `/manage/student/?cohort=${data.slug}`},
                { label: 'change cohort stage', slug: 'change_stage', data: someData }
            ])}
            onSelect={(opt) => onEntitySelect(opt)}
        >
        Click me
        </DropLink>
```

### List
![alt text](https://breatheco-de.github.io/react-components/img/list.png "Logo Title Text 1")

### Loading
![alt text](https://breatheco-de.github.io/react-components/img/loading.png "Logo Title Text 1")

### Modal
![alt text](https://breatheco-de.github.io/react-components/img/modal.png "Logo Title Text 1")

### Notifier
![alt text](https://breatheco-de.github.io/react-components/img/notifier.png "Logo Title Text 1")

### PrivateRoute
### ProgressKPI
![alt text](https://breatheco-de.github.io/react-components/img/progress_kpi.png "Logo Title Text 1")
### Sidebar
![alt text](https://breatheco-de.github.io/react-components/img/sidebar.png "Logo Title Text 1")
### BreatheCrumb
![alt text](https://breatheco-de.github.io/react-components/img/breadcrump.png "Logo Title Text 1")

