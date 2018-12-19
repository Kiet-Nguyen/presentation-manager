import React from 'react';
import { Link, Route } from 'react-router-dom';

import Presentations from '../Presentations/Presentations';

const LandingPage = () => (
  <div>
    <Link to="/presentation">Check Presentation</Link>
    <Route path="/presentation" exact component={Presentations} />
  </div>
);

export default LandingPage;
