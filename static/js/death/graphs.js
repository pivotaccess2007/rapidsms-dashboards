$(function () {
	        $('#childGraph').highcharts({
	           
	            xAxis: {
	                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	            },
	            yAxis: {
	                title: {
	                    text: 'Deaths'
	                },
	                plotLines: [{
	                    value: 0,
	                    width: 1,
	                    color: '#808080'
	                }]
	            },
	            tooltip: {
	                valueSuffix: 'deaths'
	            },
	            legend: {
	                layout: 'vertical',
	                align: 'right',
	                verticalAlign: 'middle',
	                borderWidth: 0
	            },
	            series: [{
	                name: 'Deaths',
	                data: [23, 63, 15, 14, 18, 21, 25, 43, 13, 55, 31, 32]
	            }, {
	                name: 'A year before',
	                data: [23, 18, 57, 11, 10, 22, 48, 41, 20, 14, 8, 25]
	            }]
	        });
	    });




$(function () {
    $('#graph').highcharts({
       
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Deaths'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'deaths'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Deaths',
            data: [23, 63, 15, 14, 18, 21, 25, 43, 13, 55, 31, 32]
        }, {
            name: 'A year before',
            data: [23, 18, 57, 11, 10, 22, 48, 41, 20, 14, 8, 25]
        }]
    });
});