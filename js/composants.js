const data = [{
    titre: 'teachizi.fr',
    url : 'https://teachizi.hu/',
    image: './images-moi/icone-react-andrea.png'
},

{    titre: 'teachizi.hu',
url : 'https://teachizi.hu/',
image: './images-moi/icone-react-andrea.png'},

{    titre: 'teachizi.hu',
url : 'https://teachizi.hu/',
image: './images-moi/icone-react-andrea.png'}];

let list = document.getElementById("myList");

data.forEach((item) => {
  let li = document.createElement("li");
  let imgs = document.createElement("img");
  let divs= document.createElement("div");

  imgs.src = item.image[1];
  li.innerText = item.titre[1];

  list.appendChild(li);
});
