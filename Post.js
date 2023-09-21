import { Comments } from "./Comments";

export class Post{
    constructor(title, author, content){
        this.title=title;
        this.author=author;
        this.content=content;
        this.comments={};
    }

    editContent(title){
        this.title=title;
    }

    editTitle(content){
        this.content=content;
    }

    addComment(user, comment){
        const comment=new Comments(user, comment);
        this.comments[user]=comment;
    }
}