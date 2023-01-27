const baseUrl = "https://exchange-turkey.com/";
const corsUrl = "https://justcors.com/tl_b1115ee/";

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  console.log(res)
  return res.json();
}

export function getCurrencies() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  // 20 is a bank code from this list
  // 20 Turkiye Cumhuriyet Merkez Bankasıa - EUR, USD, GBP
  // 21 Türkiye İş Bankası - EUR, USD, GBP
  // 22 Garanti Bank - EUR, USD, GBP
  // 23 Denizbank - no currencies
  // 24 Akbank - EUR, USD, GBP
  // 25 Fibabanka - EUR, USD, GBP, RUB
  // 26 ING Bank - EUR, USD, GBP, RUB
  // 27 Şekerbank - EUR, USD, GBP
  return fetch(`${baseUrl}/main/get_json/20/${year}-${month}-${day}`, {
    method: 'GET',
  })
    .then(res => getResponseData(res));
}

export function getCurr() {
  fetch(`${corsUrl}https://www.tcmb.gov.tr/kurlar/today.xml`, {
    method: 'GET',
  })
    .then(res => getResponseData(res));
}
