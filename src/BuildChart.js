google.load("visualization", "1.1", {
    packages: ["sankey"]
});

google.setOnLoadCallback(drawChart);

function drawChart() {
    console.log("asdf");
    var data = new google.visualization.DataTable();
    var formatter = new google.visualization.NumberFormat({pattern:'$###.## bn'}); 
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Revenues');
    data.addColumn({type: 'string', role: 'tooltip'});
    data.setColumnProperty(3, 'html', true);
    data.addRows([
        ['Fred', 'Ann', 107.91,],
        ['Bill', 'Ann', 47.86],
        ['Carol', 'Ann', 817.9],
        ['Jim', 'Kevin', 400],
        ['Ann', 'Kevin', 973.67],
        ['Sally', 'Kevin', 146.47],
        ['Kevin', 'EVP Sales', 1520.14]
        ].map(function(d) {
        	d.push(formatter.formatValue(d[2])+ ' This is an HTML tooltip<br>It needs to be formatted nicely<br>in a rectangular box that is not <i>long and thin</i>');
        	return d; 
    	}));

    // Set chart options
    var options = {
        width: 500,
        height: 300,
        tooltip: {isHtml: true},
        formatNumber: '$### m',
        sankey: {
            iterations: 64,
            node: {
                pattern: '$### m',
                nodePadding: 30,
                interactivity: true,
                label: {
                    fontName: 'Times-Roman',
                    fontSize: 14,
                    color: '#871b47',
                    bold: false,
                    italic: true
                }
            },
            link: {
                pattern: '$###.## bn'
            },
            allowHtml: 'true',
            tooltip: {
                isHtml: 'true'
            }
        }

    };
    var formatter = new google.visualization.NumberFormat({
        prefix: '$',
        pattern: '$###.## m'
    });
    formatter.format(data, 2);

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple', 'HTML_tooltip'));
    chart.draw(data, options);
}