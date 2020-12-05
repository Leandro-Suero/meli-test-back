function fetchApiMeli(url) {
  console.log(process.env.MELI_API_ENDPOINT + url);
}

export async function getSearchResults(req, res) {
  try {
    const queryParam = req.query.q ? req.query.q : "";
    const searchResults = await fetchApiMeli(
      `/sites/MLA/search?q=${queryParam}`
    );

    return res.json({ done: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong", data: {} });
  }
}

export async function getItemDetails(req, res) {
  try {
    const item = await fetchApiMeli(`/items/${req.params.id}`);

    const description = await fetchApiMeli(
      `/items/${req.params.id}/description`
    );

    return res.json({ done: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong", data: {} });
  }
}
