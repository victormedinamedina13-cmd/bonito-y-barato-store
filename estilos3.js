/* ===============================
   MENÚ DESPLEGABLE
================================ */
function toggleMenu() {
  const menu = document.getElementById("menuLista");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

/* Cerrar menú al hacer clic fuera */
document.addEventListener("click", (e) => {
  const menu = document.getElementById("menuLista");
  const btn = document.querySelector(".menu-btn");

  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.style.display = "none";
  }
});

/* ===============================
   SLIDER AUTOMÁTICO
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3500);
});

/* ===============================
   CARRITO DE COMPRAS
================================ */
let total = 0;

function agregarAlCarrito(nombre, precio) {
  const lista = document.getElementById("listaCarrito");

  const item = document.createElement("li");
  item.textContent = `${nombre} - S/ ${precio}`;
  lista.appendChild(item);

  total += precio;
  document.getElementById("total").textContent = total;
}

/* ===============================
   COMPRA POR WHATSAPP
================================ */
function comprarWhatsApp(nombre, precio) {
  const numero = "51966578578";
  const mensaje = `Hola 👋 quiero comprar el producto:
📦 ${nombre}
💰 Precio: S/ ${precio}`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
