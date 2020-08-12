import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Post from './components/Post/Post'

const articles = [

  {
    id: 1,
    title: 'React Is Awesome',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, doloremque. Earum vero vel velit impedit repudiandae deserunt nam perspiciatis neque.',
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'Title of Article',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, doloremque. Earum vero vel velit impedit repudiandae deserunt nam perspiciatis neque.',
    author: 'John Smith',
  },
  {
    id: 3,
    title: 'Pizza',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, doloremque. Earum vero vel velit impedit repudiandae deserunt nam perspiciatis neque.',
    author: 'Sarah Doe',
  },

];


function App(props) {

  return (
    <div >
      <Navbar />
      <div className="container">
        <Post post={articles[0]} isPublic={true} />
        <Post post={articles[1]} />
        <Post post={articles[2]} />
        <Post />
      </div>


    </div>

  );
}

export default App;
