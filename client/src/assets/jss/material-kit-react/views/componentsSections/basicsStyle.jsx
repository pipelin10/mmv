import { container, title } from "assets/jss/material-kit-react.jsx";
import customCheckboxRadioSwitch from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";

const basicsStyle = {
  
  container,
  title: {
    ...title,
    marginTop: "10px",
    minHeight: "10px",
    textDecoration: "none"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  ...customCheckboxRadioSwitch
};

export default basicsStyle;
