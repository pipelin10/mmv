import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

//notifications
import swal from 'sweetalert';

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Button from "components/CustomButtons/Button.jsx";

//styles
import identificationStyle from "assets/jss/material-kit-react/views/landingPageSections/identificationStyle.jsx";

//React router for wrapping the page
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";


const dashboardRoutes = [];


class QuizAlbumPage extends React.Component {
  constructor(props) {
    super(props)
    var randAnimal = (Math.floor(Math.random() * 7) + 1)
    this.state = {
      score: 0,
      actualAnimal: "Pajaro",
      actualImg: "birds/" + randAnimal + ".jpeg"
    }
  }

  returnPhotosRoute(actualPersonAlbum, relations){

    let photosRoute = "";
    relations.map((relation,key)=>{
      //Quitar ese relation.photo.length cuando haga las validaciones
      if((actualPersonAlbum.includes(relation.relationship)) && (relation.photo.length)){
        photosRoute = relation.photo;
      }
    });
    return photosRoute;
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="white"
          routes={dashboardRoutes}
          brand="Memento"
          rightLinks={<HeaderLinks completed={true}/>}
          fixed
          {...rest}
        />
        <div style={{paddingTop:"6rem"}}>
          <img src={require("assets/img/domesticAnimals/" + this.state.actualImg)} alt="..." className={classes.img} />

          <div>

          <h2 className={classes.title}>¿Quién es está persona?</h2>
          </div>

          <div style={{textAlign: "center"}}>
          <Button
              color="success"
              size="lg"
              style={{width:"280px"}}
              onClick={() => { this.answerClick() }}>
              Respuesta
          </Button>
          <Button
              color="danger"
              size="lg"
              style={{width:"280px"}}
              onClick={() => { this.areYouSure() }}>
              Terminar juego
          </Button>

          </div>

        </div>
      </div>
    );
  }
}

QuizAlbumPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(identificationStyle)(QuizAlbumPage);