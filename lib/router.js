Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
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
    path: '/page/:_page'
  });

  this.route('submit', {
    name: 'postSubmit'
  });

  this.route('postPage', {
    path: '/posts/:_id',
    data: function() {
      return Posts.findOne(this.params._id);
    }
  });
});

var requireLogin = function() {
  if(Meteor.user()) {
    this.next();
  } else {
    if(Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  }
};

Router.onBeforeAction('loading');

Router.onBeforeAction('dataNotFound', { only: 'postPage' });
Router.onBeforeAction(requireLogin, { only: 'postSubmit' });
