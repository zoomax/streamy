import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  constructor(props) {
    super(props);
    this.renderInput = this.renderInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.renderError = this.renderError.bind(this);
  }
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="lead">{error}</div>
        </div>
      );
    }
  }
  renderInput({ input, label, meta }) {
    let className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  }
  onSubmit(formValues) {
    console.log(formValues);
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui container form error"
        >
          <Field name="title" label="Title" component={this.renderInput} />
          <Field
            name="description"
            label="Description"
            component={this.renderInput}
          />
          <button className="ui button primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const validateForm = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "please enter stream title";
  }
  if (!formValues.description) {
    errors.description = "please enter stream description";
  }
  return errors;
};
export default reduxForm({
  form: "streamCreate",
  validate: validateForm,
})(StreamCreate);
