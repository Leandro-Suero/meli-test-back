import * as Utils from "../libs/utils";

export function formatItem(item, isDetail) {
  const {
    id,
    title,
    price,
    currency_id,
    condition,
    shipping: { free_shipping },
  } = item;
  const { amount, decimals } = Utils.splitNumberWithDecimals(price);

  let formatedItem = {
    id,
    title,
    price: { currency: currency_id, amount, decimals },
    condition,
    free_shipping,
    picture: isDetail ? item.pictures[0].url : item.thumbnail,
    sold_quantity: isDetail ? item.sold_quantity : undefined,
  };

  return formatedItem;
}

export function formatItems(
  meliApiData,
  maxProductsToDisplay,
  isDetail = false
) {
  let items = [];
  for (let i = 0; i < maxProductsToDisplay; i++) {
    items.push(formatItem(meliApiData[i], isDetail));
  }
  return items;
}

export function getFilterById(filters, filter_id) {
  const filterObject = filters.filter((filtro) => filtro.id === filter_id);
  return filterObject.length === 0 ? { values: [] } : filterObject[0];
}

export function formatCategories(categories) {
  return categories.map((cat) => cat.name);
}
