/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';

import * as contact from './actions/contactActions';
import * as education from './actions/educationActions';
import * as experience from './actions/experienceActions';
import * as home from './actions/homeActions';
import * as message from './actions/messageActions';
import * as profile from './actions/profileActions';
import * as resume from './actions/resumeActions';
import * as site from './actions/siteActions';
import * as skillset from './actions/skillsetActions';
import * as socialmedia from './actions/socialMediaActions';

import './styles/all.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();

store.dispatch(contact.load());
store.dispatch(education.load());
store.dispatch(experience.load());
store.dispatch(home.load());
store.dispatch(message.load());
store.dispatch(profile.load());
store.dispatch(resume.load());
store.dispatch(site.load());
store.dispatch(skillset.load());
store.dispatch(socialmedia.load());
store.dispatch(profile.homeLoad(1));
store.dispatch(profile.experienceLoad(1));

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
