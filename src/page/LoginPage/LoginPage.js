import { LoginOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Space,
  Typography,
} from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import Background from "../../assets/images/bgLogin.jpg";
import CardEmpty from "../../component/common/CardEmpty";
import Loading from "../../component/Loading/Loading";

const { Text, Link } = Typography;

function LoginPage() {
  const [form] = Form.useForm();
  const requesting = false;

  const handleLogin = () => {
    form.submit();
  };
  const handleFinish = async () => {
    return 0;
  };

  return (
    <React.Fragment>
      <Row gutter={[10, 0]}>
        <Col span={24} className="flex justify-center items-center">
          {!requesting ? (
            <div className="flex justify-center items-end">
              <Space direction="vertical" className="flex justify-end mr-10">
                <Title className="text-right">Tree Shop</Title>

                <div className="text-right">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

                <div className="flex justify-end">
                  <Button
                    className="btn-primary"
                    icon={<LoginOutlined />}
                    onClick={handleLogin}
                    loading={requesting}
                  >
                    Đăng nhập
                  </Button>
                </div>
              </Space>

              <img src={Background} alt="" className="img-bg-homepage" />
            </div>
          ) : (
            <Loading />
          )}
        </Col>

        {/* <Col span={24} className="w-full flex justify-center">
          <CardEmpty
            className="mt-10"
            isRadius={true}
            isShadow={true}
            children={
              <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                className="form-row-gap-0"
              >
                <Title className="flex justify-center" level={2}>
                  Đăng nhập
                </Title>

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
                  className="w-full"
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
                  className="w-full"
                >
                  <Input.Password placeholder="Mật khẩu ..." />
                </Form.Item>

                <Divider className="mt-0" />

                <Form.Item className="justify-center">
                  <Button
                    className="btn-primary"
                    icon={<LoginOutlined />}
                    onClick={handleLogin}
                    loading={requesting}
                    block
                  >
                    Đăng nhập
                  </Button>

                  <div className="mt-10 flex justify-center">
                    Bạn chưa có tài khoản?{" "}
                    <Link href="" className="ml-1">
                      {" "}
                      Đăng ký tại đây
                    </Link>
                  </div>
                </Form.Item>
              </Form>
            }
          />
        </Col> */}
      </Row>
    </React.Fragment>
  );
}

export default LoginPage;
