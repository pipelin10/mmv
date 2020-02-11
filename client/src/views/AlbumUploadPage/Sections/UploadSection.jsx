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
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Select from 'react-select';
import swal from 'sweetalert';

//React router for wrapping the page
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
//Axios
import axios from "axios";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

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

const optionDefaultFamiliarPhoto = [{ label: 'Selecciona', Value: 'Selecciona', isDisabled: true }]

class UploadSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgFamiliarFile: null,
      img: null,
      height: 100,
      id: 0,
      person: '',
      select: '',
      description: '',
    }
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
    this.sweetAlertFunction = this.sweetAlertFunction.bind(this);
  }


  fileSelectedHandler = event => {
    var verify = this.verifyFormat(event.target.files[0].name)

    if (verify === true) {
      this.setState({
        imgFamiliarFile: URL.createObjectURL(event.target.files[0])
      })
      this.setState({
        img: event.target.files[0]
      })
    }
    else this.sweetAlertFunction()
  }

  sweetAlertFunction() {
    swal({
      title: "Error de formato",
      text: "El formato de imagen no es el correcto",
      icon: "error",
      button: "Reintentar",
    });
  }

  verifyFormat = (URLname) => {
    var correct = false

    if (URLname.includes(".png")) {
      correct = true
    }

    if (URLname.includes(".jpg")) {
      correct = true
    }

    if (URLname.includes(".jpeg")) {
      correct = true
    }

    if (URLname.includes(".gif")) {
      correct = true
    }

    return correct
  }

  handleChange = (id) => {
    var select = id
    var person = id.label
    id = id.value
    this.setState({ id })
    this.setState({ person })
    this.setState({ select })
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  returnNames = (relatns) => {
    var names = new Array(relatns.length)

    for (var i = 0; i < relatns.length; i++) {
      names[i] = { value: relatns[i]._id, label: relatns[i].relationship + " " + relatns[i].name }
    }

    return names
  }

  getPosn(relatis, actualRelation) {
    for (var i = 0; i < relatis.length; i++) {
      if (relatis[i]._id === actualRelation) {
        return i
      }
    }
  }

  clean = () => {
    this.setState({
      imgFamiliarFile: null
    })
    this.setState({
      img: null
    })
    this.setState({
      id: 0
    })
    this.setState({
      person: ''
    })
    this.setState({
      select: ''
    })
    this.setState({
      description: ''
    })
  }

  onSubmit = e => {
    const fd = new FormData()
    fd.append('image', this.state.img)
    fd.append('description', this.state.description)

    axios.post(`/affective/${this.state.id}/uploadPhoto`, fd)
      .then(res => {
        const { relations } = this.props.relations;
        const { affectiveRelation } = res.data

        let posnChange = this.getPosn(relations, affectiveRelation)
        var relatns = relations;
        relatns[posnChange].photo.push(res.data)
        this.props.addPhotoToRelation(relatns)

        console.log(this.props.relations)

      },
        swal({
          title: "Se ha agregado exitosamente",
          text: "Ahora puedes ver la imagen en el album de " + this.state.person,
          icon: "success",
          button: "Continuar",
        })
      )
      .catch(err =>
        swal({
          title: "No se ha podido agregar la imagen de " + this.state.person,
          text: "Verifica que toda la información este correcta y vuelve a intentarlo",
          icon: "error",
          button: "Continuar",
        })
      );

    this.clean()

    e.preventDefault();
  };

  render() {
    const { classes } = this.props;
    var { height } = this.state;
    const { relations } = this.props.relations;
    var names = this.returnNames(relations)

    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>

            <h2 className={classes.title}>Compártenos fotos de tu familia</h2>

            <p className={classes.subtitle}>Diseñaremos un album para el paciente, con el fin de que siga conectado
            con sus familiares, amigos y allegados.</p>

            <form onSubmit={this.onSubmit}>

              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>

                  <div className={classes.typo}>
                    <div className={classes.note}> ¿Sobre quién es esta foto?  </div>
                  </div>
                  <Select
                    styles={customStyles}
                    options={names}
                    defaultValue={optionDefaultFamiliarPhoto}
                    onChange={this.handleChange}
                    value={this.state.select}
                  />

                  <div className={classes.typo}>
                    <div className={classes.note}>Aporta una descripción </div>
                  </div>

                  <CustomInput

                    labelText="Descripción"
                    id="description"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: this.onChange,
                      type: "text",
                      value: this.state.description
                    }}
                  />

                  <input
                    style={{ display: 'none' }}
                    type="file"
                    onChange={this.fileSelectedHandler}
                    ref={fileInput => this.fileInput = fileInput}
                  />
                  <div className={classes.typo}>
                    <div className={classes.note}> Selecciona la foto  </div>
                  </div>

                  <Button
                    onClick={() => this.fileInput.click()}
                    round size="lg"
                    color="primary"
                  >
                    <AddAPhotoOutlinedIcon className={classes.icons} />

                    Agregar foto
                  </Button>

                  <img src={this.state.imgFamiliarFile} height={height} alt="..." />

                  <GridContainer justify="center">

                    <GridItem xs={12} sm={12} md={12}>
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

UploadSection.propTypes = {
  classes: PropTypes.object,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  relations: state.relations,
});

const mapDispatchToProps = dispatch => {
  return {
    addPhotoToRelation: (newPhoto) => dispatch({ type: 'UPDATE_RELATIONS', newRelation: newPhoto })
  }
}


export default connect(
  mapStateToProps, mapDispatchToProps)(withStyles(workStyle)(withRouter(UploadSection)));
