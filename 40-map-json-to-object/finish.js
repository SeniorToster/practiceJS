const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
];
const parseJASON = postsJSON.map(obj => JSON.parse(obj));

console.log(parseJASON);

console.log(parseJASON[1].postId);

console.log(parseJASON[3].commentsQuantity);
