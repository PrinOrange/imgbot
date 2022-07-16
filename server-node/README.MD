# IMGBOT Service

This is the project source code of the imgbot server.

imgbot is implemented using nodejs, using TypeScript as the development language, and Webpack as the packaging and construction tool.

The task of the server project is to provide the API implementation of the image server. For details, please refer to the API documentation.

Management tools for image servers are also provided. These management tools are also packaged and built together with imgbot as Nodejs subprograms.

## Usage

If you want to build the runner directly

```bash
npm run start
```

Otherwise, build the program first and generate the package

```bash
npm run package
```

Then a directory `./build` will be generated, Inside is the generated package.

Then, go to the `build` directory and execute the command

```bash
npm run start
```

For more command usage, please refer to the manual

## Available Scripts

Preview API on webpage

```bash
npm run preview
```

Build to package.

```bash
npm run package
```

Start with development mode

```bash
npm run dev
```

Start with production mode.
```bash
npm run start
```

Clean the builded target
```bash
npm run clean
```

**Before start running the project, you are supposed to compile them first**

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.