<?php

set_include_path("E:\SiteProj\imgbot\server");
$uploads_dir = get_include_path() . '/images';

foreach ($_FILES as $file_form_name => $item) {
    if ($item["error"] == UPLOAD_ERR_OK) {
        $temp_file_path = $item["tmp_name"];
        $upload_file_name = uniqid() . '.' . pathinfo($item["name"], PATHINFO_EXTENSION);
        $upload_file_path = "$uploads_dir/$upload_file_name";
        echo $upload_file_path;
        move_uploaded_file($temp_file_path, $upload_file_path);
    }
}