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
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import QuestionsSection from "./Sections/QuestionsSection.jsx";

const dashboardRoutes = [];

class CoverAndProfilePage extends React.Component {
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
         <Parallax filter verysmall image={require("assets/img/hola.jpeg")}>
          <div className={classes.container}>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <QuestionsSection />
          </div>
        </div>
      </div>
    );
  }
}

CoverAndProfilePage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(CoverAndProfilePage);