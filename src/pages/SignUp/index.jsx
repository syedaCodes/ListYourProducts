import { useState } from "react";
import {
    createDocumentFromAuth,
    createUserAuthWithEmailandPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFields);

    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => setFormFields(defaultFields);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formFields) return;

        if (password !== confirmPassword) {
            alert("passwords do not match");
        }

        try {
            //pass credentials for authentication and collect user object
            const { user } = await createUserAuthWithEmailandPassword(
                email,
                password
            );

            //create a record in the firestore database
            await createDocumentFromAuth(user, { displayName });

            //clean up form
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("email already in use");
            } else {
                console.log("user creation encountered an error", error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="signup">
            <h1 className="signup__heading">
                Sign Up with your email and password
            </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="displayName">Display Name</label>
                <input
                    type="text"
                    name="displayName"
                    onChange={handleChange}
                    value={displayName}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    required
                />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={confirmPassword}
                    required
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
