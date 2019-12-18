import { title } from "assets/jss/material-kit-react.jsx";

const questionStyle = {
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  subtitle:{
    ...title,
    marginBottom: "5px",
    marginTop: "30px",
    minHeight: "25px",
    textDecoration: "none",
  },
  typo: {
    marginBottom: "60px",
    marginTop: "50px",
    position: "relative",
    width: "100%"
  },
  description: {
    color: "#495057",
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "0px",
    marginLeft: "0px"
  }
};

export default questionStyle;
