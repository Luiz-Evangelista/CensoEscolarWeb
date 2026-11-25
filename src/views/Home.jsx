import { Card, Col, Row } from 'react-bootstrap';
import Carrossel from '../components/Carrossel';
import instituicoes from '../datasets/instituicoes_ensino_pb_2025.json';
import { formatarNumero, somar } from '../utils/dados';


const itensCarrossel = [
  {
    srcImagem: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1172&auto=format&fit=crop',
    titulo: 'Censo Escolar 2025',
    descricao: 'Conheça os dados da educação básica da Paraíba.',
  },
  {
    srcImagem: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SsMqAhJMDNu7Zqj2qwWca4UZFF0IMCqdGcn_8Rk98QWPyY1q02ldJnOK7E4Db0RFxeCdlkOZzfEDVspXTH8OL2y2KZn8XU8bxP-yXUmh8Sfz3jCjyQYq3t_04_tSILexNSUuCx=s1360-w1360-h1020-rw',
    titulo: 'Educação na Paraíba',
    descricao: 'Explore informações sobre as escolas e matrículas.',
  },
  {
    srcImagem: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T5LAHBrtXARL4uRrPDwaN1sgdFBzH44XQ1qB0KaM_jb6QEj_9MyQCWawSAYeXt2hyD5GNM1m3rt-6a_Ru-VOqSuwOTurvnGfb4C3wor3QoIUC6OXNN1ZjoSsmOhzC6pvIW_jkF=s1360-w1360-h1020-rw',
    titulo: 'Ranking de matrículas',
    descricao: 'Veja as 10 instituições com mais matrículas.',
  },
];

const Home = () => {
  const cartoes = [
    {
      titulo: 'Total de escolas',
      valor: instituicoes.length,
      texto: 'Instituições de ensino da Paraíba com matrículas.',
    },
    {
      titulo: 'Total de matrículas',
      valor: somar(instituicoes, 'qt_mat_bas'),
      texto: 'Matrículas na educação básica.',
    },
    {
      titulo: 'Municípios',
      valor: new Set(instituicoes.map((ie) => ie.co_municipio)).size,
      texto: 'Municípios com instituições cadastradas.',
    },
  ];

  return (
    <>
      <Carrossel itensCarrossel={itensCarrossel} />

      <Row className="mt-4 g-3">
        {cartoes.map(({ titulo, valor, texto }) => (
          <Col key={titulo} xs={12} md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text as="div">
                  <h2 className="text-dark">{formatarNumero(valor)}</h2>
                </Card.Text>
                <Card.Text>{texto}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
