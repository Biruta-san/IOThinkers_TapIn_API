import {
  dbCidade,
  dbEstado,
  dbPais,
  getCidade,
  getEstado,
  getPais,
  postCidade,
  postEstado,
  postPais,
  putCidade,
  putEstado,
  putPais,
} from "../models/localizationModels";
import prisma from "../prismaClient";

// #region PAIS
export const listaPais = async (): Promise<getPais[]> => {
  const paises: dbPais[] = await prisma.pais.findMany();
  const mappedPaises: getPais[] = paises.map((pais) => ({
    id: pais.PAIS_ID,
    nome: pais.PAIS_Nome,
    sufixoTelefonia: pais.PAIS_SufixoTelefonia,
    sigla: pais.PAIS_Sigla,
  }));

  return mappedPaises;
};

export const consultarPais = async (id: number): Promise<getPais | null> => {
  const pais: dbPais | null = await prisma.pais.findFirst({
    where: { PAIS_ID: id },
  });

  if (!pais) return null;

  const selectedPais: getPais = {
    id: pais.PAIS_ID,
    nome: pais.PAIS_Nome,
    sufixoTelefonia: pais.PAIS_SufixoTelefonia,
    sigla: pais.PAIS_Sigla,
  };
  return selectedPais;
};

export const inserirPais = async (data: postPais): Promise<getPais> => {
  const pais: dbPais = await prisma.pais.create({
    data: {
      PAIS_Nome: data.nome,
      PAIS_SufixoTelefonia: data.sufixoTelefonia,
      PAIS_Sigla: data.sigla,
    },
  });
  const insertedPais: getPais = {
    id: pais.PAIS_ID,
    nome: pais.PAIS_Nome,
    sufixoTelefonia: pais.PAIS_SufixoTelefonia,
    sigla: pais.PAIS_Sigla,
  };
  return insertedPais;
};

export const atualizarPais = async (
  id: number,
  data: putPais
): Promise<getPais> => {
  const pais: dbPais = await prisma.pais.update({
    where: { PAIS_ID: id },
    data: {
      PAIS_Nome: data.nome,
      PAIS_SufixoTelefonia: data.sufixoTelefonia,
      PAIS_Sigla: data.sigla,
    },
  });
  const updatedPais: getPais = {
    id: pais.PAIS_ID,
    nome: pais.PAIS_Nome,
    sufixoTelefonia: pais.PAIS_SufixoTelefonia,
    sigla: pais.PAIS_Sigla,
  };
  return updatedPais;
};
// #endregion

// #region ESTADO
export const listaEstado = async (
  paisId: number | null
): Promise<getEstado[]> => {
  const estados: dbEstado[] = await prisma.estado.findMany({
    where: paisId ? { PAIS_ID: paisId } : {},
    include: { Pais: true },
  });
  const mappedEstados: getEstado[] = estados.map((estado) => ({
    id: estado.ESTD_ID,
    nome: estado.ESTD_Nome,
    sigla: estado.ESTD_Sigla,
    paisId: estado.PAIS_ID,
    paisNome: estado.Pais?.PAIS_Nome,
  }));

  return mappedEstados;
};

export const consultarEstado = async (
  id: number
): Promise<getEstado | null> => {
  const estado: dbEstado | null = await prisma.estado.findFirst({
    where: { ESTD_ID: id },
    include: { Pais: true },
  });

  if (!estado) return null;

  const selectedEstado: getEstado = {
    id: estado.ESTD_ID,
    nome: estado.ESTD_Nome,
    sigla: estado.ESTD_Sigla,
    paisId: estado.PAIS_ID,
    paisNome: estado.Pais?.PAIS_Nome,
  };
  return selectedEstado;
};

export const inserirEstado = async (data: postEstado): Promise<getEstado> => {
  const estado: dbEstado = await prisma.estado.create({
    data: {
      ESTD_Nome: data.nome,
      ESTD_Sigla: data.sigla,
      PAIS_ID: data.paisId,
    },
    include: { Pais: true },
  });
  const insertedEstado: getEstado = {
    id: estado.ESTD_ID,
    nome: estado.ESTD_Nome,
    sigla: estado.ESTD_Sigla,
    paisId: estado.PAIS_ID,
    paisNome: estado.Pais?.PAIS_Nome,
  };
  return insertedEstado;
};

