import {ServerSettings} from './models/settings.model';
import fs from 'fs/promises';

export const loadSettings = async (): Promise<ServerSettings> => {
  const default_settings: ServerSettings = {
    port: 3300,
    host: 'localhost',
    password: '',
    sizeLimit: 0,
    storeSpace: 0,
    mysql_user: '',
    mysql_host: '',
    mysql_password: '',
    mysql_port: 0,
    mysql_database: ''
  };
  const loaded_settings = await fs.readFile('./server.json', 'utf-8');
  return { ...default_settings, ...JSON.parse(loaded_settings)};
};
