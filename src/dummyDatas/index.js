const earthquake_based = require("./earthquakes.json");
const dealer = require("./dealer.json");

//buraya hakim değilim henüz fakat Soner abinin yaptıklarına göre ben de earthquake_based yaptım
//izlediğim json server ve axios videolarıyla birlikte

module.exports = () => ({
  dealers: dealer,
  earthquake: earthquake_based,
});
