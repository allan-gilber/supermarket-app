export const sortByAsc = (firstElement, secondelement) => {
  if ( firstElement.name < secondelement.name ){
    return -1;
  }
  if ( firstElement.name > secondelement.name ){
    return 1;
  }
  return 0;
};