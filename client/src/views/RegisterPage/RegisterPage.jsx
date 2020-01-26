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
      name: "",
      last_name: "",
      cc: "",
      adress: "",
      phone: "",
      password: "",
      demential_stage: "",
      date: "",
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

  onChangeExa = date => {
    console.log(date.toDate())
    this.setState({ date: date.toDate() });
  };

  handleChangeEnabled = event => {
    this.setState({ demential_stage: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault(); 
    
    const newUser = {
      name: this.state.name,
      last_name: this.state.last_name,
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
                      <h4 className={classes.subtitle}> Registrate</h4>
                    </CardHeader>
                    <CardBody>
                    <h4 className={classes.lineSubtitle}>Información basica</h4>
                    <CustomInput
                        value={this.state.name}
                        labelText="Nombre(s)"
                        id="name"
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
                      <CustomInput
                        value={this.state.last_name}
                        labelText="Apellidos"
                        id="last_name"
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
                      <CustomInput
                        value={this.state.cc}
                        labelText="Cedula de ciudadania"
                        id="cc"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          onChange: this.onChange,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Fingerprint className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
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
                      <CustomInput
                        value={this.state.phone}
                        labelText="Telefono"
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
                      <CustomInput
                        value={this.state.password}
                        labelText="Contraseña"
                        id="password"
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
                      <br />
                      <br />
                      <FormControl fullWidth>
                      <Datetime 
                        value={this.state.date}
                        timeFormat={false}
                        onChange={this.onChangeExa}
                        inputProps={{
                          placeholder: "Fecha de nacimiento",
                        }}
                      />
                      <br />
                      <br />
                      </FormControl>
                      
                      <h4 className={classes.lineSubtitle}>Estado de la demencia</h4>
                      
                      <RadioInput
                        checked={this.state.demential_stage === "inicial"}
                        onChange={this.handleChangeEnabled}
                        value="inicial"
                        label="Inicial"
                      ></RadioInput>

                      <RadioInput
                        checked={this.state.demential_stage === "Mediano"}
                        onChange={this.handleChangeEnabled}
                        value="Mediano"
                        label="Mediano"
                      ></RadioInput>

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