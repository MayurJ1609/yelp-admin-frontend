import React from "react";
import { Redirect } from "react-router-dom";

const [values, setValues] = useSate({
  email,
  password,
});

const { email, password } = values;

const handleChange = (name) => (event) => {
  setValues({ ...values, [name]: event.target.value });
};

const onSubmit = (event) => {
  event.preventDefault();
  setValues({ ...values });
  if (true) {
    return <Redirect to="/admin/ManageRestaurant" />;
  } else {
    return <Redirect to="/Signin" />;
  }
};

const signInForm = () => {
  return (
    <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
        <form>
          <div className="form-group">
            <label className="text-light">Email</label>
            <input
              type="email"
              className="form-control"
              onChange={handleChange("email")}
              value={email}
            />
          </div>
          <div className="form-group">
            <label className="text-light">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={handleChange("password")}
              value={password}
            />
          </div>
          <button className="btn btn-success btn-block" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const Signin = () => {
  return <div>{signInForm()}</div>;
};
