import mysql from "mysql";

export const getMysqlConnection = (user: string, password: string, database: string, host: string, port: number) => {
  const conn = mysql.createConnection({
    host: host,
    user: user,
    database: database,
    password: password,
    port: port,
  });
  return conn;
};

export const writeRecord = (id: string) => {};

export const deleteRecord = (id: string) => {};

export const updateRecord = (id: string) => {};
