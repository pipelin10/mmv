import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Select from 'react-select';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControl from "@material-ui/core/FormControl";

import questionStyle from "assets/jss/material-kit-react/views/landingPageSections/questionStyle.jsx";

//Import data
import {towns, defaultChooseTown, optionsDeparment} from "../Data/Deparments";
import {optionsKids, defaultChooseKids} from "../Data/KidsNumbers"


const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontFamily: "Roboto",
    fontSize: "14px",
    color: state.isSelected ? 'white' : 'black',
    backgroundColor: state.isSelected ? 'indigo' : 'white'
  }),
  control: (provided) => ({
    ...provided,
    marginTop: "5%",
    fontFamily: "Roboto",
    fontSize: "14px",
    color:  "#495057"
  })
}

class QuestionsSection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      height: 100,
      step: 0, 
      deparment: null,
      number: null,
      town: null,
      numberK: '0',
      activeButtons: false,
    }
  }

  activeButtonsFunc(active){
    if(active){
      return  <div >
                <div>
                  <Button
                    disabled={this.state.step === 0}
                    onClick={this.prevStep}
                  >
                    Anterior
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.nextStep}
                  >
                    {this.state.step === this.getSteps().length - 1 ? 'Finalizar' : 'Siguiente'}
                  </Button>
                </div>
              </div>
    }
  }

  //Procedd next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  changeState = () => {
    this.nextStep()
    this.setState({ activeButtons: true });

  }

  jumpStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 2 });
  }

  //Go back previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step -1 });
  } 

  getSteps() {
    return ['Información personal', 'Información personal', 'Localización actual', 
    'Estudios y profesión', 'Estudios y profesión', 'Estudios y profesión', 'Estudios y profesión', 
    'Estudios y profesión', 'Estudios y profesión' ,'Relaciones personales', 'Relaciones personales',
    'Relaciones personales' , 'Relaciones personales', 'Relaciones personales', 'Relaciones personales', 'Relaciones personales',
    'Relaciones personales', 'Relaciones personales','Intereses', 'Intereses'
  ];
  }

  sectionPersonalInf(){
    return <div>
      <h5 className={this.props.classes.description}>¿La persona tiene algún sobrenombre?</h5>

      <GridContainer  justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Button
              color="success"
              onClick={this.changeState}
            >
              Si
            </Button>
            <Button
            >
              No
            </Button>
      </GridItem>
      </GridContainer>

    </div>
  }

  sectionPrimary(){
    return <div>
      <h5 className={this.props.classes.description}>¿Tiene educación básica primaria?</h5>

      <GridContainer  justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Button
              color="success"
              onClick={this.changeState}
            >
              Si
            </Button>
            <Button
            onClick={this.jumpStep}
            >
              No
            </Button>
      </GridItem>
      </GridContainer>

    </div>
  }

  continueSectionPrimary(){
    return <div>
      <CustomInput
        labelText="Escuela primaria"
        id="primarySchool"
        formControlProps={{
        fullWidth: true
        }}
        inputProps={{
        onChange: this.onChange,
        type: "text",
        }}
      />

      {this.activeButtonsFunc(this.state.activeButtons)}

      </div>

  }

  sectionHighSchool(){
    return <div>
      <h5 className={this.props.classes.description}>¿Tiene educación básica secundaria?</h5>

      <GridContainer  justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Button
              color="success"
              onClick={this.changeState}
            >
              Si
            </Button>
            <Button
            onClick={this.jumpStep}
            >
              No
            </Button>
      </GridItem>
      </GridContainer>

    </div>
  }

  continueSectionHighSchool(){
    return <div>
      <CustomInput
        labelText="Escuela secundaria"
        id="highSchool"
        formControlProps={{
        fullWidth: true
        }}
        inputProps={{
        onChange: this.onChange,
        type: "text",
        }}
      />
      {this.activeButtonsFunc(this.state.activeButtons)}
      </div>
  }

  sectionMiddleSchool(){
    return <div>
      <h5 className={this.props.classes.description}>¿Tiene educación media/Técnica/Tecnologica?</h5>

      <GridContainer  justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Button
              color="success"
              onClick={this.changeState}
            >
              Si
            </Button>
            <Button
            onClick={this.jumpStep}
            >
              No
            </Button>
      </GridItem>
      </GridContainer>

    </div>
  }

  continueSectionMiddleSchool(){
    return <div>
      <CustomInput
        labelText="Institución"
        id="middleSchool"
        formControlProps={{
        fullWidth: true
        }}
        inputProps={{
        onChange: this.onChange,
        type: "text",
        }}
      />
      {this.activeButtonsFunc(this.state.activeButtons)}
      </div>
  }

  sectionUniversity(){
    return <div>
      <h5 className={this.props.classes.description}>¿Tiene educación universitaria?</h5>

      <GridContainer  justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Button
              color="success"
              onClick={this.changeState}
            >
              Si
            </Button>
            <Button
            onClick={this.jumpStep}
            >
              No
            </Button>
      </GridItem>
      </GridContainer>

    </div>
  }

  continueSectionUniversity(){
    return <div>
      <CustomInput
        labelText="Universidad"
        id="university"
        formControlProps={{
        fullWidth: true
        }}
        inputProps={{
        onChange: this.onChange,
        type: "text",
        }}
      />
      </div>
  }

  sectionMarriage(){
    return <div>
      <h5 className={this.props.classes.description}>¿Está casado/casada?</h5>

      <GridContainer  justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Button
              color="success"
              onClick={this.changeState}
            >
              Si
            </Button>
            <Button
            onClick={this.jumpStep}
            >
              No
            </Button>
      </GridItem>
      </GridContainer>

    </div>
  }


  sectionMom(){
    return <div>
      <h5 className={this.props.classes.description}>¿Es cercano/cercana a su mamá?</h5>

      <GridContainer  justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Button
              color="success"
              onClick={this.changeState}
            >
              Si
            </Button>
            <Button
            onClick={this.jumpStep}
            >
              No
            </Button>
      </GridItem>
      </GridContainer>

    </div>
  }

  continueSectionMom(){
    return <div>
      <CustomInput
        labelText="Nombre de la madre"
        id="mom"
        formControlProps={{
        fullWidth: true
        }}
        inputProps={{
        onChange: this.onChange,
        type: "text",
        }}
      />

      {this.activeButtonsFunc(this.state.activeButtons)}
      </div>
  }

  sectionDad(){
    return <div>
      <h5 className={this.props.classes.description}>¿Es cercano/cercana a su papá?</h5>

      <GridContainer  justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Button
              color="success"
              onClick={this.changeState}
            >
              Si
            </Button>
            <Button
            onClick={this.jumpStep}
            >
              No
            </Button>
      </GridItem>
      </GridContainer>

    </div>
  }

  continueSectionDad(){
    return <div>
      <CustomInput
        labelText="Nombre del padre"
        id="dad"
        formControlProps={{
        fullWidth: true
        }}
        inputProps={{
        onChange: this.onChange,
        type: "text",
        }}
      />

      {this.activeButtonsFunc(this.state.activeButtons)}
      </div>
  }

  continueSectionMarriage(){
    return <div>
      <CustomInput
        labelText="Nombre de la pareja"
        id="partner"
        formControlProps={{
        fullWidth: true
        }}
        inputProps={{
        onChange: this.onChange,
        type: "text",
        }}
      />

      {this.activeButtonsFunc(this.state.activeButtons)}
      </div>
  }

  sectionKids(){
    return <div>
      <h5 className={this.props.classes.description}>¿Tiene hijos?</h5>

      <GridContainer  justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Button
              color="success"
              onClick={this.changeState}
            >
              Si
            </Button>
            <Button
            onClick={this.jumpStep}
            >
              No
            </Button>
      </GridItem>
      </GridContainer>

    </div>
  }

  continueSectionKids(){
    return <div>
      <Select  
        styles = {customStyles} 
        options={optionsKids}
        defaultValue={defaultChooseKids} 
        onChange={this.handleChange}
      />

    {this.activeButtonsFunc(this.state.activeButtons)}

    </div>
  }


  continueSecondSectionMarriage(){
    return <div>
      <FormControl fullWidth>
                      <Datetime
                        inputProps={{ placeholder: "Aniversario" }}
                      />
                    </FormControl>

      {this.activeButtonsFunc(this.state.activeButtons)}
      </div>
  }

  sectionFood(){
    return <div>
      <h5 className={this.props.classes.description}>Comida favorita</h5>

      <CustomInput
        labelText="Comida"
        id="food"
        formControlProps={{
        fullWidth: true
        }}
        inputProps={{
        onChange: this.onChange,
        type: "text",
        }}
      />

    {this.activeButtonsFunc(this.state.activeButtons)}

    </div>
  }

  sectionSport(){
    return <div>
      <h5 className={this.props.classes.description}>Deporte favorito</h5>

      <CustomInput
        labelText="Deporte"
        id="sport"
        formControlProps={{
        fullWidth: true
        }}
        inputProps={{
        onChange: this.onChange,
        type: "text",
        }}
      />

    {this.activeButtonsFunc(this.state.activeButtons)}

    </div>
  }

  sectionSoccer(){
    return <div>
      <h5 className={this.props.classes.description}>¿Es aficcionado al futbol?</h5>

      <GridContainer  justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Button
              color="success"
              onClick={this.changeState}
            >
              Si
            </Button>
            <Button
            onClick={this.jumpStep}
            >
              No
            </Button>
      </GridItem>
      </GridContainer>

    </div>
  }

  sectionSoccerTeams(){
    return <div>
      <h5 className={this.props.classes.description}>Deporte favorito</h5>

      <CustomInput
        labelText="Deporte"
        id="sport"
        formControlProps={{
        fullWidth: true
        }}
        inputProps={{
        onChange: this.onChange,
        type: "text",
        }}
      />

    {this.activeButtonsFunc(this.state.activeButtons)}

    </div>
  }

  sectionNickname(){
    return <div>
      <CustomInput
        labelText="Sobrenombre"
        id="nickname"
        formControlProps={{
        fullWidth: true
        }}
        inputProps={{
        onChange: this.onChange,
        type: "text",
        }}
      />

      {this.activeButtonsFunc(this.state.activeButtons)}

      </div>
  }

  sectionActualLocal(){
    return <div>
      <Select  
        styles = {customStyles} 
        options={optionsDeparment}
        defaultValue={optionsDeparment[0]} 
        onChange={this.handleChange}
      />

      <Select  
        styles = {customStyles} 
        options={towns[this.state.number]}
        defaultValue={defaultChooseTown}
        onChange={this.handleChangeTown}
      />

      <CustomInput
        labelText={"Barrio"}
        id="neighborhood"
        formControlProps={{
        fullWidth: true
        }}
        inputProps={{
        onChange: this.onChange,
        type: "text",
        }}
      />

    {this.activeButtonsFunc(this.state.activeButtons)}

    </div>
  }

  getActualSection = (step) => {
    switch (step) {
      case 0:
        return this.sectionPersonalInf()
      case 1:
        return this.sectionNickname()
      case 2:
        return this.sectionActualLocal()
      case 3:
        return this.sectionPrimary()
      case 4:
        return this.continueSectionPrimary()
      case 5:
        return this.sectionHighSchool()
      case 6:
        return this.continueSectionHighSchool()
      case 7:
        return this.sectionMiddleSchool()
      case 8:
        return this.continueSectionMiddleSchool()
      case 9:
        return this.sectionMom()
      case 10:
        return this.continueSectionMom()
      case 11:
        return this.sectionDad()
      case 12:
        return this.continueSectionDad()
      case 13:
        return this.sectionMarriage()
      case 14:
        return this.continueSectionMarriage()
      case 15:
        return this.continueSecondSectionMarriage()
      case 16:
        return this.sectionKids()
      case 17:
        return this.continueSectionKids()
      case 18:
        return this.sectionFood()
      case 19:
        return this.sectionSport()
      default:
        return 'Unknown step';
    }
  }

  

  handleChange = (deparment) => {
    this.setState({ deparment });
    this.setState({ number: (optionsDeparment.indexOf(deparment)-1)});
  }

  handleChangeTown = (town) => {
    this.setState({ town });
  }
  

  render() {
    const { classes } = this.props;
    const { step } = this.state; 
    var { height } = this.state;

    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>

            
            <form>

              <GridContainer>
                <GridItem xs={12} sm={10} md={12}>
                
                <div >

                  <p className={classes.simpleText}> {this.getSteps()[this.state.step]}</p>
                  {this.getActualSection(this.state.step)} 

                  
                </div>
                
                
              </GridItem>
             </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

QuestionsSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(questionStyle)(QuestionsSection);
