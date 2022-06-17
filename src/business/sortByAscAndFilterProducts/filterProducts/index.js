export const filterItemsByString = (itemsArray, string) => {
  return itemsArray.filter(product => {
    return product.name.toLowerCase().includes(string.toLowerCase());
  });
};