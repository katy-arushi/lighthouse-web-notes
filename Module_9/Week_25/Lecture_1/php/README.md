# Week 25 | Advanced Lecture: PHP Introduction

## What is PHP?
* Interpreted programming language
* Developed originally in 1994 - Rasmus Lerdorf
* Personal Home Page (Tools)
* PHP Hypertext Preprocessor
* Is maintained by the PHP Group
* Is currently being updated

## Why NOT use PHP - I've heard bad things...
* Weak-typing, and not much enforced convention. This can be powerful in that you have more choice... however, things have more opportunity to go wrong.
* World-wide adoption and popularity means more code and examples of all types... often bad ones!

## Why USE PHP then?
* 70% or more of web applications use PHP
* 40% or more of web applications use [WordPress](https://WordPress.org/) (blogging)
* It is free and flexible
* Ease-of-use, pre-installed on most web servers
* Package manager: [Composer](https://getcomposer.org/)
* PHP's leading MVC framework: [Laravel](https://laravel.com/)

## Installing PHP
* Linux and Macintosh OS often come with PHP: `php --version`
* Manually install from the [official resource](https://www.php.net/manual/en/install.php)
* Ubuntu: `apt-get install php`
* Macintosh: `brew install php`
* Windows: `choco install php`
* If not installed, play around here: https://www.w3schools.com/php/phptryit.asp?filename=tryphp_intro

## Some Common Command-Line Options
* (Execute a file) `php ./path/to/your/script.php`
* (Run a test server) `php -S localhost:3000`
* (Execute code in a string) `php -r ""`
* (Run an interactive shell) `php -a`

## Data-Types
* Strings (concatenations via ., double versus single quotes)
* Integers
* Floats (/Doubles)
* Boolean (true/false)
* NULL (NULL)
* Resource
* Arrays (`array()` versus `[]` syntax, indexed and associative arrays)
* Objects (`json_encode` and `json_decode` are common for data transfer)

## Useful Tips
* You can use `include` to run another PHP file's contents in your script
* Use `var_dump()` or `print_r()` to get more info about a value
* Remember `+` is only used for mathematics in PHP, so it will attempt to convert any values to numbers on either side
* Global array variables exist for `$_GET`, `$_POST`, and `$_SESSION`, allowing for easy access and manipulation of form submissions and session-specific values

## Resources
* (Official PHP Documentation)[https://PHP.net/]
* (PHP on W3Schools)[https://www.w3schools.com/php/default.asp]
* (Programming PHP from O'Reilly)[https://www.oreilly.com/library/view/programming-php-4th/9781492054122/]