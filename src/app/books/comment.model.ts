
export class Comment {
  public thumbnail:string
  public liked:boolean
  public comment: string
  public title:string
  public publishDate:number


    constructor(thumbnail:string,title:string, liked:boolean ,comment: string){
      this.thumbnail = thumbnail
      this.liked = liked
      this.title = title
      this.comment = comment
      this.publishDate = this.getCurrentDate()
    }
    getCurrentDate(){
      const date =  Date.now();
      return date
    }
}
