import React, { useEffect } from "react";
import { List, Skeleton, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import ToolItem from "../ToolItem";

function TodoList({ listDataInfo, dataFn }) {
  const handleUpdate = (newData) => {
    // 呼叫父層的函數，更新資料
    dataFn(newData);
  };
  useEffect(() => {
    dataFn();
  }, []);

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 300,
        overflow: "auto",
        padding: "0 16px",
      }}
    >
      <InfiniteScroll
        dataLength={listDataInfo.length || []}
        next={dataFn}
        hasMore={listDataInfo.length < 10}
        loader={
          <Skeleton
            avatar
            active
            paragraph={{
              row: 1,
            }}
          />
        }
        endMessage={<Divider plain>已載完資料....</Divider>}
        scrollableTarget="scrollableDiv" // 指定滾動的父容器
      >
        <List
          dataSource={listDataInfo || []}
          renderItem={(item) => (
            <ToolItem listData={item} onUpdate={handleUpdate} />
          )}
        />
      </InfiniteScroll>
    </div>
  );
}

export default TodoList;
