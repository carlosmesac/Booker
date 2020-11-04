export class Comment {
  public thumbnail: string;
  public liked: boolean;
  public comment: string;
  public title: string;
  public date: number;
  public ID: string;
  public userID: string;


  constructor(thumbnail: string, title: string, liked: boolean, comment: string, ID: string, userID: string) {
    this.thumbnail = thumbnail;
    this.liked = liked;
    this.title = title;
    this.comment = comment;
    this.date = this.getCurrentDate();
    this.ID = ID;
    this.userID = userID;
  }

  getCurrentDate() {
    const date = Date.now();
    return date;
  }
}
