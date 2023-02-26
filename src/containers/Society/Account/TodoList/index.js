import React, { useState, useEffect } from "react";
import { List, Skeleton, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import ToolItem from "../ToolItem";
import { userRequest } from "../../../../api/apiUtil";

function TodoList() {
  const [data, setData] = useState([]);
  
  const moreDataFn = () => {
    return userRequest
      .get("/AccountList")
      .then((res) => {
        setData([...res.data]);
      })
      .catch((err) => {
        console.log("getAccount error", err.toString());
      });
  };

  useEffect(() => {
    moreDataFn();
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
        dataLength={data.length || []}
        next={moreDataFn || []}
        hasMore={data.length || [] < 50}
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
          dataSource={data || []}
          renderItem={(item) =>
            <ToolItem listData={item} />}
        />
      </InfiniteScroll>
    </div>
  );
}

export default TodoList;
