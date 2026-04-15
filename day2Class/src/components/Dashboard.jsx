import { useState } from "react";

export default function Dashboard(){
//Example of Score # Button State//
    const [total, setTotal] = useState(0);
    function updateTotal(){
        setTotal(total + 1)
    }

    return (
      <>
        <main>
          <section>
            <h2>Info</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quidem sunt, labore ducimus velit similique optio fuga explicabo,
              iste voluptates dolorum magnam, praesentium aliquam! Provident
              perferendis ab fuga magni minima.
            </p>
            <img src="https://placehold.co/200" alt="Placeholder Image" />
          </section>
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