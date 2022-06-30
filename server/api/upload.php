<?php

set_include_path("E:\SiteProj\imgbot\server");

define("FILE_API_NAME", "upload_image");

$uploads_dir = get_include_path() . '/images';

if ($_FILES[FILE_API_NAME]["error"] == UPLOAD_ERR_OK) {
    $temp_file_path = $_FILES[FILE_API_NAME]["tmp_name"];
    $upload_file_name = uniqid() . '.' . pathinfo($_FILES[FILE_API_NAME]["name"], PATHINFO_EXTENSION);
    $upload_file_path = "$uploads_dir/$upload_file_name";
    echo $upload_file_path;
    move_uploaded_file($temp_file_path, $upload_file_path);
}
