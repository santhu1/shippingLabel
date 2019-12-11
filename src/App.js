import React, { useState } from "react";
import ShippingLabelMaker from "./core/components/ShippingLabelMaker";
import Login from "./features/Login";
import AlertMessage from "./core/AlertMessage";

const App = () => {
  let [isLogin, onLogin] = useState(false);
  let [successFullLogin, onSuccessFullLogin] = useState(null);

  const onLoginClick = (email, password) => {
    let value =
      email.toLowerCase() === "admin" && password.toLowerCase() === "password";
    onLogin(value);
    onSuccessFullLogin(value);
  };

  return (
    <div className="container">
      <div className="h4"> Login in </div>
      {successFullLogin !== null && (
        <AlertMessage
          successful={successFullLogin}
          message={isLogin ? "success" : "error"}
        />
      )}
      {isLogin ? (
        <div>
          <ShippingLabelMaker />
        </div>
      ) : (
        <div className="loginpage">
          <Login
            loginHandle={(email, password) => onLoginClick(email, password)}
          />
        </div>
      )}
    </div>
  );
};
export default App;
