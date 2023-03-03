import {
  ClockCircleOutlined,
  EditOutlined,
  ReloadOutlined,
  SearchOutlined,
  SolutionOutlined,
  SyncOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Divider, Layout, Menu } from "antd";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Title from "antd/es/typography/Title";

const { Header, Content, Sider } = Layout;

function ManagerLayout() {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const menuEmployeeInfo = [
    getItem(
      <Link to={""}>Tìm kiếm nhân viên</Link>,
      "employeeinfo/find",
      <SearchOutlined />,
      null,
      null
    ),
    getItem(
      <Link to={""}>Thông tin nhân viên</Link>,
      "employeeinfo/info",
      <UserOutlined />,
      null,
      null
    ),
    getItem(
      <Link to={""}>Danh sách nhân viên</Link>,
      "employeeinfo/manage",
      <SolutionOutlined />,
      null,
      null
    ),
  ];

  const menu = [
    getItem(
      <span className="me-2">Quản lý thông tin nhân viên</span>,
      "employeeinfo",
      <UserOutlined />,
      menuEmployeeInfo,
      null
    ),
    getItem(
      <span className="me-2">Quản lý giờ công/nghỉ phép</span>,
      "timekeeping",
      <ClockCircleOutlined />,
      null,
      null
    ),
    getItem(
      <span className="me-2">Quản lý thuyên chuyển</span>,
      "transfer",
      <SyncOutlined />,
      null,
      null
    ),
    getItem(
      <Link to={""}>Quản lý đăng ký nghỉ phép</Link>,
      "vacation",
      <EditOutlined />,
      null,
      null
    ),
    getItem(
      <Link to={""}>Thay đổi mật khẩu</Link>,
      "changepass",
      <ReloadOutlined />,
      null,
      null
    ),
  ];

  return (
    <Layout>
      <Header style={{ height: "50px", backgroundColor:'darkgreen' }} className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider
          width={300}
          style={{
            background: "#fff",
          }}
        >
          <Title className="mt-5 ml-7" level={2}>Tree shop</Title>

          <Divider />

          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={menu}
          />
        </Sider>
        <Layout>
          <Content className="min-h-screen m-5">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
export default ManagerLayout;
