import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  Input,
  Select,
} from "antd";
import CardEmpty from "../../component/common/CardEmpty";
import Title from "antd/es/typography/Title";
import { LoginOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Option } = Select;

function RegisterPage() {
  const [form] = Form.useForm();
  const requesting = false;

  const [isAgree, setIsAgree] = useState(false);

  const handleRegis = () => {
    form.submit();
  };
  const handleFinish = async (e) => {
    console.log(e);
    console.log(isAgree);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="py-10">
        <CardEmpty
          className="min-w-[500px]"
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
                Đăng ký
              </Title>

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
                label="Họ và tên"
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập họ và tên!",
                  },
                ]}
                className="w-full"
              >
                <Input placeholder="Họ và tên ..." />
              </Form.Item>

              <Form.Item
                label="Ngày sinh"
                name="birthdate"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn ngày sinh!",
                  },
                ]}
                className="w-full"
              >
                <DatePicker
                  placeholder="Chọn ngày sinh"
                  picker="date"
                  format="DD/MM/YYYY"
                  className="w-full"
                />
              </Form.Item>

              <Form.Item
                label="Giới tính"
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập giới tính!",
                  },
                ]}
                className="w-full"
              >
                <Select placeholder="Chọn giới tính">
                  <Option key={1} value={1}>
                    Nam
                  </Option>
                  <Option key={0} value={0}>
                    Nữ
                  </Option>
                  <Option key={-1} value={-1}>
                    Khác
                  </Option>
                </Select>
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
                <Input.Password placeholder="Nhập mật khẩu ..." />
              </Form.Item>

              <Form.Item
                label="Nhập lại mật khẩu"
                name="passwordrepeat"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập lại mật khẩu!",
                  },
                ]}
                className="w-full"
              >
                <Input.Password placeholder="Nhập lại mật khẩu ..." />
              </Form.Item>

              <Form.Item name="isagree" className="w-full">
                <Checkbox
                  onChange={() => {
                    setIsAgree(!isAgree);
                  }}
                >
                  Tôi đồng ý chính sách bảo mật
                </Checkbox>
              </Form.Item>

              <Divider className="mt-0" />

              <Form.Item className="justify-center">
                <Button
                  className="btn-success"
                  icon={<LoginOutlined />}
                  onClick={handleRegis}
                  loading={requesting}
                  block
                >
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          }
        />
      </div>
    </div>
  );
}

export default RegisterPage;
