QUnit.test('Legend border should contain items with checkboxes (#4853)',
  function (assert) {
    var chart = Highcharts.chart('container', {
      legend: {
        borderWidth: 1,
        itemDistance: 80
      },
      plotOptions: {
        series: {
          showCheckbox: true
        }
      },

      series: [{
        data: [1, 2, 3]
      }, {
        data: [4, 3, 2]
      }]
    });

    assert.strictEqual(
      chart.legend.box.width > 340 && chart.legend.box.width < 360,
      true,
      'Legend box contains checkboxes - 2 items'
    );

    chart.series[0].remove();

    assert.strictEqual(
      chart.legend.box.width > 170 && chart.legend.box.width < 190,
      true,
      'Legend box contains checkbox - 1 item'
    );

    chart.update({
      plotOptions: {
        series: {
          showCheckbox: false
        }
      }
    });

    assert.strictEqual(
      chart.legend.box.width > 70 && chart.legend.box.width < 90,
      true,
      'Legend box without checkboxes is of proper size - 1 item'
    );

    chart.addSeries({
      data: [5, 2, 4]
    });
    chart.addSeries({
      data: [15, 12, 14]
    });
    chart.addSeries({
      data: [2, 2, 2]
    });

    assert.strictEqual(
      chart.legend.box.width > 370 && chart.legend.box.width < 390,
      true,
      'Legend box without checkboxes is of proper size - 4 items'
    );

    chart.update({
      plotOptions: {
        series: {
          showCheckbox: true
        }
      }
    });

    assert.strictEqual(
      chart.legend.box.width > 510 && chart.legend.box.width < 530,
      true,
      'Legend box contains checkboxes - 4 items'
    );
});