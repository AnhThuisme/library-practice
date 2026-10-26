const books = [
  {
    title: "Dế Mèn Phiêu Lưu Ký",
    author: "Tô Hoài",
    category: "Văn học"
  },
  {
    title: "Tuổi Thơ Dữ Dội",
    author: "Phùng Quán",
    category: "Văn học"
  },
  {
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    category: "Kỹ năng"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Công nghệ"
  }
];

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const bookCount = document.getElementById("bookCount");

function renderBooks(keyword = "") {
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(keyword.toLowerCase())
  );

  bookList.innerHTML = filteredBooks.map(book => `
    <article class="book">
      <h2>${book.title}</h2>
      <p>Tác giả: ${book.author}</p>
      <p>Thể loại: ${book.category}</p>
    </article>
  `).join("");

  bookCount.textContent = `Tìm thấy ${filteredBooks.length} cuốn sách`;
}

searchInput.addEventListener("input", event => {
  renderBooks(event.target.value);
});

renderBooks();
