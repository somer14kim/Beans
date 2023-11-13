var top_header = document.createElement("header");
var site_title = document.createElement("h1");

var title_text = document.createTextNode("Beans");
site_title.appendChild(title_text);
top_header.appendChild(site_title);
document.body.appendChild(top_header);

var main = document.createElement("main");
var main_title = document.createElement("h2");
var main_paragraph = document.createElement("p");
var main_paragraph2 = document.createElement("p");
var main_title_text = document.createTextNode("Bean Meanu");
var mp_text = document.createTextNode("Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.");
var mp_text2 = document.createTextNode("Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.");

var img = document.createElement("img");
img.src = "https://res.cloudinary.com/dlwybkwrp/image/upload/c_pad,w_322,h_322/v1698338345/monthly_bean_smrort.png";
var src = document.getElementById("header");
src.appendChild(img);


main_title.appendChild(main_title_text);
main_paragraph.appendChild(mp_text);
main_paragraph2.appendChild(mp_text2);

main.appendChild(main_title);
main.appendChild(main_paragraph);
main.appendChild(main_paragraph2);

top_header.style.minHeight = "10vh";
top_header.style.backgroundColor = "brown";
site_title.style.marginTop = "0";
site_title.style.fontSize = "6vw";
site_title.style.textAlign = "center";

main.style.width = "70%";
main.style.margin = "0 auto";
main.style.backgroundColor = "white";
main.style.minHeight = "60vh";
main.style.padding = "1.3rem";
main_title.style.fontSize = "2.4rem";

document.body.style.fontFamily = "san-serif";
document.body.style.backgroundColor = "blue";
document.body.style.boxSizing = "border-box";
document.body.style.margin = "0";

document.body.appendChild(main);


var footer = document.createElement("footer");
var footer_text = document.createTextNode("@Copyright");
document.body.appendChild(footer);
footer.appendChild(footer_text);
footer.style.minHeight = "10vh";
footer.style.backgroundColor = "brown";

const fruits = ["Bean Chili Salad", "Black Bean Burgers", "Calico Bean"
, "Pasta with Creamy White Beans"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

document.getElementById("demo").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";

}