var postsData = [
  {
    title: 'Hello!',
    url: 'github.com',
    domain: 'hi there'
  },
  {
    title: 'Nikitasmall',
    url: 'nikitasmall.com',
    domain: 'another hello!'
  }
];
Template.postsList.helpers({
  posts: postsData
});
