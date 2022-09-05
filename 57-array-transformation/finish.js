const testPosts = [
  {
    postId: 234,
    author: 'robd',
    commentsQty: 5,
  },
  {
    postId: 823,
    author: 'sady',
  },
  {
    postId: 161,
    author: 'merryl',
    commentsQty: 8,
  },
];

/* 
const processPosts = aray =>
  aray.map(item => {
    const { postId, author, commentsQty = 0 } = item;
    return {
      postId: postId + 1000,
      postAuthor: author,
      postCommentsQty: commentsQty,
    };
  });
 */
/* 
const processPosts = array =>
  array.map(item => {
    const {
      postId,
      author: postAuthor,
      commentsQty: postCommentsQty = 0,
    } = item;

    return {
      postId: postId + 1000,
      postAuthor,
      postCommentsQty,
    };
  });
 */
const processPosts = array =>
  array.map(
    ({ postId, author: postAuthor, commentsQty: postCommentsQty = 0 }) => ({
      postId: postId + 1000,
      postAuthor,
      postCommentsQty,
    })
  );

const processedPosts = processPosts(testPosts);
console.log(processedPosts);
/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/

console.log(testPosts);
// оригинальный массив должен остаться без изменений
