function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`capita-${getCurrentYear()}`]: capita,
    [`gdp-${getCurrentYear()}`]: gdp,
  };
}
