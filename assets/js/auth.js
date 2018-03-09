           if (getCookie('access_token')) {
                let xhr = new XMLHttpRequest()
                xhr.open('GET', 'https://discordapp.com/api/v6/users/@me', true);
                xhr.setRequestHeader('Authorization', getCookie('token_type') + " " + getCookie('access_token'));
                xhr.send();
                xhr.onloadend = (e) => {
                    let user = JSON.parse(xhr.responseText);
                    document.getElementById('userid').innerHTML = `${user.username}<span style="font-size: .7em; color: white">#${user.discriminator}</span>`
                    document.getElementById('avatar').src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
                    document.getElementById('user_id') = `${user.id}`;
                    function checkDev(){
                      if(user.id = '204483358909136896' || user.id = '206224619902992385' || user.id = '265071448182358018';){
                          document.getElementById('authentic').style.display = 'block'; 
                      } else {
                          return;
                      }
                    }
                };
            } else {
                setCookie('access_token', 'delet this', -100000);
                alert("[ALERT] >> You need to log in inorder to access this page!");
                window.location.href = "https://nastyybot.github.io/";
            }
            
            function logout() {
                setCookie('access_token', 'delet this', -100000);
                alert("[NOTICE] >> Logout successful! Redirecting to main page...");
                window.location.href = "https://nastyybot.github.io/";
            }
            
            function getCookie(cname) {
                var name = cname + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for(var i = 0; i <ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return null;
            }
            function setCookie(cname, cvalue, exms) {
                var d = new Date();
                d.setTime(d.getTime() + exms);
                var expires = "expires="+ d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }
