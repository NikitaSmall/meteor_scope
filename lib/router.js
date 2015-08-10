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

  this.route('postEdit', {
    path: 'posts/:_id/edit',
    data: function() {
      return Posts.findOne(this.params._id);
    }
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

var ownsDocument = function(userId, doc) {
  if (Posts.findOne(this.params._id) && Posts.findOne(this.params._id).userId === Meteor.userId()) {
    this.next();
  } else {
    this.render('accessDenied');
  }
};

Router.onBeforeAction('loading');
Router.onBeforeAction(function() {
  clearErrors();
  this.next();
});

Router.onBeforeAction('dataNotFound', { only: 'postPage' });
Router.onBeforeAction(requireLogin, { only: ['postSubmit', 'postEdit'] });

Router.onBeforeAction(ownsDocument, { only: 'postEdit' });
