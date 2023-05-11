import Entry from "./entry"

export default function List() {
    return (
      <main className="flex h-screen flex-col items-center justify-center p-24">
        <div className='py-5'>heres your tasks for today, lets  get that BAGGG</div>
        <Entry text = "feed ya dog"/>
      </main>
    )
  }