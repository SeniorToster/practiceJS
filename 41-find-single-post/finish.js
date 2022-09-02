const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
];

/* 
const findPostById = (idPost, arrowPost) => {
  const indexArrow = arrowPost.findIndex(id => id.postId === idPost);

  if (indexArrow >= 0) return arrowPost[indexArrow];
}; 
*/

/* Второй вариант  */
const findPostById = (idPost, arrowPost) =>
  arrowPost.find(id => id.postId === idPost);

console.log(findPostById(6134, posts));

console.log(findPostById(4511, posts));
