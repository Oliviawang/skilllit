import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HiddenInput from '../elements/HiddenInput';
import TextInput from '../elements/TextInput';
import FormButton from '../elements/Button';
import * as profileActions from '../../../../actions/profileActions.js';

const formId = 'homeForm',
  buttonTitle = 'Update';

class HomeForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = props.home

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(value) {
    const { home } = this.state;

    this.setState({ ...home, ...value });
  }

  handleClick(e) {
    const { callback, toggle } = this.props;

    e.preventDefault();

    let elements = [...document.getElementById(formId).elements],
      data = {};

    for (let i = 0; i < elements.length - 1; i++)
      data[elements[i].name] = elements[i].value;

    callback.homeUpsert(data);
    toggle();
  }

  handleCancel() {
    const { toggle } = this.props;
    toggle()
  }


  render() {

    const { handleChange, home } = this.props;

    return (
      <section>
        <form id={formId}>
          <TextInput key="profile_avatar_input"
            autocomplete="off"
            name="avatar"
            onChange={this.handleChange}
            placeholder="Avatar"
            ref="avatar"
            type="text"
            value={this.state.avatar}
            label_name="avatar" />
          <TextInput key="profile_selected_avatar_input"
            autocomplete="off"
            name="selected_avatar"
            onChange={this.handleChange}
            placeholder="Selected Avatar"
            ref="selected_avatar"
            type="text"
            value={this.state.selected_avatar}
            label_name="selected avatar" />
          <TextInput key="profile_talk_bubble_input"
            autocomplete="off"
            name="talk_bubble"
            onChange={this.handleChange}
            placeholder="Talk Bubble"
            ref="talk_bubble"
            type="text"
            value={this.state.talk_bubble}
            label_name="talk bubble" />
          <TextInput key="profile_title_input"
            autocomplete="off"
            name="title"
            onChange={this.handleChange}
            placeholder="Title"
            ref="title"
            type="text"
            value={this.state.title}
            label_name="title" />
          <TextInput key="profile_tagline_input"
            autocomplete="off"
            name="tagline"
            onChange={this.handleChange}
            placeholder="Tagline"
            ref="tagline"
            type="text"
            value={this.state.tagline}
            label_name="tagline" />
          <HiddenInput name="account_id" value={this.state.account_id} />
          <div className="buttons">
            <FormButton
              callback={this.handleClick}
              buttonTitle="Update" />
            <FormButton
              callback={this.handleCancel}
              buttonTitle="Cancel" />
          </div>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    callback: PropTypes.object.isRequired
  };
},
mapDispatchToProps = dispatch => {

  return {
    callback: bindActionCreators(profileActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeForm);
