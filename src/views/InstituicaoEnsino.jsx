import { useEffect, useState } from 'react';
import { Alert, Button, OverlayTrigger, Spinner, Table, Tooltip } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { formatarNumero, rankingPorMatriculas } from '../utils/dados';

// API (json-server do projeto minhaappapi, porta 5000)
const API_URL = 'http://localhost:5000/instituicoesensino';

const InstituicaoEnsino = () => {
  const [instituicoesEnsino, setInstituicoesEnsino] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  // GET: busca as instituições na API
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Status ${response.status}`);
        }
        return response.json();
      })
      .then((dados) => setInstituicoesEnsino(dados))
      .catch((error) => {
        console.log('Erro ao buscar as IEs.', error);
        setErro('Não foi possível carregar as instituições. A API (porta 5000) está ligada?');
      })
      .finally(() => setCarregando(false));
  }, []);

  // 10 IEs com mais matrículas totais (qt_mat_bas) de toda a Paraíba
  const top10 = rankingPorMatriculas(instituicoesEnsino, 10);

  // DELETE: pede confirmação e só tira da tabela se a API responder com sucesso
  const removerHandleClick = (id) => {
    if (!window.confirm('Deseja realmente remover esta Instituição de Ensino?')) {
      return;
    }

    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Status ${response.status}`);
        }
        // Remove a IE da lista local sem recarregar da API
        setInstituicoesEnsino((anteriores) => anteriores.filter((ie) => ie.id !== id));
        setErro(null);
      })
      .catch((error) => {
        console.log('Erro ao remover a IE.', error);
        setErro('Não foi possível remover a instituição.');
      });
  };

  return (
    <>
      <h2 className="mt-4 mb-3" style={{ color: 'black' }}>
        Instituições de Ensino
      </h2>

      <p>
        As 10 instituições de ensino com maior número de matrículas na Paraíba.
      </p>

      {erro && (
        <Alert variant="danger" dismissible onClose={() => setErro(null)}>
          {erro}
        </Alert>
      )}

      {carregando ? (
        <div className="text-center my-5">
          <Spinner animation="border" />
        </div>
      ) : (
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
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {top10.map((ie) => (
              <tr key={ie.id}>
                <td>{ie.posicao}º</td>
                <td>{ie.co_entidade}</td>
                <td>{ie.no_entidade}</td>
                <td>{ie.no_municipio}</td>
                <td>{formatarNumero(ie.qt_mat_bas)}</td>
                <td>{formatarNumero(ie.qt_mat_inf)}</td>
                <td>{formatarNumero(ie.qt_mat_fund)}</td>
                <td>{formatarNumero(ie.qt_mat_med)}</td>
                <td>
                  <OverlayTrigger placement="top" overlay={<Tooltip>Remover</Tooltip>}>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removerHandleClick(ie.id)}
                    >
                      <FaTrash />
                    </Button>
                  </OverlayTrigger>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default InstituicaoEnsino;
