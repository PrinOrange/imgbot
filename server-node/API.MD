# IMG-BOT FOR PHP 接口说明

### 上传图片

#### 请求地址：
PHP版本地址：
```
http://pic.example.com/api/upload.php
```
Nodejs版本地址：
```
http://pic.example.com/upload-image
```

#### 请求方法：
`POST`

#### 请求格式：
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
| id | 字符串 | 图片的id号码 |
| message | 字符串 | 来自服务器的消息 |

在使用本API时，若接收到的`status`不为`error`，则图片可为成功上传。若为`status`或者`warn`时，具体消息内容会在`message`字段中给出。

每一个上传的图片都会有唯一的`id`号码。这个`id`号码在使用其他管理API的功能(如修改、删除、重编组等)就需要提供。所以如果日后有对该图片的管理功能需求，请妥善保存此`id`号码。

### 删除图片

#### 请求地址：
PHP版本地址：
```
http://pic.example.com/api/upload.php
```
#### 请求方法：
`POST`

#### 请求格式：
`标准JSON UTF-8字符集`

#### 请求体内容及字段说明

| 名称 | 值 | 值意义 |
| - | - | - |
| id | 字符串  | 图片的id信息 |

示例：以下是删除id为`108ss458uo4ss7`的图片信息。

```json
{
    "id":"108ss458uo4ss7"
}
```

#### 响应信息

| 名称 | 值 | 值意义 |
| - | - | - |
| status | `ok` \| `err`  | `ok`:删除成功 ， `err`:删除失败 |
| message | 字符串 | 来自服务器的消息 |