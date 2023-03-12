import { EyeOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Form, Image, Input, Row, Space, Table } from "antd";
import React, { useState } from "react";
import { ApiConstants } from "../../constant/apiConstant";
import { https } from "../../service/apiService";

function UserPage() {
  const [form] = Form.useForm();
  const requesting = false;
  const [showMore, setShowMore] = useState(true);

  const columns = [
    {
      title: "",
      dataIndex: "avatar",
      key: "avatar",
      render: (_text, record) => {
        return <Avatar src={<img src={record.avatar} alt="avatar" />} />
      }
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ngày sinh",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Trạng thái",
      dataIndex: "active",
      key: "active",
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
    const url = ApiConstants.user.getAll;

    const res = await https.get(url);
    console.log(res);
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

export default UserPage;
