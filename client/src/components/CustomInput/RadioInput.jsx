import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";

function RadioInput({ ...props }) {
  const {
    classes,
    checked,
    value,
    label,
    onChange,
  } = props;
 
  return(
      <div className={classes.sections}>
        <div className={classes.container}>
        
                  <FormControlLabel
                    control={
                      <Radio
                        checked={checked}
                        value={value}
                        name="radio button enabled"
                        aria-label="A"
                        onChange={onChange}
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
                    label={label}
                  />
          
        </div>
      </div>
    );
}

RadioInput.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default withStyles(basicsStyle)(RadioInput);
