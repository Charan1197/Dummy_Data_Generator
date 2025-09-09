async function fetchData() {
    try {
        const response = await fetch("http://localhost:3000/");

        const contentType = response.headers.get("content-type");

        let data;
        if (contentType && contentType.includes("application/json")) {
            data = await response.json();
        } else {
            data = await response.text();
        }

        // console.log("Data:", data);

        const main = document.querySelector(".content");
        main.innerHTML = ""; // Clear previous content if needed

        if (Array.isArray(data)) {
            data.forEach(element => {
                let displaydata = document.createElement("div");
                displaydata.classList = "displayData";
                displaydata.innerHTML = `
                    <span>Name : ${element.name}</span><br>
                    <span>Salary: ${element.salary}</span><br>
                    <span>Language: ${element.language}</span><br>
                    <span>City: ${element.city}</span><br>
                    <span>isManager: ${element.isManager}</span>
                `;
                main.appendChild(displaydata);
            });
        } else {
            // if it's plain text, just display it
            let displayText = document.createElement("div");
            displayText.classList = "displayText";
            displayText.textContent = data;
            main.appendChild(displayText);
        }

    } catch (error) {
        console.log("error: ", error);
    }

}
btn.addEventListener("click", () => {
    fetchData()

})