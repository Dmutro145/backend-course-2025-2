const { URL } = require('url');

const currency = 'JPY';
const exact_date = '20240127';
const baseUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange';

const url = new URL(baseUrl);
url.searchParams.append('valcode', currency);
url.searchParams.append('date', exact_date);
url.searchParams.append('json', '');

console.log('Сформований URL:');
console.log(url.toString());

console.log('\nПеревірка параметрів:');
console.log('Валюта:', url.searchParams.get('valcode'));
console.log('Дата:', url.searchParams.get('date'));
