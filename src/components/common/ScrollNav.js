import React from 'react';
import { NavLink } from "react-router-dom";
import ScrollLink from './ScrollLink';
import { Element } from 'react-scroll';

class ScrollNav extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      toggle: false
    }

    this.toggle = this.toggle.bind(this, this.state.toggle);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.pathname !== this.props.pathname)
      this.setState({toggle: false});
  }

  toggleMenu() {
    this.setState({toggle: false});
  }

  toggle() {

    let toggleState = this.state.toggle === true ? false : true;

    this.setState({toggle: toggleState});
  }

  render() {

    const { site, pathname } = this.props;

    return (
      <nav className="scroll_nav">
        <Element name="top" />
        <div className="logo">
          <NavLink to="/">{site.title}</NavLink>
          <div className="nav_menu_button">
            <div onClick={this.toggle} id="nav-icon" className={(this.state.toggle) ?
              'open' : '' }>
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        {<div className={(this.state.toggle) ? 'menu show' : 'menu'}>
          {pathname !== '/' && <NavLink exact to="/">Home</NavLink>}
          <ScrollLink scrollLink={{ to:'experience', offset: -250, onClick: this.toggleMenu, text: 'Experience' }} />
          <ScrollLink scrollLink={{ to:'skillset', offset: -250, onClick: this.toggleMenu, text: 'Skillset' }} />
          <ScrollLink scrollLink={{ to:'education', offset: -250, onClick: this.toggleMenu, text: 'Education' }} />
          <ScrollLink scrollLink={{ to:'resume', offset: -250, onClick: this.toggleMenu, text: 'Resume' }} />
          <ScrollLink scrollLink={{ to:'contact', offset: -250, onClick: this.toggleMenu, text: 'Contact' }} />
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/me">Me</NavLink>
        </div>}
      </nav>);
    }
}

export default ScrollNav;
