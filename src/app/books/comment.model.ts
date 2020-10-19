
export class Comment {
  public thumbnail:string
  public like:boolean
  public comment: string
  public title:string
  public publishDate:number


    constructor(thumbnail:string,title:string, like:boolean ,comment: string){
      this.thumbnail = thumbnail
      this.like = like
      this.title = title
      this.comment = comment
      this.publishDate = this.getCurrentDate()
    }
    getCurrentDate(){
      const date =  Date.now();
      return date
    }
}
