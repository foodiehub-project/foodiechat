import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import url from "../constants";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="my-8">
        <GoogleOAuthProvider
          clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
        >
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              try {
                // console.log(credentialResponse.credential);
                const { data } = await axios.post(
                  url + "/auth/google/callback",
                  {
                    code: credentialResponse.credential,
                  }
                );
                // console.log(data, '<<< credentials');

                localStorage.setItem("access_token", data);
                navigate("/");
              } catch (error) {
                console.error("Login failed:", error.message);
              }
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        </GoogleOAuthProvider>
      </div>
    </>
  );
};

export default GoogleLoginButton;
