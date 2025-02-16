class Book {
  constructor() {
    this.newBookBtn = document.querySelector("#newBookBtn");
    this.bookDesc = document.querySelector(".modal");
    this.closeBookDesc = document.querySelector("#closeModal");
    this.bookNameInput = document.querySelector("#bookName");
    this.authorInput = document.querySelector("#author");
    this.pagesInput = document.querySelector("#pages");
    this.SubmitBtn = document.querySelector("#submitBook");
    this.bookList = document.querySelector("#bookList");

    this.addEventListeners();
  }

  addEventListeners() {
    this.newBookBtn.addEventListener("click", this.showBookDesc.bind(this));
    this.closeBookDesc.addEventListener(
      "click",
      this.closeBookDescHandler.bind(this)
    );
    this.SubmitBtn.addEventListener("click", this.submitHandler.bind(this));
  }

  showBookDesc() {
    this.bookDesc.style.display = "block";
  }

  closeBookDescHandler() {
    this.bookDesc.style.display = "none";
  }

  submitHandler() {
    const bookName = this.bookNameInput.value.trim();
    const author = this.authorInput.value.trim();
    const pages = this.pagesInput.value.trim();

    if (bookName === "" || author === "" || pages === "") {
      alert("All fields must be filled!");
      return;
    }

    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
      <p><strong>${bookName}</strong> by ${author}, ${pages} pages</p>
      <button class="deleteBook">Delete Book</button>
    `;

    this.bookList.appendChild(bookDiv);

    this.bookNameInput.value = "";
    this.authorInput.value = "";
    this.pagesInput.value = "";

    this.closeBookDescHandler();

    bookDiv.querySelector(".deleteBook").addEventListener("click", () => {
      this.bookList.removeChild(bookDiv);
    });
  }
}

const book1 = new Book();
