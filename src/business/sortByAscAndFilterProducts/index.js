import {sortByAsc} from './sortByAsc/index';
import {filterItemsByString} from './filterProducts/index';

export const sortByAscAndFilterProducts = (itemsArray, string) => {
  if (!itemsArray) return [];
  const sortedArray = itemsArray.sort(sortByAsc);
  return filterItemsByString(sortedArray, string);
};