Template.notifications.helpers({
  notifications: function(){
    return Notifications.find({ userId: Meteor.userId(), read: false });
  },
  notificationCount: function(){
    return Notifications.find({ userId: Meteor.userId(), read: false }).count();
  }
});

Template.notificationItem.helpers({
  notificationPostPath: function(){
    return Router.routes.postPage.path({ _id: this.postId });
  },
  postId: function() {
    return this.postId;
  }
});

Template.notificationItem.events({
  "click a": function(event, template){
    Notifications.update(this._id, {$set: { read: true } });
  }
});
