import React from "react";
import { withRouter } from "react-router-dom";

function WithRouteSamle({ location, match, history }) {
  return (
    <div>
      <h3>Loaction</h3>
      <textarea value={JSON.stringify(location, null, 2)} readOnly />
      <h3>Match</h3>
      <textarea value={JSON.stringify(match, null, 2)} readOnly />
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
}

export default withRouter(WithRouteSamle);
