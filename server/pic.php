<?php

header('content-type:image;');
$content=file_get_contents('qq.jpg');
echo $content;