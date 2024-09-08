import { dbTipoIntegracao, getTipoIntegracao, postTipoIntegracao, putTipoIntegracao } from "../models/typeModels";
import prisma from "../prismaClient";

export const listaTipoIntegracao = async () => {
    const tipoIntegracoes: dbTipoIntegracao[] = await prisma.tipoIntegracao.findMany();
    const mappedTipoIntegracoes: getTipoIntegracao[] =
        tipoIntegracoes.map(tpIntegracao => (
            {
                id: tpIntegracao.TPIT_ID,
                nome: tpIntegracao.TPIT_Nome
            }
        ));

    return mappedTipoIntegracoes;
}

export const consultarTipoIntegracao = async (id: number) => {
    const tipoIntegracao: dbTipoIntegracao | null = await prisma.tipoIntegracao.findFirst({ where: { TPIT_ID: id } });

    if (!tipoIntegracao) return null;

    const insertedTipoIntegracao: getTipoIntegracao = { id: tipoIntegracao.TPIT_ID, nome: tipoIntegracao.TPIT_Nome };
    return insertedTipoIntegracao;
}

export const inserirTipoIntegracao = async (data: postTipoIntegracao) => {
    const tipoIntegracao: dbTipoIntegracao = await prisma.tipoIntegracao.create({ data: { TPIT_Nome: data.nome } });
    const insertedTipoIntegracao: getTipoIntegracao = { id: tipoIntegracao.TPIT_ID, nome: tipoIntegracao.TPIT_Nome };
    return insertedTipoIntegracao;
}

export const atualizarTipoIntegracao = async (id: number, data: putTipoIntegracao) => {
    const tipoIntegracao: dbTipoIntegracao =
        await prisma.tipoIntegracao.update(
            {
                where: { TPIT_ID: id },
                data: { TPIT_Nome: data.nome }
            });
    const updatedTipoIntegracao: getTipoIntegracao = { id: tipoIntegracao.TPIT_ID, nome: tipoIntegracao.TPIT_Nome };
    return updatedTipoIntegracao;
}