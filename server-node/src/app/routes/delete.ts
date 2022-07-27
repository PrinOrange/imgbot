import express, { Express } from 'express';
import fs from 'fs';
import { DeleteRequest } from '../models/request.model';

export const useDelete = (app: Express) => {
  app.post("/delete", (req, res) => {
    const request: DeleteRequest = req.body;
  });
};
