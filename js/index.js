let country_code = {
    "AED" : "ae",
    "AFN" : "af",
    "XCD" : "ag",
    "ALL" : "al",
    "AMD" : "am",
    "ANG" : "an",
    "AOA" : "ao",
    "AQD" : "aq",
    "ARS" : "ar",
    "AUD" : "au",
    "AZN" : "az",
    "BAM" : "ba",
    "BBD" : "bb",
    "BDT" : "bd",
    "XOF" : "be",
    "BGN" : "bg",
    "BHD" : "bh",
    "BIF" : "bi",
    "BMD" : "bm",
    "BND" : "bn",
    "BOB" : "bo",
    "BRL" : "br",
    "BSD" : "bs",
    "NOK" : "bv",
    "BWP" : "bw",
    "BYR" : "by",
    "BZD" : "bz",
    "CAD" : "ca",
    "CDF" : "cd",
    "XAF" : "cf",
    "CHF" : "ch",
    "CLP" : "cl",
    "CNY" : "cn",
    "COP" : "co",
    "CRC" : "cr",
    "CUP" : "cu",
    "CVE" : "cv",
    "CYP" : "cy",
    "CZK" : "cz",
    "DJF" : "dj",
    "DKK" : "dk",
    "DOP" : "do",
    "DZD" : "dz",
    "ECS" : "ec",
    "EEK" : "ee",
    "EGP" : "eg",
    "ETB" : "et",
    "EUR" : "fr",
    "FJD" : "fj",
    "FKP" : "fk",
    "GBP" : "gb",
    "GEL" : "ge",
    "GGP" : "gg",
    "GHS" : "gh",
    "GIP" : "gi",
    "GMD" : "gm",
    "GNF" : "gn",
    "GTQ" : "gt",
    "GYD" : "gy",
    "HKD" : "hk",
    "HNL" : "hn",
    "HRK" : "hr",
    "HTG" : "ht",
    "HUF" : "hu",
    "IDR" : "id",
    "ILS" : "il",
    "INR" : "in",
    "IQD" : "iq",
    "IRR" : "ir",
    "ISK" : "is",
    "JMD" : "jm",
    "JOD" : "jo",
    "JPY" : "jp",
    "KES" : "ke",
    "KGS" : "kg",
    "KHR" : "kh",
    "KMF" : "km",
    "KPW" : "kp",
    "KRW" : "kr",
    "KWD" : "kw",
    "KYD" : "ky",
    "KZT" : "kz",
    "LAK" : "la",
    "LBP" : "lb",
    "LKR" : "lk",
    "LRD" : "lr",
    "LSL" : "ls",
    "LTL" : "lt",
    "LVL" : "lv",
    "LYD" : "ly",
    "MAD" : "ma",
    "MDL" : "md",
    "MGA" : "mg",
    "MKD" : "mk",
    "MMK" : "mm",
    "MNT" : "mn",
    "MOP" : "mo",
    "MRO" : "mr",
    "MTL" : "mt",
    "MUR" : "mu",
    "MVR" : "mv",
    "MWK" : "mw",
    "MXN" : "mx",
    "MYR" : "my",
    "MZN" : "mz",
    "NAD" : "na",
    "XPF" : "nc",
    "NGN" : "ng",
    "NIO" : "ni",
    "NPR" : "np",
    "NZD" : "nz",
    "OMR" : "om",
    "PAB" : "pa",
    "PEN" : "pe",
    "PGK" : "pg",
    "PHP" : "ph",
    "PKR" : "pk",
    "PLN" : "pl",
    "PYG" : "py",
    "QAR" : "qa",
    "RON" : "ro",
    "RSD" : "rs",
    "RUB" : "ru",
    "RWF" : "rw",
    "SAR" : "sa",
    "SBD" : "sb",
    "SCR" : "sc",
    "SDG" : "sd",
    "SEK" : "se",
    "SGD" : "sg",
    "SKK" : "sk",
    "SLL" : "sl",
    "SOS" : "so",
    "SRD" : "sr",
    "STD" : "st",
    "SVC" : "sv",
    "SYP" : "sy",
    "SZL" : "sz",
    "THB" : "th",
    "TJS" : "tj",
    "TMT" : "tm",
    "TND" : "tn",
    "TOP" : "to",
    "TRY" : "tr",
    "TTD" : "tt",
    "TWD" : "tw",
    "TZS" : "tz",
    "UAH" : "ua",
    "UGX" : "ug",
    "USD" : "us",
    "UYU" : "uy",
    "UZS" : "uz",
    "VEF" : "ve",
    "VND" : "vn",
    "VUV" : "vu",
    "YER" : "ye",
    "ZAR" : "za",
    "ZMK" : "zm",
    "ZWD" : "zw"
}

const select = document.querySelectorAll("#select");
const fromCurrency = document.querySelector("#from select");
console.log(fromCurrency);
const toCurrency = document.querySelector("#to select");
const btn = document.querySelector("#btn");
const icon = document.querySelector("#icon");

icon.addEventListener("click", ()=>{
    let tempcode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempcode;
    changeFlag(fromCurrency);
    changeFlag(toCurrency);
    getExchange();
});

function changeFlag(option){
    for(code in country_code){
        if(code == option.value){
            let imgTag = option.parentElement.querySelector("img");
            imgTag.src = `https://countryflagsapi.com/png/${country_code[code]}`;
        }
    }
}

for(let i=0; i < select.length; i++){
    for(currency_code in country_code){
        let selected;
        if(i == 0){
            selected = currency_code == "USD" ? "selected" : "";
        } else if(i == 1){
            selected = currency_code == "MMK" ? "selected" : "";
        }
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        select[i].insertAdjacentHTML("beforeend", optionTag)
    }
    select[i].addEventListener("change", (e)=>{
        changeFlag(e.target);
    })
}

window.addEventListener("load", () => {
    getExchange();
})

function getExchange(){
    const amount = document.querySelector("#amount");
    let display = document.querySelector("#display");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amountVal = 1;
        amount.value = "1";
    }
    
    display.innerText = "Getting Exchange Rate...";
    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency.value}`;
    fetch(url)
    .then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExchange = (amountVal*exchangeRate).toFixed(2);
        display.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchange} ${toCurrency.value}`;
    }).catch(()=>{
        display.innerText = "Something went wrong...";
    });
    
}

btn.addEventListener("click", () => {
    getExchange();
})