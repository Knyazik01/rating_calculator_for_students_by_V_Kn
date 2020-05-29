let E1, E2, E3, E4, E5, Ep;
let count, sum;

function read() {
	E1 = parseInt(document.getElementById('ex1').value, 10); 
	E2 = parseInt(document.getElementById('ex2').value, 10);
	E3 = parseInt(document.getElementById('ex3').value, 10);
	E4 = parseInt(document.getElementById('ex4').value, 10);
	E5 = parseInt(document.getElementById('ex5').value, 10);
	Ep = parseInt(document.getElementById('ep').value, 10);
	count = 0;
	sum = 0;
	let E = [E1, E2, E3, E4, E5];
	for (let i of E) {
		if ((i > 100) || (i < 0)) {
			count = 0;
			sum = 0;
			break;
		} else if (i > 0) {
			count++;
			sum += i;
		}
	}
	return [count, sum]
}

document.getElementById("clean").onclick = function clean() {
	document.getElementById('ex1').value = 0;
	document.getElementById('ex2').value = 0;
	document.getElementById('ex3').value = 0;
	document.getElementById('ex4').value = 0;
	document.getElementById('ex5').value = 0;
	document.getElementById('ep').value = 0;
	document.getElementById('result').value = 0;
}

document.getElementById("calculate").onclick = function calculating() {
	let arr = read();
	count = arr[0];
	sum = arr[1];
	if ((count > 0) && ((Ep >= 0) && (Ep <= 30))) {
		let res = ((sum) / count) * 0.9 + Ep * 0.1;
		// document.getElementById('result').value = res;
		document.getElementById('result').value = +res.toFixed(3);
	} else {
		alert("Input exams correctly!");
	}
	count = 0;
}

ex1.onfocus = function clean1() {
	if (ex1.value == 0) {
		ex1.value = '';
	}
}
ex1.onblur = function unclean() {
	if (ex1.value == '') {
		ex1.value = 0;
	}
}

ex2.onclick = function clean2() {
	if (ex2.value == 0) {
		ex2.value = '';
	}
}
ex2.onblur = function unclean() {
	if (ex2.value == '') {
		ex2.value = 0;
	}
}

ex3.onclick = function clean3() {
	if (ex3.value == 0) {
		ex3.value = '';
	}
}
ex3.onblur = function unclean() {
	if (ex3.value == '') {
		ex3.value = 0;
	}
}

ex4.onclick = function clean4() {
	if (ex4.value == 0) {
		ex4.value = '';
	}
}
ex4.onblur = function unclean() {
	if (ex4.value == '') {
		ex4.value = 0;
	}
}

ex5.onclick = function clean5() {
	if (ex5.value == 0) {
		ex5.value = '';
	}
}
ex5.onblur = function unclean() {
	if (ex5.value == '') {
		ex5.value = 0;
	}
}

ep.onclick = function cleanp() {
	if (ep.value == 0) {
		ep.value = '';
	}
}

ep.onblur = function unclean() {
	if (ep.value == '') {
		ep.value = 0;
	}
}

//V_Kn
