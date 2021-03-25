function desenharGraficoAnos(){

	var tabela = new google.visualization.arrayToDataTable([

				['Categorias', 
					'Tecnologia', {role:'annotation'}, {role:'style'} ,
					'Marketing', {role:'annotation'}, {role:'style'} ,
					'Administrativo', {role:'annotation'}, {role:'style'} ,
					'Linhas de crédito', {role:'annotation'}, {role:'style'} ,
					'Segurança',{role:'annotation'}, {role:'style'} ,
					'Atendimento ao cliente', {role:'annotation'}, {role:'style'}],
				
				[new Date('2012'), 
					47814, 47814, 'color:transparent',
					22552, 22552, 'color:transparent',
					65243, 65243,'color: transparent',
					55504, 55504, 'color:transparent',
					86085, 86085, 'color:transparent',
					12605, 12605, 'color:transparent'],

				[new Date('2013'), 
					47820, 47820, 'color:#a6a6a6',
					22500, 22500, 'color:#a6a6a6',
					65211, 65211,'color: #1b9af5',
					55604, 55604, 'color:#a6a6a6',
					85231, 85231, 'color:#f5921b',
					12537, 12537, 'color:#a6a6a6'],

				[new Date('2014'), 
					47844, 47844, 'color:#a6a6a6',
					22131, 22131, 'color:#a6a6a6',
					65100, 65100,'color: #1b9af5',
					55624, 55624, 'color:#a6a6a6',
					84512, 84512, 'color:#f5921b',
					12530, 12530, 'color:#a6a6a6']



			]);

		var opcoes = {
			title:'Gastos por unidade de negócio',
			height: 400,
			width: 1300,
			legend:'none',
			/*hAxis:{			
					ticks: [
							{v: 0, f: ''},
							.165, 
							{v: .2428, f:'7,78%'}, 
							{v: .4679, f:'22,51%'}, 
							{v: .6594, f:'19,15%'},
							{v: .9564, f:'29,7%'},
							{v: 1, f: '4,35%'}
					]
							
				},*/
			hAxis:{ format: 'yyyy', gridlines:{count:4}},
			isStacked: 'percent',
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
					left: 160,
					top: 100,
					width:'78%',
					height:'70%'
				}
			};
	
	var grafico = new google.visualization.ColumnChart(document.getElementById('graficoAnos'));
            grafico.draw(tabela, opcoes);
    
}











