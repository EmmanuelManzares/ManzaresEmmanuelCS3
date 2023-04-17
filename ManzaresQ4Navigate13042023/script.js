let valid = true;

function generateTable() {

    while (valid == true) {
        document.getElementById("table").innerHTML = "";
        let y = document.getElementById("yInput").value;
        let x = document.getElementById("xInput").value;
        if (y >= 2 && y <= 10 && x >= 2 && x <= 10) {
            // Generate Table
            for (let i = 1; i <= y; i++) {
                let row = document.createElement("tr");
                for (let j = 1; j <= x; j++) {
                    let cell = document.createElement("td");
                    cell.innerHTML = (i * j).toString();
                    cell.style.textAlign = "center";
                    cell.style.border = "1px solid black";
                    cell.style.backgroundColor = "rgb(235, 235, 235)";
                    row.appendChild(cell);
                }
                document.getElementById("table").appendChild(row);
            }
            break;
        } else {
            alert("Enter a number between 2 and 10.");
            break;
        }
    }
}