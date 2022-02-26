<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First PHP Web Page</title>
</head>
<body>
    <h1>My First PHP Web Page</h1>
    <?php include './templates/navigation.php'; ?>
    <p>
        <!-- This is seen by the browser. -->
        The result for 3 + 6 is:
        <?php
            // Comments! Only viewable by the back-end.
            echo 3 + 6;
        ?>
    </p>
</body>
</html>