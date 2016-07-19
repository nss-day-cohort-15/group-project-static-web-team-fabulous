var products = [
{
  name        : "Remington 16 inch Reel Push Mower",
  description : "Help your children build character by buying this push mower for their birthday",
  price       : "$60",
  url         : "http://www.top5lawnmowers.com/wp-content/uploads/2016/05/Remington-RM3000-16-Inch-Reel-Mower-Review-765x765.jpg",
},
{
  name        : "Great States 415-16",
  description : "With a modern T grip and 16 inch heat treated blade this mower is sure to get the job done",
  price       : "$100",
  url         : "https://images-na.ssl-images-amazon.com/images/I/41lqNEnq3wL._SY355_.jpg",
},
{
  name        : "Sun Joe Mow Joe 20-inch Manual Reel Mower",
  description : "This 20 inch manual mower comes with a grass catcher and a 9 position height adjustment lever",
  price       : "$100",
  url         : "https://snowjoecdn.azureedge.net/images/gallery_large//MJ502M_unit.jpg",
},
{
  name        : "Great States 14 inch",
  description : "Nothing says I love you more than a 14 inch quad blade push mower, be sure to get one for your next anniversary",
  price       : "$80",
  url         : "http://www.mowersdirect.com/product-images/204-14_500.jpg",
},
{
  name        : "A scythe",
  description : "This grass slaying machine is sure to impress all your neighbors and makes a great Christmass present for the kids too!",
  price       : "$100",
  url         : "http://onescytherevolution.com/uploads/3/4/0/0/34002458/7063636_orig.jpg?677",
},
{
  name        : "Horse powered T-5000 mower",
  description : "Get back to the good ole days before all this over complicated machinery with a horse drawn mower! (horse not included)",
  price       : "$900",
  url         : "http://images.complex.com/complex/image/upload/c_limit,fl_progressive,q_80,w_680/za71ck9xornba2q0wwr5.jpg",
},
{
  name        : "The BBQ Mower",
  description : "Not a fan of mowing? Don't have enough time to BBQ and mow? This is the mower for you!",
  price       : "$600",
  url         : "http://images.complex.com/complex/image/upload/c_limit,fl_progressive,q_80,w_680/ryqxlqthl2775httqy6g.jpg",
},
{
  name        : "XS650 4-stroke motorcycle engine powered lawn destroyer",
  description : "Need a mower with 50 horsepower? Do you enjoy burning your legs? Want to scare your neighbors? This mower was built for you!",
  price       : "$800",
  url         : "http://images.complex.com/complex/image/upload/c_limit,fl_progressive,q_80,w_680/xx324arf2a4zpcdetp1i.jpg"
}
];

var button = document.getElementById("button");

button.addEventListener("click", function(e) {
  var id = e.path[0].previousElementSibling.selectedOptions[0].id;
  newCard(id)
});


var mowerList = document.getElementById("mowerList");
var item0 = document.getElementById("0");
var item1 = document.getElementById("1");
var item2 = document.getElementById("2");
var item3 = document.getElementById("3");
var item4 = document.getElementById("4");
var item5 = document.getElementById("5");
var item6 = document.getElementById("6");
var item7 = document.getElementById("7");

function newCard(id) {
  if (button) {
   var productName = document.getElementById("productName");
   var productUrl = document.getElementById("productUrl");
   var productPrice = document.getElementById("productPrice");
   var productDescription = document.getElementById("productDescription");

   productName.innerText = products[id].name;
   productUrl.innerText = products[id].url;
   productPrice.innerText = products[id].price;
   productDescription.innerText = products[id].description
  }

  document.body.innerHTML += "<div class = card> <h1 id = productName> </h1> <h1 id = productUrl> </h1> <h1 id = productPrice> </h1> <h1 id = productDescription> </h1> </div>"
}



