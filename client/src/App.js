import React, { useEffect } from 'react';
import { GlobalStyle } from './global.styles';
import HomePage from './pages/homePage/homepage.component';
import ShopPage from './pages/shopPage/shoppage.component'
import CheckoutPage from './pages/checkoutPage/checkout';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './component/header/header.component';
import SignUpSignInPage from './pages/signUpsignInPage/signUp-signIn';

import {connect} from 'react-redux';

import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user-action';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => { checkUserSession()}, [ checkUserSession]);
  return (
      <div>
      <GlobalStyle />
         <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignUpSignInPage />
              )
            }
          />
        </Switch>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

