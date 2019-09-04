import { container, title } from "assets/jss/material-kit-react.jsx";
import customCheckboxRadioSwitch from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";

const basicsStyle = {
  sections: {
    padding: "5px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "10px",
    minHeight: "10px",
    textDecoration: "none"
  },
  space50: {
    height: "10px",
    display: "block"
  },
  space70: {
    height: "10px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  ...customCheckboxRadioSwitch
};

export default basicsStyle;
