Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
  this.route('home', {
    path: '/',
    onBeforeAction: function() {
      this.redirect('/page/1');
    }
  });

  this.route('postsList', {
    path: 'page/:_page'
  });

  this.route('postPage', {
    path: 'posts/:_id',
    data: function() {
      return Posts.findOne(this.params._id);
    }
  });
});

Router.onBeforeAction('loading');
