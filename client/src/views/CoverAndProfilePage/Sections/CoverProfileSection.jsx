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

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class CoverProfileSection extends React.Component {
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

            <h2 className={classes.title}>Sube una foto de perfil para el paciente</h2>
            
            <p className={classes.subtitle}> Proporcionar imagenes ayuda al paciente a mantener 
            presente su imagen y la de su familia </p>

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
                  accept="image/*"
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
                  accept="image/*"
                  />
                  <img src={this.state.familyFile} height={height}/>
                  <Button 
                      onClick={() => this.fileInput2.click()}
                      round size="normal"
                      color="success"
                      >Subir foto familiar
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

CoverProfileSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(workStyle)(CoverProfileSection);
