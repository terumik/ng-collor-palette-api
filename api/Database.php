<?php

class Database{
    private static $server='dummy';
    private static $db='dummy';
    private static $username='dummy';
    private static $pw='dummy';

    private static $conn = null;

    public static function getDb(){

        if(!isset(self::$conn)){
            try{
                self::$conn = new PDO('mysql:host='.self::$server.';dbname='.self::$db, self::$username,self::$pw);           
                self::$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
            } catch(PDOException $e){
                var_dump($e);
                exit(); // stop excecution, don't return anything            
            }
        }
        return self::$conn;
    }
}

?>

