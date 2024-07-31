import { Appbar } from "./SubComponents/Appbar"
import { Balance } from "./SubComponents/Balance"
import { Users } from "./SubComponents/Users"
export default function Dashboard(){
    return <div className="flex flex-col">
        <Appbar></Appbar>
        <Balance></Balance>
        <Users></Users>
    </div>
}