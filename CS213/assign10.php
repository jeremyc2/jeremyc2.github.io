
<?php
    header("Content-type: text/html\n\n");
?>

<!DOCTYPE html><html><head><link rel="stylesheet" type="text/css" href=http://157.201.194.254/~jeremyc2/assign09.css />
<title>Purchase Confirmation</title></head>
<body style="text-align:center;">
<heading>
    <h1>Thank you for shopping with us!</h1>
</heading>

<?php
	echo "<h1>Review Purchase</h1>";
	echo "Customer Name <br/>";
	echo $_GET["First_Name"]; echo "&nbsp;"; 
	echo $_GET["Last_Name"];
	echo "<br/> Address <br/>";
	echo $_GET["Address"];
	echo "<br/> Phone <br/>";
	echo $_GET["Phone"];
	echo "<br/> Credit Card Type <br/>";
	echo $_GET["Credit_Card_Type"];
	echo "<br/> Credit Card Expiration Date <br/>";
	echo $_GET["Credit_Card_Expiration_Date"];
	$cart = $_GET[cart];
	$price = 0;
	while ($purchase = each($cart))
	{
		echo " <br/> You bought an album from ";
		echo $purchase["value"];
		echo "<br/>";
		echo " for a price of $5.00 <br/>";
		$price += 5;
	}
	print ("</br> For a total cost of \$$price.00")

    
?>
<form action="assign10_a.php" method="GET">
    <button type="submit" name="confirm" value="Confirm Purchase">Confirm Purchase</button>
    <button type="submit" value="Cancel Purchase">Cancel Purchase</button>
</form>
</body></html>


