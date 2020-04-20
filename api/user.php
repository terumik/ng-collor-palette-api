<?php


$server='dummy';
$db='dummy';
$username='dummy';
$pw='dummy';

try{
    $conn = new PDO("mysql:host=$server;dbname=$db", $username, $pw);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Setting For API
    $key = '';
    if(isset($_GET['api_key'])){
        $key = $_GET['api_key'];
        $hasApiKey= $conn->query("SELECT * FROM api_keys WHERE api_key = '$key'")->fetchAll(PDO::FETCH_ASSOC);
        if($hasApiKey){
            $results = $conn->query('SELECT * FROM Users')->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($results);
    
        }
        else{
            header("HTTP/1.1 401 Unauthorized");
        }
    }
    else{
        header("HTTP/1.1 401 Unauthorized");
    }
}
catch(PDOException $e){
    print("Error connecting to SQL Server");
    die(print_r($e));
}