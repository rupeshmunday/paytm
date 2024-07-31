export function Amount(){
    return <div className="flex flex-col space-y-4">
        <div>
            Amount in Rs.
        </div>
        <div className="space-y-2">
            <input id="amount" type="number" placeholder="Enter Amount" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"/>
        </div>
        <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">Initiate transfer</button>
    </div>
}