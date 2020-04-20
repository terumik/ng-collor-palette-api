<?php
include 'Database.php';

try{
    $conn = Database::getDb();

    // check if api_key and palette_id are set in the request url
    $key = isset($_GET['api_key'])?$_GET['api_key']:null;
    $palette_id = isset($_GET['palette_id'])?$_GET['palette_id']:null;

    $isValidKey = $conn->query("SELECT * FROM api_keys WHERE api_key = '$key'")->fetchAll(PDO::FETCH_ASSOC);
    
    // if the api key is not set or api key is invalid
    if(!$key || !$isValidKey){
        header("HTTP/1.1 401 Unauthorized");
    }
    else{
        $query_id = empty($palette_id)?'':"WHERE id = $palette_id";
        $results = $conn->query("SELECT * FROM color_palettes $query_id")->fetchAll(PDO::FETCH_ASSOC);
        
        // if the query_id does not exist
        if(empty($results)){
            header("HTTP/1.1 416 Range Not Satisfiable");
        }
        else{
            echo json_encode($results);
        }

    }

}
catch(PDOException $e){
    print("Error connecting to SQL Server");
    die(print_r($e));
}
