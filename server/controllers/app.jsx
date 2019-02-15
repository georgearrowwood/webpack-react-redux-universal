import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchRoutes } from 'react-router-config';
import App from '../../app/server';
import store from '../../app/store';
import Routes from '../../app/routes';

import config from '../modules/config';


const appController = {
  init: async (req, res) => {

    const actions = matchRoutes(Routes, req.path)
    .map(({ route }) => route.component.fetching ? route.component.fetching({...store, path: req.path }) : null)
    .map(async actions => await Promise.all(
      (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
      )
    );

    await  Promise.all(actions);
    const context = {};
    const pageBody = renderToString(App(req.path, store, context));

    res.render('index', {
      pageBody,
      title: config.title,
      scriptUrl: config.scriptUrl,
      styleUrl: config.styleUrl,
      preloadedState: JSON.stringify({}),
    });
  },
};

export default appController;
