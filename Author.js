import { Post } from "./Post.js";

export class Author{
    constructor(name, nacionality, age, gender){
        this.name=name;
        this.nacionality=nacionality;
        this.age=age;
        this.gender=gender;
        this.posts={};
    }

    postAmount(){
        return Object.keys(this.posts).length;
    }

    isEmpty(){
        return this.postAmount()==0;
    }
    
    hasPost(title){
        return this.posts[this.defaultToString(title)]!=null
    }

    addPost(title, content){
        const titleStg=this.defaultToString(title);
        const contentStg=this.defaultToString(content);
        const post=new Post(titleStg, this.name, contentStg)
        this.posts[title]=post;
    }

    defaultToString(post){
        if(post===null){
            return 'NULL';
        }else if(post===undefined){
            return 'UNDEFINED';
        }else if(typeof(post==='string'||post instanceof String)){
            return `${post}`;
        }
        let {title, content}=post;
        const titleStg=title.toString();
        const contentStg=content.toString();
        return titleStg+'\n'+contentStg;
    }

    removePost(title){
        if(this.hasPost(title)){
            delete this.posts[this.defaultToString(title)];
            return true;
        }
        return false;
    }

    clear(){
        this.posts={};
    }
}