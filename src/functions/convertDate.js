const convertDate = (date) => {
  date = new Date(date);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[month]} ${day},${year}`;
};

export default convertDate;
