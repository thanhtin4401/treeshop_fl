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
import { PAGEURL } from "../../constant/route";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/authSlice";
import { https } from "../../service/apiService";

const { Link } = Typography;

function LoginPage() {
  const [form] = Form.useForm();
  const requesting = false;
  const dispatch = useDispatch();
  const handleLogin = () => {
    form.submit();
  };
  const handleFinish = async (e) => {
    const data = {
      phone_number: e.phone_number,
      password: e.password,
    };
    dispatch(loginUser(data));
  };

  return (
    <div className="px-10">
      <Row>
        <Col
          xl={16}
          lg={16}
          md={24}
          sm={24}
          xs={24}
          className="flex items-end mt-10"
        >
          {!requesting ? (
            <div className="flex justify-center items-end">
              <Space direction="vertical" className="flex justify-end mr-10">
                <Space className="flex justify-end">
                  <img
                    src={Background}
                    alt=""
                    className="img-bg-homepage ml-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  />
                  <img
                    src={Background}
                    alt=""
                    className="img-bg-homepage ml-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  />
                  <img
                    src={Background}
                    alt=""
                    className="img-bg-homepage ml-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  />
                </Space>
                <Title className="text-right">Tree Shop</Title>

                <div className="text-right">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </Space>
            </div>
          ) : (
            <Loading />
          )}
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
                onFinish={handleFinish}
                className="form-row-gap-0"
              >
                <Title className="flex justify-center" level={2}>
                  ????ng nh???p
                </Title>

                <Divider className="mt-0" />

                <Form.Item
                  label="S??? ??i???n tho???i"
                  name="phone_number"
                  rules={[
                    {
                      required: true,
                      message: "Vui l??ng nh???p s??? ??i???n tho???i!",
                    },
                  ]}
                  className="w-full"
                >
                  <Input placeholder="S??? ??i???n tho???i ..." />
                </Form.Item>

                <Form.Item
                  label="M???t kh???u"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Vui l??ng nh???p m???t kh???u!",
                    },
                  ]}
                  className="w-full"
                >
                  <Input.Password placeholder="M???t kh???u ..." />
                </Form.Item>

                <Divider className="mt-0" />

                <Form.Item className="justify-center">
                  <Button
                    className="btn-success"
                    icon={<LoginOutlined />}
                    onClick={handleLogin}
                    loading={requesting}
                    block
                  >
                    ????ng nh???p
                  </Button>

                  <div className="mt-10 flex justify-center">
                    B???n ch??a c?? t??i kho???n?{" "}
                    <Link className="font-bold ml-1" href={PAGEURL.REGIS}>
                      {" "}
                      ????ng k?? t???i ????y
                    </Link>
                  </div>
                </Form.Item>
              </Form>
            }
          />
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
