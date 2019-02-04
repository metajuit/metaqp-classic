$(document).ready(function() {
	// body...
	$('#search').keyup(function(){
		var searchValue = ($('#search').val()).trim();
		if(searchValue!='')
			$.getJSON('list.json',function(result){
				var list = result.list;
			    var options = {
					  shouldSort: true,
					  threshold: 0.6,
					  location: 0,
					  distance: 100,
					  maxPatternLength: 32,
					  minMatchCharLength: 1,
					  keys: [
					    "title", 
					    "author.firstName",
					    "author.lastName"
					]
					};
					var fuse = new Fuse(list, options); // "list" is the item array
					var searchresult = fuse.search(searchValue);
					if(searchresult.length > 0)
					{
						$('#results').empty();
						for(i=0;i<searchresult.length;i++){
							$('#results').append('<div class="res"><h3>'+'<a target="_blank" class="result-link" href="'+searchresult[i].Link+'">'+searchresult[i].title+' / '+searchresult[i].author+  '/'+ searchresult[i].year + ' </p></div>');	
						}
					}
					
	})
})})