const c = document.querySelector(".buy");
c.addEventListener("click", (e) => {
  const urlSearchParams = new URLSearchParams(location.search);
  const searchParam = urlSearchParams.get("ten");
  const searchParam2 = urlSearchParams.get("id");
  //console.log(searchParam); // Output: "hello"
  order(searchParam, searchParam2);
});
async function order(ten, idbook) {
  try {
    const response = await axios.post("http://localhost:3000/order", {
      method: "POST",
      body: {
        ten: ten,
        idbook: idbook,
      },
    });
  } catch (err) {
    console.log(err.response);
  }
}
