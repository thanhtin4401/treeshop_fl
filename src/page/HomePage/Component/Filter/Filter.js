import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CameraOutlined,
  FilterOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Dropdown,
  Input,
  Menu,
  Modal,
  Radio,
  Row,
  Space,
} from "antd";
import { useEffect, useState } from "react";
import UploadImage from "../../../../component/UploadImg/UploadImg";

const { Search } = Input;

function FilterHomePage() {
  //1: A->Z
  //2: Z->A
  //3: giá tăng
  //4: giá giảm
  const [typeSort, setTypeSort] = useState(1);
  const [typeSortPrice, setTypeSortPrice] = useState(3);

  //1: Hình ảnh có sẵn
  //2: Chụp mới
  const [typeUpload, setTypeUpload] = useState(1);

  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setTypeUpload(1);
  }, [showModal]);

  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        onClick={() => {
          setTypeSort(1);
        }}
        disabled={typeSort === 1}
      >
        <Space>
          <SortAscendingOutlined />
          {"Từ A -> Z"}
        </Space>
      </Menu.Item>

      <Menu.Item
        key="2"
        onClick={() => {
          setTypeSort(2);
        }}
        disabled={typeSort === 2}
      >
        <Space>
          <SortDescendingOutlined />
          {"Từ Z -> A"}
        </Space>
      </Menu.Item>

      <Menu.Item
        key="3"
        onClick={() => {
          setTypeSortPrice(3);
        }}
        disabled={typeSortPrice === 3}
      >
        <Space>
          <ArrowUpOutlined />
          {"Giá tăng dần"}
        </Space>
      </Menu.Item>

      <Menu.Item
        key="4"
        onClick={() => {
          setTypeSortPrice(4);
        }}
        disabled={typeSortPrice === 4}
      >
        <Space>
          <ArrowDownOutlined />
          {"Giá giảm dần"}
        </Space>
      </Menu.Item>
    </Menu>
  );

  const handleCancelModal = () => {
    setShowModal(false);
  };
  const handleConfirmModal = () => {
    return;
  };

  const onSearch = () => {
    return;
  };

  return (
    <div className="filter shadow-xl">
      <Row gutter={[16, 0]} className="flex items-end">
        <Col xl={8} lg={8} md={12} sm={24} xs={24}>
          <div>Từ khoá tìm kiếm</div>
          <Search
            placeholder="Nhập từ khoá tìm kiếm ..."
            allowClear
            onSearch={onSearch}
          />
        </Col>

        <Col xl={16} lg={16} md={12} sm={24} xs={24}>
          <Space wrap className="mt-2">
            <Dropdown overlay={menu} placement="bottomRight">
              <Button>
                <Space>
                  <FilterOutlined />
                  Lọc
                </Space>
              </Button>
            </Dropdown>

            <Button
              className="btn-success"
              icon={<CameraOutlined />}
              onClick={() => {
                setShowModal(true);
              }}
            >
              Tìm kiếm qua hình ảnh
            </Button>
          </Space>
        </Col>
      </Row>

      <Modal
        title="Tìm kiếm qua hình ảnh"
        visible={showModal}
        centered
        onOk={handleConfirmModal}
        onCancel={handleCancelModal}
        footer={[
          <Button key="cancel" onClick={handleCancelModal}>
            Quay lại
          </Button>,

          <Button
            key="yes"
            className="btn-success"
            onClick={handleConfirmModal}
          >
            Xác nhận
          </Button>,
        ]}
      >
        <Divider className="mb-0" />
        <Row gutter={[0, 16]}>
          <Col span={24} className="flex justify-center">
            <Radio.Group
              defaultValue={1}
              style={{ marginTop: 16 }}
              onChange={(e) => {
                setTypeUpload(e.target.value);
              }}
              buttonStyle="solid"
            >
              <Radio.Button value={1}>Hình ảnh có sẵn</Radio.Button>
              <Radio.Button value={2}>Chụp mới</Radio.Button>
            </Radio.Group>
          </Col>

          {typeUpload === 1 ? (
            <Col span={24} className="flex justify-center">
              <UploadImage />
            </Col>
          ) : (
            <Col span={24} className="flex justify-center">
              <div>This is camera</div>
            </Col>
          )}
        </Row>
        <Divider />
      </Modal>
    </div>
  );
}

export default FilterHomePage;
