import { title } from "assets/jss/material-kit-react.jsx";

const questionStyle = {
  section: {
    padding: "30px 0px"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "22px",
    textDecoration: "none",
    textAlign: "center"
  },
  subtitle:{
    ...title,
    marginBottom: "5px",
    marginTop: "5px",
    minHeight: "30px",
    textDecoration: "none",
  },
  simpleText:{
    ...title,
    marginBottom: "10px",
    marginTop: "40px",
    minHeight: "25px",
    textDecoration: "none",
    fontWeight: "500",

  },
  typo: {
    marginBottom: "60px",
    marginTop: "60px",
    position: "relative",
    width: "100%"
  },
  description: {
    color: "#495057",
    fontWeight: "500",
    textAlign: "center",
    fontFamily: `"Roboto", "Times New Roman", serif`
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
