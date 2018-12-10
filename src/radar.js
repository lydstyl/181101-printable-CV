import Chart from 'chart.js';
var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Javascript / Jquery', 'Vue.js ou React.js', 'CSS / Sass', 'Node.js', 'Python / Django', 'PHP / Codeigniter', 'Git'],
        datasets: [
            {
                label: 'aujourd\'hui',
                data: [3.5, 0, 4, 3.5, 2.5, 3, 5],
                backgroundColor: 'rgba(40, 167, 69, 0.3)'
            },
            {
                label: 'objectifs',
                data: [4, 4.5, 4.5, 4.5, 3.5, 3.5, 5],
                backgroundColor: 'rgba(40, 167, 69, 0.1)'
            }
        ]
    },
    options: {
    }
});