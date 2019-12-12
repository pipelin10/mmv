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

// react components for routing our app without refresh
import { Link } from "react-router-dom";

import albumViewStyle from "assets/jss/material-kit-react/views/landingPageSections/activityStyle";

class ViewSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Ahora, selecciona el estilo de tu album</h2>
            
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              component={Link}
              color="success"
              size="lg"
              to="/album-page"
            >
              Tradicional
            </Button>
            <Button
              style={{width : '160px'}}
              component={Link}
              color="success"
              size="lg"
              to="/album-carousel-page"
            >
              Galeria
            </Button>
          </GridItem>
        </GridContainer>
        </div>
        </div>
    );
  }
}

ViewSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(albumViewStyle)(ViewSection);
