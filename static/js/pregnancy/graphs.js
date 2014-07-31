$(function()
{
  var thr = new ThousandQueries(document.location);
  thr.makeReq('lmp_graph', f1);
  thr.makeReq('monthavg_graph', f2);
});

var f1  =        function (thr) {

        $('#lmpgraph').highcharts({
            chart: {
                type: 'column'
            },
            
            xAxis: {
                categories: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9'
                    
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Pregnancies Reported'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'LMP Known in terms of months',
                data: thr.lmps([123, 111, 91, 87, 72, 64, 60, 21, 02])
    
            }]
        });
    };

var f2 = function (thr) {
    $('#avgdest').text(thr.average());
    $('#monthlyavggrph').highcharts({
        
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Pregnancies Confirmed'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        
        series: [{
            name: 'Pregnancies Per Month',
            data: thr.fetch([70, 69, 95, 145, 102, 25, 52, 65, 33, 83, 39, 96])
        }]
    });
};

$(function () {
	$('#layer_150').click(function(evt)
	{
		var it  = $('#pregnantmothers'),
		swaps   = {none: 'block', block:'none'},
		now	    = it.css('display');
		if(now == 'none')
		{
			$.ajax('../static/js/pregnancy/pregnantmothers.json',
				//$.ajax(document.location.toString().replace('dashboards', 'json') + '.json',
				{
					success: function(dat, stt, obj)
				 	{
				 		var fin = [],
				 			hds = [];
				 		for(var notI = 0; notI < dat.locations.length; ++notI)
				 		{
				 			var cols = [],
				 				keys = [
				 				        {title: 'Location Name', key: 'name'},
				 				       {title: 'Pregnancies', key: 'pregs'},
				 				        {title: 'High Risk Pregnanices', key: 'hr'}
				 				       ];
				 			var loc   = dat.locations[notI];
			 				for(var col = 0; col < keys.length; ++col)
				 			{
				 				cols[col] = (loc[keys[col].key]).toString();
				 				if(hds.length == keys.length) continue;
				 				hds[col] = keys[col].title;
				 			}
				 			fin.push('<td>' + cols.join('</td><td>') + '</td>');
				 		}
				 		var txt = '<table><thead><tr><th>' + hds.join('</th><th>') + '</th></tr></thead><tr>' + fin.join('</tr><tr>') + '</tr></table>';
						$('#here_table').html(txt);
						it.css({'display':swaps[now]});
				 	}
				}
			);
		}
		else it.css({'display':swaps[now]});
	});
});
   

