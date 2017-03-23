import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import FormWrapper from './FormWrapper';
import './App.css';

const NewMessageForm = reduxForm({
  form: 'newMessageForm'
})(({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="text"
      component="input"
      placeholder="Add your message here"
      className="App__new-message-input"
    />
  </form>
));

class App extends Component {
  handleSubmit = (values) => {
    if (!values.text) return;
    console.log('Submited');
    return false;
  }

  render() {

    const { clicks, onClick } = this.props;
    return (
      <main className="App">
        <button onClick={onClick}>Click Here</button>
        <p>{clicks.count}</p>
        <FormWrapper
          newMessageForm={() => <NewMessageForm onSubmit={this.handleSubmit} />}
        />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  clicks: { enhanced: true, count: state.clicks.count }
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch({type: 'CLICK' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
