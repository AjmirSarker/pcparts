async function run() {
  try {
    await client.connect();
    const productCollection = client.db("PcParts").collection("allProducts");
    app.get("/products", async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const items = await cursor.toArray();
      res.send(items);
    });
    app.get("/BrandProducts", async (req, res) => {
      const query = { Brand: "Edifier" };

      const cursor = productCollection.find(query);
      const items = await cursor.toArray();
      res.send(items);
    });
  } finally {
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
