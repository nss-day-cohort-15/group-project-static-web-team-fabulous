

// function testfunc() {
// alert('I hate Lawnmowers!');
// }
var products = [
{
  name        : "Remington 16 inch Reel Push Mower",
  description : "Help your children build character by buying this push mower for their birthday.",
  price       : "$60",
  url         : "http://www.top5lawnmowers.com/wp-content/uploads/2016/05/Remington-RM3000-16-Inch-Reel-Mower-Review-765x765.jpg",
},
{
  name        : "Great States 415-16",
  description : "With a modern T grip and 16-inch-heat-treated blade, this mower is sure to get the job done.",
  price       : "$100",
  url         : "https://images-na.ssl-images-amazon.com/images/I/41lqNEnq3wL._SY355_.jpg",
},
{
  name        : "Sun Joe Mow Joe 20-inch Manual Reel Mower",
  description : "This 20 inch manual mower comes with a grass catcher and a 9-position height adjustment lever.",
  price       : "$100",
  url         : "https://snowjoecdn.azureedge.net/images/gallery_large//MJ502M_unit.jpg",
},
{
  name        : "Great States 14 inch",
  description : "Nothing says 'I love you more' than a 14 -inch-quad-blade push mower. Be sure to get one for your next anniversary.",
  price       : "$80",
  url         : "http://www.mowersdirect.com/product-images/204-14_500.jpg",
},
{
  name        : "A scythe",
  description : "This grass-slaying machine is sure to impress all your neighbors and makes a great Christmas present for the kids, too! Remember: they need character!",
  price       : "$100",
  url         : "http://onescytherevolution.com/uploads/3/4/0/0/34002458/7063636_orig.jpg?677",
},
{
  name        : "Horse powered T-5000 mower",
  description : "Get back to the good ole days before all this over-complicated machinery with a horse-drawn mower! (horse not included)",
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
function displayProducts() {


for (var i = 0; i < products.length; i++) {
    // console.log(products[i].name, products[i].description, products[i].price, products[i].url);

 document.getElementById("cards").innerHTML += `<header> ${ products[i].name } </header><p class="product_description">${products[i].description}
</p><p><span class="product_price">${products[i].price}</span></p><a href=${ products[i].url }><img src= ${products[i].url}><footer></footer></a>`
}
}

var test_drive = document.getElementById("test_drive");
test_drive.addEventListener('click', function(e) {
 // function loadPage() {
 //        console.log("page has loaded");
        displayProducts();
      })
      // window.onload = loadPage();








