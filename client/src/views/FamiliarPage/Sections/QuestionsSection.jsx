import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

//library to show notifications
import swal from 'sweetalert';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Select from 'react-select';
import CustomInput from "components/CustomInput/CustomInput.jsx";


import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import 'bootstrap/dist/css/bootstrap.css';
//Axios
import axios from "axios";
//Redux
import { connect } from "react-redux";
//React router for wrapping the page
import { withRouter } from "react-router-dom";

const options = [
  {label: 'Selecciona',isDisabled: true },
  { value: 'Mamá', label: 'Mamá' },
  { value: 'Papá', label: 'Papá' },
  { value: 'Abuelo', label: 'Abuelo'},
  { value: 'Abuela', label: 'Abuela'},
  { value: 'Tio', label: 'Tio'},
  { value: 'Tia', label: 'Tia'},
  { value: 'Hermano', label: 'Hermano'},
  { value: 'Hermana', label: 'Hermana'},
  { value: 'Sobrino', label: 'Sobrino'},
  { value: 'Sobrina', label: 'Sobrina'},
  { value: 'Esposo', label: 'Esposo'},
  { value: 'Esposa', label: 'Esposa'},
  { value: 'Hijo', label: 'Hijo' },
  { value: 'Hija', label: 'Hija' },
  { value: 'Nieto', label: 'Nieto'},
  { value: 'Nieta', label: 'Nieta'},
  { value: 'Bisnieto', label: 'Bisnieto'},
  { value: 'Bisnieta', label: 'Bisnieta'},
  { value: 'Novio', label: 'Novio'},
  { value: 'Novia', label: 'Novia'},
  { value: 'Yerno', label: 'Yerno'},
  { value: 'Nuera', label: 'Nuera'},
  { value: 'Amigo', label: 'Amigo'},
  { value: 'Amiga', label: 'Amiga'},
  { value: 'Cuidador', label: 'Cuidador'},
  { value: 'Cuidadora', label: 'Cuidadora'},
]

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
      height: 420,
      relationship: null,
      name: '',
      last_name: ''
    }
  }

  handleChange = (relationship) => {
    this.setState({ relationship });
  }
  
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  clean = () => {
    this.setState({ name: '' });
    this.setState({ last_name: '' });
    this.setState({ relationship: null });
  }

  onSubmit = e => {
    
    const affectiveRelationData = {
      name: this.state.name,
      last_name: this.state.last_name,
      relationship: this.state.relationship.value
    };
    
    axios.post(`/user/${this.props.auth.user.sub}/newrelation`, affectiveRelationData)
    .then(res => swal({
      title: "Se ha agregado exitosamente",
      text: "Ahora puedes agregar fotos y videos sobre " +  this.state.name,
      icon: "success",
      button: "Continuar",
      }))
    .catch(err => 
      swal({
        title: "No se ha podido agregar " + this.state.name,
        text: "Verifica que toda la información este bien y vuelve a intentarlo",
        icon: "error",
        button: "Continuar",
        })
      );

      this.clean()

    //Aquí no debe estar este console sino el llamado a la función de redux para agregar a la nueva persona
    //Modificar esto cuando se pueda
    console.log(affectiveRelationData);
    //También los botones y los cumston input deberían borrarse y aparecer vacios

    e.preventDefault(); 
  };

  render() {
    const { userData } = this.props.auth;
    const { classes } = this.props;
    var { height } = this.state;


    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8} className={classes.grid}>

            <h2 className={classes.title}>Compartenos información de la familia</h2>
            
            <p className={classes.title}>Diseñaremos un album para el paciente, con el fin de que siga conectado 
            con sus familiares, amigos y allegados.</p>
            <form onSubmit={this.onSubmit}>
              <GridContainer>

                <GridItem xs={12} sm={12} md={12}>

                  <div className={classes.typo}>
                    <div className={classes.note}>Selecciona el parentesco de la persona con 
                    {" " + userData.name}</div>
                  </div>

                  <Select  
                  styles = {customStyles}
                  defaultValue={options[0]}
                  options={options} 
                  onChange={this.handleChange}
                  value={this.state.relationship}
                  />

                  <CustomInput
                    labelText="Nombre"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                      }}
                    inputProps={{
                      onChange: this.onChange,
                      type: "text",
                      value:this.state.name
                      }}
                  />

                    <CustomInput
                      
                      labelText="Apellidos"
                      id="last_name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: this.onChange,
                        type: "text",
                        value:this.state.last_name
                      }}
                    />


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

QuestionsSection.propTypes = {
  classes: PropTypes.object,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
  ) (withStyles(workStyle)(withRouter(QuestionsSection)));
