function fetchDog(error) {
  if (error === "error") {
    return Promise.reject("network error");
  }

  return Promise.resolve({ item: "milk", price: 200 });
}

module.exports = fetchDog;
