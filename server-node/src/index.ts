import express from "express";
import minimist from "minimist";

const args = minimist(process.argv);

const PORT: number = args["port"] ?? 3300;

const app = express();