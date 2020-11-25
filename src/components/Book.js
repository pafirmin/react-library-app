export default class Book {
  constructor(form, id) {
    this.author = form.author;
    this.title = form.title;
    this.isRead = form.isRead === "Read" ? true : false;
    this.id = id;
  }

  toggleIsRead = () => {
    this.isRead = !this.isRead;
  };

  getData = async () => {
    if (!this.data) {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${this.title}+inauthor:${this.author}&key=AIzaSyAYxGSZr2SK0-6TnxBCrDgwllmt1aIu4hU`,
          { mode: "cors" }
        );
        const data = await response.json();
        const bookData = {
          title: data.items[0].volumeInfo.title,
          author: data.items[0].volumeInfo.authors,
          snippet: data.items[0].searchInfo.textSnippet,
          img: data.items[0].volumeInfo.imageLinks.smallThumbnail,
          pages: data.items[0].volumeInfo.pageCount,
          link: data.items[0].volumeInfo.infoLink,
        };
        return bookData;
      } catch (err) {
        console.error("Couldn't find that book!");
      }
    }
    return this.data;
  };

  update = (data) => {
    this.author = data.author;
    this.title = data.title;
  };
}
