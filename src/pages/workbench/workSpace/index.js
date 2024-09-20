import React, { useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import { Card, Button, message, Flex } from "antd";
import UploadMessage from "./upload";
import Setweight from "./Setweight";
import { DeleteOutlined } from "@ant-design/icons";
import { getModelsApi } from "../../../api";

// const ModalListResponse = [
//   {
//     id: 1,
//     modelName: "模型1",
//     modelId: "1",
//     weight: "",
//     modelUrl: "item.modelUrl",
//     isAPI: "1",
//   },
//   {
//     id: 2,
//     modelName: "模型2",
//     modelId: "2",
//     weight: "",
//     modelUrl: "item.modelUrl",
//     isAPI: "0",
//   },
//   {
//     id: 3,
//     modelName: "模型3",
//     modelId: "3",
//     weight: "",
//     modelUrl: "item.modelUrl",
//     isAPI: "1",
//   },
// ];

const ItemCard = ({ item, lists, setLists, index }) => (
  <p title={item.description}>
    <Card key={item.id} hoverable size="small" style={{ marginBottom: "12px" }}>
      <Setweight
        Name={item.modelName}
        weight={item.weight}
        modelId={item.modelId}
        lists={lists}
        setLists={setLists}
        index={index}
        question={item.question}
      />
    </Card>
  </p>
);

const DynamicDragList = ({ setFlash, flash, MissionListData }) => {
  //发请求拿模型数据

  const [modalList, setModalList] = useState([]);
  useEffect(() => {
    const fetchModalListResponse = async () => {
      const ModalListResponse = await getModelsApi();
      const ModalList = ModalListResponse.data;
      console.log(ModalList);

      //新加一个字段question
      const updatedModalListResponse = ModalList.map((item) => ({
        ...item,
        ...(item.isAPI === 1 ? { question: "123" } : {}),
      }));

      // setModalList(ModalListResponse);
      setModalList(updatedModalListResponse);
    };
    fetchModalListResponse();
  }, []);
  const [lists, setLists] = useState([]);
  // 当 modalList 更新时更新 lists
  //将所有的模型数据放到第一个列表中
  const LList = MissionListData.modelList
    ? JSON.parse(MissionListData.modelList)
    : []; // 如果 modelList 不存在，则设为空数组
  useEffect(() => {
    setLists([{ id: 1, items: modalList }]);
  }, [modalList]);
  useEffect(() => {
    if (LList) {
      setLists([{ id: 1, items: modalList }]); // 设置初始列表
      setLists((prevLists) => [...prevLists, ...LList]); // 基于前一个状态更新
    }
  }, [MissionListData]);
  const handleDrop = (event) => {
    console.log("Drag ended:", event);
  };

  const [modelList, setModelList] = useState([]);
  useEffect(() => {
    const newModelList = lists
      .filter((_, index) => index > 0) // 跳过第一个列表（所有数据模型），即从真正的第一层开始
      .filter((list) => list.items.length > 0) // 过滤空列表
      .map((list, index) => ({
        layer: index + 1,
        parallel: list.items.length > 1 ? 1 : 0,
        models: list.items.map((item) => ({
          modelName: item.modelName,
          modelUrl: item.modelUrl,
          isAPI: item.isAPI,
          weight: item.weight,
          question: item.question,
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

    updatedLists[index].items = newList;
    setLists(updatedLists);
  };

  //结果
  const dataresult = modelList;
  // const dataresult = JSON.stringify(modelList, null, 0);

  // console.log(dataresult);
  // console.log(modelList);
  return (
    <div
      style={{ display: "flex", marginTop: "5px", flexGrow: 1, gap: "10px" }}
    >
      <div
        style={{
          flex: "0 0 220px",
          padding: "0 10px",
          minWidth: "15vw",
          position: "relative",
        }}
      >
        <ReactSortable
          list={[]}
          setList={() => {}} // 空函数，因为我们不需要更新垃圾桶区域的状态
          group={{ name: "shared", pull: false, put: true }}
        >
          <DeleteOutlined
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              zIndex: "10",
              fontSize: "18px",
            }}
          />
        </ReactSortable>

        {/* 渲染第一个列表 */}
        {firstList && (
          <Card
            title={`模型库`}
            bordered={false}
            style={{
              height: "100vh",
              overflowY: "auto",
              minWidth: "220px",
            }}
          >
            <div style={{ display: "flex" }}>
              <Button
                onClick={addNewList}
                type="primary"
                style={{ marginBottom: 20, marginRight: "10px", flex: "1" }}
              >
                增加层级
              </Button>
              <UploadMessage
                style={{ flex: "1" }}
                dataresult={dataresult}
                setFlash={setFlash}
                flash={flash}
                rawList={remainingLists}
              />
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
      <div
        style={{
          flex: "auto",
          padding: "0 10px",
          overflowY: "auto",
        }}
      >
        <Flex
          gap={20}
          wrap
          vertical
          style={{ maxHeight: "95vh" }}
          justify="center"
        >
          {remainingLists.map((list, index) => (
            <Card
              title={`层级:${index + 1}`}
              bordered={false}
              style={{
                minHeight: "10vh",
                minWidth: "10vw",
                maxWidth: "15vw",
                height: "auto",
                overflowY: "auto",
              }}
            >
              <ReactSortable
                list={list.items}
                setList={(newList) => handleListChange(newList, index + 1)}
                onEnd={handleDrop}
                group={{
                  name: "shared",
                  put: ["shared"],
                }}
                // clone={(item) => handleClone(item, index)}
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
          ))}
        </Flex>
      </div>
    </div>
  );
};

export default DynamicDragList;
