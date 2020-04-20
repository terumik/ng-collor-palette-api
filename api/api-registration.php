<?php
include 'Database.php';

$p_name = $email = $error = '';

// Validation will be implemented
if(isset($_POST['submit'])){
    $p_name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);

    if(!empty($p_name) && !empty($email)){
        $key = uniqid();
        $conn = Database::getDb();
    
        $q = $conn -> prepare("INSERT INTO api_keys (api_key, email, project_name) VALUES (:key, :email, :project_name)");
        $q->bindParam(':key', $key, PDO::PARAM_STR);
        $q->bindParam(':email', $email, PDO::PARAM_STR);
        $q->bindParam(':project_name', $p_name, PDO::PARAM_STR);
        
        $q->execute();
    }
    else{
        $error = 'Please complete the form.';
    }


}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Generate API Key</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</head>
<body>
    <main>
        <div class="container">
            <h1>Generate API Key</h1>
            <form action="api_registration.php" method="post" class="col-md-8">
                <div class="form-group">
                    <label for="name">* Project Name</label>
                    <input type="text" id="name" name="name" class="form-control" value="<?= $p_name ?>">
                </div>    
                <div class="form-group">
                    <label for="email">* Email</label>
                    <input type="email" id="email" name="email" class="form-control" value="<?= $email ?>">
                </div>            
                <input type="submit" name="submit" value="Register" class="btn btn-primary">
            </form>
            <div class="mt-5 text-success h4">
                <?= isset($key)&&isset($_POST['submit'])?'<p>Success! Your API key is '. $key . '</p>':'' ?>
                <?= $error?>
            </div>

        </div>

    </main>
</body>
</html>