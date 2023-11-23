import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import BASE_URL from "../BaseUrl";


export default function UserList() {
    const { groupId } = useParams()
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        let ignore = false;

        fetchUsers(ignore);
        return () => (ignore = true);
    }, []);

    const fetchUsers = async (ignore) => {
        try {
            const { data } = await axios({
                method: "get",
                url: `${BASE_URL}/groups/${groupId}`,
                headers: {
                    authorization: `Bearer ${localStorage.access_token}`
                }
            });

            if(!ignore) {
                setUsers(data.UserGroups);
            }
        }
        catch(error) {
            swal({
                text: error.response.data.message,
                icon: "error"
            })
        }
    }
    return (
        <div className="userContext">
        <p className="userList">Chat Participant's</p>
        {users.map((user, index) => {
            return (
                <div key={index} className="containerUList">
                <img
                    src={`${user.User.profilePicture}`}
                    className="rounded-circle user_img_msg"
                />
                <p className="userByList">{user.User.fullName}</p>
                </div>
            )
        })}
      </div>
    )
}