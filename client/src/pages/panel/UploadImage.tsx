import { Upload } from "@arco-design/web-react";
import UploadList from "../../views/UploadList";
export default function UploadImage() {
  return (
    <div>
      <Upload
        drag
        multiple
        accept="image/*"
        action="/"
        tip="只接受JPG、PNG、GIF、BMP、WEBP格式的图片。单次最多上传50张，单张图片大小不超过10MB"
      />
      <UploadList />
    </div>
  );
}
