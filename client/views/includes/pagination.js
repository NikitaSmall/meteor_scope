Template.pagination.helpers({
  count: function() {
    return Math.floor(Posts.find().count() / 5) + 1
  },
  show: function() {
    return (Posts.find().count() / 5) > 1
  },
  paginator: function() {
    var paginator = '<div>';
    for (var i = 1; i <= Math.floor(Posts.find().count() / 5) + 1; i++) {
      paginator += '<a href="/page/' + i + '">' + i + '</a>';
    }
    paginator += '</div>';

    return paginator;
  }
});
