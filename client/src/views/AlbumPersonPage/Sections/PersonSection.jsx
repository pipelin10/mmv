import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

//React router for wrapping the page
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { setActualAlbumPerson} from "../../../actions/relationAction";

import {albumPersonStyle, navPillsStyle} from "assets/jss/material-kit-react/views/landingPageSections/albumPersonStyle";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

class PersonSection extends React.Component { 


  renderButtons(name,key){
    return <div key={key}>
        <Button
          onClick={() => this.props.onTodoClick(name)}
          component={Link}
          style={{display: "block", marginLeft: "300px"}}
          color="success"
          size="lg"
          to="/select-view-album-page"
        >
        {name}
        </Button>
      </div>
  }


  render() {
    console.log(this.props.auth)

    const {relations} = this.props.relations;
    console.log(relations);
    relations.map((relation,key)=>{
      if(relation.photo.length){
      return console.log(relation.name, relation.photo.length, key);
      }
    }
  )
    const { classes } = this.props;
    return (
      <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>¿Sobre quién quieres trabajar hoy?</h2>
            
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
                <NavPills
                  color="rose"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Familia",
                      tabIcon: FavoriteBorderOutlinedIcon,
                      tabContent: (
                        <span>

                        {relations.map((relation,key)=>{
                          if((relation.photo.length)&&!(relation.relationship.includes("Amig"))&&
                          !(relation.relationship.includes("Cuidador"))){
                            return this.renderButtons(relation.relationship + " " + relation.name, key);
                          }
                        })
                        }
                          
                        </span>
                      )
                    },
                    {
                      tabButton: "Amigos",
                      tabIcon: LoyaltyOutlinedIcon,
                      tabContent: (
                        <span>

                          {relations.map((relation,key)=>{
                          if((relation.photo.length)&&(relation.relationship.includes("Amig"))){
                            return this.renderButtons(relation.relationship + " " + relation.name, key);
                          }
                        })
                        }

                        </span>
                      )
                    },
                    {
                      tabButton: "Cuidadores",
                      tabIcon: LocalHospitalOutlinedIcon,
                      tabContent: (
                        <span>

                          {relations.map((relation,key)=>{
                          if((relation.photo.length)&&(relation.relationship.includes("Cuidador"))){
                            return this.renderButtons(relation.relationship + " " + relation.name, key);
                          }
                        })
                        }

                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
        </GridContainer>
        </div>
        </div>
    );
  }
}

PersonSection.propTypes = {
  classes: PropTypes.object,
  auth: PropTypes.object.isRequired,
  relations: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  relations: state.relations,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (name) => {
      console.log("por acá llego" + name);
      dispatch(setActualAlbumPerson(name))
    }
  }
}

export default connect(
  mapStateToProps,
   mapDispatchToProps) (withStyles(albumPersonStyle)(withRouter(PersonSection)));