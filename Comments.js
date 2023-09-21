export class Comments{
    constructor(user, comment){
        this.user=user;
        this.comment=comment;
        this.date= new Date();
    }

    editComment(comment){
        this.comment=comment;
    }
}