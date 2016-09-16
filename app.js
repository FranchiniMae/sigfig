window.onload = function () {

	function createGrid() {

		for (var i = 1; i < 13; i++) {
			var dragContainer = document.getElementById("dragContainer");
			var picBox = document.createElement("div");
			picBox.className = "box";
			picBox.addEventListener('drop', function(ev) {
				ev.preventDefault();
				var data = document.getElementById(ev.dataTransfer.getData("text"));
				var dataParent = data.parentNode;
				var target = ev.currentTarget.firstElementChild;

				ev.currentTarget.replaceChild(data, target);
				dataParent.appendChild(target);
			});
			picBox.addEventListener('dragover', function(ev) {
				ev.preventDefault();
			});
			dragContainer.appendChild(picBox);

			var img = document.createElement("img");
			img.src = "./assets/" + i + ".png";
			img.id = "drag" + i;
			img.draggable = true;
			img.addEventListener('dragstart', function(ev){
				ev.dataTransfer.setData("text", ev.target.id);
			});
			picBox.appendChild(img);
		}

	}

	createGrid();
	
};


