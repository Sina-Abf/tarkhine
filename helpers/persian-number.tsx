const persianNumber = (number: string | number) => {
  const en_number = number.toString();
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  const persianMap = persianDigits.split('');
  const persian_number = en_number.replace(/\d/g, function (m) {
    return persianMap[parseInt(m)];
  });

  return persian_number;
};
export default persianNumber;
