//create map
const map = L.map("mapid").setView([-23.5303943, -47.1441749], 15);
//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;
//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//adicionar campo de fotos
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");
  //pegar o container para duplicar .new image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar o clone da última imagem adicionada.
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verificar se o campo está vazio, se sim, não adicionar ao container de images
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  //limpar o campo antes de adicionar ao container de images
  input.value = "";
  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}

//troca do sim e não
function toggleSelect(event) {
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  const button = event.currentTarget;
  button.classList.add("active");

  const input = document.querySelector('[name="open_on_weekends]');

  input.value = button.dataset.value;
}
