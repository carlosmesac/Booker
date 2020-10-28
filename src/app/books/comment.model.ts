export class Comment {
  public thumbnail: string;
  public liked: boolean;
  public comment: string;
  public title: string;
  public date: number;


  constructor(thumbnail: string, title: string, liked: boolean, comment: string) {
    this.thumbnail = thumbnail;
    this.liked = liked;
    this.title = title;
    this.comment = comment;
    this.date = this.getCurrentDate();
  }

  getCurrentDate() {
    const date = Date.now();
    return date;
  }
}
