import { EyeOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Space, Table } from "antd";
import React, { useState } from "react";

function ProductPage() {
  const [form] = Form.useForm();
  const requesting = false;
  const [showMore, setShowMore] = useState(true);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => <Space size="middle">aaaaaaaa</Space>,
    },
  ];

  const handleSearch = () => {
    form.submit();
  };
  const handleFinish = async (e) => {
    console.log(e);
  };

  return (
    <React.Fragment>
      <div className="filter">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          className="form-group px-2 pt-2  pb-0 mb-0 "
        >
          <Row gutter={[16, 0]}>
            <Col xl={6} lg={6} md={12} sm={12} xs={24}>
              <Form.Item name="keysearch" label="Từ khoá tìm kiếm">
                <Input className="w-100" placeholder="Nhập từ khóa tìm kiếm" />
              </Form.Item>
            </Col>

            <Col span={24} className="flex justify-end items-end">
              <Space wrap>
                <Button
                  className="btn-primary"
                  htmlType="button"
                  icon={<SearchOutlined />}
                  onClick={handleSearch}
                  loading={requesting}
                >
                  Tìm kiếm
                </Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </div>

      <Table
        columns={columns}
        dataSource={[]}
        pagination={false}
        scroll={{ x: 720 }}
      />

      <Space className="flex justify-center mt-2 mb-5">
        {showMore ? (
          <Button
            className="btn-primary"
            onClick={handleSearch}
            htmlType="button"
            icon={<EyeOutlined />}
            loading={requesting}
          >
            Xem thêm
          </Button>
        ) : (
          <div></div>
        )}
      </Space>
    </React.Fragment>
  );
}

export default ProductPage;
