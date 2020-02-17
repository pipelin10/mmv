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
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

import Background from "assets/img/p4.png";

//import anotherExample from "../../../../../api/uploads"

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import { relative } from "path";

//notifications
import swal from 'sweetalert';

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
  paddingTop: "19rem",
  paddingLeft: "7rem",
  paddingRight: "7rem",
  paddingBottom: "10rem",
}

const imgStyle = {
  maxWidth: "350px",
  maxHeight:"266px",
  border: "10px solid #525F74",
  borderRadius: "4px"
}

const leftDiv = {
//
  textAlign: "center",
}


class WorkSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      actualImg: 0,
      photoslen:0,
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

  changeState(actual ,photoslen){
    if(actual+1<photoslen){
      let {actualImg} = this.state
      this.setState({actualImg: actualImg + 1 })

    }
    else this.notData()

  }

  notData() {
    swal({
      title: "No hay más imagenes para previsualizar",
      text: "¿Quieres pasar al quiz?",
      icon: "warning",
      buttons: ["No", "Si, quiz"],
    })
    .then(willDelete => {
      if (willDelete) {
        this.props.history.push("/quiz-album-page");
      }
    });
  }



  render() {
    const { actualPersonAlbum } = this.props.relations;
    const { relations } = this.props.relations;
    const photos = this.returnPhotosRoute(actualPersonAlbum, relations)
    const photoslen = photos.length
    

    return (
       <section style={ sectionStyle }>
         <div style={conta}>
          <GridContainer
            direction="row"
            justify="center"
            alignItems= "flex-end"
            >
            <GridItem xs={6} sm={6} md={6} >
              <img src={"../../../../../../" + photos[this.state.actualImg].img } style={imgStyle} />

              

            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <div style={leftDiv}>
                <img src={"../../../../../../" + photos[this.state.actualImg+1].img } style={imgStyle} />

              </div>

            </GridItem>

            
            </GridContainer>

            <div style={{textAlign: "right", paddingTop:"4rem"}}>
          <Button
              color="primary"
              size="sm"
              style={{width:"70px", backgroundColor: "#525F74"}}
              onClick={() => { this.changeState(this.state.actualImg+1, photoslen)}}>
                <ChevronRightRoundedIcon/>
          </Button>

          </div>
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