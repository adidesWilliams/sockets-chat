function getQueryVariable(variable){
	//take search string and remove ? from front
	var query = window.location.search.substring(1);
	//split string into key value pairs at & (eg., name=kev&room=LOTR becomes [name=kev], [room=LOTR] )
	var vars = query.split('&');

	for (var i = 0; i<vars.length; i++){

		//split each name, key pair into individual elements ([name=kev] becomes [name, kev])
		var pair = vars[i].split('=');
		//decodeURIComponent for %20's etc
		//check if 1st element in pair is equal to variable
		if (decodeURIComponent(pair[0]) == variable){
		
			//if 1st element in pair is equal to variable, return its pair
			return decodeURIComponent(pair[1]);
			
		}
	}

	return undefined;
}

