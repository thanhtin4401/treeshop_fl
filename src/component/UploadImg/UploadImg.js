import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const { Dragger } = Upload;

const props = {
  name: "file",
  onChange(info) {
    info.file.status = "done";
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
  beforeUpload: (file) => {
    const isIMG = (file.type === "image/png") | (file.type === "image/jpeg");
    if (!isIMG) {
      message.error(`${file.name} không phải là file hình ảnh!`);
    }
    return isIMG || Upload.LIST_IGNORE;
  },
};
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function UploadImage() {
  return (
    <Dragger maxCount={1} fileList={[]} className="mb-5 min-h-[240px]" {...props}>
      <div className="mx-3">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Chọn hoặc kéo thả để tải hình ảnh lên</p>
      </div>
    </Dragger>
  );
}
export default UploadImage;
