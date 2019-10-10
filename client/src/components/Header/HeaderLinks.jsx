/*eslint-disable*/
import React from "react";
import InfoIcon from '@material-ui/icons/Info';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
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



function HeaderLinks({ ...props }) {
  const { classes, completed } = props;
  if(completed){

    return (<List className={classes.list}>
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
            buttonText="Información"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={InfoIcon}
            dropdownList={[
              <Link to="/questions-page" className={classes.dropdownLink}>
                Sobre mi
              </Link>,
              <Link to="/albumUpload-page" className={classes.dropdownLink}>
                Sobre mi familia
              </Link>
            ]}
          />
        </ListItem>
        </List>
          );
          }
     
    return <div></div>;
}

export default withStyles(headerLinksStyle)(HeaderLinks);
