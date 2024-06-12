export const cyrillicRegex = /[а-яА-ЯёЁ]/;
export const upperCamelCaseRegex = /^[A-Z][a-zA-Z]*$/;
export const lowerCamelCaseRegex = /^[a-z][a-zA-Z]*$/;
export const versionRegex = /^[0-9]{1,2}[.][0-9]{1,2}[.][0-9]{1,2}$/;
export const numericRegex = /[0-9]/;
export const specialSymbolRegex = /[`"|=!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
export const specialSymbolWithoutDivisRegex =
  /[`"|=!@#$%^&*()_+{}[\]:;<>,?~\\/]/;
export const kebabCaseWithSlashRegex = /^[a-z]+(?:\/[a-z]+)*(-[a-z]+)*$/;
export const specialSymbolWithoutDashRegex =
  /[`"|=!№@#$%^&*()_+{}[\]:;<>,?~\\/]/;
export const withoutNumberAtTheBeginRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;
