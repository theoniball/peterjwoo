<?php
class simpleCMS {
  var $host;
  var $username;
  var $password;
  var $table;

  public function display_plubic() {

  }

  public function display_admin() {

  }

  public function write() {

  }

  public function connect() {
    mysql_connect($this->host,$this->username,$this->$password) or die ("Could not connect. " . mysql_error());
    mysql_select_db($this->table) or die("Could not select database. " . mysql_error());

    return $this->buildDB();
  }

  public function buildDB() {
    $sql = <<<MySQL_QUERY
      CREATE TABLE IF NOT EXISTS testDB (
        title VARCHAR(150),
        bodytext TEXT,
        created VARCHAR(100)
        )
      MySQL_QUERY;
      return mysql_query($sql);
  }
}
 ?>
