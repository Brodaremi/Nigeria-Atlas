const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const naijaSchema = new Schema ({
    state: Object,
});

const Naija = mongoose.model("Naija", naijaSchema);

module.exports = Naija;