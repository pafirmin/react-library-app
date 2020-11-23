export default class Book {
  constructor(form) {
    this.author = form.author;
    this.title = form.title;
    this.pages = form.pages;
    this.isRead = form.isRead === "Read" ? true : false;
    this.timeStamp = new Date();
  }

  toggleIsRead = () => {
    this.isRead = !this.isRead;
  };
}
