import { Amount } from "./SubComponents/Amount";
import { Friend } from "./SubComponents/Friend"
import { Heading } from "./SubComponents/Heading"
export default function SendMoney(){
    const friend = 'Rupesh';
    // const amount = 100;
    return <div>
        <div className="p-2.5 bg-gray-900 h-screen w-screen flex justify-center items-center shadow-lg">
            <div className="border-2 border-radius rounded-lg bg-white p-7 w-full min-[340px]:w-[318px]">
                <Heading heading={'Send Money'}/>
                <Friend name={friend}></Friend>
                <Amount/>
            </div>
        </div>
    </div>
}