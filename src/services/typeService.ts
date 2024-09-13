import {
  dbTipoIntegracao,
  getTipoIntegracao,
  postTipoIntegracao,
  putTipoIntegracao,
} from "../models/typeModels";
import prisma from "../prismaClient";

const mapTipoIntegracao = (
  tipoIntegracao: dbTipoIntegracao
): getTipoIntegracao => ({
  id: tipoIntegracao.TPIT_ID,
  nome: tipoIntegracao.TPIT_Nome,
});

export const listaTipoIntegracao = async (): Promise<
  getTipoIntegracao[] | null
> => {
  const tipoIntegracoes: dbTipoIntegracao[] =
    await prisma.tipoIntegracao.findMany();
  const mappedTipoIntegracoes: getTipoIntegracao[] = tipoIntegracoes.map(
    (tipoIntegracao) => mapTipoIntegracao(tipoIntegracao)
  );

  return mappedTipoIntegracoes;
};

export const consultarTipoIntegracao = async (
  id: number
): Promise<getTipoIntegracao | null> => {
  const tipoIntegracao: dbTipoIntegracao | null =
    await prisma.tipoIntegracao.findFirst({ where: { TPIT_ID: id } });

  if (!tipoIntegracao) return null;

  const selectedTipoIntegracao: getTipoIntegracao =
    mapTipoIntegracao(tipoIntegracao);
  return selectedTipoIntegracao;
};

export const inserirTipoIntegracao = async (
  data: postTipoIntegracao
): Promise<getTipoIntegracao> => {
  const tipoIntegracao: dbTipoIntegracao = await prisma.tipoIntegracao.create({
    data: { TPIT_Nome: data.nome },
  });
  const insertedTipoIntegracao: getTipoIntegracao =
    mapTipoIntegracao(tipoIntegracao);

  return insertedTipoIntegracao;
};

export const atualizarTipoIntegracao = async (
  id: number,
  data: putTipoIntegracao
): Promise<getTipoIntegracao> => {
  const tipoIntegracao: dbTipoIntegracao = await prisma.tipoIntegracao.update({
    where: { TPIT_ID: id },
    data: { TPIT_Nome: data.nome },
  });
  const updatedTipoIntegracao: getTipoIntegracao =
    mapTipoIntegracao(tipoIntegracao);
  return updatedTipoIntegracao;
};
