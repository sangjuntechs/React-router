import React from "react";
import Profile from "./Profile";
import { Route, NavLink } from "react-router-dom";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink to="/profiles/sangjun" activeStyle={{ color: "dodgerblue" }}>
            sangjun
          </NavLink>
        </li>
        <li>
          <NavLink to="/profiles/kimchi" activeStyle={{ color: "dodgerblue" }}>
            kimchi
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택하세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;
