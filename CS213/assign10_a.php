
<?php
    header("Content-type: text/html\n\n");
?>

<!DOCTYPE html><html><head><link rel="stylesheet" type="text/css" href=http://157.201.194.254/~jeremyc2/assign09.css />
<title>Purchase Confirmation</title></head>
<body style="text-align:center;">
<h2>
<?php
    if ($_GET["confirm"])
        echo "Your purchase was CONFIRMED!!";
    else
        echo "Your purchase was CANCELED";
?>
</h2>
</body></html>


