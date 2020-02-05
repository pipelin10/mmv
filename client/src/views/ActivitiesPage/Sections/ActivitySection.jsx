import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import swal from 'sweetalert';

// react components for routing our app without refresh
import { Link } from "react-router-dom";

import activityStyle from "assets/jss/material-kit-react/views/landingPageSections/activityStyle.jsx";

class ActivitySection extends React.Component {
  constructor(props){
    super(props);
    this.sweetAlertFunction = this.sweetAlertFunction.bind(this);
  }

  sweetAlertFunction(){
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
      <div className={classes.container}>

      
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>¿En qué quieres trabajar hoy?</h2>
            
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              component={Link}
              color="success"
              size="lg"
              to="/select-person-album-page"
            >
              Ambito Afectivo
            </Button>
            <Button
              component={Link}
              color="success"
              size="lg"
              to="/espatial-page"
            >
              Ambito Espacial
            </Button>
          </GridItem>
        </GridContainer>

        </div>
        </div>
    );
  }
}

ActivitySection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(activityStyle)(ActivitySection);
