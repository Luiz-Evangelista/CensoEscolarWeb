import { Table } from 'react-bootstrap';
import instituicoes from '../datasets/instituicoes_ensino_pb_2025.json';
import { formatarNumero, rankingPorMatriculas } from '../utils/dados';

const InstituicaoEnsino = () => {
  // 10 IEs com mais matrículas totais (qt_mat_bas) de toda a Paraíba
  const top10 = rankingPorMatriculas(instituicoes, 10);

  return (
    <>
      <h2 className="mt-4 mb-3" style={{ color: 'black' }}>
        Instituições de Ensino
      </h2>

      <p>
        As 10 instituições de ensino com maior número de matrículas na Paraíba.
      </p>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Código</th>
            <th>Nome da escola</th>
            <th>Município</th>
            <th>Total de matrículas</th>
            <th>Infantil</th>
            <th>Fundamental</th>
            <th>Médio</th>
          </tr>
        </thead>

        <tbody>
          {top10.map((ie) => (
            <tr key={ie.co_entidade}>
              <td>{ie.posicao}º</td>
              <td>{ie.co_entidade}</td>
              <td>{ie.no_entidade}</td>
              <td>{ie.no_municipio}</td>
              <td>{formatarNumero(ie.qt_mat_bas)}</td>
              <td>{formatarNumero(ie.qt_mat_inf)}</td>
              <td>{formatarNumero(ie.qt_mat_fund)}</td>
              <td>{formatarNumero(ie.qt_mat_med)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default InstituicaoEnsino;
