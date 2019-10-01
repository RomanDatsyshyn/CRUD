const Station = require("../models/station");

exports.delete = (req, res) => {
  Station.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};

exports.update = (req, res) => {
  Station.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
    if (err) return next(err);
    res.send("Station udpated.");
  });
};

exports.details = (req, res) => {
  Station.findById(req.params.id, (err, station) => {
    if (err) return next(err);
    res.send(station);
  });
};

exports.create = function(req, res) {
  let station = new Station({
    name: req.body.name,
    address: req.body.address
  });

  station.save(err => {
    if (err) {
      return next(err);
    }
    res.send("Station Created successfully");
  });
};

exports.test = (req, res) => {
  res.send("Greetings from the Test controller!");
};
