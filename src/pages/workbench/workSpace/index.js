import React, { useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import { Card, Col, Row, Button, message } from "antd";
import UploadMessage from "./upload";
import Setweight from "./Setweight";
const DynamicDragList = () => {
  const initialList = [
    { id: 1, modelName: "Item 1", url: "https://www.baidu.com", isAPI: "0" },
    { id: 2, modelName: "Item 2", url: "https://www.baidu.com", isAPI: "0" },
    { id: 3, modelName: "Item 3", url: "https://www.baidu.com", isAPI: "0" },
    { id: 4, modelName: "Item 4", url: "https://www.baidu.com", isAPI: "0" },
    { id: 5, modelName: "Item 5", url: "https://www.baidu.com", isAPI: "0" },
    { id: 6, modelName: "Item 6", url: "https://www.baidu.com", isAPI: "0" },
    { id: 7, modelName: "Item 7", url: "https://www.baidu.com", isAPI: "0" },
    { id: 8, modelName: "Item 8", url: "https://www.baidu.com", isAPI: "0" },
    { id: 9, modelName: "Item 9", url: "https://www.baidu.com", isAPI: "0" },
    { id: 10, modelName: "Item 10", url: "https://www.baidu.com", isAPI: "0" },
    { id: 11, modelName: "Item 11", url: "https://www.baidu.com", isAPI: "0" },
    { id: 12, modelName: "Item 12", url: "https://www.baidu.com", isAPI: "0" },
    { id: 13, modelName: "Item 13", url: "https://www.baidu.com", isAPI: "0" },
    { id: 14, modelName: "Item 14", url: "https://www.baidu.com", isAPI: "0" },
    { id: 15, modelName: "Item 15", url: "https://www.baidu.com", isAPI: "0" },
  ];

  const [lists, setLists] = useState([{ id: 1, items: initialList }]);

  const handleDrop = (event) => {
    console.log("Drag ended:", event);
  };

  const [modelList, setModelList] = useState([]);
  useEffect(() => {
    const newModelList = lists
      .filter((_, index) => index > 0) // Skip the first list
      .filter((list) => list.items.length > 0) // Filter out empty lists
      .map((list, index) => ({
        ListIndex: index + 1,
        parallel: list.items.length > 1 ? 1 : 0,
        models: list.items.map((item) => ({
          modelName: item.modelName,
          url: item.url,
          isAPI: item.isAPI,
        })),
      }));
    setModelList(newModelList);
  }, [lists]);

  const addNewList = () => {
    // 检查所有列表是否为空
    const isAnyListEmpty = lists.some((list) => list.items.length === 0);

    if (isAnyListEmpty) {
      message.error("当前列表中存在空列表，无法添加新的列表");
      return;
    }

    const newId = lists.length + 1;
    setLists([...lists, { id: newId, items: [] }]);
  };

  // 将第一个列表单独提取
  const [firstList, ...remainingLists] = lists;

  const handleListChange = (newList, index) => {
    // 处理拖拽后列表的更新
    const updatedLists = [...lists];
    updatedLists[index].items = newList;
    setLists(updatedLists);
  };
  console.log(JSON.stringify({ modelList }, null, 2));
  return (
    <div style={{ display: "flex", marginTop: "5px" }}>
      <div style={{ flex: "0 0 20%", padding: "0 10px", minWidth: "15vw" }}>
        {/* 渲染第一个列表 */}
        {firstList && (
          <Card
            title={`模型库`}
            bordered={false}
            style={{ height: "100vh", overflowY: "auto" }}
          >
            <Button
              onClick={addNewList}
              type="primary"
              style={{ marginBottom: 20, marginRight: "5px" }}
            >
              增加层级
            </Button>
            <UploadMessage />
            <ReactSortable
              list={firstList.items}
              setList={(newList) => handleListChange(newList, 0)}
              onEnd={handleDrop}
              group="list"
              className={`list${firstList.id}`}
              style={{
                height: "100%",
              }}
            >
              {firstList.items.map((item) => (
                <Card
                  key={item.id}
                  hoverable
                  size="small"
                  style={{ marginBottom: "12px" }}
                >
                  {item.modelName}
                </Card>
              ))}
            </ReactSortable>
          </Card>
        )}
      </div>
      <div style={{ flex: "1", padding: "0 10px", overflowY: "auto" }}>
        <Row gutter={[12, 12]}>
          {/* 渲染其余的列表 */}
          {remainingLists.map((list, index) => (
            <Col key={list.id} span={5}>
              <Card
                title={`层级:${index + 1}`}
                bordered={false}
                style={{ minHeight: "10vh", minWidth: "10vw" }}
              >
                <ReactSortable
                  list={list.items}
                  setList={(newList) => handleListChange(newList, index + 1)}
                  onEnd={handleDrop}
                  group="list"
                  className={`list${list.id}`}
                  style={{ height: "100%" }}
                >
                  {list.items.map((item) => (
                    <Card
                      key={item.id}
                      hoverable
                      size="small"
                      style={{ marginBottom: "12px" }}
                    >
                      <Setweight Name={item.modelName}></Setweight>
                    </Card>
                  ))}
                </ReactSortable>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default DynamicDragList;
