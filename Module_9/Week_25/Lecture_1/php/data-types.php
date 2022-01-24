<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data-Types Tests...</title>
</head>
<body>
    <h1>Data-Types Tests...</h1>
    <?php echo './templates/navigation.php'; ?>
    <pre>
        <?php
            // Strings.
            $helloWorld = 'Hello, World!';

            // Single quotes will not string interpolate.
            $myString1 = 'This is a single quote string! $helloWorld';
            echo 'String 1:', $myString1, "\n";

            // Other variables can easily be included in double quotes.
            $myString2 = "This is a double quote string! $helloWorld";
            echo 'String 2:', $myString2, "\n";

            // Strings are concatenated with the period symbol "."
            echo 'Concatenation example: ' . $helloWorld, "\n";

            // Numbers: Integer, Float/Double
            $myInteger = 5;
            $myInteger2 = -6;
            $myIntegerResult = $myInteger + $myInteger2;
            echo 'Int result: ', $myIntegerResult, "\n";

            echo 'Int plus float: ', $myInteger + 5.65, "\n";

            // Concatenation versus addition.
            echo 'Plus with string: ', '3.14.6' + 2, "\n";
            // echo 'Plus with string (starting with a letter): ', 'a 3.14.6' + 2, "\n";

            $myBool = true;
            $myBool2 = false;
            echo 'Echoing a boolean: ', $myBool, "\n";

            // var_dump is great for troubleshooting!!!
            var_dump($myBool);
            var_dump($helloWorld);

            echo "\n";

            // Good to experiment what will act as truthy or falsey in practice...
            if( '0' ){
                echo "This is true!";
            } else {
                echo "This is false!";
            }

            // Arrays!

            // Indexed arrays examples...
            $pets = array('Dog', 'Cat', 'Fish', 'Hedgehog'); // Function-like syntax.
            $furniture = ['Chair', 'Table', 'Couch'];
            echo 'Example index value: ', $pets[2], "\n";

            // Associative arrays example...
            $person = array(
                'name'       => 'Fred',
                'age'        => 35,
                'occupation' => 'Window Cleaner'
            );
            echo 'Associative array example: ', $person, "\n";
            echo 'Associative array echo value example: ', $person['age'], "\n";
            var_dump($person);
            print_r($person); // Simpler output than var_dump()

            echo "\n";

            // Objects
            $jsonString = '{"name": "Quorra", "breed": "Akita"}';
            $jsonObj = json_decode($jsonString);
            var_dump($jsonObj);

            // Now that we have a PHP object, we can access properties.
            echo 'PHP object from JSON, name prop: ', $jsonObj->name, "\n";
            $jsonObj->name = "Baron";
            echo 'PHP object from JSON, name prop changed: ', $jsonObj->name, "\n";
            echo json_encode($jsonObj), "\n"; // We can easily convert back to JSON.

            // Standard anonymous PHP object (without any JSON stuff!)
            $myFirstObj = new stdClass();
            $myFirstObj->name = 'Theresa';
            $myFirstObj->age = 28;
            $myFirstObj->hobbies = ['Racecar Driving', 'Parachuting', 'Speedwalking'];
            var_dump($myFirstObj);

            // Enforcing data-types is called type-casting...
            $myInt = 5.678; // This won't be an int! Oh no!
            var_dump($myInt);
            $myInt = (integer) 5.678; // Now it is an integer! Yay!
            var_dump($myInt);
            var_dump( intval(13.745896) );
        ?>
    </pre>
</body>
</html>