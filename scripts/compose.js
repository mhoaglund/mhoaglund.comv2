//TODO: flesh out
var source   = document.getElementById("project").innerHTML,
template = Handlebars.compile(source),
context = {title: "My New Post", body: "This is my first post!"},
_host = "";

function getProjectData(myUrl){
	var result = null;
	$.ajax( { url: myUrl, 
		type: 'GET', 
		dataType: 'json',
        crossDomain: true,
		contentType: 'application/json',
		async: true,
		cache: false,
		data: '',
		success: function(data) { 
            var omu = template(data);
            $('#host').append(omu)
		},
		error: function(data){
			alert("problem");
		}
	});
	return result;
}

getProjectData(_host + '/mphall');