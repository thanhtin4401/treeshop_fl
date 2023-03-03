import { Layout, Space } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { PAGEURL } from "./constant/route";
import routes from "./router/Routers";

function App() {
  const navigate = useNavigate();

  const setCookie = (uid, isLogin) => {
    var d = new Date();
    d.setTime(d.getTime() + 60 * 60 * 1000);
    var expires =
      "expires=" +
      (isLogin ? d.toUTCString() : "Thu, 01 Jan 1970 00:00:00 UTC");
    document.cookie = "username=" + uid + "; " + expires;
  };

  const getCookie = () => {
    var username = "";
    const cookie = document.cookie;
    const arrCk = cookie.split(";");
    arrCk.forEach((item) => {
      var i = item;

      if (i.charAt(0) === " ") {
        i = item.substring(1);
      }

      if (i.indexOf("username=") === 0) {
        username = i.substring("username=".length, i.length);
      }
    });

    return username;
  };

  const checkCookie = () => {
    if (getCookie().length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const login = useCallback((uid) => {
    const gotoHome = () => {
      navigate(PAGEURL.HOMEPAGE);
    };

    setCookie(uid, true);
    gotoHome();
    // window.location.reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = useCallback(() => {
    const gotoLogin = () => {
      navigate(PAGEURL.LOGIN);
    };

    setCookie("", false);
    gotoLogin();
    window.location.reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout className="min-h-screen bg-white">
      <Header>Đây là header</Header>

      <Content>
        <Space className="w-full px-10 py-10 m-0">{routes}</Space>
      </Content>

      <Footer>Đây là footer</Footer>
    </Layout>
  );
}

export default App;
