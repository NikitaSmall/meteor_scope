Template.postSubmit.events({
  "submit form": function(e, template){
     e.preventDefault();

     var post = {
       url: $(e.target).find('[name=url]').val(),
       title: $(e.target).find('[name=title]').val()
     };

     // post._id = Posts.insert(post);

     Meteor.call('postInsert', post, function(error, result) {
       if (error) throwError(error.reason);

       if (result.postExist) {
         throwError('Пост с таким адресом уже создан!');
       }

       Router.go('postPage', {_id: result._id});
     });
  }
});
