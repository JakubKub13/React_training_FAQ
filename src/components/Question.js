import "./Question.css";
import { useState } from "react";

const Question = ({title, info}) => {
    const [show, setShowInfo] = useState(false);

    return (
        <div className="one-question">
            <section>
                <h2>{title}</h2>
                <button onClick={ () => setShowInfo(!show)}>Answer</button>
            </section>
            {show && <p>{info}</p>}
        </div>
    )
}

export default Question