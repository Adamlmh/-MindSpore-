import React, { useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import { Card, Col, Row, Button, message } from "antd";
import UploadMessage from "./upload";
import Setweight from "./Setweight";
import { getModelsApi } from "../../../api";

const ItemCard = ({ item, lists, setLists, index }) => (
  <Card key={item.id} hoverable size="small" style={{ marginBottom: "12px" }}>
    <Setweight
      Name={item.modelName}
      weight={item.weight}
      modelId={item.modelId}
      lists={lists}
      setLists={setLists}
      index={index}
    />
  </Card>
);

const DynamicDragList = () => {
  //发请求拿模型数据
  const [modalList, setModalList] = useState([]);
  useEffect(() => {
    const fetchModalListResponse = async () => {
      const ModalListResponse = await getModelsApi();
      setModalList(ModalListResponse.data);
    };
    fetchModalListResponse();
  }, []);

  // [
  // { id: 1, modelName: "Item 1", url: "https://www.baidu.com", isAPI: "0" },
  // { id: 2, modelName: "Item 2", url: "https://www.baidu.com", isAPI: "0" },
  // { id: 3, modelName: "Item 3", url: "https://www.baidu.com", isAPI: "0" },
  // { id: 4, modelName: "Item 4", url: "https://www.baidu.com", isAPI: "0" },
  // { id: 5, modelName: "Item 5", url: "https://www.baidu.com", isAPI: "0" },
  // {
  //   modelId: 2,
  //   modelName: "model2",
  //   modelUrl: "www.baidu.com",
  //   isAPI: 1,
  //   weight: 1,
  // },
  // {
  //   modelId: 1,
  //   modelName: "model2",
  //   modelUrl: "www.baidu.com",
  //   isAPI: 1,
  //   weight: 1,
  // },
  // ];
  const [lists, setLists] = useState([]);
  // 当 modalList 更新时更新 lists
  useEffect(() => {
    setLists([{ id: 1, items: modalList }]);
  }, [modalList]);

  const handleDrop = (event) => {
    console.log("Drag ended:", event);
  };

  const [modelList, setModelList] = useState([]);
  useEffect(() => {
    const newModelList = lists
      .filter((_, index) => index > 0) // Skip the first list
      .filter((list) => list.items.length > 0) // Filter out empty lists
      .map((list, index) => ({
        layer: index + 1,
        parallel: list.items.length > 1 ? 1 : 0,
        models: list.items.map((item) => ({
          modelName: item.modelName,
          modelUrl: item.modelUrl,
          isAPI: item.isAPI,
          weight: item.weight,
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
    const updatedLists = [...lists];

    // // 检查新列表中的重复项
    // const hasDuplicates = newList.some(
    //   (item, idx) => newList.findIndex((i) => i.id === item.id) !== idx
    // );

    // if (hasDuplicates) {
    //   message.error("列表中不能有重复的 item");
    //   return;
    // }

    updatedLists[index].items = newList;
    setLists(updatedLists);
  };

  const handleClone = (item, index) => {
    const targetList = lists[index + 1].items;
    const isDuplicate = targetList.some(
      (existingItem) => existingItem.id === item.id
    );

    // if (isDuplicate) {
    //   message.error("该 item 已存在于目标层级中，不能重复添加");
    //   return null;
    // }

    return { ...item, id: new Date().getTime() };
  };

  //结果
  const dataresult = JSON.stringify({ modelList }, null, 2);
  return (
    <div style={{ display: "flex", marginTop: "5px" }}>
      <div style={{ flex: "0 0 20%", padding: "0 10px", minWidth: "15vw" }}>
        {/* 渲染第一个列表 */}
        {firstList && (
          <Card
            title={`模型库`}
            bordered={false}
            style={{ height: "100vh", overflowY: "auto", minWidth: "220px" }}
          >
            <div style={{ display: "flex" }}>
              <Button
                onClick={addNewList}
                type="primary"
                style={{ marginBottom: 20, marginRight: "10px", flex: "1" }}
              >
                增加层级
              </Button>
              <UploadMessage style={{ flex: "1" }} dataresult={dataresult} />
            </div>

            <ReactSortable
              list={firstList.items}
              setList={(newList) => handleListChange(newList, 0)}
              onEnd={handleDrop}
              group={{
                name: "shared",
                pull: "clone",
                put: false,
              }}
              clone={(item) => ({ ...item, id: new Date().getTime() })}
              className={`list${firstList.id}`}
              style={{ height: "100%" }}
            >
              {firstList.items.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  lists={lists}
                  setLists={setLists}
                  index={0}
                />
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
                  group={{
                    name: "shared",
                    put: ["shared"],
                  }}
                  clone={(item) => handleClone(item, index)}
                  className={`list${list.id}`}
                  style={{ height: "100%" }}
                >
                  {list.items.map((item) => (
                    <ItemCard
                      key={item.id}
                      item={item}
                      lists={lists}
                      setLists={setLists}
                      index={index + 1}
                    />
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
