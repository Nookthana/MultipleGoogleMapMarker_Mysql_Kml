<?php
require "connect.php";


$sth = $conn->prepare('SELECT `latitude`,`longitude` FROM `coordinates` ');
$sth->execute();
$result = $sth->fetchAll(PDO::FETCH_NUM);
echo json_encode($result, JSON_NUMERIC_CHECK);
