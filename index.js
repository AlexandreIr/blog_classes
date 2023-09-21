import { Author } from "./Author.js";

const Antonio=new Author('Antonio', 'Brasileiro', 32, 'M');

Antonio.addPost('Pardon', 'pardon, pardon...')
Antonio.addPost(12315, 87891228055)

console.log(Antonio.posts)
console.log(Antonio.havePosts())
console.log(Antonio.postAmount())

console.log(Antonio.nacionality)
console.log(Antonio.age)
console.log(Antonio.gender)

Antonio.removePost(12315)
console.log(Antonio.posts)
