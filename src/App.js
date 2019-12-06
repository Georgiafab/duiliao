import "./style/reset.scss";
import "./style/index.scss";
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
// import { Provider } from "react-redux";
// import store from "./store";

const Startup = lazy(() => import("./pages/startup/startup"));

const Login = lazy(() => import("mine/login/login"));
const Regiester = lazy(() => import("mine/regiester/regiester"));
const Mine = lazy(() => import("mine/mine/mine"));

const User = lazy(() => import("user/user/user"));
const Search = lazy(() => import("user/search/search"));

const Add = lazy(() => import("user/add/add"));
const Detail = lazy(() => import("user/detail/detail"));

const Message = lazy(() => import("message/message/message"));

const Moments = lazy(() => import("moments/moments/moments"));

const NotFind = lazy(() => import("common/not-find/not-find"));
const Chat = lazy(() => import("common/chat/chat"));

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Router>
        <Suspense fallback={<Loading />}>
          {/* <Provider store={store}> */}
          <Header />

          {
            <div>
              {/* 根页面 */}
              <Switch>
                <Route path="/startup" component={Startup} />
                <Route
                  path="/"
                  exact
                  render={() => {
                    return <Redirect to="/startup" />;
                  }}
                />
                <Route path="/user" component={User}></Route>
                <Route path="/message" component={Message} />
                <Route path="/moments" component={Moments} />
                <Route path="/mine" component={Mine} />
                <Route path="/regiester" component={Regiester} />
                <Route path="/login" component={Login} />

                {/* 公共页面 */}
                <Route path="/search" component={Search} />
                <Route path="/Chat/:userId" component={Chat} />
                <Route component={NotFind} />
              </Switch>
              {/* 子页面 */}
              <>
                <Route path="/user/add" component={Add} />
                <Route path="/user/add/detail/:id" component={Detail} />
              </>
            </div>
          }

          <Tabs />
          {/* </Provider> */}
        </Suspense>
      </Router>
    );
  }

  componentDidMount() {}
}
