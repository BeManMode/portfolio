document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phoneNumber").value;

    // Печать введенного номера в консоль (для проверки, замените это на отправку данных на сервер)
    console.log("Phone Number: " + phoneNumber);

    // Здесь можно отправить данные на сервер
    // Пример с использованием fetch для отправки данных:
    /*
    fetch('https://yourserver.com/collect', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber: phoneNumber })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    */

    alert("Your data has been collected.");
});