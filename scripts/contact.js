function pullinfo() {
	//Get Form elements
	var custName = document.getElementById('custname').value;
	var custEmail = document.getElementById('email').value;
	var jobType = document.getElementById('jobtype').value;
	var messType;
	
	if(document.getElementById('review').checked) {
		messType = document.getElementById('review').value;
	} else {
		messType = document.getElementById('jobrequest').value;
	}
	
	//What to do with the information
}