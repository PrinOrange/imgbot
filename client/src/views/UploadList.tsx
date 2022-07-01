import { Table, TableColumnProps } from "@arco-design/web-react";
const columns: TableColumnProps[] = [
  {
    title: "文件名",
    dataIndex: "name",
  },
  {
    title: "分配id",
    dataIndex: "salary",
  },
  {
    title: "URL",
    dataIndex: "address",
  },
  {
    title: "状态",
    dataIndex: "email",
  },
];
const data = [
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: "4567846373483783734684434534",
    address: "http://image.dragonbook.cn/images/4567846373483783734684434534.jpg",
    email: "kevin.sandra@example.com",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
];
export default function UploadList() {
  return <Table columns={columns} data={data} />;
}
