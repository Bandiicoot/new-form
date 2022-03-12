function main() {
  const form = document.querySelector(".contenedor-principal");
  //formulario.addEventListener;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const obj = Object.fromEntries(formData.entries());
    obj["mas-jodidos"] = formData.getAll("mas-jodidos");
    console.log(obj);
  });
}
main();
