$(function () {
        $('#Layer19').highcharts({
            
            xAxis: {
                categories: ['1 month', '6 months', '1 year', '2 years']
            },
            yAxis: {
                title: {
                    text: 'Mauc in relation to month'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: 'Cms'
            },
            
            series: [{
                name: 'MAUC in cms',
                data: [2, 3.8, 5, 6.1]
            }]
        });
    });
    