import { Card } from "react-bootstrap";

const Frase = () => {
  return (
    <section className="my-5">
      <h2>Nombre de personaje</h2>
      <hr />
      <img className="mb-3" src='' alt='' />
      <Card>
        <Card.Body>
          <figure>
            <blockquote className="blockquote">
              <p>frase</p>
            </blockquote>
            <figcaption className="blockquote-footer">
            personaje x in <cite title="Source Title">The simpson</cite>
            </figcaption>
          </figure>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frase;
