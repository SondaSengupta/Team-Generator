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

	document.getElementById('submit').addEventListener("click", function(){
			event.preventDefault();
        	var $ul = document.getElementById("results");
       		 $ul.innerHTML = "";
			
			switch (teamValue()) {
				case "randomstudent":
				    var rand = getRandomInt(0, people.length);
				    var person = people[rand];
					event.preventDefault();
					addItemToList($ul, person);
					break;

				case "neighboringpair":
					var peopleClone = people.slice(0);
					while( peopleClone.length > 0 ){
                		var studentNames = peopleClone.splice(0, 2);
                		addItemToList($ul, studentNames.join(" &amp; "));
					}
					break;


				case "neighboringthree":
					var peopleClone = people.slice(0);
					while( peopleClone.length > 0 ){
                		var studentNames = peopleClone.splice(0, 3);
                		addItemToList($ul, studentNames.join(" &amp; "));
					}
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
