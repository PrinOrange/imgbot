import { Menu } from "@arco-design/web-react";
import SubMenu from "@arco-design/web-react/es/Menu/sub-menu";
import PanelNav from "../../views/PanelNav";
import UploadImage from "./UploadImage";

export default function Panel() {
  return (
    <div className=" tw-flex tw-bg-gray-100 tw-min-h-screen">
      <nav className="tw-max-h-screen tw-overflow-y-scroll tw-basis-1/5 tw-bg-white">
        <PanelNav />
      </nav>
      <div className="tw-max-h-screen tw-overflow-y-scroll tw-basis-4/5">
        <UploadImage />
      </div>
    </div>
  );
}
