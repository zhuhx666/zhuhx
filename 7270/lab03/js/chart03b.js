document.addEventListener("DOMContentLoaded", function () {

const labels = ["Boys 0-4 years", "Grils 0-4 years", "Boys 10-14 years", "Boys 15-19 years"];

const data2 = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config2 = {
    type: 'doughnut',
    data: data2,
};

var myChart = new Chart(
    document.getElementById('myChart2'),
    config2
);

});