export const atualizarEstado = async (
  id: number,
  data: putEstado
): Promise<getEstado> => {
  const estado: dbEstado = await prisma.estado.update({
    where: { ESTD_ID: id },
    data: {
      ESTD_Nome: data.nome,
      ESTD_Sigla: data.sigla,
      PAIS_ID: data.paisId,
    },
    include: { Pais: true },
  });
  const updatedEstado: getEstado = {
    id: estado.ESTD_ID,
    nome: estado.ESTD_Nome,
    sigla: estado.ESTD_Sigla,
    paisId: estado.PAIS_ID,
    paisNome: estado.Pais?.PAIS_Nome,
  };
  return updatedEstado;
};
// #endregion

// #region CIDADE
export const listaCidades = async (
  paisId: number | null,
  estadoId: number | null
): Promise<getCidade[]> => {
  let cidades: dbCidade[] = await prisma.cidade.findMany({
    include: { Estado: { include: { Pais: true } } },
  });
  if (paisId && estadoId) {
    cidades = cidades.filter(
      (cidade) =>
        cidade.Estado.PAIS_ID === paisId && cidade.ESTD_ID === estadoId
    );
  } else {
    if (paisId) {
      cidades = cidades.filter((cidade) => cidade.Estado.PAIS_ID === paisId);
    }
    if (estadoId) {
      cidades = cidades.filter((cidade) => cidade.ESTD_ID === estadoId);
    }
  }

  const mappedCidades: getCidade[] = cidades.map((cidade) => ({
    id: cidade.CIDA_ID,
    nome: cidade.CIDA_Nome,
    estadoId: cidade.ESTD_ID,
    estadoNome: cidade.Estado?.ESTD_Nome,
    paisId: cidade.Estado?.PAIS_ID,
    paisNome: cidade.Estado?.Pais?.PAIS_Nome,
  }));

  return mappedCidades;
};

export const consultarCidade = async (
  id: number
): Promise<getCidade | null> => {
  const cidade: dbCidade | null = await prisma.cidade.findFirst({
    where: { ESTD_ID: id },
    include: { Estado: { include: { Pais: true } } },
  });

  if (!cidade) return null;

  const selectedCidade: getCidade = {
    id: cidade.CIDA_ID,
    nome: cidade.CIDA_Nome,
    estadoId: cidade.ESTD_ID,
    estadoNome: cidade.Estado?.ESTD_Nome,
    paisId: cidade.Estado?.PAIS_ID,
    paisNome: cidade.Estado?.Pais?.PAIS_Nome,
  };
  return selectedCidade;
};

export const inserirCidade = async (data: postCidade): Promise<getCidade> => {
  const cidade: dbCidade = await prisma.cidade.create({
    data: {
      CIDA_Nome: data.nome,
      ESTD_ID: data.estadoId,
    },
    include: { Estado: { include: { Pais: true } } },
  });
  const insertedCidade: getCidade = {
    id: cidade.CIDA_ID,
    nome: cidade.CIDA_Nome,
    estadoId: cidade.ESTD_ID,
    estadoNome: cidade.Estado?.ESTD_Nome,
    paisId: cidade.Estado?.PAIS_ID,
    paisNome: cidade.Estado?.Pais?.PAIS_Nome,
  };
  return insertedCidade;
};

export const atualizarCidade = async (
  id: number,
  data: putCidade
): Promise<getCidade> => {
  const cidade: dbCidade = await prisma.cidade.update({
    where: { CIDA_ID: id },
    data: {
      CIDA_Nome: data.nome,
      ESTD_ID: data.estadoId,
    },
    include: { Estado: { include: { Pais: true } } },
  });
  const updatedEstado: getCidade = {
    id: cidade.CIDA_ID,
    nome: cidade.CIDA_Nome,
    estadoId: cidade.ESTD_ID,
    estadoNome: cidade.Estado?.ESTD_Nome,
    paisId: cidade.Estado?.PAIS_ID,
    paisNome: cidade.Estado?.Pais?.PAIS_Nome,
  };
  return updatedEstado;
};
// #endregion
