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
      const apiKey = process.env.REACT_APP_API_KEY
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${this.title}+inauthor:${this.author}&key=${apiKey}`,
        { mode: "cors" }
      );
      const data = await response.json();
      const validEntries = data.items
        .filter(
          (vol) =>
            vol.volumeInfo.pageCount &&
            vol.volumeInfo.imageLinks &&
            vol.searchInfo
        )
        .map((vol) => {
          return {
            title: vol.volumeInfo.title,
            author: vol.volumeInfo.authors.join(", "),
            img: vol.volumeInfo.imageLinks.smallThumbnail,
            pages: vol.volumeInfo.pageCount,
            link: vol.volumeInfo.infoLink,
            snippet: vol.searchInfo.textSnippet,
          };
        });

      return validEntries;
    } catch (err) {
      console.error(err);
    }
  };

  update = (data) => {
    Object.assign(this, data);
  };
}
