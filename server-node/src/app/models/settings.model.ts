export interface ServerSettings {
  port: number;
  host: string;
  password: string;

  sizeLimit: number;
  storeSpace: number;

  mysql_user: string;
  mysql_host: string;
  mysql_password: string;
  mysql_port: number;
  mysql_database: string;
}
