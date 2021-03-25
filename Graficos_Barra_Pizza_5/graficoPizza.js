function desenharGraficoPizza(){

	var tabela = new google.visualization.DataTable();

	tabela.addColumn('string','categorias');
	tabela.addColumn('number', 'valores');

		tabela.addRows([
			['Tecnologia', 47814],
			['Marketing', 22552],
			['Administrativo', 65243],
			['Linhas de crédito', 55504],
			['Segurança', 86085],
			['Atendimento ao cliente', 12605]
		]);	

		tabela.sort({column: 1, asc: true});

		var opcoes = {
			title:'Gastos por unidade de negócio',
			height: 400,
			width: 900,
			legend: 
				{
					position: 'labeled', 
					textStyle: 
						{
							color: '#928e8a', 
							fontSize: 16
						}
				},
			pieSliceText: 'value',
			slices: 
				{
					0:{color:'#a6a6a6'},
					1:{color:'#a6a6a6'},
					2:{color:'#a6a6a6'},
					3:{color:'#a6a6a6'},
					4:{color:'#1b9af5', offset: 0.15},
					5:{color:'#f5921b', offset: 0.2}	
				},
			pieStartAngle: 4,
			titleTextStyle: 
				{ 
					color: '#5e5851',
					fontName: 'Arial',
					fontSize: 20,
					bold: true,
					italic: false 
				},
			chartArea:
				{
					left: 80,
					top: 100,
					width:'90%',
					height:'70%'
				}
			};
	
	var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
            grafico.draw(tabela, opcoes);
    
}











