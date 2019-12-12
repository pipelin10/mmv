import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import Button from "components/CustomButtons/Button.jsx";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h3>Navigation Pills</h3>
            </div>
            <div className={classes.title}>
              <h3>
                <small>With Icons</small>
              </h3>
            </div>
            <GridContainer>

              <GridItem xs={12} sm={12} md={12}>
                <NavPills
                  color="rose"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Familia",
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                          <Button
                          color="success"
                          size="lg"
                        >
                          Mamá
                        </Button>

                        <Button
                        style={{display: "block", marginLeft: "300px"}}
                          color="success"
                          size="lg"
                        >
                          Papá
                        </Button>

                        <Button
                          color="success"
                          size="lg"
                        >
                          Tia
                        </Button>
                          
                        </span>
                      )
                    },
                    {
                      tabButton: "Amigos",
                      tabIcon: Schedule,
                      tabContent: (
                        <span>
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                          </p>
                          <br />
                          <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions. Dramatically visualize
                            customer directed convergence without revolutionary
                            ROI. Collaboratively administrate empowered markets
                            via plug-and-play networks. Dynamically
                            procrastinate B2C users after installed base
                            benefits.
                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

SectionPills.propTypes = {
  classes: PropTypes.object
};

export default withStyles(pillsStyle)(SectionPills);
