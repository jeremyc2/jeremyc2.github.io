<?php
	$size = sizeof($_GET);
	if ($size != 0){
		$firstname = $_GET["firstname"];
		$lastname = $_GET["lastname"];
		$studentid = $_GET["studentid"];
		$firstname1 = $_GET["firstname1"];
		$lastname1 = $_GET["lastname1"];
		$studentid1 = $_GET["studentid1"];
		if ($firstname1 == "")
			$firstname1 = "N/A";
		if ($studentid1 == "")
			$studentid1 = "N/A";
		$building = $_GET["building"];
		$roomnumber = $_GET["roomnumber"];
		$skill = $_GET["skill"];
		$instrument = $_GET["instrument"];
		$time = $_GET["time"];
		$performancetype = $_GET["performancetype"];
		$txt = "<tr>" . "<td>" . $firstname . " " . $lastname . "</td>";
		$txt .= "<td>" . $studentid . "</td>" . "<td>" . $firstname1 . " ";
		$txt .= $lastname1 . "</td>" . "<td>" . $studentid1 . "</td>";
		$txt .= "<td>" . $building . "</td>" . "<td>" . $roomnumber . "</td>";
		$txt .= "<td>" . $performancetype . "</td>" . "<td>" . $skill . "</td>" . "<td>" . $instrument . "</td>";
		$txt .= "<td>" . $time . "</td>" . "</tr>" . "\n";
		file_put_contents("data/data.txt", $txt, FILE_APPEND);
	}
    $file_lines = file("data/data.txt");
	$str = "<table> <tr> <th> Entrant </th> <th> Student ID </th> 
	<th> (If Duet) Teammate </th> <th> (If Duet) Teammate's Student ID </th> 
	<th> Building </th> <th> Room Number </th> <th> Performance Type </th> <th> Skill Level </th> 
	<th> Instrument </th> <th> Time </th> </tr>";
	foreach($file_lines as $lines)
	{
	   $str .= $lines;
	}
	$str .= "</table>";
	echo $str;
?>