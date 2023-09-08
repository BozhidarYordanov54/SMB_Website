<?php
header('Content-Type: application/json');

date_default_timezone_set('Europe/Sofia');

$currentTime = date('Y-m-d H:i:s', time());

echo json_encode(['currentTime' => $currentTime]);
?>
