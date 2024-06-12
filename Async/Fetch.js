let carrello = [];
const fetchObj = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      console.log("response object", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel reperimento dati");
      }
    })
    .then((booksObj) => {
      console.log("booksObj", booksObj);
      const libreria = document.getElementById("libreria");
      booksObj.forEach((book) => {
        const col = document.createElement("div");
        const card = document.createElement("div");
        const img = document.createElement("img");
        const cardBody = document.createElement("div");
        const title = document.createElement("h3");
        const price = document.createElement("h4");
        const category = document.createElement("h5");
        const divButtons = document.createElement("div");
        const buttonRed = document.createElement("button");
        const buttonAdd = document.createElement("button");

        col.classList.add("col-12", "col-sm-6", "col-md-6", "col-lg-4", "col-xl-4", "col-xxl-3");
        card.classList.add("card", "h-100");
        img.classList.add("card-img-top");
        cardBody.classList.add("card-body", "d-flex", "flex-column", "justify-content-between");
        title.classList.add("card-title");
        category.classList.add("card-text");
        price.classList.add("card-text");
        buttonRed.classList.add("m-2", "btn", "btn-danger");
        buttonAdd.classList.add("m-2", "btn", "btn-info");
        libreria.classList.add("g-5");

        img.setAttribute("src", `${book.img}`);
        card.setAttribute("style", "width: 18rem");
        title.innerText = `${book.title}`;
        category.innerText = `${book.category}`;
        price.innerText = `${book.price}€`;
        buttonRed.innerText = `Scarta`;
        buttonAdd.innerText = `Add to cart`;

        cardBody.appendChild(title);
        cardBody.appendChild(category);
        cardBody.appendChild(price);
        cardBody.appendChild(divButtons);
        divButtons.appendChild(buttonRed);
        divButtons.appendChild(buttonAdd);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        libreria.appendChild(col);

        buttonRed.addEventListener("click", () => {
          card.classList.add("d-none");
        });

        buttonAdd.addEventListener("click", () => {
          const carrello = document.getElementById("Carrello");
          const libro = document.createElement("div");
          libro.innerText = book.title;
          carrello.appendChild(libro);
        });
      });
    })
    .catch((err) => console.log(err));
};
fetchObj();
