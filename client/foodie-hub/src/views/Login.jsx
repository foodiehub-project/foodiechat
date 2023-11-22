// export default function Login() {
//     const navigate = useNavigate();
//     async function handleCredentialResponse(response) {
//         const { data } = await axios({
//             method: "post",
//             url: `${BASE_URL}/auth/google`,
//             headers: {
//                 g_token: response.credential
//             }
//         });
//         localStorage.setItem("access_token", data.access_token);
//         navigate("/")
//     }

//     useEffect(() => {
//         google.accounts.id.initialize({
//             client_id: "",
//             callback: handleCredentialResponse
//           });
//           google.accounts.id.renderButton(
//             document.getElementById("buttonDiv"),
//             { theme: "outline", size: "large" }  // customization attributes
//           );
//           google.accounts.id.prompt();
//     }, []);
//     const [loginForm, setLoginForm] = useState({
//         email: "",
//         password: ""
//     });
//     return (
//         <>
//             <div id="buttonDiv"></div>
//         </>
//     )
// }

import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const GoogleButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="btn">
        <GoogleOAuthProvider clientId="640309498273-e1vrr8cdk9u6rg118clii64hki033vc4.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              try {
                console.log(credentialResponse.credential);
                const { data } = await axios.post(
                  "URL/auth/google/callback",
                  {
                    code: credentialResponse.credential,
                  }
                );
                localStorage.setItem("Authorization", data);
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
