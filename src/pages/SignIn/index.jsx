import { useNavigate } from "react-router-dom";
import Button from "../../layouts/Button";
import {
    createDocumentFromAuth,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const navigate = useNavigate();

    const navigateToSignUp = () => navigate("/sign-up");

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createDocumentFromAuth(user);
    };

    return (
        <div className="signin">
            <h1>Sign In</h1>
            <Button buttonType="btn-primary" onClick={logGoogleUser}>
                Sign In With Google Popup
            </Button>
            <h2>Do not have an account?</h2>
            <Button buttonType="btn-secondary" onClick={navigateToSignUp}>
                Create Now
            </Button>
        </div>
    );
};

export default SignIn;
