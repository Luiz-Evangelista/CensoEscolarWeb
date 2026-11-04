import { Carousel } from 'react-bootstrap';

const Carrossel = ({ itensCarrossel }) => {
  return (
    <Carousel>
      {itensCarrossel.map(({ srcImagem, titulo, descricao }, i) => (
        <Carousel.Item key={i}>
          <img
            src={srcImagem}
            alt={titulo}
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
            }}
          />

          <Carousel.Caption>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrossel;
