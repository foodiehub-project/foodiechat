import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../BaseUrl";

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
                // console.log('masuk sini');
                // console.log(credentialResponse.credential);
                const { data } = await axios.post(
                  BASE_URL + "/auth/google/callback",
                  {
                    code: credentialResponse.credential,
                  }
                );
                // console.log(data, '<<< credentials');
                console.log(data);

                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("id", data.id);
                localStorage.setItem("name", data.name);
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
