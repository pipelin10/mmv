import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

//notifications
import swal from 'sweetalert';

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Button from "components/CustomButtons/Button.jsx";

//styles
import orientationStyle from "assets/jss/material-kit-react/views/landingPageSections/orientationStyle.jsx";

import calendarImg from "assets/img/calendar1.png"
import moment from 'moment'

const dashboardRoutes = [];

const questionsOrientation = ["¿En qué año nos encontramos?", "¿En qué mes nos encontramos?",
  "¿En qué día nos encontramos?", "¿En qué día de la semana nos encontramos?", "¿Cuál es la hora actual?",
  "¿En qué país nos encontramos?", "¿En qué departamento nos encontramos?", "¿En qué ciudad nos encontramos?",
  "¿En qué hospital nos encontramos?", "¿En qué piso nos encontramos?"]


class OrientationPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      year: moment().toDate().getFullYear().toString(),
      month: (moment().toDate().getMonth() + 1).toString(),
      day: moment().toDate().getDate().toString(),
      weekDay: moment().toDate().getDay().toString(),
      hour: moment().toDate().getHours().toString(),
      country: 'Colombia',
      department: 'Valle del cauca',
      city: 'Cali',
      hospital: '',
      floor: 0,
      actualQuestion: 0
    }
  }

  answerClick = () => {
    swal({
      title: this.state.actualAnimal,
      buttons: {
        catch: {
          text: "Si, acerté",
          value: true,
        },
        cancel: "No acerté",
        defeat: false,
      },
    })
      .then((value) => {
        if (value) {
          this.point()
        }
        else this.notPoint()
      });
  }

  noticateAndNext = () => {
    swal({
      title: "Ingresa el dato",
      buttons: {
        catch: {
          text: "Siguiente",
        },
      },
    })

    let { actualQuestion } = this.state;
    this.setState({ actualQuestion: actualQuestion + 1 });
  }

  verifyAndNext = (step) => {
    swal({
      title: "Ingresa el " + step,
      content: "input",
      button: {
        text: "Verificar",
        closeModal: false,
      },
    })
      .then(data => {
        if (this.state.actualQuestion === 0) {
          if (data === 2020) {

            let { score } = this.state;
            this.setState({ score: score + 1 });
          }
          this.noticateAndNext()

        }

      });
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="white"
          routes={dashboardRoutes}
          brand="Memento"
          rightLinks={<HeaderLinks completed={true} />}
          fixed
          {...rest}
        />
        <div style={{ paddingTop: "5rem" }}>

          <h2 className={classes.title}>{questionsOrientation[this.state.actualQuestion]}</h2>

          <img src={calendarImg} alt="..." className={classes.img} />



          <div style={{ paddingRight: "10rem", textAlign: "right" }}>
            <Button
              color="success"
              round size="lg"
              style={{ width: "180px", heigth: "100px" }}
              onClick={() => { this.verifyAndNext() }}>
              Contestar
          </Button>
          </div>

        </div>
      </div>
    );
  }
}

OrientationPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(orientationStyle)(OrientationPage);