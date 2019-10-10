import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class QuestionsSection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      profileFile: null,
      familyFile: null,
      height: 100
    }
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
  }

  fileSelectedHandler = event => {
    this.setState({
      profileFile: URL.createObjectURL(event.target.files[0])
    })
    console.log(event.target.files[0]);
  }

  fileSelectedHandlerSecond = event => {
    this.setState({
      familyFile: URL.createObjectURL(event.target.files[0])
    })
    console.log(event.target.files[0]);
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
                  <div className={classes.typo}>
                    <div className={classes.note}>Sube una foto de perfil para el paciente</div>
                  </div>

                  <input 
                  style={{display:'none'}}
                  type="file" 
                  onChange={this.fileSelectedHandler}
                  ref = {fileInput => this.fileInput = fileInput}
                  />
                  <img src={this.state.profileFile} height={height}/>
                  <Button 
                      onClick={() => this.fileInput.click()}
                      round size="normal"
                      color="success"
                      >Subir foto perfil
                  </Button>

                  <div className={classes.typo}>
                      <div className={classes.note}>Sube una foto del paciente con su familia</div>
                  </div>

                  <input 
                  style={{display:'none'}}
                  type="file" 
                  onChange={this.fileSelectedHandlerSecond}
                  ref = {fileInput2 => this.fileInput2 = fileInput2}
                  />
                  <img src={this.state.familyFile} height={height}/>
                  <Button 
                      onClick={() => this.fileInput2.click()}
                      round size="normal"
                      color="success"
                      >Subir foto familiar
                  </Button>


                  <CustomInput
                    label="Label"
                    labelText="¿Ciudad dónde vive?"
                    id="city"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="¿Departamento dónde vive?"
                    id="department"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="¿Barrio dónde vive?"
                    id="neighborhood"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

                  <CustomInput
                    labelText="¿Dónde nació?"
                    id="birthCity"
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    onChange: this.onChange,
                    type: "text",
                    }}
                  />

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

export default withStyles(workStyle)(QuestionsSection);
