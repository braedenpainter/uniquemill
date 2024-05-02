function loadImages(id, imgCount) {
	
	var imageHolder = document.getElementById('imageholder');
	
	for (i = 1; i <= imgCount; i++) {
		var newImage = document.createElement('img');
		newImage.src = 'images/jobs/' + id + '/' + i + '.jpg';
		newImage.alt = 'Image could not be loaded';
		
		imageHolder.appendChild(newImage);
	}
}