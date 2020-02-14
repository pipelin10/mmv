import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";

//React router for wrapping the page
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";



class WorkSection extends React.Component {
  returnPhotosRoute(actualPersonAlbum, relations) {
    let photosRoute = "";
    relations.map((relation, key) => {
      if ((actualPersonAlbum.includes(relation.relationship)) && (relation.photo.length)) {
        photosRoute = relation.photo;
      }
    });
    return photosRoute;
  }

  returnImg = (photo, key) => {
    return <div key={key}>
      <img
        src={"../../../../../../" + photo.img}
        alt="First slide"
        className="slick-image"
      />
    </div>
  }



  render() {
    const { actualPersonAlbum } = this.props.relations;
    const { relations } = this.props.relations;
    const photos = this.returnPhotosRoute(actualPersonAlbum, relations)
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  {photos.map((photo, key) => {
                    return this.returnImg(photo, key)
                  })}
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  relations: state.relations,
  actualPersonAlbum: state.actualPersonAlbum
});

WorkSection.propTypes = {
  classes: PropTypes.object
};

export default connect(mapStateToProps)(withStyles(carouselStyle)(withRouter(WorkSection)));
