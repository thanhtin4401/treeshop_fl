import { LoginOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import Loading from "../../component/Loading/Loading";
import Background from "../../assets/images/bgLogin.jpg";

function LoginPage() {
  const [form] = Form.useForm();
  const requesting = true;

  const handleLogin = () => {
    form.submit();
  };
  const handleFinish = async () => {
    return 0;
  };

  return (
    <React.Fragment>
      <Space size={50} direction="vertical" className="w-100 my-5">
        <Row>
          <Col
            xl={14}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            className="d-flex justify-content-center"
          >
            {!requesting ? (
              <img src={Background} alt="" className="img-bg-homepage" />
            ) : (
              <Loading />
            )}
          </Col>

          <Col
            xl={10}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            className="w-100 d-flex align-items-center justify-content-center"
          >
            {/* <EmptyCard
              isRadius={true}
              isShadow={true}
              children={
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleFinish}
                  className="form-row-gap-0"
                >
                  <Form.Item className="d-flex justify-content-center">
                    <Title text="Đăng nhập" level={1} className="mt-1" />
                  </Form.Item>

                  <Divider className="mt-0" />

                  <Form.Item
                    label="Tên đăng nhập"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tên đăng nhập!",
                      },
                    ]}
                    className="w-100 min-width-300px"
                  >
                    <Input placeholder="Tên đăng nhập ..." />
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
                    className="w-100 min-width-300px"
                  >
                    <Input.Password placeholder="Mật khẩu ..." />
                  </Form.Item>

                  <Divider className="mt-0" />

                  <Form.Item className="d-flex justify-content-center">
                    <Button
                      text="Đăng nhập"
                      icon={<LoginOutlined />}
                      onClick={handleLogin}
                      loading={requesting}
                    />
                  </Form.Item>
                </Form>
              }
            /> */}
          </Col>
        </Row>
      </Space>
    </React.Fragment>
  );
}

export default LoginPage;
