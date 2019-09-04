const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data){
    
    let errors = {};

    //Covert empty fields to an empty string so we can use validator functiones
    data.name = !isEmpty(data.name) ? data.name : "";
    data.last_name = !isEmpty(data.last_name) ? data.last_name : "";
    data.birthdate = !isEmpty(data.birthdate) ? data.birthdate : "";
    data.cc = !isEmpty(data.cc) ? data.cc : "";
    data.adress = !isEmpty(data.adress) ? data.adress : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.dementia_stage = !isEmpty(data.dementia_stage) ? data.dementia_stage : "";

    //Name checks
    if (Validator.isEmpty(data.name)) {
    errors.name = "El campo de nombre es requerido";
    }
    //last_name checks
    if (Validator.isEmpty(data.last_name)) {
        errors.last_name = "El campo del apellido es requerido";
    } 
    //Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "El campo de la contraseña es requerido";
    }
    //Birthdate checks
    if (Validator.isEmpty(data.birthdate)) {
        errors.birthdate = "El campo de la fecha de nacimiento es requerido";
    }
    //Adress checks
    if (Validator.isEmpty(data.adress)) {
        errors.adress = "El campo de la fecha de nacimiento es requerido";
    }
    //CC checks
    if (Validator.isEmpty(data.cc)) {
        errors.cc = "El campo de la cedula de ciudadania es requerido";
    }
    //Password lenth check
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }

    return {
        errors,
        isValid: isEmpty(errors)
      };
};