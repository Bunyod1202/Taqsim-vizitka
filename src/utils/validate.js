import { i18n } from "src/boot/i18n";
const { t } = i18n.global;
import { trimBetween } from ".";

const regEx = {
  letter: /^[a-zA-Z]$/,
  number: /^[0-9.]*$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  date: /^-?[\d]+\/[0-1]\d\/[0-3]\d$/,
  time: /^([0-1]?\d|2[0-3]):[0-5]\d$/,
  fulltime: /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/,
  timeOrFulltime: /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/,
};

export default {
  required: (v) => !!v || t("rules.required"),
  number: (v) =>
    !v || regEx.number.test(Math.abs(trimBetween(v))) || t("rules.integer"),
  integer: (v) =>
    !v || Number(v) === parseInt(trimBetween(v)) || t("rules.integer"),
  float: (v) =>
    !v || Number(v) === parseFloat(trimBetween(v)) || t("rules.float"),
  email: (v) => regEx.email.test(v) || t("rules.email"),
  positive: (v) => Number(trimBetween(v)) >= 0 || t("rules.positive"),
  min: (v) => Number(trimBetween(v)) >= 0 || t("rules.percent.min"),
  max100: (v) => Number(trimBetween(v)) <= 100 || t("rules.max"),
  date: (v) => regEx.date.test(v),
  time: (v) => regEx.time.test(v),
  fulltime: (v) => regEx.fulltime.test(v),
  timeOrFulltime: (v) => regEx.timeOrFulltime.test(v),
};
