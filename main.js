menu_list_array = ["Peppy Paneer","Farmhouse","Mexican Green Wave","Veggie Paradise","Margherita"," Double Cheese Margherita","Deluxe Veggie","Veg Extravaganza","Fresh Veggie"]
function getmenu(){
  var htmldata;
  htmldata="<ol class='menulist'>"
  menu_list_array.sort();
  for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+"<li>"+menu_list_array [i]+'</li>'
  }

  htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata; 
}
function add_item(){
  var htmldata;
  var item=document.getElementById("add item").value;
  menu_list_array.sort();
  htmldata="<section class='cards'>";
for(vari=0;i<menu_list_array.length;i++){
  htmldata=htmldata+'<div class="card">'+
}