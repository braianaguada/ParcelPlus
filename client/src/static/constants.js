
export const ciudadOrigen = [
  "Otra",
  "Cipolletti",
  "Neuquen",
  "Centenario",
  "Plottier",
  "Senillosa",
  "Cutral Co",
  "Plaza Huincul",
  "Zapala",
  "Cinco Saltos",
  "Contralmirante Cordero",
  "Barda del Medio",
  "Campo Grande",
  "San Isidro",
  "Villa Manzano",
  "El Chañar",
  "Añelo",
  "Rincon de los Sauces",
];

export const ciudadDestino = [
  "Otra",
  "Cipolletti",
  "Neuquen",
  "Centenario",
  "Plottier",
  "Senillosa",
  "Cutral Co",
  "Plaza Huincul",
  "Zapala",
  "Cinco Saltos",
  "Contralmirante Cordero",
  "Barda del Medio",
  "Campo Grande",
  "San Isidro",
  "Villa Manzano",
  "El Chañar",
  "Añelo",
  "Rincon de los Sauces",
];

export const regExpLett = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
export const regExpCell =
  /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
export const regExpEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
export const regExpDetails = /^.{1,255}$/;
export const regExpNumbers = /^(0|[1-9]\d*)(\.\d+)?(,\d+)?$/;
export const regExpDirection = /^[a-z0-9\s]+\d+$/i;
export const regExpAge = /^(?:1[01][0-9]|120|1[8-9]|[2-9][0-9])$/;

export const packageType = "packageForm";
export const cvType = "cvForm";