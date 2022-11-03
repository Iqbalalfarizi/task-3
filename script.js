var getTitle = document.getElementById("title");
var getContent = document.getElementById("newContents");
var titleWrite = document.getElementById("inputTitle");
var contentWrite = document.getElementById("inputContent");
var bg = document.getElementById("card");
var bgColor = document.getElementById("html");

function tambahPengumuman() {
  if (getTitle.value == "" || getContent.value == "") {
    return;
  } else {
    bg.style.backgroundColor = "#60a5fa";
    bg.style.boxShadow = "0 3px 4px rgba(0, 0, 0, 0.5)";
    titleWrite.innerText = getTitle.value;
    contentWrite.innerText = getContent.value;
  }
}
