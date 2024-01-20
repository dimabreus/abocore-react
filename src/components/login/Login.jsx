import React, { useContext, useEffect, useRef, useState } from 'react';
import './login.css';
import list from '../../list/list';
import { Button, TextField, Link as MuiLink, Box } from '@mui/material';
import { Link as NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { userContext } from '../../App';

const Login = () => {
    const [userLogin, setUserLogin] = useState({ login: '', password: '' })

    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');


    const { user, setUser } = useContext(userContext)

    const [loginFocus, setLoginFocus] = useState(true)
    const [passwordFocus, setPasswordFocus] = useState(false)

    const passwordInputRef = useRef(null);

    const [loginError, setLoginError] = useState(false);
    const [loginErrorText, setLoginErrorText] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorText, setPasswordErrorText] = useState("");

    useEffect(() => {
        console.log(`login: ${loginValue}\npassword: ${passwordValue}`)
        if (loginError) setLoginError(false);
        if (passwordError) setPasswordError(false);
    }, [loginValue, passwordValue])

    const handleLoginPress = (e) => {
        if (e.key === "Enter") {
            console.log("AASDDJKL")
            login()
        }
    }

    const handlePasswordPress = (e) => {
        if (e.key === "Enter") {
            login()
        }
    }

    const login = () => {
        let isLogin = Object.values(list).reduce((acc, el) => {
            if (el.name === loginValue) {
                acc = true;
            }
            return acc;
        }, false);

        if (isLogin === false) {
            setLoginError(true)
            setLoginErrorText("Пользователь не найден")
        }

        else {
            setLoginError(false)

            passwordInputRef.current.childNodes[1].childNodes[0].focus(); // Фокус на password input

            if (passwordValue !== list[loginValue].password) {
                setPasswordError(true)
                setPasswordErrorText("Неправильный пароль")

            } else {
                setUser({ name: list[loginValue].name, avatar: list[loginValue].avatar })
                alert("Вы успешно авторизовались")
            }
        }
    }
    return (
        <Box className='login' sx={{
            border: "1px solid white",
            borderRadius: "5px",
            padding: "50px",
            margin: "0 auto"
        }}>
            <Box sx={{ textAlign: "center" }}>
                <Box className="flex" sx={{ justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ marginRight: "5px" }}>
                        <img src={logo} alt="" />
                    </Box>
                    <span className="name">AboCore</span>
                </Box>

                <h1>Вход</h1>
            </Box>


            <div>
                <TextField label="Логин" variant="outlined" sx={{
                    "& fieldset": { borderColor: "white !important" },
                    "& input, label": { color: "white !important" }
                }}
                    value={loginValue} onChange={(e) => setLoginValue(e.target.value)}
                    error={loginError} helperText={loginError ? loginErrorText : ""}
                    onKeyDown={handleLoginPress} autoFocus={loginFocus} />
            </div>

            <Box sx={{ marginTop: "10px !important" }} ><NavLink to="/create-account"><MuiLink>Забыли логин?</MuiLink></NavLink></Box>


            <div>
                <TextField label="Пароль" variant="outlined" sx={{
                    "& fieldset": { borderColor: "white !important" },
                    "& input, label": { color: "white !important" }
                }}
                    value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)}
                    error={passwordError} helperText={passwordError ? passwordErrorText : ""}
                    onKeyDown={handlePasswordPress}
                    ref={passwordInputRef}/>
            </div>

            <Box className="flex" sx={{ justifyContent: "space-between", alignItems: "space-between" }}>
                <NavLink to="/create-account"><MuiLink>Создать аккаунт</MuiLink></NavLink>

                <Button variant="contained" onClick={login} sx={{
                    background: "rgb(255, 255, 255)",
                    color: "black",
                    textTransform: "none",
                    "&:hover": {
                        background: "rgb(170, 170, 170)"
                    }
                }}>Далее</Button>
            </Box>
        </Box>
    );
};

export default Login;