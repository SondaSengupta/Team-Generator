document.addEventListener('DOMContentLoaded', function(){
	function teamValue () {
		return document.forms[0].teams.value;
		}

	var people = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven"];

	document.getElementById('submit').addEventListener("click", function(){
			switch (teamValue()) {
				case "randomstudent":
				    var rand = getRandomInt(0, people.length);
				    var person = people[rand];
					event.preventDefault();
					var $li = document.createElement('li');
					$li.innerHTML = person;
					var $ul = document.getElementById('results');
					$ul.appendChild($li);
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


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}