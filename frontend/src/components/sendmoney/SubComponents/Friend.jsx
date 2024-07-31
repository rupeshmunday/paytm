export function Friend(props){
    return <div className="flex">
        <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-2xl text-white">{props.name[0]}</span>
            </div>
            <h3 className="text-2xl font-semibold ml-30">{props.name}</h3>
        </div>
    </div>
}