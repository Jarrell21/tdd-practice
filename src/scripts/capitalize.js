function capitalize(string) {
  const split = string.split(' ');
  const stringArr = split.map(
    (element) => element.charAt().toUpperCase() + element.substring(1)
  );

  return stringArr.join(' ');
}

export default capitalize;
