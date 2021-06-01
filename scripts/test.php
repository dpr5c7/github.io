<!DOCTYPE html>
<html>
<body>

<?php
$servername = "localhost";
$username = "root";
$password = "rollasucks";
$dbname = "gamesdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT userid, Game Title, System FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<br> id: ". $row["userid"]. " - Name: ". $row["Game Title"]. " " . $row["System"] . "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>

</body>
</html>