import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createTable } from '../actions';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class CreateTable extends Component {
  renderField(field) {
    const { meta: { touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createTable(values, () => {
      this.props.history.push('/get-user-tables');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <p></p>
            <label>Utwórz nową tablicę</label>
          <p></p>
        </div>
        <Field
          label="name"
          name="name"
          component={this.renderField}
        />
        <div>
            <button type="submit" className="btn btn-primary">Utwórz</button>
        </div>
          <Link className="btn btn-danger" to="/get-user-tables">
            Anuluj
          </Link>
      </form>

    );
  }
}

function validate(values) {
    const errors = {};

    if (!values.name) {
      errors.name = "Wprowadź nazwę tablicy!";
    }

    return errors;
}

export default reduxForm({
  validate: validate,
  form: 'CreateTableForm'
})(
    connect(null,{ createTable })(CreateTable)
);
