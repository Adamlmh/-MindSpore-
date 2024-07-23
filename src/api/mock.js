import Mock from 'mockjs';

// 模拟 GET 请求返回的数据
Mock.mock('/api/data', 'get', {
    'list|5-10': [{
        'id|+1': 1,
        'name': '@cname',
        'age|20-30': 1
    }]
});

// 模拟 POST 请求返回的数据
Mock.mock('/api/save', 'post', {
    'code': 200,
    'message': '保存成功'
});