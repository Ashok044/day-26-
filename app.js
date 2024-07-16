import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import AllCourses from './AllCourses';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/all" component={AllCourses} />
        <Route path="/full-stack-development" component={FullStackDevelopment} />
        <Route path="/data-science" component={DataScience} />
        <Route path="/cyber-security" component={CyberSecurity} />
        <Route path="/career" component={Career} />
      </Switch>
    </Router>
  );
};

export default App;
