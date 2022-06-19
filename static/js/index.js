// 柱状图模块1
(function () {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 2.指定配置项数据
    var option = {
        color: ['#2189c1'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            top: '10%',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['算法工程师', 'A人工智能', '数据挖掘工程师', 'python工程师', '网络工程师', 'Java工程师'],
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签相关代码
                axisLabel: {
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "12",
                    interval: 0,
                    rotate: '20'
                },
                // 不显示x坐标轴的样式
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                // 修改刻度标签相关样式
                axisLabel: {
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "12"
                },
                // y轴的线条改为2像素
                axisLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.1)",
                        width: 2
                    }
                },
                // y轴分割线样式
                splitLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '市场岗位（万人）',
                type: 'bar',
                barWidth: '35%',
                data: [152, 280, 334, 390, 330, 265],
                itemStyle: {
                    // 修改柱子为圆角
                    barBorderRadius: 5
                }
            }
        ]
    };
    // 3.把配置项数据给实例对象
    myChart.setOption(option);
    // 4.让图表自动适应屏幕大小
    window.addEventListener("resize", function () {
       myChart.resize();
    });
})();
// 折线图模块1
(function () {
    // 数据准备
    var yearData = [
         {
            year: "2019",
            data: [
                [310, 230, 220, 320, 324, 440, 301, 364, 290, 330, 350, 310],
                [100, 135, 190, 264, 240, 345, 290, 219, 132, 202, 380, 334],
                [140, 360, 380, 396, 424, 390, 430, 410, 313, 380, 291, 164]
            ]
        },
        {
            year: "2020",
            data: [
                [190, 214, 430, 459, 341, 474, 450, 480, 470, 263, 430, 310],
                [274, 390, 251, 284, 240, 380, 360, 280, 270, 470, 365, 280],
                [154, 420, 351, 354, 285, 282, 270, 470, 380, 360, 295, 365]
            ]
        }
    ];
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".line .chart"));
    // 2.指定配置项数据
    var option = {
        // 通过color指定两条线的颜色
        color: ['#00f2f1', '#ed3f35', '#F8B448'],
        tooltip: {
            trigger: 'axis'
        },
        // 如果series对象有name值，则可以不用写data
        legend: {
            data: ['python', 'spark', 'hadoop'],
            // 修改图例组件的文字颜色
            textStyle: {
                color: "#4c9bfd",
                fontWeight: 'bolder'
            },
            right: "10%"
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true, // 显示边框
            borderColor: "#012f4a", // 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {show: false}, // 去除刻度线
            axisLabel: {color: "#fff"}, // 文本颜色
            axisLine: {show: false} // 去除轴线
        },
        yAxis: {
            type: 'value',
            axisTick: {show: false}, // 去除刻度线
            axisLabel: {color: "#fff"}, // 文本颜色
            axisLine: {show: false}, // 去除轴线
            splitLine: {lineStyle: {color: "#012f4a"}}
        },
        series: [
            {
                name: 'python',
                type: 'line',
                smooth: true,
                // data: [124, 140, 201, 234, 190, 330, 310, 230, 220, 320, 310, 220]
                data: yearData[0].data[0]
            },
            {
                name: 'spark',
                type: 'line',
                smooth: true,
                // data: [140, 164, 291, 424, 390, 430, 410, 313, 380, 360, 380, 279]
                data: yearData[0].data[1]
            },
            {
                name: 'hadoop',
                type: 'line',
                smooth: true,
                // data: [140, 164, 291, 424, 390, 430, 410, 313, 380, 360, 380, 279]
                data: yearData[0].data[2]
            }
        ]
    };
    // 3.把配置项数据给实例对象
    myChart.setOption(option);
    // 4.让图表自动适应屏幕大小
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    // 5.点击切换效果
    $(".line h2").on("click", "a", function () {
        // alert("ok")
        // console.log($(this).index())
        // 点击a标签之后，根据当前a的索引号找到对应的yearData中的相关数据
        // console.log(yearData[$(this).index()])
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        option.series[2].data = obj.data[2];
        // 重新渲染图表
        myChart.setOption(option)
    });
})();
// 饼图模块1
(function () {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    // 2.指定配置项数据
    var img = 'data:image/png;base64,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';

    var trafficWay = [{value: 565, name: '自动化测试'},
                        {value: 456, name: '数据分析'},
                        {value: 480, name: '人工智能'},
                        {value: 534, name: '网络爬虫'},
                        {value: 530, name: '服务器运维'},
                        {value: 535, name: '智能家居'},
                        {value: 458, name: '软件开发'},
                        {value: 485, name: 'WEB开发'}];


    var data = [];
    var color=['#00ffff','#ffa800','#006ced','#ffe000',
        '#00cfff','#3CFF36','#ff3000', "#CE4DED"];
    for (var i = 0; i < trafficWay.length; i++) {
        data.push({
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 20,
                    borderColor:color[i],
                    shadowColor: color[i]
                }
            }
        }, {
            value: 100,  // 每段的长度
            name: '',
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
    }
        });
    }
    var seriesOption = [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [55, 62],
        center: ["50%", "35%"],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,  // 是否显示文字
                    position: 'outside',
                    color: '#ddd',
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < trafficWay.length; i++) {
                            total += trafficWay[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if(params.name !== '') {
                            // return '发展方向：' + params.name + '\n' + '\n' + '占百分比：' + percent + '%';
                            return params.name + ': ' + percent + '%';
                        }else {
                            return '';
                        }
                    },
                },
                labelLine: {
                    length:3,
                    length2:20,
                    show: true,  // 是否显示连接线
                    color:'#00ffff'
                }
            }
        },
        data: data
    }];
    option = {
        // backgroundColor: '#0A2E5D',
        color : color,
        title: {
            text: '行业领域',
            top: '30%',
            textAlign: "center",
            left: "49.5%",
            textStyle: {
                color: '#fff',
                fontSize: 15,
                fontWeight: '40'
            },
            label:{show: false},
        },
        graphic: {
        elements: [{
            type: "image",
            z: 3,
            style: {
                image: img,
                width: 85,
                height: 85
            },
            left: 'center',
            top:  '15%',
            position: [100, 100]
        }]
        },
        tooltip: {
            show: true,
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            icon: "circle",
            orient: 'horizontal',
            // x: 'left',
            data:['自动化测试', '数据分析', '人工智能', '网络爬虫', '服务器运维', '智能家居', '软件开发', 'WEB开发'],
            // right: 340,
            bottom: 0,
            align: 'left',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: "#fff",
              fontSize: 12
            },
            itemGap: 20
        },
        toolbox: {
            show: false
        },
        series: seriesOption
    };
    // 3.把配置项数据给实例对象
    myChart.setOption(option);
    // 4.让图表自动适应屏幕大小
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
// 柱状图模块2
(function () {
    // 声明颜色数组
    var myColor = ['#1089E7', '#F57474', '#56D0E3',
        '#F8B448', '#8B78F6'];
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    // 2.指定配置项数据
    var option = {
        // title: {
        //     text: "单位：万人",
        //     right: '3%',
        //     top: '0%',
        //     textStyle: {
        //         fontSize: 10,
        //         color: "#fff"}
        // },
        grid: {
            top: '10%',
            left: '22%',
            bottom: '10%',
            // containLabel: true
        },
        // 不显示x轴的相关信息
        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: 'category',
                inverse: true,
                data: ['本科', '硕士', '博士', '大专', 'python工程师'],
                // 不显示y轴坐标轴线
                axisLine: {show: false},
                // 不显示刻度
                axisTick: {show: false},
                // 把刻度标签文字设置为白色
                axisLabel: {color: "#fff"}
            },
            {
                inverse: true,
                data: [864, 793, 610, 780, 953],
                // 不显示y轴坐标轴线
                axisLine: {show: false},
                // 不显示刻度
                axisTick: {show: false},
                // 把刻度标签文字设置为白色
                axisLabel: {show: false, color: "#fff"}
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [71.9, 51.5, 52.8, 66.7, 87.2],
                yAxisIndex: 0,
                // 修改柱子为圆角
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        // 为color属性设置一个返回值函数
                        color: function (params) {
                            // var num = myColor.length;
                            // return myColor[params.dataIndex % num];
                            return myColor[params.dataIndex];
                        }
                    }
                },
                // 设置柱子之间的距离
                barCategoryGap: 50,
                // 设置柱子的宽度
                barWidth: 10,
                // 显示柱子内的文字
                label: {
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    show: true,
                    position: "inside",
                    // {c}会自动的解析为数据 data里面的数据
                    formatter: "{c}  万人",
                    textStyle: {
                        fontSize: 10,
                        fontWeight: "bolder"
                    }
                }
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 15,
                data: [100, 100, 100, 100, 100],
                yAxisIndex: 1,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                }
            }
        ]
    };
    // 3.把配置项数据给实例对象
    myChart.setOption(option);
    // 4.让图表自动适应屏幕大小
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
// 折线图模块2
(function () {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".line2 .chart"));
    // 指定配置项数据
    var option = {
        title: {
          text: "单位: 元(RMB)",
          right: '5%',
          top: '10%',
          textStyle: {
              color: "#fff",
              fontSize: 10
          }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['python', 'spark', 'hadoop'],
            top: "0%",
            textStyle: {
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "12",
                fontWeight: "bolder"
            }
        },
        grid: {
            left: '10%',
            top: '30%',
            right: '10%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ["2015", "2016", "2017", "2018", "2019", "2020"],
                axisLabel: {
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: { color: "rgba(255, 255, 255, 0.2)" }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {show: false},
                splitLine: {
                    lineStyle: {color: "rgba(255, 255, 255, 0.1)"}
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {color: "rgba(255, 255, 255, 0.1)"}
                }
            }
        ],
        series: [
            {
                name: 'python',
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: "#0184d5",
                    width: 2
                },
                // 填充颜色设置
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始色
                        },
                        {
                            offset: 0.8,
                            color: "rgba(1, 132, 213, 0.1)" // 渐变色的结束色
                        }
                    ],
                    false
                    ),
                    showdowColor: "rgba(0, 0, 0, 0.1)"
                },
                symbol: "circle", // 设置拐点
                symbolSize: 5, // 设置拐点大小
                showSymbol: false, // 最开始不显示
                // 设置拐点的颜色及边框
                itemStyle: {
                  color: "#0184d5",
                  borderColor: "rgba(221, 220, 107, 0.1)",
                  borderWidth: 12
                },
                data: [6500, 9500, 10000, 15000, 18000, 20000]
            },
            {
                name: 'spark',
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: "#00d887",
                    width: 2
                },
                // 填充颜色设置
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgba(0, 216, 135, 0.4)" // 渐变色的起始色
                        },
                        {
                            offset: 0.8,
                            color: "rgba(0, 216, 135, 0.1)" // 渐变色的结束色
                        }
                    ],
                    false
                    ),
                    showdowColor: "rgba(0, 0, 0, 0.1)"
                },
                symbol: "circle", // 设置拐点
                symbolSize: 5, // 设置拐点大小
                showSymbol: false, // 最开始不显示
                // 设置拐点的颜色及边框
                itemStyle: {
                  color: "#00d887",
                  borderColor: "rgba(221, 220, 107, 0.1)",
                  borderWidth: 12
                },
                data: [6500, 7500, 10000, 13000, 15000, 19000]
            },
            {
                name: 'hadoop',
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: "#8B78F6",
                    width: 2
                },
                // 填充颜色设置
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgba(193,143,216,0.4)" // 渐变色的起始色
                        },
                        {
                            offset: 0.8,
                            color: "rgba(214, 143, 216, 0.1)" // 渐变色的结束色
                        }
                    ],
                    false
                    ),
                    showdowColor: "rgba(0, 0, 0, 0.1)"
                },
                symbol: "circle", // 设置拐点
                symbolSize: 5, // 设置拐点大小
                showSymbol: false, // 最开始不显示
                // 设置拐点的颜色及边框
                itemStyle: {
                  color: "#8B78F6",
                  borderColor: "rgba(221, 220, 107, 0.1)",
                  borderWidth: 12
                },
                data: [7800, 8000, 12000, 15000, 19000, 17500]
            }
        ]
    };
    // 3.把配置项数据给实例对象
    myChart.setOption(option);
    // 4.让图表自动适应屏幕大小
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
// 饼图模块2
(function () {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".pie2 .chart"));
    // 2.指定配置项数据
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            bottom: "0%",
            itemWidth: 8,
            itemHeight: 8,
            data: ['北京', '上海', '广东', '江苏', '浙江', '湖南', '山东', '海南'],
            textStyle: {
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: 12
            }
        },
        color: ["#006cff", "#60cda0", "#ed8884", "#ff9f7f",
            "#0096ff", "#9fe6b8", "#32c5e9", "#1d9dff"],
        series: [
            {
                name: '岗位数',
                type: 'pie',
                radius: ["10%", "70%"],
                center: ['50%', '42%'],
                roseType: 'radius',
                label: {fontSize: 10},
                labelLine: {
                    length: 6,
                    length2: 8
                },
                data: [
                        {value: 1300, name: '北京'},
                        {value: 990, name: '上海'},
                        {value: 1600, name: '广东'},
                        {value: 750, name: '江苏'},
                        {value: 820, name: '浙江'},
                        {value: 850, name: '湖南'},
                        {value: 760, name: '山东'},
                        {value: 790, name: '海南'}
                    ]
            }
        ]
    };
    // 3.把配置项数据给实例对象
    myChart.setOption(option);
    // 4.让图表自动适应屏幕大小
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
// 动态地图
(function() {
    var myChart = echarts.init(document.querySelector(".map .chart"));

    $.ajax({
        url: '/get_map_data',
        success: function(data) {
            json_data = JSON.parse(data);

            var years = json_data["year"];
            var province = json_data["province"];
            var playlist_data = json_data["playlist_num"];

            var option = {
                baseOption: {
                    timeline: {
                        axisType: 'category',
                        autoPlay: true,
                        playInterval: 3000,
                        symbolSize: 12,
                        left: '5%',
                        right: '5%',
                        bottom: '0%',
                        width: '90%',
                        data: years,
                        tooltip: {
                            formatter: years
                        },
                        lineStyle: {
                            color: '#fff'
                        },
                        label: {
                            color: '#fff'
                        },
                        emphasis: {
                            itemStyle: {
                                color: '#ffb247'
                            }
                        },
                        checkpointStyle: {
                            color: '#ffb247',
                            borderWidth: 0,
                        },
                        controlStyle: {
                            color: '#fff',
                            borderColor: '#fff',
                        },
                    },
                    tooltip: {
                        show: true,
                        formatter: function(params) {
                            return params.name + ': ' + params.value
                        },
                    },
                    visualMap: {
                        type: 'piecewise',
                        pieces: [
                            {
                                min: 1000,
                                color: '#ffe200'
                            },{
                                min: 500,
                                max: 999,
                                color: '#bee587'
                            },{
                                min: 100,
                                max: 499,
                                color: '#a7dbb7'
                            },{
                                min: 10,
                                max: 99,
                                color: '#92d3e3'
                            },{
                                min: 1,
                                max: 9,
                                color: '#87cefa'
                            },{
                                value: 0,
                                color: '#acdcfa'
                            }
                        ],
                        orient: 'vertical',
                        itemWidth: 25,
                        itemHeight: 15,
                        showLabel: true,
                        seriesIndex: [0],
                        textStyle: {
                            color: '#7b93a7'
                        },
                        bottom: '10%',
                        left: '5%',
                    },
                    grid: {
                        right: '5%',
                        top: '20%',
                        bottom: '10%',
                        width: '20%'
                    },
                    xAxis: {
                        min: 0,
                        max: 2000,
                        show: false
                    },
                    yAxis: [{
                        inverse: true,
                        offset: '2',
                        type: 'category',
                        data: '',
                        nameTextStyle: {
                            color: '#fff'
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: 14,
                                color: '#fff',
                            },
                            interval: 0
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#333'
                            },
                            splitLine: {
                                show: false
                            }
                        },
                    }],
                    geo: {
                        map: 'china',
                        right: '35%',
                        left: '5%',
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: "#acdcfa",
                                borderColor: '#2b91b7',
                                borderWidth: 1
                            },
                            emphasis: {
                                areaColor: '#17f0cc'
                            }
                        }
                    },
                    series: [{
                        name: 'mapSer',
                        type: 'map',
                        map: 'china',
                        roam: false,
                        geoIndex: 0,
                        label: {
                            show: false,
                        },
                    },{
                        name: '',
                        type: 'bar',
                        zlevel: 2,
                        barWidth: '25%',
                        itemStyle: {
                            barBorderRadius: 10,
                        },
                        label: {
                            normal: {
                                show: true,
                                fontSize: 14,
                                color: 'rgba(255, 255, 255, 0.6)',
                                position: 'right',
                                formatter: '{c}'
                            }
                        },
                    }],
                },
                animationDurationUpdate: 3000,
                animationEasingUpdate: 'quinticInOut',
                options: []
            };

            for (var i=0; i<years.length; i++) {
                var res = [];
                for (j=0; j<playlist_data[i].length; j++) {
                    res.push({
                        name: province[j],
                        value: playlist_data[i][j]
                    });
                }
                res.sort(function(a, b) {
                    return b.value - a.value;
                }).slice(0, 6);

                res.sort(function(a, b) {
                    return a.value - b.value;
                });

                var res1 = [];
                var res2 = [];
                for (t=0; t<10; t++) {
                    res1[t] = res[res.length - 1 - t].name;
                    res2[t] = res[res.length - 1 - t].value;
                }
                option.options.push({
                    title: {
                        text: years[i] + "年Python国内就业岗位",
                        textStyle: {
                            color: '#fff',
                            fontSize: 20
                        },
                        left: '8%',
                        top: '10%'
                    },
                    yAxis: {
                        data: res1,
                    },
                    series: [{
                        type: 'map',
                        data: res
                    },{
                        type: 'bar',
                        data: res2,
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    var colorList = [{
                                        colorStops: [{
                                            offset: 0,
                                            color: '#ffff00'
                                        },{
                                            offset: 1,
                                            color: '#ffe200'
                                        }]
                                    },{
                                        colorStops: [{
                                            offset: 0,
                                            color: '#acdcfa',
                                        },{
                                            offset: 1,
                                            color: '#87cefa'
                                        }]
                                    }];
                                    if (params.dataIndex < 3) {
                                        return colorList[0]
                                    } else {
                                        return colorList[1]
                                    }
                                }
                            }
                        }
                    }]
                })
            };

            myChart.setOption(option);
        }
    });
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
