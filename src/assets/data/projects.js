import { v4 as uuidv4 } from 'uuid';
import WeatherImg from '../images/weatherapp.jpg';
import Todo from '../images/todo.jpeg';

const projects = [
  {
    id: uuidv4(),
    name: 'Weather App',
    desc: 'A simple weather App using React, Redux and Bootstrap, API from openweathermap.',
    img: WeatherImg,
    url: 'https://weatherapp-2971d.web.app/',
  },
  {
    id: uuidv4(),
    name: 'Todo List',
    desc: 'Simple Todolist to help you plan your day!',
    img: Todo,
    url: 'https://todolist-e97be.web.app/',
  },
  {
    id: uuidv4(),
    name: 'Simple Chat App',
    desc: 'Simple Chat App using ReactJS and firebase to store data, the project is only for testing on local, have not deployed yet',
    img: 'https://www.bittbox.com/wp-content/uploads/13-android-grumpy-cat-chat-app.jpg',
    url: 'https://sway.office.com/R7shLLpsNH5wh4na?play',
  },
  {
    id: uuidv4(),
    name: 'User Management System',
    desc: 'Simple user management system build with NodeJS, EJS and MongoDB',
    img: 'https://yi-files.s3.eu-west-1.amazonaws.com/products/1032000/1032840/1723295-full.jpg',
    url: 'https://users-managementt.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Lorem ipsum dolor',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    img: 'https://i.pinimg.com/736x/42/ad/0a/42ad0a58a34c71a51319ddbde601ad26.jpg',
    url: '',
  },
  {
    id: uuidv4(),
    name: 'Lorem ipsum dolor',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    img: 'https://images.squarespace-cdn.com/content/v1/5bf344f3cc8fed7bb0223d26/1560553953178-P00NDFDE3FUN3O2J395N/BRAVRY-banner-New.png?format=1000w',
    url: '',
  },
  {
    id: uuidv4(),
    name: 'Lorem ipsum dolor',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    img: 'https://cdn.dribbble.com/users/282315/screenshots/14742385/media/28877fde19a52e462ad09f54c9ba1f0a.png?compress=1&resize=400x300',
    url: '',
  },
];

export default projects;
