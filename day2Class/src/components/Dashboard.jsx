import { useState } from "react";
import Hero from "./Hero";

export default function Dashboard(){
//Example of Score # Button State//
    const [total, setTotal] = useState(0);
    function updateTotal(){
        setTotal(total + 1)
    }

    return (
      <>
        <main>
         <Hero total={total}/>

          <section>
            <h2>Score Button # State Ex</h2>
            <p>Score: {total}</p>
            <button className="btn" onClick={() => updateTotal(1)}>Add 1</button>
            <button className="btn" onClick={() => updateTotal(2)}>Add 2</button>
          </section>
        </main>
      </>
    );
}