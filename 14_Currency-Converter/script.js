const amount = document.querySelector("#amount");
const formCountry = document.querySelector("#from-currency");
const toCountry = document.querySelector("#to-currency");
const swapBtn = document.querySelector("#swap-btn");
const convertBtn = document.querySelector("#convert-btn");
const result = document.querySelector("#conversion-result");

const apiKey = "4694c4be6b8cc83edf4e7146";

async function exchangeRate(rate) {
  const fromCurrency = formCountry.value;
  const toCurrency = toCountry.value;
  const amountVal = amount.value;

  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  try {
    let response = await fetch(apiUrl);

    let data = await response.json();
    console.log(data);
    if (data.result === "success") {
      const rate = data.conversion_rates[toCurrency];
      console.log(rate);

      const finalAmount = (amountVal * rate).toFixed(2);

      console.log(finalAmount);
      result.innerText = `${amountVal} ${fromCurrency} = ${finalAmount} ${toCurrency}`;
    } else {
      result.innerText = "Error fetching rates.";
    }
  } catch (error) {
    console.log("Kuch Error Aaa gya", error);
  }
}

convertBtn.addEventListener("click", () => {
  console.log("Button click ho gaya!");

  if (amount.value !== "") {
    exchangeRate(toCountry);
  }
});
