Template.submitComment.events({
  "submit form": function(event, template){
      event.preventDefault();

      var $body = $(event.target).find('[name=body]');
      var comment = {
        body: $body.val(),
        postId: template.data._id
      };

      Meteor.call('comment', comment, function(error) {
        if (error)
          throwError(error.reason);
          
        $body.val('');
      });
  }
});
