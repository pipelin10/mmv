import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';


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

            <h2 className={classes.title}>Compartenos fotos de tu familia</h2>
            
            <p className={classes.title}>Diseñaremos un album para el paciente, con el fin de que siga conectado 
            con sus familiares, amigos y allegados.</p>
            <form>
              <GridContainer>

                <GridItem xs={12} sm={12} md={12}>



                  <div className={classes.typo}>
                    <div className={classes.note}>Selecciona el parentesco de la persona con el paciente</div>
                  </div>

                  <CustomDropdown
                  buttonText="Parentesco"
                  buttonProps={{
                    round: true,
                    color: "primary"
                  }}
                  dropdownList={[
                    "Madre",
                    "Padre",
                    "Hermano",
                    "Hermana",
                    "Cuñada",
                    "Cuñado",
                    "Hijo",
                    "Hija",
                    "Abuelo",
                    "Abuela",
                    "Amigo",
                    "Mascota",
                    "Artista",
                  ]}
                  />

                  <div className={classes.typo}>
                    <div className={classes.note}>Selecciona el 
                    número de fotos de la persona que quieres agregar para el album</div>
                  </div>

                  <CustomDropdown
                  buttonText="Número de fotos"
                  buttonProps={{
                    round: true,
                    color: "primary"
                  }}
                  dropdownList={[
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                  ]}
                  />

                  <div className={classes.typo}>
                      <div className={classes.note}>Sube la foto número 1</div>
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
                      color="primary"
                      >Subir foto perfil
                  </Button>


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
