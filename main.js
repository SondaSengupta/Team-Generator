document.addEventListener('DOMContentLoaded', function(){
	function teamValue () {
		return document.forms[0].teams.value;
		}

	document.getElementById('submit').addEventListener("click", function(){
			if (teamValue() ==="randomstudent") {
				alert("You clicked the 1st selection of " + teamValue());
			} else if (teamValue() ==="neighboringpair") {
				alert("You clicked the 2nd selection of " + teamValue());
			} else if (teamValue() ==="randompair") {
				alert("You clicked the 3rd selection of " + teamValue());
			} else if (teamValue() ==="randomthree") {
				alert("You clicked the 4th selection of " + teamValue());
			} else if (teamValue() ==="randomnpair") {
				alert("You clicked the 5th selection of " + teamValue());
			}
		});
});

