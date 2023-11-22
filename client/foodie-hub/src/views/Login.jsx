export default function Login() {
    const navigate = useNavigate();
    async function handleCredentialResponse(response) {
        const { data } = await axios({
            method: "post",
            url: `${BASE_URL}/auth/google`,
            headers: {
                g_token: response.credential
            }
        });
        localStorage.setItem("access_token", data.access_token);
        navigate("/")
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "",
            callback: handleCredentialResponse
          });
          google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" }  // customization attributes
          );
          google.accounts.id.prompt();
    }, []);
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });
    return (
        <>
            <div id="buttonDiv"></div>
        </>
    )
}