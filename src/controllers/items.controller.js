import * as Utils from "../libs/utils";
import * as ItemUtils from "../libs/itemUtils";

const author = Utils.getAuthor();

export async function getSearchResults(req, res) {
  try {
    /* aca por respeto al enunciado no agrego un "page", "offset" y "limit" como parametros y hago el 
    llamado a "https://api.mercadolibre.com/sites/MLA/search?q=:query" y utilizo solo 4 de los resultados
    */
    const queryParam = req.query.q ? req.query.q : "";
    const searchResults = await Utils.fetchApiMeli(
      `/sites/MLA/search?q=${queryParam}`
    );
    const {
      results,
      available_filters,
      paging: { total },
    } = searchResults.data;
    //empty return
    /* aca regreso un resultado vacio para ser consistente con el resultado devuelvo 
    al consultar https://api.mercadolibre.com/sites/MLA/search?q= */
    if (total === 0) return res.json({ author, items: [], categories: [] });

    //format items
    const items = ItemUtils.formatItems(
      results,
      process.env.MAX_PRODUCTS_TO_DISPLAY
    );
    //format categories
    const { values: categoriesArray } = ItemUtils.getFilterById(
      available_filters,
      "category"
    );
    const categories = ItemUtils.formatCategories(categoriesArray);

    return res.json({ author, items, categories });
  } catch (err) {
    console.error(err);
    let error_code = err.code ? err.code : true;
    return res
      .status(500)
      .json({ message: "Something went wrong", data: {}, error: error_code });
  }
}

export async function getItemDetails(req, res) {
  try {
    const values = await Promise.allSettled([
      Utils.fetchApiMeli(`/items/${req.params.id}`),
      Utils.fetchApiMeli(`/items/${req.params.id}/description`),
    ]);
    let itemData = {};
    let description = "";
    //item info promise
    if (values[0].status == "fulfilled") {
      itemData = values[0].value.data;
    } else {
      return res
        .status(500)
        .json({ message: "Something went wrong", data: {}, error: true });
    }
    //fill description if possible
    if (values[1].status == "fulfilled") {
      description = values[1].value.data.plain_text;
    }

    let item = ItemUtils.formatItem(itemData, true);

    return res.json({ author, item: { ...item, description } });
  } catch (err) {
    if (err.response?.data) {
      const { error, status, message } = err.response.data;
      return res.status(status).json({ message, data: {}, error });
    } else {
      console.error(err);
      let error_code = err.code ? err.code : true;
      return res
        .status(500)
        .json({ message: "Something went wrong", data: {}, error: error_code });
    }
  }
}
