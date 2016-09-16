//CODING CHALLENGE 
//Iterate through JSON array containting image URLs
//No javascript libraries/frameworks allowed

window.onload = function () {

	//acts as JSON array containing list of image URLS
	var JSON = {
		"galleryImages": [
			"./assets/1.png",
			"./assets/2.png",
			"./assets/3.png",
			"./assets/4.png",
			"./assets/5.png",
			"./assets/6.png",
			"./assets/7.png",
			"./assets/8.png",
			"./assets/9.png",
			"./assets/10.png",
			"./assets/11.png",
			"./assets/12.png"
		]
	};

	//create grid of images
	function createGrid() {

		//iterate through JSON array of images
		for (var i = 0; i < JSON.galleryImages.length; i++) {
			//create image container
			var dragContainer = document.getElementById("dragContainer");
			var picBox = document.createElement("div");
			picBox.className = "box";

			picBox.addEventListener('drop', function(ev) {
				ev.preventDefault();
				var imgSrc = document.getElementById(ev.dataTransfer.getData("src"));
				var imgParent = imgSrc.parentNode;
				var target = ev.currentTarget.firstElementChild;

				ev.currentTarget.replaceChild(imgSrc, target);
				imgParent.appendChild(target);
			});

			picBox.addEventListener('dragover', function(ev) {
				ev.preventDefault();
			});

			dragContainer.appendChild(picBox);

			//create image elements
			var img = document.createElement("img");
			img.src = JSON.galleryImages[i];
			img.id = "drag" + i;
			img.draggable = true;
			img.addEventListener('dragstart', function(ev){
				ev.dataTransfer.setData("src", ev.target.id);
			});
			picBox.appendChild(img);
		}

	}

	//create grid of images
	createGrid();

};


