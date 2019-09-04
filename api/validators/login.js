const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

// Convert empty fields to an empty string so we can use validator functions
  data.cc = !isEmpty(data.cc) ? data.cc : "";
  data.password = !isEmpty(data.password) ? data.password : "";

// Email checks
  if (Validator.isEmpty(data.cc)) {
    errors.cc = "El campo de la cedula de ciudadania es requerido";
  }

// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "El campo de la contraseña es requerido";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};