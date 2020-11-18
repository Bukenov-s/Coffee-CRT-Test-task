import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import CoffeePage from './containers/CoffeePage';
import Navbar from './components/layout/Navbar';
import MainLayout from './components/layout/MainLayout';
import ConverterPage from './containers/ConverterPage';

require('./styles/reset.css');
require('./styles/global.css');

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainLayout>
          <Navbar />
          <Route exact path="/converter" component={ConverterPage} />
          <Route exact path="/" component={CoffeePage} />
        </MainLayout>
      </Router>
    </Provider>
  );
};

export default App;
