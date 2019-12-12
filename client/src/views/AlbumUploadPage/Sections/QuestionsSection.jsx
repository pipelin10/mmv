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
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

//React router for wrapping the page
import { withRouter } from "react-router-dom";
import { fetchRelations } from "../../../actions/relationAction";

import { connect } from "react-redux";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";


class QuestionsSection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      profileFile: null,
      familyFile: null,
      height: 100,
      value: 'female'
    }
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
  }

  componentDidMount(){
    this.props.fetchRelations(this.props.auth.user.sub);
    console.log(this.props.fetchRelations(this.props.auth.user.sub));
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

  renderBottons(name,key){
    return <div key={key}>
        <FormControlLabel 
        value={name} 
        control={<Radio color="primary" />} 
        label={name} 
        labelPlacement="start" />
      </div>
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.value=event.target.value;
		console.log(this.value);
  };

  render() {
    const { classes } = this.props;
    var { height } = this.state;
    const {relations} = this.props.relations;
    console.log(relations);
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>

            <h2 className={classes.title}>Compartenos fotos de tu familia</h2>
            
            <p className={classes.title}>Diseñaremos un album para el paciente, con el fin de que siga conectado 
            con sus familiares, amigos y allegados.</p>
            <form>
              <GridContainer justify="center">


                <GridItem xs={12} sm={12} md={12}>
                      
                  <FormControl component="fieldset">
                      <FormLabel component="legend">¿Sobre quién es este album?</FormLabel>
                      <RadioGroup aria-label="position" name="position" value={this.state.value} onChange={this.handleChange} row>
                      {relations.map((relation,key)=>{
                        return this.renderBottons(relation.name,key);
                      })}
                      </RadioGroup>


                      <input 
                    style={{display:'none'}}
                    type="file" 
                    onChange={this.fileSelectedHandler}
                    ref = {fileInput => this.fileInput = fileInput}
                    />
                  <FormLabel component="legend">Sube la foto</FormLabel>
                  <Button 
                      onClick={() => this.fileInput.click()}
                      round size="normal"
                      color="primary"
                      >Subir foto
                  </Button>
                  <img src={this.state.profileFile} height={height}/>

                    </FormControl>;
                      


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
