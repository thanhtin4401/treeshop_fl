import { CheckCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { Table, Row, Col, Button } from "antd";
import Column from "antd/lib/table/Column";
import React, { useEffect, useState } from "react";

function CartPage() {
  const lstData = [
    { id: 1, price: 10000, quantity: 1 },
    { id: 2, price: 10000, quantity: 2 },
    { id: 3, price: 10000, quantity: 3 },
    { id: 4, price: 10000, quantity: 4 },
    { id: 5, price: 10000, quantity: 5 },
    { id: 6, price: 10000, quantity: 6 },
    { id: 7, price: 10000, quantity: 7 },
    { id: 8, price: 10000, quantity: 8 },
    { id: 9, price: 10000, quantity: 9 },
    { id: 10, price: 10000, quantity: 10 },
    { id: 11, price: 10000, quantity: 11 },
  ];
  const [listId, setListId] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    getQuantity(listId);
    getTotal(listId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listId]);

  const formatDataSource = (data) => {
    const results = [];
    if (data !== undefined)
      data.forEach((item) => {
        results.push({
          ...item,
          key: item.id,
        });
      });

    return results;
  };

  const getQuantity = (data) => {
    let result = 0;
    data.forEach((item) => {
      lstData.forEach((i) => {
        if (item === i.id) {
          result += i.quantity;
        }
      });
    });

    setQuantity(result);
  };

  const getTotal = (data) => {
    let result = 0;
    data.forEach((item) => {
      lstData.forEach((i) => {
        if (item === i.id) {
          result += i.quantity * i.price;
        }
      });
    });

    setPrice(result);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys, _selectedRows) => {
      const arrLstSelectedRowKeys = [];
      const arrStrSelectedRowKeys = newSelectedRowKeys.toString().split(",");

      arrStrSelectedRowKeys.forEach((item) => {
        arrLstSelectedRowKeys.push(parseInt(item));
      });

      setListId(arrLstSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    },
    getCheckboxProps: (record) => ({}),
  };

  return (
    <div className="my-20 mx-10">
      <div className="flex justify-center">
        <div className="filter shadow hover:shadow-2xl max-w-[540px] min-w-[140px] flex justify-center">
          <Row className="flex justify-center items-center" gutter={[0, 8]}>
            <Col span={24} className="flex justify-center">
              <div className="text-success font-bold text-xl">
                Số lượng: {quantity}
              </div>
            </Col>

            <Col span={24} className="flex justify-center">
              <div className="text-success font-bold text-xl">
                Tổng cộng: {price} vnđ
              </div>
            </Col>

            <Col span={24}>
              <Button
                block
                className="btn-success"
                icon={<CheckCircleOutlined />}
              >
                Xác nhận
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        dataSource={formatDataSource(lstData)}
        scroll={{ x: 720, y: 360 }}
        pagination={false}
      >
        <Column
          title="STT"
          dataIndex="index"
          key="index"
          width={65}
          render={(_value, _item, index) => 1 + index}
        />
        <Column title="Tên sản phẩm" dataIndex="name" key="name" />
        <Column title="Đơn giá (vnđ)" dataIndex="price" key="price" />
        <Column title="Số lượng" dataIndex="quantity" key="quantity" />
        <Column
          title="Tổng cộng (vnđ)"
          dataIndex="total"
          key="total"
          render={(_text, record) => {
            return record.price * record.quantity;
          }}
        />
        <Column
          title="#"
          width={100}
          render={(_text, record) => {
            return (
              <Button
      className="btn-danger text-xs"
                size="small"
                block
                icon={<DeleteOutlined />}
              >
                Xoá
              </Button>
            );
          }}
        />
      </Table>
    </div>
  );
}

export default CartPage;
