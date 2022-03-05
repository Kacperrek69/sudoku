if(window.innerHeight * 0.8 <= window.innerWidth){
	document.querySelector(':root').style.setProperty('--cell_size', (window.innerHeight * 0.5 / 9).toString() + "px");

	document.querySelector(':root').style.setProperty('--main_size', (window.innerHeight * 0.8).toString() + "px");

	document.querySelector(':root').style.setProperty('--table_size', (window.innerHeight * 0.8 / 3).toString() + "px");

	document.querySelector(':root').style.setProperty('--margin_l', ((window.innerWidth - window.innerHeight * 0.8) / 2).toString() + "px");

}
else{
	document.querySelector(':root').style.setProperty('--main_size', (window.innerWidth * 0.95).toString() + "px");
	document.querySelector(':root').style.setProperty('--table_size', "33%");
	document.querySelector(':root').style.setProperty('--cell_size', "33%");
	document.querySelector(':root').style.setProperty('--margin_l', ((window.innerWidth * 0.05) / 3).toString() + "px");
}



window.onload = function() {
	document.getElementById("b_easy").addEventListener("click", function(){start("easy")});
	document.getElementById("b_medium").addEventListener("click", function(){start("medium")});
	document.getElementById("b_hard").addEventListener("click", function(){start("hard")});
	document.getElementById("b_v_hard").addEventListener("click", function(){start("very-hard")});
	document.getElementById("b_insane").addEventListener("click", function(){start("insane")});
	document.getElementById("b_inhuman").addEventListener("click", function(){start("inhuman")});

	document.getElementById("b_solution").addEventListener("click", solution);
	document.getElementById("b_check").addEventListener("click", check);
};


var d, s;
var game = false;

function start(lvl){
	if(game == false){
		game = true;
		
		for(var i = 0; i < document.getElementsByTagName("input").length; i++){
			document.getElementsByTagName("input")[i].disabled = false;
		}

		d = sudoku.generate(lvl);
		s = sudoku.board_string_to_grid(d);

		console.log(d);


		var a = 0;
		var b = 0;
		var c = 0;

		for(var z = 0; z < 3; z++){
			for(var x = 0; x < 3; x++){
				for(var i = 0 + c; i < 3 + c; i++){

					for(var y = 0 + b; y < 3 + b; y++){
						if(s[i][y] !== "."){
							document.getElementsByTagName("input")[a].value = s[i][y];
							document.getElementsByTagName("input")[a].disabled = true;
						}

						a += 1;
					}
				}

				b += 3;
			}
			c += 3;
			b = 0;
		}
	}
	else{
		if(confirm('Are you sure you want to begin new game?') == true){
			for(var i = 0; i < document.getElementsByTagName("input").length; i++){
				document.getElementsByTagName("input")[i].value = "";
				document.getElementsByTagName("input")[i].disabled = true;
				document.getElementsByTagName("input")[i].style.removeProperty("background-color");
			}

			game = false;
			start(lvl);
		}

	}
}


function check(){
	if(game == true){
		var q = sudoku.board_string_to_grid(sudoku.solve(d));

		var a = 0;
		var b = 0;
		var c = 0;

		for(var z = 0; z < 3; z++){
			for(var x = 0; x < 3; x++){
				for(var i = 0 + c; i < 3 + c; i++){

					for(var y = 0 + b; y < 3 + b; y++){
						if(document.getElementsByTagName("input")[a].value == q[i][y] && document.getElementsByTagName("input")[a].disabled == false){
							document.getElementsByTagName("input")[a].style.backgroundColor = "green";
						}
						else if(document.getElementsByTagName("input")[a].disabled == true){

						}
						else{
							document.getElementsByTagName("input")[a].style.backgroundColor = "red";
						}

						a += 1;
					}
				}

				b += 3;
			}
			c += 3;
			b = 0;
		}
	}
	else{
		alert("Don't begin a game!")
	}
}


function solution(){
	if(game == true){
		var q = sudoku.board_string_to_grid(sudoku.solve(d));

		var a = 0;
		var b = 0;
		var c = 0;

		for(var z = 0; z < 3; z++){
			for(var x = 0; x < 3; x++){
				for(var i = 0 + c; i < 3 + c; i++){

					for(var y = 0 + b; y < 3 + b; y++){
						document.getElementsByTagName("input")[a].value = q[i][y];
						document.getElementsByTagName("input")[a].disabled = true;

						a += 1;
					}
				}

				b += 3;
			}
			c += 3;
			b = 0;
		}
	}
	else(
		alert("Don't begin a game!")
	)
}

