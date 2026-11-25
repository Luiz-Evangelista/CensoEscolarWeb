// Funções auxiliares para trabalhar com os dados das Instituições de Ensino (IE)

export const formatarNumero = (numero) => (numero ?? 0).toLocaleString('pt-BR');

export const somar = (lista, campo) =>
  lista.reduce((total, item) => total + item[campo], 0);

// Ranking: ordena as IEs por matrículas totais (qt_mat_bas), da maior para a
// menor. Em caso de empate, desempata pelo nome para o resultado ser estável.
export function rankingPorMatriculas(lista, limite = 10) {
  return [...lista]
    .sort(
      (a, b) =>
        (b.qt_mat_bas ?? 0) - (a.qt_mat_bas ?? 0) ||
        a.no_entidade.localeCompare(b.no_entidade, 'pt-BR')
    )
    .slice(0, limite)
    .map((ie, indice) => ({ ...ie, posicao: indice + 1 }));
}
