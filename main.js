document.addEventListener('DOMContentLoaded', function(){
	function teamValue () {
		return document.forms[0].teams.value;
		}

	var people = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven"];

	function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min)) + min;
	}

	function addItemToList($list, items){
    var $li = document.createElement("li");
    $li.innerHTML = items;
    $list.appendChild($li);
}
	function neighborGrouping(list,groupSize, target){
		var listClone = list.slice(0);
		while( listClone.length > 0 ){
        	var studentNames = listClone.splice(0, groupSize);
        	addItemToList(target, studentNames.join(" &amp; "));
		}
	}

	function arrayShuffle(array) {
		var arrayClone = array.slice(0);
		var temp;
			for (var i = 0; i < arrayClone.length; i++) {
				var rand = getRandomInt(0, arrayClone.length);
				temp = arrayClone[i]
				arrayClone[i] = arrayClone[rand];
				arrayClone[rand] = temp;
			}
			return arrayClone;
	}

	document.getElementById('submit').addEventListener("click", function(){
			event.preventDefault();
        	var $ol = document.getElementById("results");
       		 $ol.innerHTML = "";
			
			switch (teamValue()) {
				case "randomstudent":
				    var rand = getRandomInt(0, people.length);
				    var person = people[rand];
					addItemToList($ol, person);
					break;

				case "neighboringpair":
					neighborGrouping (people, 2, $ol)
					break;


				case "neighboringthree":
					neighborGrouping (people, 3, $ol)
					break;

				case "randompair":
					var shuffledPeople = arrayShuffle(people);
					neighborGrouping (shuffledPeople,2, $ol)
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
