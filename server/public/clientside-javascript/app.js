console.log("hello")

$.ajax({
	url:'/movies',
	dataType: 'json',
	type: 'GET',
	success: function(responseFromOurServer){
		console.log(responseFromOurServer)
	},
	error: function(err){
		console.log(err)
	}
})

$.ajax({
	url:'/movies',
	dataType:'json',
	type: 'POST',
	data: {Favorite: "Almost Famous"},
	success: function(responseFromOurServer){
		console.log(responseFromOurServer)

	},
	error: function(err){
		console.log(err)
	}
})