import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { postEvents } from '../actions';

class EventsNew extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}

      />
    )
  }
  async onSubmit(values) {
    await this.props.postEvents(values)
    this.props.history.push('/')
  }
  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = {
      margin: 20
    }
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField} />
        </div>
        <div>
          <Field label="Body" name="body" type="text" component={this.renderField} />
        </div>
        <RaisedButton
          label="Submit"
          type="submit"
          value="submit"
          disabled={pristine || submitting || invalid}
          style={style}
        />
        <RaisedButton
          label="Cancel"
          containerElement={<Link to="/" />}
          style={style}
        />

      </form>
    )

  }
}
const validate = values => {
  const errors = {}
  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."
  return errors
}

const mapDispatchToProps = ({ postEvents })
export default connect(null, mapDispatchToProps)(reduxForm({ validate, form: 'eventNewForm' })(EventsNew))
