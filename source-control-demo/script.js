const books = [
  {
    title: "Dế Mèn Phiêu Lưu Ký",
    author: "Tô Hoài",
    category: "Văn học",
    year: 1941
  },
  {
    title: "Tuổi Thơ Dữ Dội",
    author: "Phùng Quán",
    category: "Văn học",
    year: 1988
  },
  {
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    category: "Kỹ năng",
    year: 1936
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Công nghệ",
    year: 2008
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
      <p>Năm xuất bản: ${book.year}</p>
    </article>
  `).join("");

  bookCount.textContent = `Tìm thấy ${filteredBooks.length} cuốn sách`;
}

searchInput.addEventListener("input", event => {
  renderBooks(event.target.value);
});

renderBooks();
