if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Nikitasmall post',
    url: 'http://Nikitasmall.com'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor book',
    url: 'http://themeteorbook.com'
  });
}
