document.addEventListener("DOMContentLoaded", function () {

    const labels = ["Boys 0-4 years", "Grils 0-4 years", "Boys 10-14 years", "Boys 15-19 years"];

    const data = {
        labels: labels,
        datasets: [{
            // label: 'My First Dataset',
            data: [11000, 9000, 8500, 8300, 8200],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                // 'rgb(75, 192, 192)',
                // 'rgb(54, 162, 235)',
                // 'rgb(153, 102, 255)',
                // 'rgb(201, 203, 207)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                // 'rgb(75, 192, 192)',
                // 'rgb(54, 162, 235)',
                // 'rgb(153, 102, 255)',
                // 'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }],
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Age group",
                        font: {
                            size: 18
                        },
                        padding: 20
                    }
                },
                y: {
                    suggestedMin: 0,
                    suggestedMax: 1.0,
                    title: {
                        display: true,
                        text: "Prevalence (%)",
                        font: {
                            size: 18
                        },
                        padding: 20
                    },
                    ticks: {
                        stepSize: 0.2
                    }
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Child Abuse Cases',
                    font: {
                        size: 24
                    },
                    padding: 20
                },
                legend: {
                    display: false
                }
            },
        }
    };

    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
});