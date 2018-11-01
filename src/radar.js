import Chart from 'chart.js';
var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Javascript', 'Vue.js', 'Sass', 'Node.js', 'Python / Django', 'PHP / Codeigniter', 'Git'],
        datasets: [
            {
                label: 'aujourd\'hui',
                data: [8, 0, 8, 4, 5, 6, 10],
                backgroundColor: 'rgba(40, 167, 69, 0.3)'
            },
            {
                label: 'objectifs',
                data: [9, 5, 9, 8, 7, 6, 10],
                backgroundColor: 'rgba(40, 167, 69, 0.1)'
            }
        ]
    },
    options: {
    }
});