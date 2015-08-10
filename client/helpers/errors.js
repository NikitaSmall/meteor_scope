Errors = new Meteor.Collection(null);


throwError = function(error) {
  Errors.insert({
    message: error
  });
}
