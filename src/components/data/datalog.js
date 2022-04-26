export default db
  .collection("iduser")
  .get()
  .then((iduser) => {
    response.json().then((data) => {
      iduser;
    });
  });
module.exports;
