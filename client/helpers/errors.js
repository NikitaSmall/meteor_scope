Errors = new Meteor.Collection('errors');


throwError = function(error) {
  Errors.insert({
    message: error,
    seen: false
  });
}

clearErrors = function() {
  if (Errors.find().count() > 0)
    Errors.remove({seen: true});
}
