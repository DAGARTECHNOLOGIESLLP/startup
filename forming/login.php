<?php
	require('connect_pdo.php');
	
	$studentname = $_POST['studentname'];
	$fathername = $_POST['fathername'];
	$address = $_POST['address'];
	$emailid = $_POST['emailid'];
	$moblie = $_POST['moblie'];
	
	
$query = $conn->prepare("INSERT INTO form (Name,FatherName,Address,Email,Mobille)  values(?,?,?,?,?)");
$result=$query->execute(array($studentname,$fathername,$address,$emailid,$moblie));

if($result){
echo "true";
}
else{
echo "false";
}

?>
