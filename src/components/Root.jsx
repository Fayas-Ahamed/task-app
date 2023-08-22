import React from 'react';
import App from './App';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NoMatch from './pages/NoMatch';

export default function Root() {
  
  return (
    <Router>
      <div className="task-app-container">
        <NavigationBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <App />
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
