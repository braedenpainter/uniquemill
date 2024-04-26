/*function pullinfo() {
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
}*/

function sendEmail() {
	var messType;
	const serviceID = 'service_tniwjb4';
	var templateID;
	
	//Template review: template_rn75vuc
	//Template jobrequest: template_cpo9yx2
	
	if(document.getElementById('review').checked) {
		messType = document.getElementById('review').value;
		templateID = 'template_rn75vuc';
	} else {
		messType = document.getElementById('jobrequest').value;
		templateID = 'template_cpo9yx2';
	}
	
	var params = {
		name: document.getElementById('custname').value,
		email: document.getElementById('email').value,
		jobtype: document.getElementById('jobtype').value,
		message: document.getElementById('message').value
	};

	emailjs.send(serviceID, templateID, params).then((res) => {
		document.getElementById('custname').value = "";
		document.getElementById('email').value = "";
		document.getElementById('review').checked = false;
		document.getElementById('jobrequest').checked = false;
		document.getElementById('jobtype').selectedIndex = 0;
		document.getElementById('message').value = "";

		console.log(res);
		alert('Message has been sent');
	})
	.catch((err) => console.log(err));
}