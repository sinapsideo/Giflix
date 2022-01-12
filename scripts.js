var btn = document.querySelector('button');
var i = document.querySelector('i');
let count = '0';

btn.addEventListener('click', function() {
  var input = document.querySelector('input').value;

if (count === '0') {
  btn.style.background = 'green';
  i.className = 'fa-thin fa-toggle-on';
  count = '1';
  getApi(input);

}else {
  btn.style.background = 'rgba(200,0,0,0.7)';
  i.className = 'fa-thin fa-toggle-off';
  count = '0';
}
});

document.querySelector('input').addEventListener('keyup', function(e) {
  if (e.which === 13) {
    btn.style.background = 'green';
    i.className = 'fa-thin fa-toggle-on';
    count = '1';
    getApi(input);
  }
})

/*PEGANDO OS GIFS DA API*/

function getApi(input) {
  var url_input = "https://api.giphy.com/v1/gifs/search?q="+ input + "&api_key=SDEsWMHoj4DO7LFMxWFHlVJVkElcDm8h";;
  var url = url_input;
  // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open( 'GET', url );
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener('load', function(e) {
    var data = e.target.response;
    pushToDom(data)
  });
};

/* Mostrar os GIF's*/

function pushToDom(input) {

  let section = document.querySelector('section');
  document.querySelector('section').style.display = 'none';
  var pato = document.createElement('div');
  pato.className = 'pato';
  document.querySelector('main').appendChild(pato);

  var response = JSON.parse(input);
  var imageUrls = response.data;

  let i;
  for (i = 0; i < 25; i++) {

    setTimeout(function() {

      var src = imageUrls[i].images.fixed_height.url;
      console.log(src);

      clear(pato);
      pato.innerHTML += "<img src=\""+ src +"\">"
      i++;

    }, 4000*i);

}};

function clear(item) {
  item.innerHTML = "";
}

/*  imageUrls.forEach(function(image){
  var src = image.images.fixed_height.url;
  section1 = document.querySelector("section");
  section1.innerHTML = "<img class=\"pato\" src=\""+src+"\">";}
)};*/
