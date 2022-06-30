<?php
header("Content-type:application/json");

$include_path = "E:/SiteProj/imgbot/server";
set_include_path($include_path);

$uploads_dir_name = "images";
$full_uploads_dir = get_include_path() . '/' . $uploads_dir_name;

$request = file_get_contents("php://input");
$respond = [
    "status" => null,
    "message" => null,
];