const { lat, lng } = document.getElementById("map--parent").dataset;

const map = L.map("map").setView([lat, lng], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="https://goo.gl/maps/dJxc4Nknpv4siQMJ8">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([lat, lng], {
	title: "Sachkhand Gurudwara",
	riseOnHover: true,
}).addTo(map);