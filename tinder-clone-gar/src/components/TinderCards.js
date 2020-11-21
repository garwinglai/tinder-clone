import React, { useState } from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: "Jeff Bezos",
            photoURL: "https://content.fortune.com/wp-content/uploads/2020/02/GettyImages-1078542150.jpg"
        },
        {
            name: "Bernard Arnault",
            photoURL: "https://images.businessoffashion.com/profiles/asset/61/184da57f8aa0278a807f70912c3e58c1d021fbc6.jpeg?auto=format%2Ccompress&crop=top&fit=crop&h=576&w=1024"
        }
    ]);

    const onSwipe = (direction, nameToDelete) => {
        console.log('removing ' + nameToDelete)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className="tindercards">
            <div className="tindercards__cardContainer">

                {people.map((person) => {
                    return <TinderCard
                        className="swipe"
                        key={person.name}
                        onSwipe={(dir) => onSwipe(dir, person.name)}
                        onCardLeftScreen={() => onCardLeftScreen(person.name)}
                        preventSwipe={['up', 'down']}>
                        <div
                            style={{ backgroundImage: "url(" + person.photoURL + ")" }}
                            className="card"
                        >
                            <h3 className="cardInfo">{person.name}</h3>
                        </div>
                    </TinderCard>
                })}

            </div>
        </div>
    )
}

export default TinderCards
