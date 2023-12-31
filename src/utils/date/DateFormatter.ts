const moment = require("moment");

export function formataData (data: string) {
  let dataMoment = moment(data);
  return dataMoment.format("DD/MM/YYYY");
};

export function formataHora (hora: string) {
  let dataMoment = moment(hora).utcOffset(0);
  return dataMoment.format("HH:mm");
};