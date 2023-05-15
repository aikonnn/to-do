export default function Entry(props: any) {
    async function deleteEntry(){
        console.log("called delte function");
        const data = await (
            await fetch(
              "api/task/" + props.id, 
              {
                method: 'DELETE'
              }
            )
          ).json();
    }

    return (
        <div className="rounded-xl w-4/5 text-slate-800 max-w-xl flex items-center justify-between my-2 bg-violet-200 px-4 py-4">
            <div className='px-2'>{props.urgency}</div>
            <div className='px-2'>{props.task}</div>
            <button className="mx-3" onClick={e => props.handleChange(deleteEntry)}>del</button>
        </div>
    )
}