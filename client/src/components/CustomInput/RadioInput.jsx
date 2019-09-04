import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// plugin that creates slider
import nouislider from "nouislider";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";

class SectionBasics extends React.Component {
  state = {
    checked: [24, 22],
    selectedEnabled: "b",
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled = event => {
    this.setState({ selectedEnabled: event.target.value });
  };
 
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
        
                <div
                  className={
                    classes.checkboxAndRadio +
                    " " +
                    classes.checkboxAndRadioHorizontal
                  }
                >
                  <h3></h3>
                  <FormControlLabel
                    control={
                      <Radio
                        checked={this.state.selectedEnabled === "a"}
                        onChange={this.handleChangeEnabled}
                        value="a"
                        name="radio button enabled"
                        aria-label="A"
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                        classes={{
                          checked: classes.radio,
                          root: classes.radioRoot
                        }}
                      />
                    }
                    classes={{
                      label: classes.label,
                      root: classes.labelRoot
                    }}
                    label="Inicial"
                  />
                </div>
                <div
                  className={
                    classes.checkboxAndRadio +
                    " " +
                    classes.checkboxAndRadioHorizontal
                  }
                >
                  <FormControlLabel
                    control={
                      <Radio
                        checked={this.state.selectedEnabled === "b"}
                        onChange={this.handleChangeEnabled}
                        value="b"
                        name="radio button enabled"
                        aria-label="B"
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                        classes={{
                          checked: classes.radio,
                          root: classes.radioRoot
                        }}
                      />
                    }
                    classes={{
                      label: classes.label,
                      root: classes.labelRoot
                    }}
                    label="Mediano"
                  />
                </div>
                <div
                  className={
                    classes.checkboxAndRadio +
                    " " +
                    classes.checkboxAndRadioHorizontal
                  }
                >
                </div>
          
        </div>
      </div>
    );
  }
}

SectionBasics.propTypes = {
  classes: PropTypes.object
};

export default withStyles(basicsStyle)(SectionBasics);
