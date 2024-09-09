import React from 'react';
import * as echarts from 'echarts';
import EChart  from 'echarts-for-react';
import 'echarts-gl'; // 导入 3D 插件

const MyEChart = () => {
    const option = {
        title: {
            text: '平台模型情况',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 30, name: '官方模型' },
                    { value: 20, name: '已通过用户模型' },
                    { value: 10, name: '已驳回用户模型' },
                    { value: 40, name: '待审核用户模型' },
                    
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    return (
        <div style={{height:'100%'}}>
            <EChart
                option={option}
                style={{ height: '350px', width: '100%', padding: '15px' }}
                notMerge={true}
            />
        </div>
        
    );
};

export default MyEChart;