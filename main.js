document.addEventListener('DOMContentLoaded', function(){

	function teamValue () {
		return document.forms[0].teams.value;
		}

	//var people = ["Seif", "Jackie", "Jessica", "Kimberly", "Brandon", "Blaise", "Evan", "Greg", "Charisse", "Luke", "Stephania", "David", "Steve", "Adam", "Spencer", "Leon", "Alex", "Gerald", "Sonda", "Beck", "Colby", "Kris"];

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

	function show(element) {
  	element.classList.remove("hidden");
	}
	function hide(element) {
  	element.classList.add("hidden");
	}
	var $form = document.getElementById("generate-group");
	var $select = $form.querySelector("select");
    var $numBox = $form.querySelector("input[type='number']");
    $select.addEventListener("change", function(event){
    if (event.currentTarget.value === "randomnpair") {
       show($numBox);
    	} else {
        hide($numBox);
      	}
   	});

	document.getElementById('submit').addEventListener("click", function(){
			event.preventDefault();
        	var $ol = document.getElementById("results");
       		 $ol.innerHTML = "";
       		var $h3 = document.getElementById("largeTeamWarning");
       		 $h3.innerHTML ="";

       		 function getJSON(url, cb){
  			var xhr = new XMLHttpRequest();
  			xhr.open('GET', url);
 			xhr.onload = function(){
    		cb(JSON.parse(xhr.responseText));
  				};
  			xhr.send();
			}

			var students;
    		getJSON('https://volunteerism-sscotth.firebaseio.com/students.json', function(data){
      		people = data;
    		});
			
			switch (teamValue()) {
				case "randomstudent":
				    var rand = getRandomInt(0, people.length);
				    var person = people[rand];
					addItemToList($ol, person);
					break;
				case "neighboringpair":
					neighborGrouping (people, 2, $ol);
					break;
				case "neighboringthree":
					neighborGrouping (people, 3, $ol);
					break;
				case "randompair":
					var shuffledPeople = arrayShuffle(people);
					neighborGrouping (shuffledPeople,2, $ol);
					break;
				case "randomthree":
					var shuffledPeople = arrayShuffle(people);
					neighborGrouping (shuffledPeople,3, $ol);
					break;
				case "randomnpair":
					var inputNumber = document.forms[0].nteam.value;
					if (inputNumber > people.length) {
						var largeTeam = "There are not enough people to form teams, so they will all be in one team, like so:";
						$h3.innerHTML = largeTeam;
						var shuffledPeople = arrayShuffle(people);
						neighborGrouping (shuffledPeople,inputNumber, $ol);
					} else {
						var shuffledPeople = arrayShuffle(people);
						neighborGrouping (shuffledPeople,inputNumber, $ol);
					}
					break;
				}
		});


});
