import React, { Component } from 'react';

export default class FormWrapper extends Component {
  render() {
    const { newMessageForm: NewMessageForm } = this.props;
    return (
      <div>
        { NewMessageForm && <NewMessageForm /> }
      </div>
    )
  }
}