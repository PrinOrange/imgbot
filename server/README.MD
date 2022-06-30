# IMG-BOT FOR PHP 接口说明

### 上传图片

#### 请求地址：
```
http://pic.example.com/api/upload.php
```
#### 请求方法：
`POST`

#### 数据格式：
`HTML5 FormData`

#### 其他表单项参数设置及说明： 

+ name : 必填，填写为 `upload_image`。
+ group : 图片分组。可选。填写图床分组的代码，上传图片后会自动对该图片划为指定分组。若不填写，则设置为默认分组。

#### 响应信息
调用API后，会根据请求内容发出一个扁平化JSON格式的响应内容。
JSON字段说明如下：
| 名称 | 值 | 值意义 |
| - | - | - |
| status | `ok` \| `err` \| `warn` | `ok`:上传成功 ， `err`:上传失败，`warn`:上传成功但是有警告 |
| url | 一个URL链接 | 图片的引用地址 |
| message | 字符串 | 来自服务器的消息 |

在使用本API时，若接收到的`status`不为`error`，则图片可为成功上传。若为`status`或者`warn`时，具体消息内容会在`message`字段中给出。