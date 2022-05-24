import React from "react"
import "./main.css"
import statue from './assets/statue-art.jpg'
import dolbyIcon from './assets/dolby-icon.svg'



export const May18 = () => {
  return (
    <div className="albumCover">
        <main className="front">
            <img src={statue} alt="of Pieta" className="albumPhoto" />
            <article className="albumTitles">
                    <h1>
                        <a href='http://https://www.youtube.com/watch?v=y9CabgJC3oQ&t=1536s&ab_channel=Macroblank'>
                            MACROBLANK
                        </a>
                    </h1>
                    <h2>
                        <a href="http://https://www.youtube.com/watch?v=y9CabgJC3oQ&t=1536s&ab_channel=Macroblank">
                            RARE PSALMS COLLECTION VOL.3
                        </a>
                    </h2>
            </article>
            <p className="subtext"> 悲しい言葉 </p>
        </main>
        <div className="spine">
           
                <h1>MACROBLANK</h1>
                <h2>RARE PSLAMS COLLECTION VOL.3</h2>
            
        </div>
        <div className="underside">
            <section className="side">
                <div className="bigLetter">A</div>
                <div className="tracks">
                    <li className="track">01 double trouble</li>
                    <li className="track">02 covert red</li>
                    <li className="track">03 take it away</li>
                    <li className="track">04 vice grip</li>
                    <li className="track">05 all i want</li>
                </div>
            </section>
            <section className="side">
                <div className="bigLetter">B</div>
                <div className="tracks">
                    <li className="track">01 faceless bandits</li>
                    <li className="track">02 laguna</li>
                    <li className="track">03 burned memory</li>
                    <li className="track">04 silent tears</li>
                    <li className="track">05 velvet</li>
                </div>
            </section>
            <img src={dolbyIcon} alt="Dolby Icon" className="dolbyIcon"/>
        </div>
    </div>
  )
}