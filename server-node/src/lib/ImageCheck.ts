// const ImageBufferHeadersList = [
//   { bufBegin: [0xff, 0xd8], bufEnd: [0xff, 0xd9], suffix: ".jpg" },
//   { bufBegin: [0x89, 0x50], suffix: ".png" },
//   { bufBegin: [0x47, 0x49], suffix: ".gif" },
//   { bufBegin: [0x52, 0x49], suffix: ".webp" },
//   { bufBegin: [0x42, 0x4d], suffix: ".bmp" },
//   { bufBegin: [0x49, 0x49], suffix: ".tif" },
//   { bufBegin: [0x4d, 0x4d], suffix: ".tif" },
//   {
//     bufBegin: [0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x20, 0x20],
//     suffix: ".ico",
//   },
// ];

// export const isImageFile = (path: string) => {
//   for (const imageBufferHeader of ImageBufferHeadersList) {
//     let isEqual: boolean = false;
//     if (imageBufferHeader.bufBegin) {
//       const buf = Buffer.from(imageBufferHeader.bufBegin);
//       isEqual = buf.equals(fileBuffer.slice(0, imageBufferHeader.bufBegin.length));
//     }
//     if (isEqual && imageBufferHeader.bufEnd) {
//       const buf = Buffer.from(imageBufferHeader.bufEnd);
//       isEqual = buf.equals(fileBuffer.slice(-imageBufferHeader.bufEnd.length));
//     }
//     return isEqual;
//   }
// };
export {}