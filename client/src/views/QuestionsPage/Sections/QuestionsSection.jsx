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
import FormControl from "@material-ui/core/FormControl";

import questionStyle from "assets/jss/material-kit-react/views/landingPageSections/questionStyle.jsx";

//Import data
import { towns, defaultChooseTown, optionsDeparment } from "../Data/Deparments";
import { optionsKids, defaultChooseKids } from "../Data/KidsNumbers"
import { optionsStatus, defaultChooseStatus } from "../Data/CivilStatus"


const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontFamily: "Nunito",
    fontSize: "14px",
    color: state.isSelected ? 'white' : 'black',
    backgroundColor: state.isSelected ? 'indigo' : 'white'
  }),
  control: (provided) => ({
    ...provided,
    fontFamily: "Nunito",
    fontSize: "14px",
    color: "#495057"
  })
}

class QuestionsSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 100,
      step: 0,
      deparment: null,
      number: null,
      town: null,
      civilStatus: null,
      numberK: '0',
      activeButtons: false,
      nickname: "",
      neighborhood: "",
      schoolPrimary: "",
      schoolHigh: "",
      mediumSchool: "",
      mom: "",
      dad: "",
    }
  }

  activeButtonsFunc(active) {
    if (active) {
      return <div >
        <div>
          <Button
            disabled={this.state.step === 0}
            onClick={this.prevStep}
            style={{ width: '200px' }}
          >
            Anterior
                  </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.nextStep}
            style={{ width: '200px' }}
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
    this.setState({ step: step - 1 });
  }

  getSteps() {
    return ['Información personal', 'Información personal', 'Localización actual',
      'Estudios y profesión', 'Estudios y profesión', 'Estudios y profesión', 'Estudios y profesión',
      'Estudios y profesión', 'Estudios y profesión', 'Relaciones personales', 'Relaciones personales',
      'Relaciones personales', 'Relaciones personales', 'Relaciones personales', 'Relaciones personales', 'Relaciones personales',
      'Relaciones personales', 'Relaciones personales', 'Intereses', 'Intereses'
    ];
  }

  sectionPersonalInf() {
    return <div>
      <h2 className={this.props.classes.title}>¿La persona tiene algún sobrenombre?</h2>
      <GridContainer justify="center">
        <div className={this.props.classes.wrapp}>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              color="primary"
              onClick={this.changeState}
              style={{ width: '8rem' }}
            >
              Si
            </Button>
            <Button
              style={{ width: '8rem' }}
            >
              No
            </Button>
          </GridItem>
        </div>
      </GridContainer>

    </div>
  }

  sectionPrimary() {
    return <div>
      <h2 className={this.props.classes.title}>¿Tiene educación básica primaria?</h2>
      <GridContainer justify="center">
        <div className={this.props.classes.wrapp}>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              color="primary"
              onClick={this.changeState}
              style={{ width: '8rem' }}
            >
              Si
            </Button>
            <Button
              onClick={this.jumpStep}
              style={{ width: '8rem' }}
            >
              No
            </Button>
          </GridItem>
        </div>
      </GridContainer>

    </div>
  }

  continueSectionPrimary() {
    return <div>

      <h2 className={this.props.classes.titleA}>Primaria</h2>
      <CustomInput
        value={this.state.schoolPrimary}
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

  sectionHighSchool() {
    return <div>
      <h2 className={this.props.classes.title}>¿Tiene educación básica secundaria?</h2>

      <GridContainer justify="center">
        <div className={this.props.classes.wrapp}>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              color="primary"
              onClick={this.changeState}
              style={{ width: '8rem' }}
            >
              Si
            </Button>
            <Button
              onClick={this.jumpStep}
              style={{ width: '8rem' }}
            >
              No
            </Button>
          </GridItem>
        </div>
      </GridContainer>

    </div>
  }

  continueSectionHighSchool() {
    return <div>
      <h2 className={this.props.classes.titleA}>Escuela secundaria</h2>
      <CustomInput
        value={this.state.schoolHigh}
        labelText="Escuela"
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

  sectionMiddleSchool() {
    return <div>
      <h2 className={this.props.classes.title}>¿Tiene educación media?</h2>

      <GridContainer justify="center">
        <div className={this.props.classes.wrapp}>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              color="primary"
              onClick={this.changeState}
              style={{ width: '8rem' }}
            >
              Si
            </Button>
            <Button
              onClick={this.jumpStep}
              style={{ width: '8rem' }}
            >
              No
            </Button>
          </GridItem>
        </div>
      </GridContainer>

    </div>
  }

  continueSectionMiddleSchool() {
    return <div>
    <h2 className={this.props.classes.titleA}>Escuela Media</h2>
      <CustomInput
        value={this.state.mediumSchool}
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

  sectionUniversity() {
    return <div>
      <h2 className={this.props.classes.title}>¿Tiene educación universitaria?</h2>

      <GridContainer justify="center">
        <div className={this.props.classes.wrapp}>
          <GridItem xs={12} sm={12} md={4}>
            <Button
              color="success"
              onClick={this.changeState}
              style={{ width: '8rem' }}
            >
              Si
            </Button>
            <Button
              onClick={this.jumpStep}
              style={{ width: '8rem' }}
            >
              No
            </Button>
          </GridItem>
        </div>
      </GridContainer>

    </div>
  }

  continueSectionUniversity() {
    return <div>
    <h2 className={this.props.classes.titleA}>Universidad</h2>
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

  sectionMarriage() {
    return <div>
      <h2 className={this.props.classes.titleA}>Situación sentimental</h2>
      <br/>
      <Select
        styles={customStyles}
        options={optionsStatus}
        defaultValue={defaultChooseStatus}
        onChange={this.handleChangeStatus}
      />
      <br/>
      {this.activeButtonsFunc(this.state.activeButtons)}

    </div>
  }


  sectionMom() {
    return <div>
      <h2 className={this.props.classes.title}>¿Es cercano a su madre?</h2>

      <GridContainer justify="center">
        <div className={this.props.classes.wrapp}>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              color="primary"
              onClick={this.changeState}
              style={{ width: '8rem' }}
            >
              Si
            </Button>
            <Button
              onClick={this.jumpStep}
              style={{ width: '8rem' }}
            >
              No
            </Button>
          </GridItem>
        </div>
      </GridContainer>

    </div>
  }

  continueSectionMom() {
    return <div>
    <h2 className={this.props.classes.titleA}>Nombre de la madre</h2>
      <CustomInput
        value={this.state.mom}
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

  sectionDad() {
    return <div>
      <h2 className={this.props.classes.title}>¿Es cercano/a a su padre?</h2>

      <GridContainer justify="center">
        <div className={this.props.classes.wrapp}>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              color="primary"
              onClick={this.changeState}
              style={{ width: '8rem' }}
            >
              Si
            </Button>
            <Button
              onClick={this.jumpStep}
              style={{ width: '8rem' }}
            >
              No
            </Button>
          </GridItem>
        </div>
      </GridContainer>

    </div>
  }

  continueSectionDad() {
    return <div>
    <h2 className={this.props.classes.titleA}>Nombre del padre</h2>
      <CustomInput
        value={this.state.dad}
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

  continueSectionMarriage() {
    return <div>

  <h2 className={this.props.classes.titleA}>Nombre de la pareja</h2>
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

  sectionKids() {
    return <div>
      <h2 className={this.props.classes.title}>¿Tiene hijos?</h2>

      <GridContainer justify="center">
        <div className={this.props.classes.wrapp}>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              color="primary"
              onClick={this.changeState}
              style={{ width: '8rem' }}
            >
              Si
            </Button>
            <Button
              onClick={this.jumpStep}
              style={{ width: '8rem' }}
            >
              No
            </Button>
          </GridItem>
        </div>
      </GridContainer>

    </div>
  }

  continueSectionKids() {
    return <div>
      <Select
        styles={customStyles}
        options={optionsKids}
        defaultValue={defaultChooseKids}
        onChange={this.handleChange}
      />

      {this.activeButtonsFunc(this.state.activeButtons)}

    </div>
  }


  continueSecondSectionMarriage() {
    return <div>
      <h2 className={this.props.classes.titleA}>Fecha de Aniversario</h2>
      <FormControl fullWidth>
        <div style={{color: "#000000", fontSize: "0.875rem" }}>
        <Datetime
          inputProps={{
          placeholder: "Aniversario",
          style : {fontFamily: '"Nunito", "Roboto"'}
            
        }}
         
        />
        </div>
      </FormControl>

      {this.activeButtonsFunc(this.state.activeButtons)}
    </div>
  }

  sectionFood() {
    return <div>
      <h2 className={this.props.classes.titleA}>Comida favorita</h2>

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

  sectionSport() {
    return <div>
      <h2 className={this.props.classes.titleA}>Deporte favorito</h2>

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

  sectionSoccer() {
    return <div>
      <h2 className={this.props.classes.title}>¿Es aficcionado al futbol?</h2>

      <GridContainer justify="center">
        <div className={this.props.classes.wrapp}>
          <GridItem xs={12} sm={12} md={4}>
            <Button
              color="primary"
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
        </div>
      </GridContainer>

    </div>
  }

  sectionSoccerTeams() {
    return <div>
      <h5 className={this.props.classes.title}>Deporte favorito</h5>

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

  sectionNickname() {
    return <div>
      <h2 className={this.props.classes.titleA}>Sobrenombre</h2>
      <CustomInput
        value={this.state.nickname}
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

  sectionActualLocal() {
    return <div>
      <h2 className={this.props.classes.titleA}>Departamento</h2>
      <Select
        styles={customStyles}
        options={optionsDeparment}
        defaultValue={optionsDeparment[0]}
        onChange={this.handleChange}
      />
      <h2 className={this.props.classes.titleA}>Municipio</h2>
      <Select
        styles={customStyles}
        options={towns[this.state.number]}
        defaultValue={defaultChooseTown}
        onChange={this.handleChangeTown}
      />

      <h2 className={this.props.classes.titleA}>Barrio</h2>
      <CustomInput
        value={this.state.neighborhood}
        labelText={"Barrio"}
        id="neighborhood"
        formControlProps={{
          fullWidth: true
        }}
        inputProps={{
          onChange: this.onChange,
          type: "text"
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
    this.setState({ number: (optionsDeparment.indexOf(deparment) - 1) });
  }

  handleChangeTown = (town) => {
    this.setState({ town });
  }

  handleChangeStatus = (civilStatus) => {
    this.setState({ civilStatus });
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <GridContainer justify="center" style={{color: "#FFFFF"}}>
          <GridItem cs={12} sm={12} md={12}>
            <form>

              <div>

                <p className={classes.simpleText}> {this.getSteps()[this.state.step]}</p>

                {this.getActualSection(this.state.step)}

              </div>

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
