<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Form Examples</title>
</head>
<body>
    <h1>PHP Form Examples</h1>
    <?php include './templates/navigation.php'; ?>
    <h2>Addition Calculator</h2>
    <form method="GET">
        <input name="num1" type="number" value="<?php echo $_GET['num1']; ?>">
        &plus;
        <input name="num2" type="number" value="<?php echo $_GET['num2']; ?>">
        <input type="submit" value="Calculate Sum">
        <p>
            <strong>Calculated Result:</strong>
            <?php echo $_GET['num1'] + $_GET['num2']; ?>
        </p>
    </form>
    <pre>
        <?php
            // $_GET is a global, created for us
            // containing all query parameter
            // values in our web address bar.
            var_dump($_GET);
        ?>
    </pre>
</body>
</html>