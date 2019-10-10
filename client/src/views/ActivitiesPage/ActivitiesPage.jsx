import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class ActivitiesPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Memento"
          rightLinks={<HeaderLinks completed={true}/>}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "black"
          }}
          {...rest}
        />
        <Parallax filter small image={require("assets/img/art5.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={10} md={6}>
                <h1 className={classes.title}>Actividades</h1>
                <h4>
                  Con las actividades de Memento queremos ayudarte a recordar lo que has olvidado
                </h4>
                
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <WorkSection />
          </div>
        </div>
      </div>
    );
  }
}

ActivitiesPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(ActivitiesPage);