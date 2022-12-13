const formatDate = (date: Date) => {
  return `${date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()}`;
};

const subYear = (date: Date, nbYear: number) => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() - nbYear);
  return newDate;
};

export { formatDate, subYear };
