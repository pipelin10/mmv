import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

//core-components
import Button from "components/CustomButtons/Button.jsx";

import Particles from 'react-particles-js';

//Style for the page
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

//Image font
import image from "assets/img/cute.jpeg";
import imageMemento from "assets/img/Mementologo.png";


//Redux
import { connect } from "react-redux";

//Front and backend
import { loginUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";


// react components for routing our app without refresh
import { Link } from "react-router-dom";

const imgStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "45%",
}

const partStyle = {
  width: "100%",
  height: "100%",
  position: "fixed",
  backgroundImage: "url(" + image + ")",
  backgroundSize: "cover",
  backgroundPosition: "top center",
}


class MementoPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile-page");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/profile-page"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { classes, errors, ...rest } = this.props;

    return (
      <div>
        <div style={partStyle}>

          <div style={{ position: "absolute", textAlign: "center", width: "100%", paddingTop: "11rem" }}>
            <img src={imageMemento} alt={"memento logo"} style={imgStyle} />

            <div style={{ paddingTop: "1rem" }}>
            
            <Button
              component={Link}
              color="white"
              round size="lg"
              to="/login-page"
              style={{width:'200px', fontFamily: 'Nunito'}}
            >
              Ingresar
            </Button>
            <Button
              component={Link}
              color="white"
              round size="lg"
              to="/register-page"
              style={{width:'200px', fontFamily: 'Nunito'}}
            >
              Registrarme
            </Button>
         
            </div> 
          </div>

          <Particles params={{
            "particles": {
              "number": {
                "value": 100
              },
              "size": {
                "value": 2
              }
            }
          }}
          width="100%"
          height="839px"
          style={{

          }}>

          </Particles>
        </div>
      </div>
    );
  }
}

MementoPage.propTypes = {
  classes: PropTypes.object,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser })(withStyles(loginPageStyle)(withRouter(MementoPage)));
