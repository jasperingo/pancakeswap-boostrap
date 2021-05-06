'use strict';


(function() {
			  	
	window.addEventListener('load', function() {
			    
		var forms = document.getElementsByClassName('needs-validation');
				    
			var validation = Array.prototype.filter.call(forms, function(form) {
				      	
				form.addEventListener('submit', function(event) {
					       
					event.preventDefault();
					event.stopPropagation();

					if (form.firstElementChild.classList.contains('alert')) {
					    form.removeChild(form.firstElementChild);
					}

					form.classList.add('was-validated');

					if (form.checkValidity() === false) {
					    return;
					}

					var button = form.getElementsByTagName('button')[0];

					var txt = button.textContent;

					button.disabled = true;

					button.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`;

					setTimeout(()=> {

						form.reset();
					    button.innerHTML = txt;
					    button.disabled = false;
					    form.classList.remove('was-validated');
					    form.insertBefore(getAlertBox(), form.firstElementChild);

				}, 3000);
					        
			}, false);

		});

	}, false);

})();



function getAlertBox() {
	var box = document.createElement('div');
	box.className ="alert alert-success";
	box.role="alert";
	box.innerHTML =	`
		<span>Sent successfully!!!</span>
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>`;

	return box;
}





