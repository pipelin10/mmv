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

import happy from "assets/img/happy.png"

const dashboardRoutes = [];

const questionsOrientation = ["¿En qué año estamos?", "¿En qué mes estamos?",
  "¿En qué número de día estamos?", "¿En qué día de la semana estamos?", "¿Cuál es la hora actual?",
  "¿En qué país estamos?", "¿En qué departamento estamos?", "¿En qué ciudad estamos?",
  "¿En qué hospital estamos?", "¿En qué piso estamos?"]

const stepData = ["el año", "el mes", "el día", "el día de la semana", "la hora actual", "el país", "el departamento",
"la ciudad", "el hospital", "el piso"]


class OrientationPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      year: moment().toDate().getFullYear().toString(),
      month: (moment().toDate().getMonth() + 1).toString(),
      day: moment().toDate().getDate().toString(),
      weekDay: moment().toDate().getDay().toString(),
      hour: moment().toDate().getHours().toString(),
      country: 'colombia',
      department: 'valle del cauca',
      city: 'cali',
      hospital: '',
      floor: 0,
      actualQuestion: 0
    }
  }

  answerNotDefined = () => {
    swal({
      title: this.state.actualAnimal,
      buttons: {
        catch: {
          text: "Dar punto",
          value: true,
        },
        cancel: "Sin punto",
        defeat: false,
      },
    })
      .then((value) => {
        if (value) {
          let { score } = this.state;
          this.setState({ score: score + 1 });
          this.noticateAndNext()
          
        }
        else this.noticateAndNext()
      });
  }

  notData() {
    swal({
      title: "Por favor ingresa el dato",
      icon: "error",
      button: "Reintentar",
    });
  }

  finish() {
    swal({
      title: "Bien, hemos terminado por hoy!",
      icon: "success",
      button: "¡Si!",
    });
  }

  noticateAndNext = () => {
    swal({
      title: "Muy bien, continuemos",
      icon: "success",
      buttons: "Siguiente"
    })

    let { actualQuestion } = this.state;
    if(actualQuestion===9){
      this.finish()
    }
    else this.setState({ actualQuestion: actualQuestion + 1 });
  }

  noticateBad = () => {
    swal({
      title: "Sigue intentando",
      text: "¡Vamos!",
      icon: happy,
      button: "Reintentar"
    })
  }

  nextQuestion = () => {
    let { actualQuestion } = this.state;
    if(actualQuestion===9){
     this.finish()
    }
    else this.setState({ actualQuestion: actualQuestion + 1 });
  }

  verifyAndNext = (step) => {
    swal({
      title: "Ingresa " + step,
      content: "input",
      button: {
        text: "Verificar",
        closeModal: false,
      },
    })
      .then(data => {
        if(data === ""){
         this.notData()
        }
        else if (this.state.actualQuestion === 0) {
          if (data === this.state.year) {

            let { score } = this.state;
            this.setState({ score: score + 1 });
            this.noticateAndNext()
          }
          else this.noticateBad()
        }
        else if (this.state.actualQuestion === 1) {
          data.toLowerCase()
          if(data==="enero"){
            data="1";
          }
          else if(data==="febrero"){
            data="2";
          }
          else if(data==="marzo"){
            data="3";
          }
          else if(data==="abril"){
            data="4";
          }else if(data==="mayo"){
            data="5";
          }
          else if(data==="junio"){
            data="6";
          }
          else if(data==="julio"){
            data="7";
          }
          else if(data==="agosto"){
            data="8";
          }
          else if(data==="septiembre"){
            data="9";
          }
          else if(data==="octubre"){
            data="10";
          }
          else if(data==="noviembre"){
            data="11";
          }
          else if(data==="diciembre"){
            data="12";
          }

          if (data === this.state.month) {

            let { score } = this.state;
            this.setState({ score: score + 1 });
            this.noticateAndNext()
          }
          else this.noticateBad()
        }
        else if (this.state.actualQuestion === 2) {
          if (data === this.state.day) {

            let { score } = this.state;
            this.setState({ score: score + 1 });
            this.noticateAndNext()
          }
          else this.noticateBad()
        }
        else if (this.state.actualQuestion === 3) {
          data.toLowerCase()

          if(data==="lunes"){
            data= "1"
          }

          else if(data==="martes"){
            data= "2"
          }

          else if(data==="miercoles"){
            data= "3"
          }

          else if(data==="jueves"){
            data= "4"
          }

          else if(data==="viernes"){
            data= "5"
          }
          else if(data==="sábado"||data==="sabado"){
            data= "6"
          }
          else if(data==="domingo"){
            data= "7"
          }
          if (data === this.state.weekDay) {

            let { score } = this.state;
            this.setState({ score: score + 1 });
            this.noticateAndNext()
          }
          else this.noticateBad()
        }
        else if (this.state.actualQuestion === 4) {
          if (data === this.state.hour) {

            let { score } = this.state;
            this.setState({ score: score + 1 });
            this.noticateAndNext()
          }
          else this.noticateBad()
        }
        else if (this.state.actualQuestion === 5) {
          data.toLowerCase()
          if (data === this.state.country) {

            let { score } = this.state;
            this.setState({ score: score + 1 });
            this.noticateAndNext()
          }
          else this.noticateBad()
        }
        else if (this.state.actualQuestion === 6) {
          data.toLowerCase()
          if (data === this.state.department) {

            let { score } = this.state;
            this.setState({ score: score + 1 });
            this.noticateAndNext()
          }
          else this.noticateBad()
        }
        else if (this.state.actualQuestion === 7) {
          data.toLowerCase()
          if (data === this.state.city) {

            let { score } = this.state;
            this.setState({ score: score + 1 });
            this.noticateAndNext()
          }
          else this.noticateBad()
        }
        else if (this.state.actualQuestion === 8) {

          this.answerNotDefined()
        }
        else if (this.state.actualQuestion === 9) {
          this.answerNotDefined()
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



          <div style={{ textAlign: "center" }}>
            <Button
              color="success"
              size="lg"
              style={{ width: "180px", heigth: "100px" }}
              onClick={() => { this.verifyAndNext(stepData[this.state.actualQuestion]) }}>
              Contestar
          </Button>
          <Button
              size="lg"
              style={{ width: "180px", heigth: "100px", backgroundColor: "#AF543C" }}
              onClick={() => { this.nextQuestion() }}>
              Siguiente
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