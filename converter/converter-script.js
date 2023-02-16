document.querySelector(".dropdown-button")
    .addEventListener("click", () =>
    {document.querySelector(".dropdown-content").style.display = "block"});



let valuteN;
document.querySelector("#valute-1")
    .addEventListener("click", () => {
        // document.querySelector(".dropdown-content").style.display = "none"
        document.querySelector(".calc").style.display = "block";
        valuteN = "USD";
        document.querySelector(".dropdown-button").innerText = valuteN;
        USD.fetchCourse();
    });
document.querySelector("#valute-2")
    .addEventListener("click", () => {
        // document.querySelector(".dropdown-content").style.display = "none"
        document.querySelector(".calc").style.display = "block";
        valuteN = "EUR";
        document.querySelector(".dropdown-button").innerText = valuteN;
        EUR.fetchCourse();
    });
document.querySelector("#valute-3")
    .addEventListener("click", () => {
        // document.querySelector(".dropdown-content").style.display = "none"
        document.querySelector(".calc").style.display = "block";
        valuteN = "BYN";
        document.querySelector(".dropdown-button").innerText = valuteN;
        BYN.fetchCourse();
    });



let USD = {
    fetchCourse: function () {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then((response) => response.json()).then((data) => this.displayCourse(data))
    },
    displayCourse: (data) => {
        console.log(data);
        const value = data.Valute.USD.Value;
        document.querySelector("#course")
            .innerText = "USD: " + value.toFixed(2) + " RUB";

        document.querySelector(".search-button")
            .addEventListener('click', () => {
                document.getElementById("result").style.display = "block";
                document.querySelector("#result")
                    .innerText = (document.querySelector(".inp").value * value).toFixed(1)  + " RUB";
            });
    }
}
let EUR = {
    fetchCourse: function () {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then((response) => response.json()).then((data) => this.displayCourse(data))
    },
    displayCourse: (data) => {
        console.log(data);
        const value = data.Valute.EUR.Value;
        document.querySelector("#course")
            .innerText = "EUR: " + value.toFixed(2) + " RUB";

        document.querySelector(".search-button")
            .addEventListener('click', () => {
                document.getElementById("result").style.display = "block";
                document.querySelector("#result")
                    .innerText = (document.querySelector(".inp").value * value).toFixed(1) + " RUB";
            });
    }
}
let BYN = {
    fetchCourse: function () {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then((response) => response.json()).then((data) => this.displayCourse(data))
    },
    displayCourse: (data) => {
        console.log(data);
        const value = data.Valute.BYN.Value;
        document.querySelector("#course")
            .innerText = "BYN: " + value.toFixed(2) + " RUB";

        document.querySelector(".search-button")
            .addEventListener('click', () => {
                document.getElementById("result").style.display = "block";
                document.querySelector("#result")
                    .innerText = (document.querySelector(".inp").value * value).toFixed(1) + " RUB";
            });
    }
}