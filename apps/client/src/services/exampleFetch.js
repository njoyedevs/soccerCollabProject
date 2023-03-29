const APIKEY = process.env.APIKEY;

var myHeaders = new Headers();
myHeaders.append('x-rapidapi-key', '');
myHeaders.append('x-rapidapi-host', 'v3.football.api-sports.io');

let endpoint = 'standings?league=39&season=2019';

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

fetch(`https://v3.football.api-sports.io/${endpoint}`, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
