//TODO: flesh out
var source   = document.getElementById("project").innerHTML;
var template = Handlebars.compile(source);
var context = {title: "My New Post", body: "This is my first post!"};
var html    = template(context);

$('body').append(html)