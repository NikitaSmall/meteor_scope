Posts = new Mongo.Collection('posts');

ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}

Posts.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Posts.deny({
  update: function(userId, post, fieldNames) {
    return (_.without(fieldNames, 'title', 'url').length > 0);
  }
});

Meteor.methods({
  postInsert: function(postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      url: String
    });

    var postWithSameUrl = Posts.findOne({url: postAttributes.url});
    if (postWithSameUrl) {
      return {
        postExist: true,
        _id: postWithSameUrl._id
      };
    }

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  }
});
