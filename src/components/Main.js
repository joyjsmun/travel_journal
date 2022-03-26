export default function Main() {
    return (
        <div className="main">
           <div >
               <img className="main--img" src="../images/japan.jpeg" />
           </div>
           <div className="main--desc">
               <p>
                <img className="main--spot" src="../images/placeholder.png" />
                <span className="main--country">J A P A N</span>
                <span className="main--link"><a href="https://goo.gl/maps/Z1iwu7db9ybMViSt8">View on Google Maps</a></span>
               </p>
                <h1 className="main--location">Mount Fuji</h1>
                <p className="main--date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
           </div>
        </div>
    )
}