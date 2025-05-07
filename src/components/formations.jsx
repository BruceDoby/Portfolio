import data from '../data/data-formations.json'

function Formations() {
    return(
        <>
            <h1 className='formations__h1'>Formations</h1>
            <div className='formations'>
                {data.map((item) => (
                    <div key={item.id} className='formation'>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <time>{item.date}</time>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Formations