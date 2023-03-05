import { Button, Col, Divider, Form, Input, Row, Space } from "antd";
import React from "react";
import CardEmpty from "../../component/common/CardEmpty";
import Background from "../../assets/images/bgLogin.jpg";
import { LoginOutlined } from "@ant-design/icons";

function PaymentPage() {
  const [form] = Form.useForm();

  return (
    <div>
      <Row>
        <Col
          xl={16}
          lg={16}
          md={24}
          sm={24}
          xs={24}
          className="flex items-end mt-10"
        >
          <div className="flex justify-center items-end">
            <Space direction="vertical" className="flex justify-end mr-10">
              <Space className="flex justify-end">
                <img
                  src={Background}
                  alt=""
                  className="max-w-[300px] ml-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                />
              </Space>
            </Space>
          </div>
        </Col>

        <Col
          xl={8}
          lg={8}
          md={24}
          sm={24}
          xs={24}
          className="w-full flex justify-center mt-10"
        >
          <CardEmpty
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            isRadius={true}
            isShadow={true}
            children={
              <Form
                form={form}
                layout="vertical"
                className="form-row-gap-0"
              >
                <Divider className="mt-0" />

                <Form.Item
                  label="Số điện thoại"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập số điện thoại!",
                    },
                  ]}
                  className="w-full"
                >
                  <Input placeholder="Số điện thoại ..." />
                </Form.Item>

                <Form.Item
                  label="Mật khẩu"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu!",
                    },
                  ]}
                  className="w-full"
                >
                  <Input.Password placeholder="Mật khẩu ..." />
                </Form.Item>

                <Divider className="mt-0" />

                <Form.Item className="justify-center">
                  <Button
                    className="btn-success"
                    icon={<LoginOutlined />}
                    block
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>
            }
          />
        </Col>
      </Row>
    </div>
  );
}

export default PaymentPage;
