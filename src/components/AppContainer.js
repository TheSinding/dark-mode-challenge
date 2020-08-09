import React from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ settings }) => ({
  darkMode: settings.darkMode,
});
class AppContainer extends React.Component {
  classNames = () => {
    const classes = ["app-container"];
    if (this.props.darkMode) {
      classes.push("dark-mode");
    }
    return classes.join(" ");
  };
  render() {
    const { children } = this.props;
    return <div className={this.classNames()}>{children}</div>;
  }
}

export default connect(mapStateToProps)(AppContainer);
