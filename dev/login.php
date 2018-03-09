<?php
    if(isset($_SESSION) == false){
        session_start();
    }

    $has_Cookie_DisplayName = isset($_COOKIE["COOKIE_DISPLAYNAME"]);
    if($has_Cookie_DisplayName == true){
        $_SESSION["SESS_DISPLAYNAME"] = $_COOKIE["COOKIE_DISPLAYNAME"];
    }

    if(isset($_SESSION['SESS_DISPLAYNAME'])){
        header("Location: index.php");
    }

    $isLoginButtonClicked = isset($_POST['btnSubmit']);
    if($isLoginButtonClicked == true){
        $userName = $_POST['tbUsername'];
        $password = $_POST['tbPassword'];

        if($userName == 'nasty' && $password == 'admin'){
            $_SESSION["SESS_DISPLAYNAME"] = 'Nasty';
            
            $rememberMeChecked == isset($_POST['cbRememberMe']);
            if($rememberMeChecked == true){
                $expiryTime = time() + 60 * 60 * 24 * 30;
                setcookie("COOKIE_DISPLAYNAME", "Nasty", $expiryTime);
            }
            header("Location: index.php");
        } else if($userName == 'pie' && $password == 'admin'){
            $_SESSION["SESS_DISPLAYNAME"] = 'TheFallingPie';
            
            $rememberMeChecked == isset($_POST['cbRememberMe']);
            if($rememberMeChecked == true){
                $expiryTime = time() + 60 * 60 * 24 * 30;
                setcookie("COOKIE_DISPLAYNAME", "TheFallingPie", $expiryTime);
            }
            header("Location: index.php");
        } else if($userName == 'toni' && $password == 'admin'){
            $_SESSION["SESS_DISPLAYNAME"] = 'Toni';
            
            $rememberMeChecked == isset($_POST['cbRememberMe']);
            if($rememberMeChecked == true){
                $expiryTime = time() + 60 * 60 * 24 * 30;
                setcookie("COOKIE_DISPLAYNAME", "Toni", $expiryTime);
            }
            header("Location: index.php");
        } else {
            echo "<span style='color: red'>Wrong Username / password</span>";
        }
    }
?>

<html>
    <body>
        <h2> N A S T Y DEV Login </h2>
        <p> Please enter your username and password to log into the websites. <br />
        If you do not have an account, contact ItsJustNasty or you are not supposed to be here
        </p>
        <form method="POST" action="<?php echo $_SERVER['REQUEST_URI']; ?>">
            <table>
                <tbody>
                    <tr>
                        <td>Username</td>
                        <td><input type="textbox" name="tbUsername" id="tbUsername" /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="tbPassword" id="tbPassword" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="checkbox" name="cbRememberMe" id="cbRememberMe" value="Yes" />Remember Me</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" name="btnSubmit" id="btnSubmit" value="Log In" /></td>
                    </tr>
                </tbody>
            </table>
        </form>
    </body>
</html>
