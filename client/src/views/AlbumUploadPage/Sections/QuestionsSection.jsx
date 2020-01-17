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
import Radio from '@material-ui/core/Radio';
import Select from 'react-select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

//React router for wrapping the page
import { withRouter } from "react-router-dom";
import { fetchRelations } from "../../../actions/relationAction";

import { connect } from "react-redux";

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

const optionDefaultFamiliarPhoto =  {label: 'Selecciona', isDisabled: true }

class QuestionsSection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      profileFile: null,
      familyFile: null,
      person: ''
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


  handleChange = (person) => {
    this.setState({ person });
  }

  returnNames = (relatns) => {
    var names = new Array(relatns.length)

    for (var i = 0; i < relatns.length; i++) {
      names[i] = { value: relatns[i].name, label: relatns[i].relationship + " " + relatns[i].name }
    }

    return names
  }

  render() {
    const { classes } = this.props;
    var { height } = this.state;
    const {relations} = this.props.relations;
    var names = this.returnNames(relations)
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>

            <h2 className={classes.title}>Compártenos fotos de tu familia</h2>
            
            <p className={classes.title}>Diseñaremos un album para el paciente, con el fin de que siga conectado 
            con sus familiares, amigos y allegados.</p>
            <form>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                      
                <div className={classes.typo}>
                    <div className={classes.note}> ¿Sobre quién es esta foto?  </div>
                  </div>
                      <Select  
                      styles = {customStyles}
                      options={names} 
                      defaultValue={names[0]}
                      onChange={this.handleChange}
                      value={this.state.person}
                      />

                      <input 
                      style={{display:'none'}}
                      type="file" 
                      onChange={this.fileSelectedHandler}
                      ref = {fileInput => this.fileInput = fileInput}
                      />
                 <div className={classes.typo}>
                    <div className={classes.note}> Selecciona la foto  </div>
                  </div>

                  <Button 
                      onClick={() => this.fileInput.click()}
                      round size="normal"
                      color="primary"
                      >Seleccionar foto
                  </Button>
                  <img src={this.state.profileFile} height={height}/>
                      


                <GridContainer justify="center">
                
              {/* <GridItem xs={12} sm={7} md={3}>
                  <Button 
                  round size="lg"
                  color="success"
                  >Guardar
                  </Button>

                </GridItem> */}
                
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
  auth: state.auth,
  relations: state.relations,
});

export default connect(
  mapStateToProps,
  {fetchRelations }) (withStyles(workStyle)(withRouter(QuestionsSection)));
