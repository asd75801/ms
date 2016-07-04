/**
 * @author jacob
 * @version 0.0.1.0
 * */
app.controller('indexCtrl', function ($scope) {

    //kind editor 学习
    var editor;
    KindEditor.ready(function (K) {
        editor = K.create('textarea[name="content"]', {
            allowFileManager: true
        });
        K('input[name=getHtml]').click(function (e) {
            alert(editor.html());
        });
        K('input[name=isEmpty]').click(function (e) {
            alert(editor.isEmpty());
        });
        K('input[name=getText]').click(function (e) {
            alert(editor.text());
        });
        K('input[name=selectedHtml]').click(function (e) {
            alert(editor.selectedHtml());
        });
        K('input[name=setHtml]').click(function (e) {
            editor.html('<h3>Hello KindEditor</h3>');
        });
        K('input[name=setText]').click(function (e) {
            editor.text('<h3>Hello KindEditor</h3>');
        });
        K('input[name=insertHtml]').click(function (e) {
            editor.insertHtml('<strong>插入HTML</strong>');
        });
        K('input[name=appendHtml]').click(function (e) {
            editor.appendHtml('<strong>添加HTML</strong>');
        });
        K('input[name=clear]').click(function (e) {
            editor.html('');
        });
    });

    //echarts 学习
    //http://echarts.baidu.com/echarts2/doc/example.html
    var myChart = echarts.init(document.getElementById('main'));
    // var option = {
    //     title: {
    //         text: 'ECharts 入门示例'
    //     },
    //     tooltip: {},
    //     legend: {
    //         data:['销量']
    //     },
    //     xAxis: {
    //         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    //     },
    //     yAxis: {},
    //     series: [{
    //         name: '销量',
    //         type: 'bar',
    //         data: [5, 20, 36, 10, 10, 20]
    //     }]
    // };
    /*var option = {
     title : {
     text: '未来一周气温变化',
     subtext: '纯属虚构'
     },
     tooltip : {
     trigger: 'axis'
     },
     legend: {
     data:['最高气温','最低气温']
     },
     toolbox: {
     show : true,
     feature : {
     mark : {show: true},
     dataView : {show: true, readOnly: false},
     magicType : {show: true, type: ['line', 'bar']},
     restore : {show: true},
     saveAsImage : {show: true}
     }
     },
     calculable : true,
     xAxis : [
     {
     type : 'category',
     boundaryGap : false,
     data : ['周一','周二','周三','周四','周五','周六','周日']
     }
     ],
     yAxis : [
     {
     type : 'value',
     axisLabel : {
     formatter: '{value} °C'
     }
     }
     ],
     series : [
     {
     name:'最高气温',
     type:'line',
     data:[11, 11, 15, 13, 12, 13, 10],
     markPoint : {
     data : [
     {type : 'max', name: '最大值'},
     {type : 'min', name: '最小值'}
     ]
     },
     markLine : {
     data : [
     {type : 'average', name: '平均值'}
     ]
     }
     },
     {
     name:'最低气温',
     type:'line',
     data:[1, -2, 2, 5, 3, 2, 0],
     markPoint : {
     data : [
     {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
     ]
     },
     markLine : {
     data : [
     {type : 'average', name : '平均值'}
     ]
     }
     }
     ]
     };*/
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    myChart.setOption(option);


    //datetimepicker 学习
    $('#datetimepicker').datetimepicker();


    //d3 tree 学习
    //https://segmentfault.com/a/1190000000422344
    var treeData = [
        {
            "name": "Top Level",
            "parent": "null",
            "value": 10,
            "type": "black",
            "level": "red",
            "cat": "suit",
            "children": [
                {
                    "name": "Level 2: A",
                    "parent": "Top Level",
                    "value": 15,
                    "type": "grey",
                    "level": "red",
                    "cat": "suit",
                    "children": [
                        {
                            "name": "Son of A",
                            "parent": "Level 2: A",
                            "value": 5,
                            "type": "steelblue",
                            "cat": "licensing",
                            "level": "orange"
                        },
                        {
                            "name": "Daughter of A",
                            "parent": "Level 2: A",
                            "value": 8,
                            "type": "steelblue",
                            "cat": "licensing",
                            "level": "red"
                        }
                    ]
                },
                {
                    "name": "Level 2: A",
                    "parent": "Top Level",
                    "value": 15,
                    "type": "grey",
                    "level": "red",
                    "cat": "suit",
                    "children": [
                        {
                            "name": "Son of A",
                            "parent": "Level 2: A",
                            "value": 5,
                            "type": "steelblue",
                            "cat": "licensing",
                            "level": "orange"
                        },
                        {
                            "name": "Daughter of A",
                            "parent": "Level 2: A",
                            "value": 8,
                            "type": "steelblue",
                            "cat": "licensing",
                            "level": "red"
                        }
                    ]
                },
                {
                    "name": "Level 2: A",
                    "parent": "Top Level",
                    "value": 15,
                    "type": "grey",
                    "level": "red",
                    "cat": "suit",
                    "children": [
                        {
                            "name": "Son of A",
                            "parent": "Level 2: A",
                            "value": 5,
                            "type": "steelblue",
                            "cat": "licensing",
                            "level": "orange"
                        },
                        {
                            "name": "Daughter of A",
                            "parent": "Level 2: A",
                            "value": 8,
                            "type": "steelblue",
                            "cat": "licensing",
                            "level": "red"
                        },
                        {
                            "name": "Level 2: A",
                            "parent": "Top Level",
                            "value": 15,
                            "type": "grey",
                            "level": "red",
                            "cat": "suit",
                            "children": [
                                {
                                    "name": "Son of A",
                                    "parent": "Level 2: A",
                                    "value": 5,
                                    "type": "steelblue",
                                    "cat": "licensing",
                                    "level": "purpole"
                                },
                                {
                                    "name": "Daughter of A",
                                    "parent": "Level 2: A",
                                    "value": 8,
                                    "type": "steelblue",
                                    "cat": "licensing",
                                    "level": "red"
                                },
                                {
                                    "name": "Level 2: A",
                                    "parent": "Top Level",
                                    "value": 15,
                                    "type": "cyan",
                                    "level": "orange",
                                    "cat": "suit",
                                    "children": [
                                        {
                                            "name": "Son of A",
                                            "parent": "Level 2: A",
                                            "value": 5,
                                            "type": "steelblue",
                                            "cat": "licensing",
                                            "level": "cyan"
                                        },
                                        {
                                            "name": "Daughter of A",
                                            "parent": "Level 2: A",
                                            "value": 8,
                                            "type": "steelblue",
                                            "cat": "licensing",
                                            "level": "red"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Level 2: A",
                    "parent": "Top Level",
                    "value": 15,
                    "type": "grey",
                    "level": "blue",
                    "cat": "suit",
                    "children": [
                        {
                            "name": "Son of A",
                            "parent": "Level 2: A",
                            "value": 5,
                            "type": "steelblue",
                            "cat": "licensing",
                            "level": "yellow"
                        },
                        {
                            "name": "Daughter of A",
                            "parent": "Level 2: A",
                            "value": 8,
                            "type": "steelblue",
                            "cat": "licensing",
                            "level": "green"
                        }
                    ]
                },
                {
                    "name": "Level 2: A",
                    "parent": "Top Level",
                    "value": 15,
                    "type": "green",
                    "level": "green",
                    "cat": "suit",
                    "children": [
                        {
                            "name": "Son of A",
                            "parent": "Level 2: A",
                            "value": 5,
                            "type": "steelblue",
                            "cat": "licensing",
                            "level": "green"
                        },
                        {
                            "name": "Daughter of A",
                            "parent": "Level 2: A",
                            "value": 8,
                            "type": "grey",
                            "cat": "licensing",
                            "level": "blue"
                        }
                    ]
                },
                {
                    "name": "Level 2: B",
                    "parent": "Top Level",
                    "value": 10,
                    "type": "grey",
                    "cat": "resolved",
                    "level": "cyan"
                }
            ]
        }
    ];
    d3tree(treeData, '#myMenu1');
});