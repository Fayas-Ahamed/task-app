import React from 'react';
import TaskApp from './TaskApp';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import BlogPost from './BlogPost';
import NoMatch from './NoMatch';

export default function Root() {
  
  return (
    <Router>
      <div className="task-app-container">
        <NavigationBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <TaskApp />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <BlogPost />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
