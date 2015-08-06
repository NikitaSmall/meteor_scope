Template.postsList.helpers({
  posts: function() {
    var page = Router.current().params._page;
    return Posts.find({}, {limit: 5, skip: 5 * (page - 1)});
  }
});
