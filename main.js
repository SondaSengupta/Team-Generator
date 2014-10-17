document.addEventListener('DOMContentLoaded', function(){
	function teamValue () {
		return document.forms[0].teams.value;
		}

	document.getElementById('submit').addEventListener("click", function(){
			switch (teamValue()) {
				case "randomstudent":
					alert("You clicked the 1st selection of " + teamValue());
					break;
				case "neighboringpair":
					alert("You clicked the 2nd selection of " + teamValue());
					break;
				case "neighboringthree":
					alert("You clicked the 3rd selection of " + teamValue());
					break;
				case "randompair":
					alert("You clicked the 4th selection of " + teamValue());
					break;
				case "randomthree":
					alert("You clicked the 5th selection of " + teamValue());
					break;
				case "randomnpair":
					alert("You clicked the 6th selection of " + teamValue());
					break;
				}
		});
});
