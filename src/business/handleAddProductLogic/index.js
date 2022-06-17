export const handleModalVisibility = async ({setOpenModal, openModal}) => {
  await setOpenModal(!openModal);
};

/**
 * Add new item to the order list.
 * @param {object} item Item to be include.
 * @param {function} modalController Modal visibility controller.
 * @param {object} data Actual data of order list.
 * @param {function} setData Function that modifys the data of the list.
 * @param {function} setLoading Function that controls loading status: true | false
 */

export const addNewItemToList = async (item, modalController, data, setData, setLoading) => {
  setLoading(true);
  const newArray = data.items;
  newArray.push(item);

  setData({...data, items: newArray});
  setLoading(false);
  modalController(false);
};