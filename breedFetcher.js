const request = require('request');

const args = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`,(erro,response,body) => {
  if (erro) {
    console.log('error:', erro);
  }
  const data = JSON.parse(body);
  console.log('statusCode:', response && response.statusCode);
  if (data.length === 0) {
    console.log('The requested breed is not found');
  } else {
    console.log(data[0].description);
  }
});
