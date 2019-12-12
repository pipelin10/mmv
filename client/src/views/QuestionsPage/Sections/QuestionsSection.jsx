import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Select from 'react-select';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import questionStyle from "assets/jss/material-kit-react/views/landingPageSections/questionStyle.jsx";

//Import data
import {towns, defaultChooseTown, optionsDeparment} from "../Data/Deparments";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
    backgroundColor: state.isSelected ? 'indigo' : 'white'
  }),
  control: (provided) => ({
    ...provided,
    marginTop: "5%",
  })
}

class QuestionsSection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      height: 100,
      deparment: null,
      number: null,
      town: null,
      checked: [24, 22],
    }
  }

  handleChange = (deparment) => {
    this.setState({ deparment });
    this.setState({ number: (optionsDeparment.indexOf(deparment)-1)});
  }

  handleChangeTown = (town) => {
    this.setState({ town });
  }

  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    console.log(newChecked)

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }


  render() {
    const { classes } = this.props;
    var { height } = this.state;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>

            <h2 className={classes.title}>Primero, cuentanos sobre el paciente</h2>
            
            <p className={classes.title}>Cuentanos información que sea agradable para el paciente.
            Si la respuesta es negativa, desconoces alguna de las respuestas o no estas seguro, deja la respuesta vacía.</p>
            <form>

              <GridContainer>
                <GridItem xs={12} sm={10} md={12}>

                <p className={classes.subtitle}>1. información personal</p>

                <p className={classes.description}>¿La persona tiene algún sobrenombre?</p>

                <div
                  className={
                    classes.checkboxAndRadio +
                    " " +
                    classes.checkboxAndRadioHorizontal
                  }
                >
                <FormControlLabel
                    control={
                      <Checkbox
                        tabIndex={-1}
                        onClick={() => this.handleToggle(21)}
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        icon={<Check className={classes.uncheckedIcon} />}
                        classes={{ checked: classes.checked }}
                      />
                    }
                    classes={{ label: classes.label }}
                    label="Si, lo tiene"
                  />
                  </div>

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
              
                 <p className={classes.subtitle}>2. Localización actual del paciente</p>

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

                  <p className={classes.subtitle}>3. Estudios y profesión</p>

                  <CustomInput
                    labelText="Profesion que ejerció o ejerce"
                    id="profession"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />
                  
                  <CustomInput
                    labelText="Nombre del último lugar dónde estudió escuela/universidad/instituto"
                    id="school"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <p className={classes.subtitle}>4. Relaciones personales</p>

                  <p className={classes.subtitle}>5. Gustos alimenticios</p>

                  <p className={classes.subtitle}>6. Gustos literarios</p>

                  <p className={classes.subtitle}>7. Deportes </p>

                  <p className={classes.subtitle}>8. Viajes </p>

                  <CustomInput
                    labelText="¿Nombre de la pareja?"
                    id="partner"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="¿Contrajo matrimonio?"
                    id="isMarried"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Fecha en que contrajo matrimonio"
                    id="marriageDate"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="¿Cuántos hijos tiene?"
                    id="childrenNumb"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "number",
                    }}
                  />

                  <CustomInput
                    labelText="Nombre de la madre"
                    id="motherName"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Nombre del padre"
                    id="fatherName"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="¿Cuántos nietos tiene?"
                    id="grandchildrenNumb"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="¿Cuántos hermanos tiene?"
                    id="siblingsName"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Qué le gusta/gustaba hacer en su tiempo libre"
                    id="hobby"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Género de música que le gusta"
                    id="music"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Banda favorita"
                    id="band"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Cantante favorito"
                    id="singer"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Pelicula favorita"
                    id="movie"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Genero de películas favorito"
                    id="favoriteGenre"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Libro favorito"
                    id="book"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Practicó algún deporte"
                    id="sport"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Programa de televisión favorito"
                    id="tvShow"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Comida favorita"
                    id="food"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Color favorito"
                    id="color"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Segundo idioma"
                    id="secondLanguage"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Nombre de la mascota"
                    id="petName"
                    formControlProps={{
                      fullWidth: true
                      }}
                      inputProps={{
                      onChange: this.onChange,
                      type: "text",
                      }}
                  />

                  <CustomInput
                    labelText="Equipo favorito de futbol"
                    id="soccer"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Equipo favorito de tenis"
                    id="tenis"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Equipo favorito de basketball"
                    id="basketball"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Corta descripción de lo que le hace sentir bien"
                    id="feelGood"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                      onChange: this.onChange,
                      type: "text",
                      }}
                  />

                  <CustomInput
                    labelText="Viaje favorito"
                    id="travel"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Lugar que sueña con conocer"
                    id="dreamPlace"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Lugar favorito de la casa"
                    id="favoriteHomePlace"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="Amistad más cercana"
                    id="friend"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />


                <GridContainer justify="center">
                
              <GridItem xs={12} sm={7} md={3}>
                  <Button 
                  round size="lg"
                  color="success"
                  >Guardar
                  </Button>

                </GridItem>
                
              </GridContainer>
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
