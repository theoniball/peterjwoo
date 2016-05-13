<?php
$config = array(
  "db" => array(
    //login DB
    /*"login" => array(
      "dbname" => "",
      "username" => "",
      "password" => "",
      "host" => ""
    ),*/
    //boardgames DB
    "boardgames" => array(
      "dbname" => "boardgames",
      "username" => "pwoo",
      "password" => "7DFP552c137",
      "host" => ""
    )
    //books DB
    /*"books" => array(
      "dbname" => "",
      "username" => "",
      "password" => "",
      "host" => ""
    )*/
  ),
  "urls" => array(
    "baseURL" => "http://peterjwoo.com"
  ),
  "paths" => array(
    "resources" => "/var/www/html/resources",
    "images" => array(
      "content" => "/var/www/html" . "/img/content",
      "layout" => "/var/www/html" . "/img/layout"
    )
  )
);

defined("LIBRARY_PATH")
  or define("LIBRARY_PATH", "/var/www/html/resources" . "/library"));
defined("TEMPLATES_PATH")
  or define("TEMPLATES_PATH"), "/var/www/html/resources" . "/templates"));

ini_set("error_reporting", "true");
error_reporting(E_ALL|E_STRCT);
?>
