import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

//Notifications component
import {NotificationContainer, NotificationManager} from 'react-notifications';

//Style for the page
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

//Image font
import image from "assets/img/hola.jpeg";

//Redux
import { connect } from "react-redux";

//Front and backend
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
//React router for wrapping the page
import { withRouter } from "react-router-dom";
import { GET_ERRORS } from "actions/types";


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      cc: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );

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

  
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault(); 
    
    const userData = {
      cc: this.state.cc,
      password: this.state.password,
    };

    let prueba = this.props.loginUser(userData);
    console.log(prueba);
    
  };

  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          console.log("holaaa");
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };
  
  render() {
    const { classes, errors, ...rest } = this.props;

    return (
      <div>
        <Header
          absolute
         /* color="transparent"*/
          brand="Memento"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}  noValidate onSubmit={this.onSubmit}>
                    <CardHeader color="info" className={classes.cardHeader}>
                      <h4>Inicia sesión</h4>
                    </CardHeader>
                    <CardBody>
                    <CustomInput
                        value={this.state.cc}
                        labelText="Cédula de ciudadanía"
                        id="cc"
                        className={classnames("", {
                          invalid: errors.cc || errors.ccnotfound
                        })}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: this.onChange,
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Fingerprint className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                    
                    <CustomInput
                        value={this.state.pass}
                        labelText="Contraseña"
                        id="password"
                        className={classnames("", {
                          invalid: errors.pass || errors.passincorrect
                        })}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: this.onChange,
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          autoComplete: "off"
                        }}
                       />
                      <span className="red-text">
                      {errors.pass}
                      {errors.passincorrect}
                      </span>
                      
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button
                      simple color="info" 
                      size="lg"
                      type="submit"
                      >
                        Iniciar terapia
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>

            
          </div>
          <NotificationContainer/>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser })(withStyles(loginPageStyle)(withRouter(LoginPage)));
