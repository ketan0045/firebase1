
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { registerInitiate } from "../redux/action";


const Register = () => {
    const [state, setState] = useState({
        dispalyName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    //   const {currentus} = useSelector((state)=>state.user)
    const { currentUser } = useSelector((state) => state.user)

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser) {
            navigate("/")
        }
    }, [currentUser,navigate])
    // }, [currentUser,navigate])


    const { email, password, dispalyName, passwordConfirm } = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, dispalyName));
        setState({ email: "", dispalyName: "", password: "", passwordConfirm: "" })
    };
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    };
    return (
        <div>
            <div id="register-form">
                <form className="form-signup" onSubmit={handleSubmit}>
                    <h1
                        className="h3 mb-3 font-weight-normal"
                        style={{ textAlign: "center" }}
                    >
                        Sign up
                    </h1>
                    <input
                        type="text"
                        id="displayName"
                        className="form-control"
                        placeholder="full name"
                        name="dispalyName"
                        onChange={handleChange}
                        value={dispalyName}
                        required
                    /><br />
                    <input
                        type="email"
                        id="user-email"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    /><br />
                    <input
                        type="password"
                        id="inputpassword"
                        className="form-control"
                        placeholder="Email password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                    /><br />
                    <input
                        type="password"
                        id="inputRepassword"
                        className="form-control"
                        placeholder="Repeat password"
                        name="passwordConfirm"
                        onChange={handleChange}
                        value={passwordConfirm}
                        required
                    />
                    <button className="btn btn-primary btn-block" type="submit">
                        <i className="fas fa-user-plus"></i>Sign up
                    </button>
                    <Link to="/login">
                        <i className="fas fa-angle-left"></i>Back
                    </Link>
                </form>
                <br/>
            </div>
        </div>
    );
};

export default Register;
