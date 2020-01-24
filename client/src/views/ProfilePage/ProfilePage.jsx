import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchQuestions} from "../../actions/questionsAction";
import { setCurrentUser} from "../../actions/authActions";
import {fetchRelations } from "../../actions/relationAction";

//React router for wrapping the page
import { withRouter } from "react-router-dom";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/oldPerson.jpg";



import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {


componentDidMount(){
  this.props.fetchQuestions(this.props.auth.user.sub);
  this.props.fetchRelations(this.props.auth.user.sub);
}

renderQuestion(question,key){
  return <div key={key}>
    <h5>{question.question}</h5>
    <p>{question.answer}</p>
    </div>
}

  render() {
    //const user = this.props.user;
    //console.log(user)
    const { userData } = this.props.auth;
    //console.log(userData)
    const {questions} = this.props.questions;
    //console.log(questions);
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
        <Header
          //color="transparent"
          brand="Memento"
          rightLinks={<HeaderLinks completed={true}/>}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter small image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h2 className={classes.title}> {userData.name} {userData.last_name}</h2>
                      <h4>Hola, soy {userData.name}, tengo 83 años.
                      <br/>
                      Nací en Cali, Valle del Cauca y resido en el barrio Antonio Nariño, vivo con mi 
                      hija, mi yerno y mis dos nietos.
                      <br/>
                      <br/>
                      {questions.length != 0 ? questions[0].score : ""} </h4>
                      {questions.map((question,key)=>{
                        return this.renderQuestion(question,key);
                      })}
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  classes: PropTypes.object,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  questions: state.questions
});

export default connect(
  mapStateToProps,
  {fetchQuestions, setCurrentUser, fetchRelations}) (withStyles(profilePageStyle)(withRouter(ProfilePage)));
