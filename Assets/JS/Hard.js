var numSelected = null;
var tileSelected = null;

var errors = 0;

var grid = [
    "---8-----",
    "789-1---6",
    "-----61--",
    "--7----5-",
    "5-87-93-4",
    "-4----3--",
    "--32-----",
    "8---7-439",
    "-----1---",

]

var solution = [
    "165847923",
    "789312546",
    "432596178",
    "297463851",
    "518729364",
    "346158297",
    "973284615",
    "821675439",
    "654931782",
]

window.onload = function() {
    setGame();
}

function setGame() {
    //Digits 1-9
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div")
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Grid 9*9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (grid[r][c] != "-"){
                tile.innerText = grid[r][c];   
                tile.classList.add("tile-start");         
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }                  
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("grid").append(tile);
        }
    }
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}