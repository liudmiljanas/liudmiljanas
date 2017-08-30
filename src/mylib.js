 function init() {
    console.debug("my init file");
    var someData = document.getElementById("myDiv").childElementCount;
    setData();
}

function setData() {
    document.getElementById("myDiv").innerText = "New fuckin data";
}