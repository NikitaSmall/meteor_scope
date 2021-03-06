Template.postsList.helpers({
  posts: function() {
    var page = Router.current().params._page;
    return Posts.find({}, { limit: 5, skip: 5 * (page - 1), sort: { submitted: -1 } });
  },
  postCollection: function() {
    return Posts.find();
  }
});
