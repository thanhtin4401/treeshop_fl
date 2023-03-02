import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Không tìm thấy đường dẫn :<<<."
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Trang chủ
        </Button>
      }
    />
  );
}
export default PageNotFound;
