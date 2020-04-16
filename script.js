let labels1 = ['figure scating', 'hockey'];
let data1 = [61, 39];
let colors1 = ['#6699ff', '#9900cc'];

let myChart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myChart1, {
	type: 'doughnut', 
	data: {
		labels: labels1,
		datasets: [ {
			data: data1,
			backgroundColor: colors1
		}]		
	},
	options: {
		title: {
			text: "What sport is the best?",
			display: true

		}
	}
})


let labels2 = ['Russia', 'USA', 'Canada'];
let data2 = [5000, 4800, 4550];
let colors2 = ['#003399', '#660033', '#660066'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
	type: 'bar', 
	data: {
		labels: labels2,
		datasets: [ {
			data: data2,
			backgroundColor: colors2
		}]		
	},
	options: {
		title: {
			text: "Most medals won by ladies? (in thousands)",
			display: true
		},
		legend: {
			display: false
		}
	}
})

let labels3 = ['Split jumps', 'Salchow Jump', 'Step sequence', 'Special figures'];


let myChart3 = document.getElementById("myChart").getContext('2d');

let chart3 = new Chart(myChart3, {
	type: 'radar', 
	data: {
		labels: labels3,
		datasets: [ 
		{
			label: 'Plushenko',
			fill: true,
			backgroundColor: "rgba(255, 0, 102, 0.2)",
			borderColor: "rgba(255, 0, 85, 1)", 
			pointBorderColor: "#fff",
			pointBackgroundColor: "rgba(255, 0, 102, 0.2)" ,
			data: [10, 7, 9, 6]
		},
		{
			label: 'Yagudin',
			fill: true,
			backgroundColor: "rgba(255, 223, 85, 0.2)",
			borderColor: "rgba(255, 223, 55, 1)", 
			pointBorderColor: "#fff",
			pointBackgroundColor: "rgba(255, 0, 102, 0.2)" ,
			data: [6, 10, 7, 9]
		}
		]		
	},
	options: {
		title: {
			text: "Skills",
			display: true

		}
	}
});


let labels4 = ['Italy', 'USA', 'UK', 'France', 'Germany', 'Other(14)'];
let data4 = [125, 200, 167, 87, 120, 257];
let colors4 = ['#003399', '#660033', '#660066', '#cccc00','#00ffff', '#ffcccc'];

let myChart4 = document.getElementById("myChart4").getContext('2d');
let chart4 = new Chart(myChart2, {
	type: 'pie', 
	data: {
		labels: labels2,
		datasets: [ {
			data: data4,
			backgroundColor: colors2
		}]		
	},
	options: {
		title: {
			text: "Most medals won in skiing?",
			display: true
		},
		legend: {
			display: false
		}
	}
})



