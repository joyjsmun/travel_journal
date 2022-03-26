export default function Main({data}) {
    return (
        <div className="main">
           <div className="main--top" >
               <img className="main--img" src={data.imageUrl} />
           </div>
           <div className="main--desc">
               <p>
                <img className="main--spot" src="../images/placeholder.png" />
                <span className="main--country">{data.location}</span>
                <span className="main--link"><a href={data.googleMapsUrl}>View on Google Maps</a></span>
               </p>
                <h1 className="main--location">{data.title}</h1>
                <p className="main--date">{data.startDate} - {data.endDate}</p>
                <p className="main--data">{data.description}</p>
           </div>
        </div>
    )
}