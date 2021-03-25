function desenharGraficoPizza(){

	/*var tabela = new google.visualization.DataTable();

	tabela.addColumn('string','Categorias');
	tabela.addColumn('number','Tecnologia');
	tabela.addColumn({type:'number', role:'annotation'});
	tabela.addColumn({type:'string', role:'style'});
	tabela.addColumn('number','Marketing');
	tabela.addColumn({type:'number', role:'annotation'});
	tabela.addColumn({type:'string', role:'style'});
	tabela.addColumn('number','Administrativo');
	tabela.addColumn({type:'number', role:'annotation'});
	tabela.addColumn({type:'string', role:'style'});
	tabela.addColumn('number','Linhas de crédito');
	tabela.addColumn({type:'number', role:'annotation'});
	tabela.addColumn({type:'string', role:'style'});
	tabela.addColumn('number','Segurança');
	tabela.addColumn({type:'number', role:'annotation'});
	tabela.addColumn({type:'string', role:'style'});
	tabela.addColumn('number','Atendimento ao cliente');
	tabela.addColumn({type:'number', role:'annotation'});
	tabela.addColumn({type:'string', role:'style'});

		tabela.addRows([
			//['Tecnologia', 47814, 47814, 12345, 'color:#a6a6a6', 12345],
			//['Marketing', 22552,  22552, 6789, 'color:#a6a6a6', 6789],
			//['Administrativo', 65243, 'color: #1b9af5',65243 ],
			//['Linhas de crédito', 55504, 'color:#a6a6a6', 55504],
			//['Segurança', 86085,'color:#f5921b',86085 ],
			//['Atendimento ao cliente', 12605,'color:#a6a6a6', 12605 ]
			[		
				'Categorias', 47814, 47814, 'color:#a6a6a6', 
						 22552, 22552, 'color:#a6a6a6',
						 65243, 65243, 'color: #1b9af5',
						 55504, 55504, 'color:#a6a6a6',
						 86085, 86085, 'color:#f5921b',
						 12605, 12605, 'color:#a6a6a6'
														]
		]);*/

		var tabela = new google.visualization.arrayToDataTable([

				['Categorias', 
					'Tecnologia', {role:'annotation'}, {role:'style'} ,
					'Marketing', {role:'annotation'}, {role:'style'} ,
					'Administrativo', {role:'annotation'}, {role:'style'} ,
					'Linhas de crédito', {role:'annotation'}, {role:'style'} ,
					'Segurança',{role:'annotation'}, {role:'style'} ,
					'Atendimento ao cliente', {role:'annotation'}, {role:'style'}],
				
				['Categorias', 
					47814, 47814, 'color:#a6a6a6',
					22552, 22552, 'color:#a6a6a6',
					65243, 65243,'color: #1b9af5',
					55504, 55504, 'color:#a6a6a6',
					86085, 86085, 'color:#f5921b',
					12605, 12605, 'color:#a6a6a6']


			]);

		//tabela.sort({column: 1, asc: true});

		var opcoes = {
			title:'Gastos por unidade de negócio',
			height: 400,
			width: 1300,
			legend:'none',
			hAxis:{			
					ticks: [
							{v: 0, f: ''},
							.165, 
							{v: .2428, f:'7,78%'}, 
							{v: .4679, f:'22,51%'}, 
							{v: .6594, f:'19,15%'},
							{v: .9564, f:'29,7%'},
							{v: 1, f: '4,35%'}
					]
							
				},
			isStacked: 'percent',

			//pieSliceText: 'value',
			//slices:
			/*series: 
				{
					0:{color:'#a6a6a6'},
					1:{color:'#a6a6a6'},
					2:{color:'#f5921b'},
					3:{color:'#a6a6a6'},
					4:{color:'#1b9af5'},
					5:{color:'#a6a6a6'}	
				},*/
			//pieStartAngle: 4,
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
	
	var grafico = new google.visualization.BarChart(document.getElementById('graficoPizza'));
            grafico.draw(tabela, opcoes);
    
}











