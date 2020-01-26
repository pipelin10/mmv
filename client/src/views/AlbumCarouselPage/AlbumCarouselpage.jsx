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
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class AlbumCarouselPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="black"
          routes={dashboardRoutes}
          brand="Memento"
          rightLinks={<HeaderLinks completed={true}/>}
          fixed
          {...rest}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <WorkSection />
          </div>
        </div>
      </div>
    );
  }
}

AlbumCarouselPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(AlbumCarouselPage);