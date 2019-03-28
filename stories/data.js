const _days = [
    {
    	"label": "Day 16 (AM)",
    	"description": "We are giving you a few hours to finish everything you have pending, including the Todo List. Remember you should have everything published on Github by now.",
    	"teacher_instructions": "Make sure students have uploaded everything to their github. and help students finish the todo list and previous exercises and projects",
    	"project": {
    		"title": "Todo list with React and Fetch",
    		"solution": "https://bitbucket.org/codingacademy/todo-list/"
    	},
    	"homework": "Students must finish the all replits and projects",
    	"lessons": [],
    	"assignments": ["todo-list-with-fetch"],
    	"key-concepts": ["Using Fetch to retrieve information from the server", "Asyncrunus Programing", "Component Did Mount its ideal to fetch info", "Initializations on the component contructor before fetching", "Displaying a 'loading' before the data arrives", "Reseting the state when fetch finalizes", "POSTing, PUTing and DELETEing data to the server", "Sync the state with the server"],
    	"technologies": ["React", "Fetch"]
    },
    {
    	"label": "Day 16 (PM)",
    	"description": "You know exactly how to build small js apps, but what if your application will have several pages/views? E.g.: Having a 'Settings' page on the Spotify clone. We need to connect different URLs to our React Components. Welcome to the world of Routing.",
    	"teacher_instructions": "This project is all about URLs and Routing. Each student must build two views/pages: One List and one Single. For example: List of Space Ships and a view for a single Space Ship. The have to make sure the URL's are propery setup on the reouter and also that the information is fetch on the didmount of the respectiv view",
    	"project": {
    		"title": "Starwars blog with reading list",
    		"solution": "https://bitbucket.org/codingacademy/startwars-blog-reading-list/",
    		"instructions": "https://bitbucket.org/codingacademy/startwars-blog-reading-list/"
    	},
    	"homework": "Students must finish the all replits and projects",
    	"lessons": [],
    	"assignments": ["startwars-blog-reading-list"],
    	"key-concepts": ["Connecting Components to URLS (Routing)", "Defining Parameters on the URL Path", "Retrieving URL parameters with match.params", "Using withProps for components not connected directly to the route", "Redirecting with history.push", "Fetching on didmount"],
    	"technologies": ["Routing", "Fetch"]
    },
    {
    	"label": "Day 17 (AM)",
    	"description": "Lets warp the last things about the Starwars Blog because we are about to dive into and exciting journey inside the world of backend! :)",
    	"teacher_instructions": "Help students finish the starwars blog and also any other previous exercises and project and publish them to github",
    	"project": {
    		"title": "Starwars blog with reading list",
    		"solution": "https://bitbucket.org/codingacademy/startwars-blog-reading-list/",
    		"instructions": "https://bitbucket.org/codingacademy/startwars-blog-reading-list/"
    	},
    	"homework": "Students must finish the all replits and projects",
    	"lessons": [],
    	"assignments": [],
    	"key-concepts": [],
    	"technologies": ["Routing", "Fetch"]
    },
    {
    	"label": "Day 17 (PM)",
    	"description": "Lets warp the last things about the Starwars Blog because we are about to dive into and exciting journey inside the world of backend! :)",
    	"teacher_instructions": "Help students finish the starwars blog and also any other previous exercises and project and publish them to github",
    	"project": {
    		"title": "The Contact List",
    		"instructions": "https://projects.breatheco.de/d/contact-list-context#readme"
    	},
    	"homework": "Students must finish the all replits and projects",
    	"lessons": [{
    		"title": "Learning about Context.API",
    		"slug": "context-api"
    	}],
    	"assignments": ["contact-list-context"],
    	"key-concepts": ["Mapping user actions in Flux Actions", "Updating the store from within the actions (setStore)", "Using the Context.Consumer and Context.Producer", "Redirect with history.push()"],
    	"technologies": ["Context.API", "NPM", "React Router", "React", "MVC"]
    },
    {
    	"label": "Day 18",
    	"description": "Take some more time to finish the contact list application",
    	"teacher_instructions": "Help students implement the contact list with Flux + Context",
    	"project": {
    		"title": "The Contact List",
    		"instructions": "https://projects.breatheco.de/d/contact-list-context#readme"
    	},
    	"homework": "Students must finish the all replits and projects",
    	"assignments": [],
    	"key-concepts": [],
    	"technologies": ["Flux, Context"]
    },
    {
    	"label": "Day 19 (AM)",
    	"description": "You have been doing projects given to you in a detailed way, but that is no the case in real life. You are going to have to create your own requirements, and there is a whole methodology for that",
    	"teacher_instructions": "Explain User Stories with an example really fast, explain why they exists and the different between reuierments and stories and whay that matters. Build a couple of stories and then let the students start building the instagram stories right way.",
    	"project": {
    		"title": "Building Instagram User Stories",
    		"instructions": "https://projects.breatheco.de/d/instagram-user-stories#readme"
    	},
    	"homework": "Students must finish the all replits and projects",
    	"lessons": [{
    		"title": "Creating User Stories",
    		"slug": "user-stories-examples"
    	}],
    	"assignments": ["instagram-user-stories"],
    	"key-concepts": ["What is an User Story", "Why we write user stories and not 'requierments' anymore?", "Task/Chore vs User Story",
    		"What can I do about the chores that are not user stories?", "What is the definition of done?", "When its my user story really done?"
    	],
    	"technologies": ["User Stories"]
    }
];
export const days = _days.map((d,i) => {
    d.dayNumber = i;
    return d;
});


export const menuItems = [
    {
        slug:"course", label:"Course", items: [
            { 
                slug: "syllabus", 
                label: "Syllabus", 
                icon: "graduationCap", 
                size: 370 
            },
            { 
                slug: "assignments",
                label: "Assignments", 
                icon: "faCheck", 
                size: 370 
            }
        ]},
    {
        slug:"search", 
        label:"Search" 
    }
];

export const actionableMenu = [
    { label: 'Mark as read', url: 'hello', icon: 'graduationCap' },
    { label: 'Other sample action', url: 'hello'}
];

export const markdown = `
# \`01.6\` Mapping array to \`<li>\`

Now let's build an array dynamically. Let's say you have an array of animals:

\`\`\`js
const animals = [ 'Horse', 'Turtle', 'Elephan', 'Monkey' ];
\`\`\`

# :speech_balloon: Instructions

Update the code's [.map function](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) to create a new array of \`<li>\`'s that each of them corresponds one animal from the original array, the resulting array should be something like this:

\`\`\`jsx
const animalsInHTML = [
  <li>Horse</li>,
  <li>Turtle</li>,
  <li>Elephan</li>,
  <li>Monkey</li>
];
\`\`\`

And include them all together inside the website.

#### :bulb: Hint

- You can use the second parameter of the map function as a \`key\` to uniquely identify each html item.

Your website should look like this: ![LIs](https://ucarecdn.com/773cea7c-acab-46f2-b8af-d03911bbfe24/)
`;