const mongoose = require("mongoose");

const FormScheme = new mongoose.Schema(
  {
    shipment: {
      type: ["Particular", "Empresa"],
      required: false
    },
    name: {
      type: String,
    },
    cellphone: {
      type: Number,
    },
    origenCity: {
      type: ["Otra", "Cipolletti", "Neuquen", "Centenario", "Plottier", "Senillosa", "Cutral Co", "Plaza Huincul", "Zapala", "Cinco Saltos", "Contralmirante Cordero", "Barda del Medio", "Campo Grande", "San Isidro", "Villa Manzano", "El Chañar", "Añelo", "Rincon de los Sauces"],
    },
    email: {
      type: String,
      unique: true,
    },
    destineCity: {
      type: ["Otra", "Cipolletti", "Neuquen", "Centenario", "Plottier", "Senillosa", "Cutral Co", "Plaza Huincul", "Zapala", "Cinco Saltos", "Contralmirante Cordero", "Barda del Medio", "Campo Grande", "San Isidro", "Villa Manzano", "El Chañar", "Añelo", "Rincon de los Sauces"],
    },
    moreDetails: {
      type: String,
    },
    weight: {
      type: Number,
    },
    measure: {
      type: Number,
    },
    value: {
      type: Number,
    },
    homeAdress: {
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("forms", FormScheme);
