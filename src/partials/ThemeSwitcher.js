import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { toggleDarkMode } from "../store/application/actions";

const mapStateToProps = ({ settings }) => ({
  darkMode: settings.darkMode,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDarkMode: () => dispatch(toggleDarkMode()),
});

class ThemeSwitcher extends React.Component {
  icon = () => {
    return this.props.darkMode ? faSun : faMoon;
  };
  color = () => {
    return this.props.darkMode ? "#FFA500" : "#4D5B6B";
  };
  render() {
    return (
      <button
        className="app__dark-mode-btn icon level-right"
        onClick={this.props.toggleDarkMode}
      >
        <FontAwesomeIcon icon={this.icon()} color={this.color()} />
      </button>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
