import React from 'react';
import * as echarts from 'echarts';
import EChart from 'echarts-for-react';
import 'echarts-gl'; // 导入 3D 插件

const MyECharts = () => {
    const option = {
        title: {
            text: '近七天模型使用量',
            left: 'center'
        },
        xAxis: {
            type: 'category',
            data: ['09-01', '09-02', '09-03', '09-04', '09-05', '09-06', '09-07']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };
    return (
        <div style={{ height: '100%' }}>
            <EChart
                option={option}
                style={{ height: '350px', width: '100%', padding: '15px' }}
                notMerge={true}
            />
        </div>

    );
};

export default MyECharts;