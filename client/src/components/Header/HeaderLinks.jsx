/*eslint-disable*/
import React, { useCallback } from "react";
import InfoIcon from '@material-ui/icons/Info';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

// nodejs library to set properties for components
import PropTypes from "prop-types";
import { connect } from "react-redux";

//React router for wrapping the page
import { withRouter } from "react-router-dom";

//Function to loggout user from memento 
import { logoutUser } from "../../actions/authActions";


function HeaderLinks({ ...props }) {
  const { classes, completed } = props;

  const handleClick = useCallback(() => {
    props.logoutUser();
  })

  if(completed){

    return (<List className={classes.list}>
      <ListItem button component={Link} to="/profile-page" className={classes.listItem}>
          <Button
            color="transparent"
            target="_blank"
          >
            <FaceOutlinedIcon 
            className={classes.icons} /> 
            Mi perfil
          </Button>
        </ListItem>


      <ListItem button component={Link} to="/activities-page" className={classes.listItem}>
          <Button
            color="transparent"
            target="_blank"
          >
            <PlayCircleOutlineIcon className={classes.icons} /> Iniciar terapia
          </Button>
        </ListItem>
  
  
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Nuevo"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={AddIcon}
            dropdownList={[
              <Link to="/familiarUpload-page" className={classes.dropdownLink}>
                Agregar familiar
              </Link>,
              <Link to="/albumUpload-page" className={classes.dropdownLink}>
                Agregar album
              </Link>,
              <Link to="/" className={classes.dropdownLink}>
                Agregar pregunta
              </Link>
              
            ]}
          />
        </ListItem>

        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Información"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={InfoIcon}
            dropdownList={[
              <Link to="/questions-page" className={classes.dropdownLink}>
                Información básica
              </Link>,
              <Link to="/albumUpload-page" className={classes.dropdownLink}>
                Información familiar
              </Link>
              ,
              <Link to="/cover-profile-person-page" className={classes.dropdownLink}>
                Foto del perfil y portada
              </Link>
            ]}
          />
        
        
        </ListItem>

        

        <ListItem button className={classes.listItem}>
          <Button
            color="transparent"
            target="_blank"
            onClick={handleClick}
          >
            <PlayCircleOutlineIcon 
            className={classes.icons} /> 
            Salir
          </Button>
        </ListItem>
        </List>
          );
          }
     
    return <div></div>;
}

HeaderLinks.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {logoutUser}) (withStyles(headerLinksStyle)(withRouter(HeaderLinks)));
