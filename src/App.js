import "./style/reset.scss";
import "./style/index.scss"
import React, { Component, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Tabs from "./components/Tabs/Tabs";
import Header from "./components/Header/Header";
import {Provider} from 'react-redux'
import store from './store'

const Login = lazy(()=>import('mine/login/login'));
const Regiester =lazy(()=>import('mine/regiester/regiester'));
const Mine =lazy(()=>import('mine/mine/mine'));

const User =lazy(()=>import('user/user/user'));
const Search =lazy(()=>import('user/search/search'));
const Add=lazy(()=>import('user/add/add'));

const Message=lazy(()=>import('message/message/message'));

const Moments=lazy(()=>import('moments/moments/moments'));

const NotFind=lazy(()=>import('common/not-find/not-find'));
const Chat =lazy(()=>import('common/chat/chat'));



export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Suspense fallback={<Loading />}>
          <Provider store={store}>
          <Header />

          {/* 根页面 */}
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return <Redirect to="/user" />;
              }}
            />

            <Route path="/user" component={User} />
            <Route path="/message" component={Message} />
            <Route path="/moments" component={Moments} />
            <Route path="/mine" component={Mine} />

            {/* 公共页面 */}
            <Route path="/search" component={Search} />
            <Route path="/Chat/:userId" component={Chat} />

            <Route component={NotFind} />
          </Switch>

          {/* 子页面 */}
          <>

          </>

          <Tabs />

          </Provider>
        </Suspense>
      </Router>
    );
  }
}
