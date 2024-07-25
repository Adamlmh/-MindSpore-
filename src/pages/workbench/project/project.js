import "./project.css"
import { Button, Menu } from 'antd'
import { PlusOutlined,DatabaseOutlined } from "@ant-design/icons"
const items=[
{
    key: '1',
        label: <label className="model_label"><div className="project_name">新建项目1</div><span className="project_icon"><Button className="iconbtn" type="text"  shape="circle" size="small"><i className="iconfont bianji icon-bianji"></i> </Button>
            <Button className="iconbtn" shape="circle" type="text"  size="small"><i className="iconfont bianji icon-shanchu"></i> </Button></span> </label>,
        icon: <DatabaseOutlined />,
  },
    {
        key: '2',
        label: <label>新建项目2 <span className="project_icon"><Button className="iconbtn" type="text" shape="circle" size="small"><i className="iconfont bianji icon-bianji"></i> </Button>
            <Button className="iconbtn" shape="circle" type="text" size="small"><i className="iconfont bianji icon-shanchu"></i> </Button></span> </label>,
        icon: <DatabaseOutlined />,
    },
]
const Project =()=>{
    return (
        <div className="project">
            <Button className="add" icon={<PlusOutlined />} type="text">新建项目</Button>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
               
                className="workbench_menu"
                items={items}
            />
        </div>
    )
}

export default Project;