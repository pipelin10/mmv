import { title } from "assets/jss/material-kit-react.jsx";
import { container } from "assets/jss/material-kit-react.jsx";


const albumViewStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  buttonW: {
    width: "200px !important",
  height: "30px important"
  }
};

export default albumViewStyle;