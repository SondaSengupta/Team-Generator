document.addEventListener('DOMContentLoaded', function(){
	function teamValue () {
		return document.forms[0].teams.value;
		}

	document.getElementById('submit').addEventListener("click", function(){
			alert("You clicked the button " + teamValue());
		}); 
});