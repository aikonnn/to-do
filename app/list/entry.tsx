export default function Entry(props: any) {
    return (
        <div className="flex items-center justify-center">
            <div className="px-2">urgent</div>
            <div className='py-5'>{props.text}</div>
            <button className="mx-3">del</button>
        </div>
    )
}