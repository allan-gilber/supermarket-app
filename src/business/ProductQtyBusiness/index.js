export const sumOneToQty = (index, formData, setFormData) => {
  const newArray = formData.items;
  const amount = newArray[index].qty_stock;
  newArray[index] = {...newArray[index], qty_stock: amount + 1};
  setFormData({...formData, items: newArray});
};

export const removeOneToQty = (index, formData, setFormData) => {
  const newArray = formData.items;
  const amount = newArray[index].qty_stock;
  if (amount === 1){
    newArray.splice(index, index);
  }
  newArray[index] = {...newArray[index], qty_stock: amount - 1};
  setFormData({...formData, items: newArray});
};

export const removeProductFromList = (index, formData, setFormData) => {
  const newArray = formData.items;
  newArray.splice(index, 1);
  setFormData({...formData, items: newArray});
};