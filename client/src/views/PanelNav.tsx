import { Menu } from "@arco-design/web-react";
import SubMenu from "@arco-design/web-react/es/Menu/sub-menu";
import { TiUpload } from "react-icons/ti";
import { BsGearFill, BsImages } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";
export default function PanelNav() {
  return (
    <div className="tw-mx-10 tw-min-h-screen">
      <div className="tw-flex tw-justify-center">ASDA</div>
      <Menu className={"tw-min-h-full"} hasCollapseButton={false} defaultOpenKeys={["0"]} defaultSelectedKeys={["0_1"]}>
        <SubMenu
          key="1"
          title={
            <span className="tw-flex">
              <TiUpload className="tw-my-auto tw-mx-2" size={"1.25em"} />
              快速发布
            </span>
          }
        >
          <Menu.Item key="1_0">发布图片</Menu.Item>
          <Menu.Item key="1_1">发布分组</Menu.Item>
        </SubMenu>
        <SubMenu
          key="2"
          title={
            <span className="tw-flex">
              <FaTools className="tw-my-auto tw-mx-2" size={"1.25em"} />
              维护信息
            </span>
          }
        >
          <Menu.Item key="2_0">使用情况</Menu.Item>
          <Menu.Item key="2_1">阈值设置</Menu.Item>
        </SubMenu>
        <SubMenu
          key="3"
          title={
            <span className="tw-flex">
              <BsImages className="tw-my-auto tw-mx-2" size={"1.25em"} />
              管理图片
            </span>
          }
        >
          <Menu.Item key="3_0">分组管理</Menu.Item>
          <Menu.Item key="3_1">所有图片</Menu.Item>
        </SubMenu>
        <SubMenu
          key="4"
          title={
            <span className="tw-flex">
              <BsGearFill className="tw-my-auto tw-mx-2" size={"1.25em"} />
              图床设置
            </span>
          }
        >
          <Menu.Item key="4_0">访问设置</Menu.Item>
          <Menu.Item key="4_1">密码与安全</Menu.Item>
          <Menu.Item key="4_2">备份打包</Menu.Item>
        </SubMenu>
        <SubMenu
          key="5"
          title={
            <span className="tw-flex">
              <HiOutlineBookOpen className="tw-my-auto tw-mx-2" size={"1.25em"} />
              API 文档
            </span>
          }
        >
          <Menu.Item key="5_0">总文档</Menu.Item>
          <Menu.Item key="5_1">实例集</Menu.Item>
          <Menu.Item key="5_2">常见问题</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}
