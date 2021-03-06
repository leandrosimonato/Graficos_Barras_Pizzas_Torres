function desenharGraficoBarrasAnos() {

    
    var tabela = new google.visualization.arrayToDataTable([
        [
            'Categorias',
            'Tecnologia', {role: 'annotation'}, {role: 'style'},
            'Marketing', {role: 'annotation'}, {role: 'style'},
            'Administrativo', {role: 'annotation'}, {role: 'style'},
            'Linhas de crédito', {role: 'annotation'}, {role: 'style'},
            'Segurança', {role: 'annotation'}, {role: 'style'},
            'Atendimento ao cliente', {role: 'annotation'}, {role: 'style'},
        ],

        [
            '2012',
            47814, 47814, 'color:#a6a6a6',
            22552, 22552, 'color:#a6a6a6',
            65243, 65243, 'color:#1b9af5',
            55504, 55504, 'color:#a6a6a6',
            86085, 86085, 'color:#f5921b',
            12605, 12605, 'color:#a6a6a6',
        ],

        [
            '2013',
            46020, 46020, 'color:#a6a6a6',
            22100, 22100, 'color:#a6a6a6',
            64211, 64211, 'color:#1b9af5',
            50604, 50604, 'color:#a6a6a6',
            84231, 84231, 'color:#f5921b',
            12137, 12137, 'color:#a6a6a6',
        ],

        [
            '2014',
            53244, 53244, 'color:#a6a6a6',
            21131, 21131, 'color:#a6a6a6',
            65700, 65700, 'color:#1b9af5',
            45624, 45624, 'color:#a6a6a6',
            82512, 82512, 'color:#f5921b',
            10530, 10530, 'color:#a6a6a6',
        ]
    ]);

    //tabela.sort({column: 1, asc: true});

    var opcoes = {
        title: 'Gastos por unidade de negócio',
        height: 400,
        width: 1000,
        legend: 'none',
        hAxis: {
            ticks: [
                0,
                .165,
                {v: .2428,f: '7,78%'},
                {v: .4679,f: '22,51%'},
                {v: .6594,f: '19,15%'},
                {v: .9564,f: '29,7%'},
                {v: 1,f: '4,35%'},
            ],
        },
        isStacked: 'percent',
        vAxis:{direction:-1},
        pieStartAngle: 4,
        titleTextStyle: {
            color: '#5e5851',
            fontName: 'Arial',
            fontSize: 20,
            bold: true,
            italic: false
        },
        chartArea: {
            left: 160,
            top: 100,
            width: '78%',
            height: '70%'
        }
    };

    var grafico = new google.visualization.ColumnChart(document.getElementById('graficoBarrasAnos'));
    grafico.draw(tabela, opcoes);

}
