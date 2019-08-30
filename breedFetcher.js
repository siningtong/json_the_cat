const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(err,response,body) => {
    if (err) {
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('The requested breed is not found',null);
    } else {
      callback(null, data[0].description.trim());
    }
  });
};
module.exports = { fetchBreedDescription };