const formatDate = (date: Date) => {
  return `${date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()}`;
};

const formatDateToValue = (date?: Date) => {
  return date?.toISOString().split('T')[0]
}

const subYear = (date: Date, nbYear: number) => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() - nbYear);
  return newDate;
};

export { formatDate, formatDateToValue, subYear };
