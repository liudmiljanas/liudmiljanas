function mylibinit() {
    console.debug("my init function");
    var someData = document.getElementById("myDiv").id;
    setData();
}

function setData() {
    document.getElementById("myDiv").innerText = "New fuckin data";
}
