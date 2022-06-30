<?php
header("Content-type:application/json");

define("INCLUDE_PATH", "E:/SiteProj/imgbot/server");
define("FILE_API_NAME", "upload_image");

set_include_path(INCLUDE_PATH);
$uploads_dir_name = "images";
$full_uploads_dir = get_include_path() . '/' . $uploads_dir_name;

$response = [
    "status" => null,
    "id" => null,
    "url" => null,
    "message" => null,
];

try {
    if ($_FILES[FILE_API_NAME]["error"] == UPLOAD_ERR_OK) {
        $image_id = uniqid();
        $temp_file_path = $_FILES[FILE_API_NAME]["tmp_name"];
        $upload_file_name = $image_id . '.' . pathinfo($_FILES[FILE_API_NAME]["name"], PATHINFO_EXTENSION);
        $upload_file_path = "$full_uploads_dir/$upload_file_name";
        if (exif_imagetype($temp_file_path) == false) {
            throw new Exception("非法图片格式");
        }
        move_uploaded_file($temp_file_path, $upload_file_path);
        $response["id"] = $image_id;
        $response["status"] = "ok";
        $response["url"] = "http://127.0.0.8:8080/$uploads_dir_name/$upload_file_name";
    }
} catch (Exception $e) {
    $response["status"] = "err";
    $response["message"] = $e->getMessage();
}

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);