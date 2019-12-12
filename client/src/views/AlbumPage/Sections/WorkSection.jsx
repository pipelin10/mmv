import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Background from "assets/img/p4.png";

//import anotherExample from "../../../../../api/uploads"
import Ejemplo from "assets/img/faces/avatar.jpg"

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import { relative } from "path";

//React router for wrapping the page
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

const sectionStyle = {
  position: relative,
  width: "100%",
  height: "780px",
  backgroundPosition: 'center center',
  backgroundRepeat : 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundImage: `url(${Background})`
  
};

const conta ={
  padding: "200"
}

const imgStyle = {
  left: "260px",
  width: "100%",
  maxWidth: "350px",
  height: "350px",
  top:"190px",
  position: "fixed",
}

const imgStyle2 = {
  left: "790px",
  width: "100%",
  maxWidth: "350px",
  height: "350px",
  top:"190px",
  position: "fixed",
}


class WorkSection extends React.Component {

  returnPhotosRoute(actualPersonAlbum, relations){

    let photosRoute = "";
    relations.map((relation,key)=>{
      console.log(relation.relationship)
      console.log(actualPersonAlbum.includes(relation.relationship))
      //Quitar ese relation.photo.length cuando haga las validaciones
      if((actualPersonAlbum.includes(relation.relationship)) && (relation.photo.length)){
        photosRoute = relation.photo;
      }
    });
    return photosRoute;
  }

  render() {
    const { classes } = this.props;
    const { actualPersonAlbum } = this.props.relations;
    const { relations } = this.props.relations;
    const photos = this.returnPhotosRoute(actualPersonAlbum, relations)
    console.log(photos[1].img)

    return (
       <section style={ sectionStyle }>
         <div >
         <GridContainer style={conta}>
         <GridContainer item xs={12} spacing={4}>
          <GridItem xs={12}>
            <img src={"../../../../../../" + photos[1].img } style={imgStyle}/>
            <img src={Ejemplo} style={imgStyle2}/>

          </GridItem>

  
          </GridContainer>
          </GridContainer>
        </div>
      </section>
    );
  }
}

WorkSection.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = state => ({
  relations: state.relations,
  actualPersonAlbum: state.actualPersonAlbum
});

export default connect(mapStateToProps) (withStyles(workStyle)(withRouter(WorkSection)));