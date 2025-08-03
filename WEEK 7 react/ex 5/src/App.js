import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [activeSection, setActiveSection] = useState("books");

  const books = [
    { id: 101, bname: 'Master React', price: 670 },
    { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
    { id: 103, bname: 'Mongo Essentials', price: 450 }
  ];

  const blogs = [
    { id: 1, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', author: 'Schwezdneier', content: 'You can install React from npm.' }
  ];

  const courses = [
    { id: 1, name: 'Angular', date: '4/5/2021' },
    { id: 2, name: 'React', date: '6/3/2021' }
  ];

  return (
    <div>
      <h1>Blogger App</h1>
      <button onClick={() => setActiveSection("books")}>Show Books</button>
      <button onClick={() => setActiveSection("blogs")}>Show Blogs</button>
      <button onClick={() => setActiveSection("courses")}>Show Courses</button>

      {/* conditional rendering */}
      {activeSection === "books" && <BookDetails books={books} />}
      {activeSection === "blogs" && <BlogDetails blogs={blogs} />}
      {activeSection === "courses" && <CourseDetails courses={courses} />}
    </div>
  );
}

export default App;
