QUnit.test('Ticks for a single point.', function (assert) {
    var chart = Highcharts.chart('container', {
        yAxis: {
            tickPositioner: function () {
                return [0, 0.2, 0.4, 0.6, 0.8];
            }
        },
        series: [{
            data: [0.2]
        }]
    });

    assert.strictEqual(
        chart.yAxis[0].min,
        0,
        'multiple ticks from tickPositioner for a single point (#6897)'
    );
    
    chart.yAxis[0].update({
        tickPositioner: function () {
            return;
        }
    });

    assert.strictEqual(
        chart.yAxis[0].min,
        -0.3,
        'single tick and increased extremes for a single point'
    );
});