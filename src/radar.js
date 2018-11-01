import Chart from 'chart.js';
var ctx = document.getElementById("myChart").getContext('2d');

// BOOTSTRAP, FOUNDATION, JQUERY ['Javascript', 'Python', 'PHP', 'CSS', 'Git', 'Node.js', 'Django', 'Codeigniter', 'Webpack', 'Sass', 'Firebase']
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Javascript front', 'Vue.js', 'Sass', 'Node.js', 'Django', 'Codeigniter', 'Git'],
        datasets: [
            {
                label: 'aujourd\'hui',
                data: [7, 0, 8, 4, 5, 6, 10],
                backgroundColor: 'rgba(0, 0, 255, 0.2)'
            },
            {
                label: 'objectif',
                data: [7, 8, 8, 8, 8, 6, 10],
                backgroundColor: 'rgba(255, 0, 0, 0.1)'
            }
        ]
    },
    options: {
        // scale: {
        //     // Hides the scale
        //     display: true
        // }
    }
});