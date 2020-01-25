import { title } from "assets/jss/material-kit-react.jsx";

const workStyle = {
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    marginBottom: "20px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
    fontSize: "2.5rem",
  },
  subtitle: {
    ...title,
    fontWeight: "400",
    marginBottom: "50px",
    marginTop: "10px",
    minHeight: "22px",
    textDecoration: "none",
    textAlign: "center",
    fontSize: "1.2rem",
  },
  typo: {
    marginBottom: "60px",
    marginTop: "50px",
    position: "relative",
    width: "100%"
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#5c5c5c",
    display: "block",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "0px",
    position: "absolute",
    width: "100%"
  },
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  grid:{
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "35px",
    paddingLeft: "35px",
    flexBasis: "auto"
  },
  wrapp:{
    paddingTop: "20px",
    textAlign:"center",
    verticalAlign:"middle"
  }
};

export default workStyle;
