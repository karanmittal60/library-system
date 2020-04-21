import React, {useState} from 'react';
import usePikachu from "../../hooks/usePikachu";
import {routeRules} from "../../routes/routeRules";
import LabelWithInput from "../../components/labelWithInput";
import LabelWithSelect from "../../components/labelWithSelect";
import {validateEmail} from "../../utils/utilities";
import {toast, ToastContainer} from "react-toastify";

const Login = (props) => {

    toast.configure({
        autoClose: 3000,
        draggable: false,
        hideProgressBar: true
    });

    const { signIn } = usePikachu();

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [phone, setPhone] = useState("");


    const login = (e) => {
        e.preventDefault();

        if ( !validateEmail(userId)){
            toast.error("Please enter valid email")
        }

        const data =  {
            id: userId,
            phone: phone,
            password: password,
        };

        const res = signIn(data);
        if (res.success){
            toast.success(res.message)
            props.history.push(routeRules.books)
        } else {
            toast.error(res.message)
        }
        console.log("data===>", data);

    };

    const userTypeOptions = [
        {value: "", label: "Please Select user type"},
        {value: "admin", label: "Admin"},
        {value: "user", label: "User"},
    ];

    return (
        <div className="container-fluid">
            <ToastContainer/>
            <div className="login">
                <div className="text-center">
                    <h3>Welcome to Library system</h3>
                </div>
                <form>
                    <LabelWithInput
                        type="email"
                        name="email"
                        label={"Email address"}
                        value={userId}
                        onChange={({target: {value}}) => setUserId(value)}
                        placeholder={"Enter Email"}
                    />
                    <LabelWithInput
                        type="number"
                        name="phone"
                        label={"Phone No."}
                        value={phone}
                        onChange={({target: {value}}) => setPhone(value)}
                        placeholder={"Enter Phone"}
                    />
                    <LabelWithInput
                        label={"Password"}
                        value={password}
                        onChange={({target: {value}}) => setPassword(value)}
                        placeholder={"Enter Password"}
                    />
                    <LabelWithSelect
                        label={"User Type"}
                        value={userType}
                        onChange={({target: {value}}) => setUserType(value)}
                        options={userTypeOptions}
                    />
                    <div className="text-center">
                        <button type="submit"
                                className="btn btn-primary"
                                onClick={login}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
