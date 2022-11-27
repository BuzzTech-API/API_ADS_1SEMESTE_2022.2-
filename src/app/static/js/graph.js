// Criar gráficos
function graficozao(tabela) {
  function BuildChart(labels, values, chartTitle) {
    let ctx = document.getElementById("myChart").getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels, // Our labels
        datasets: [{
          label: chartTitle, // Name the series
          data: values, // Our values
          backgroundColor: [ // Specify custom colors
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderColor: [ // Add custom color borders
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1 // Specify bar border width
        }]
      },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behavior of full-width/height
        scales: {
            scaleLabel: { 
                fontSize: 16 
            }
        }
      }
    });
    return myChart;
  }
  

  // Ler a tabela
  // var table = document.getElementById('dataTable');
    var json = []; // First row needs to be headers 
    var headers =[];
    for (var i = 0; i < tabela.length; i++) {
    headers[i] = tabela[i][2];
    }
    // Go through cells 
    for (var i = 0; i < tabela.length; i++) {
    var rowData = {
        id:`${tabela[i][0]}`,
        data:tabela[i][5],
        laboratorio:tabela[i][8],
        computador: tabela[i][9],
        problema:tabela[i][2],
        descrição:tabela[i][3],
        status:tabela[i][4]
    };
    json.push(rowData);
    }
    // Map JSON values back to label array
    var labels = [...new Set(json.map(item => item.problema))]; // Pegando os distintos status
    
    // Map JSON values back to values array
    var values = labels.map(function (labels) {
        e = json.filter(item => item.problema === labels).length;
        return e;
    });

    var chart = BuildChart(labels, values, "Status de chamado");
}


function BuildChart(labels, values, chartTitle) {
    let ctx = document.getElementById("myChart").getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels, // Our labels
        datasets: [{
          label: chartTitle, // Name the series
          data: values, // Our values
          backgroundColor: [ // Specify custom colors
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderColor: [ // Add custom color borders
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1 // Specify bar border width
        }]
      },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behavior of full-width/height
        scales: {
            scaleLabel: { 
                fontSize: 16 
            }
        }
      }
    });
    return myChart;
  }
  

  // Ler a tabela

  var table = document.getElementById('dataTable');
    var json = []; // First row needs to be headers 
    var headers =[];
    for (var i = 0; i < table.rows[0].cells.length; i++) {
    headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
    }

    // Go through cells 
    for (var i = 1; i < table.rows.length; i++) {
    var tableRow = table.rows[i];
    var rowData = {};
    for (var j = 0; j < tableRow.cells.length; j++) {
        rowData[headers[j]] = tableRow.cells[j].innerHTML;
    }

    json.push(rowData);
    }

    console.log(json);

    
    

    // Map JSON values back to label array
    var labels = [...new Set(json.map(item => item.problema))]; // Pegando os distintos status
    console.log(labels); // [imprime array de distintos status]
    
    // Map JSON values back to values array
    var values = labels.map(function (labels) {
        e = json.filter(item => item.problema === labels).length;
        return e;
    });

    console.log(values); // [imprime array com o valor de repetição de cada distinto status]

    var chart = BuildChart(labels, values, "Status de chamado");