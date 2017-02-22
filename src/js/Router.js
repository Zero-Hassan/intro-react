import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './components/App';
import Resume from './components/main/Resume';
import Variable from './components/main/Variable';
import Fixed from './components/main/fixed/Fixed';

export default(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
  <IndexRoute component={Resume} />
  <Route path="/summary" component={Resume}></Route>
  <Route path="/variable" component={Variable}></Route>
  <Route path="/fixed" component={Fixed}></Route>
  </Route>
  </Router>
)
