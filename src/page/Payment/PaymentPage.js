import { DollarOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Space } from "antd";
import Title from "antd/es/skeleton/Title";
import React from "react";
import Background from "../../assets/images/bgLogin.jpg";
import CardEmpty from "../../component/common/CardEmpty";

function PaymentPage() {
  return (
    <Row className="flex justify-center items-center">
      <Space className="my-10">
        <Space direction="vertical" className="mx-10">
          <Title className="text-success">Thông tin đơn hàng</Title>

          <CardEmpty
            isRadius={true}
            isShadow={true}
            className="min-w-[450px] max-w-[720px] mb-5"
            children={
              <Row>
                <Title level={2}>Thông tin người nhận</Title>

                <Col span={8}>Tên người nhận hàng:</Col>
                <Col span={16} className="font-bold">
                  Lorem Lorem Lorem
                </Col>
                <Col span={8}>Địa chỉ nhận hàng:</Col>
                <Col span={16} className="font-bold">
                  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                  Lorem Lorem
                </Col>
              </Row>
            }
          />
          <CardEmpty
            isRadius={true}
            isShadow={true}
            className="min-w-[450px] max-w-[720px]"
            children={
              <div className="w-full flex items-center">
                <Space>
                  <img
                    src={Background}
                    alt=""
                    className="rounded-[10px] max-w-[100px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  />
                </Space>

                <Space direction="vertical w-full ml-10">
                  <Row className="items-center">
                    <Col className="font-bold text-lg">LOREM LOREM LOREM LOREM</Col>

                    <Divider className="my-1" />

                    <Col span={12}>Đơn giá:</Col>
                    <Col span={12} className="font-bold text-success text-2xl">
                      <div className="w-full flex justify-end">100$</div>
                    </Col>

                    <Col span={12}>Số lượng:</Col>
                    <Col span={12} className="font-bold text-success text-2xl">
                      <div className="w-full flex justify-end">10</div>
                    </Col>

                    <Divider className="my-1" />

                    <Col span={12} className="font-bold text-success">
                      Thành tiền:
                    </Col>
                    <Col span={12} className="font-bold text-success text-2xl">
                      <div className="w-full flex justify-end">1000$</div>
                    </Col>
                  </Row>
                </Space>
              </div>
            }
          />

          <Divider />

          <Button
            className="btn-success transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            icon={<DollarOutlined />}
            block
          >
            Thanh toán
          </Button>
        </Space>
      </Space>
    </Row>
  );
}

export default PaymentPage;
