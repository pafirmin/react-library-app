export default class Book {
  constructor(data, id) {
    this.author = data.author;
    this.title = data.title;
    this.isRead = data.isRead;
    this.pages = data.pages || null;
    this.img = data.img || null;
    this.link = data.link || null;
    this.id = id;
  }

  toggleIsRead = () => {
    this.isRead = !this.isRead;
  };

  getData = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${this.title}+inauthor:${this.author}&key=AIzaSyAYxGSZr2SK0-6TnxBCrDgwllmt1aIu4hU`,
        { mode: "cors" }
      );
      const data = await response.json();
      const volume = data.items[0].volumeInfo;
      const bookData = {
        title: volume.title,
        author: volume.authors,
        img: volume.imageLinks.smallThumbnail,
        pages: volume.pageCount,
        link: volume.infoLink,
        snippet: data.items.find((vol) => vol.searchInfo).searchInfo
          .textSnippet,
      };
      return bookData;
    } catch (err) {
      console.error(err);
    }
  };

  update = (data) => {
    Object.assign(this, data);
  };
}
