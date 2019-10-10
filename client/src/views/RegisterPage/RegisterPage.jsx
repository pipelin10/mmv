import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Phone from "@material-ui/icons/Phone";
import Location from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import RadioInput from "components/CustomInput/RadioInput.jsx";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";

import FormControl from "@material-ui/core/FormControl";//Quitar de aquí -------------------------
//Styles of login using in  the page too
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
//Font of the page
import image from "assets/img/cute.jpeg";
//Connection with redux
import { connect } from "react-redux";
//
import { registerUser } from "../../actions/authActions";
//React router for wrapping the page
import { Link, withRouter } from "react-router-dom";
//classnames
import classnames from "classnames";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      first_name: "",
      last_name: "",
      cc: "",
      adress: "",
      phone: "",
      password: "",
      demential_stage: [],
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault(); 
    
    const newUser = {
      name: this.state.name,
      last_name: this.state.email,
      cc: this.state.cc,
      adress: this.state.adress,
      phone: this.state.phone,
      password: this.state.password,
      demential_stage: this.state.demential_stage,
      date: this.state.date
    };
    
    console.log(newUser);
    //this.props.registerUser(newUser, this.props.history); 

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
                  <form className={classes.form} noValidate onSubmit={this.onSubmit}>
                    <CardHeader color="info" className={classes.cardHeader}>
                      <h4>Registrate</h4>
                    </CardHeader>
                    <CardBody>
                    <h4>Información basica</h4>
                      <CustomInput
                        value={this.state.name}
                        labelText="Nombre(s)"
                        id="first"
                        onChange={this.onChange}
                        error={errors.name}
                        className={classnames("", {
                          invalid: errors.name
                        })}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          onChange: this.onChange,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Person className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <span className="red-text">{errors.name}</span>
                      <CustomInput
                        value={this.state.last_name}
                        labelText="Apellido"
                        id="lastName"
                        error={errors.last_name}
                        formControlProps={{
                          fullWidth: true
                        }}
                        className={classnames("", {
                          invalid: errors.last_name
                        })}
                        inputProps={{
                          type: "text",
                          onChange: this.onChange,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Person className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <span className="red-text">{errors.last_name}</span>
                      <CustomInput
                        value={this.state.cc}
                        labelText="Cédula de ciudadanía"
                        id="cc"
                        className={classnames("", {
                          invalid: errors.cc
                        })}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          onChange: this.onChange,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Fingerprint className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <span className="red-text">
                      {errors.emailnotfound}
                      {errors.cc}
                      </span>
                      <CustomInput
                        value={this.state.adress}
                        labelText="Dirección"
                        id="adress"
                        className={classnames("", {
                          invalid: errors.adress
                        })}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          onChange: this.onChange,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Location className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <span className="red-text">{errors.adress}</span>
                      <CustomInput
                        value={this.state.phone}
                        labelText="Telefono"phone
                        id="phone"
                        className={classnames("", {
                          invalid: errors.phone
                        })}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          onChange: this.onChange,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Phone className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <span className="red-text">{errors.phone}</span>
                      <CustomInput
                        value={this.state.pass}
                        labelText="Contraseña"
                        id="pass"
                        className={classnames("", {
                          invalid: errors.pass
                        })}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          onChange: this.onChange,
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
                      <span className="red-text">{errors.pass}</span>
                      <br />
                      <br />
                      <FormControl fullWidth>
                      <Datetime 
                        value={this.state.date}
                        timeFormat={false}
                        className={classnames("", {
                          invalid: errors.date
                        })}
                        inputProps={{
                          onChange: this.onChange,
                          placeholder: "Fecha de nacimiento",
                        }}
                      />
                      <span className="red-text">{errors.name}</span>
                      <br />
                      <br />
                      </FormControl>
                      
                      <h4>Estado de la demencia</h4>
                      
                      <RadioInput></RadioInput>

                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button 
                      simple color="info"
                      size="lg"
                      type="submit"
                      >
                        Registrar paciente
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  classes: PropTypes.object,
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(
  mapStateToProps,
  { registerUser })(withStyles(loginPageStyle)(withRouter(RegisterPage)));