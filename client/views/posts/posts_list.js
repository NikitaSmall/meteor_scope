var postsData = [
  {
    title: 'Hello!',
    url: 'github.com'
  },
  {
    title: 'Nikitasmall',
    url: 'nikitasmall.com'
  }
];
Template.postsList.helpers = ({
  posts: postsData
});
