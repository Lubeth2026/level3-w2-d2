
//Example of mutating the Parent State through Props//
//Props are NOT mutatable you CANNOT change props (Passed in a function parameter)//
//State IS mutatable and is changed(Re renders your whole page)//
export default function Hero({total}){
    return (
      <>
        <section>
          <h2>Info</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            quidem sunt, labore ducimus velit similique optio fuga explicabo,
            iste voluptates dolorum magnam, praesentium aliquam! Provident
            perferendis ab fuga magni minima.
          </p>
          <p>{total}</p>
          <img src="https://placehold.co/200" alt="Placeholder Image" />
        </section>
      </>
    );
}