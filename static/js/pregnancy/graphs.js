
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