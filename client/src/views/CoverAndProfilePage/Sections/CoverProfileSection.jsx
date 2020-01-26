import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

//notifications
import swal from 'sweetalert';

//styles
import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

//Axios
import axios from "axios";
//Redux
import { connect } from "react-redux";
//React router for wrapping the page
import { withRouter } from "react-router-dom";


class CoverProfileSection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      profileFile: null,
      familyFile: null,
      imgProfile: null,
      imgFamily: null,
      height: 100
    }
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
    this.fileSelectedHandlerSecond = this.fileSelectedHandlerSecond.bind(this)
  }

  fileSelectedHandler = event => {
    var verify = this.verifyFormat(event.target.files[0].name)

    if(verify==true){
      this.setState({
        profileFile: URL.createObjectURL(event.target.files[0])
      })
      this.setState({
        imgProfile: event.target.files[0]
      })
    }
    else this.sweetAlertFunction()
  }

  fileSelectedHandlerSecond = event => {
    var verify = this.verifyFormat(event.target.files[0].name)
    if(verify==true){
      this.setState({
        familyFile: URL.createObjectURL(event.target.files[0])
      })
      this.setState({
        imgFamily: event.target.files[0]
      })
    }
    else this.sweetAlertFunction()
  }

  sweetAlertFunction(){
    swal({
      title: "Error de formato",
      text: "El formato de imagen no es el correcto",
      icon: "error",
      button: "Reintentar",
    });
  }

  clean = () => {
    this.setState({
      familyFile: null
    })
    this.setState({
      profileFile: null
    })
    this.setState({
      imgProfile: null
    })
    this.setState({
      imgFamily: null
    })
  }

  verifyFormat = (URLname) => {
    var correct = false

    if(URLname.includes(".png")){
      correct = true
    }

    if(URLname.includes(".jpg")){
      correct = true
    }

    if(URLname.includes(".jpeg")){
      correct = true
    }

    if(URLname.includes(".gif")){
      correct = true
    }

    return correct
  }

  submitPortada = () => {
    const fd = new FormData()
    fd.append('image', this.state.img)
    fd.append('description', '2')

     axios.post(`/affective/${this.props.auth.user.sub}/uploadPhoto`, fd)
    .then(res => swal({
       title: "Se han agregado exitosamente",
       text: "Ahora puedes ver las imagenes en el perfil",
       icon: "success",
       button: "Continuar",
       }))
     .catch(err => 
       swal({
         title: "No se ha podido agregar la imagen de " + this.state.person,
         text: "Verifica que toda la información este correcta y vuelve a intentarlo",
         icon: "error",
         button: "Continuar",
         })
      );
  }


  onSubmit = e => {
    const fd = new FormData()
    fd.append('image', this.state.imgProfile)
    fd.append('description', "1")

     axios.post(`/affective/${this.props.auth.user.sub}/uploadPhoto`, fd)
    .then(
      this.submitPortada
    )
     .catch(err => 
       swal({
         title: "No se han podido agregar las imágenes",
         text: "Verifica que toda la información este correcta y vuelve a intentarlo",
         icon: "error",
         button: "Continuar",
         })
      );

    e.preventDefault(); 
  };

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

            <form onSubmit={this.onSubmit}>
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
                      > 
                      <AddAPhotoOutlinedIcon className={classes.icons}/>
                      Subir foto perfil
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
                      type="submit"
                      > 
                      <AddAPhotoOutlinedIcon className={classes.icons}/>
                        Subir foto familiar
                  </Button>


                <GridContainer justify="center">
                
                  <GridItem xs={12} sm={7} md={3}>
                    <div className={classes.wrapp}>
                      <Button
                      round size="lg"
                      color="success"
                      type="submit"
                      >Guardar
                      </Button>
                    </div>
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
  classes: PropTypes.object,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default  connect(
  mapStateToProps
  ) (withStyles(workStyle)(withRouter(CoverProfileSection)));
