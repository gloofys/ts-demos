import {AdminInfoList} from "../Types.ts";
import React from "react";

type AdminInfoProps = {
    admin: AdminInfoList

}

const AdminInfo:React.FC<AdminInfoProps> = ({admin}) => {
    return (
        <div>

            <h2>Admin Info</h2>
            <p> ID:{admin.id}</p>
            <p> Name:{admin.name}</p>
            <p> Email:{admin.email}</p>
            <p> Role:{admin.role}</p>
            <p> Last Login:{admin.lastLogin.toLocaleString()}
            </p>


        </div>
    )
}
export default AdminInfo
