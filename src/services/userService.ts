import {
  dbUsuario,
  getUsuario,
  loginUsuario,
  loginUsuarioResponse,
  postUsuario,
} from "../models/userModels";
import prisma from "../prismaClient";
import { generateToken, JwtPayload } from "../utils/token";

const mapUsuario = (usuario: dbUsuario): getUsuario => ({
  id: usuario.USUA_ID,
  nome: usuario.USUA_Nome,
  email: usuario.USUA_Email,
  hotelId: usuario.HOTL_ID,
  hotelNome: usuario.Hotel?.HOTL_Nome,
});

export const listaUsuario = async (): Promise<getUsuario[]> => {
  const usuarios: dbUsuario[] = await prisma.usuario.findMany({
    include: { Hotel: true },
  });
  const mappedUsuarios: getUsuario[] = usuarios.map((usuario) =>
    mapUsuario(usuario)
  );

  return mappedUsuarios;
};

export const consultarUsuario = async (
  id: number
): Promise<getUsuario | null> => {
  const usuario: dbUsuario | null = await prisma.usuario.findFirst({
    where: { USUA_ID: id },
    include: { Hotel: true },
  });

  if (!usuario) return null;

  const insertedUsuario: getUsuario = mapUsuario(usuario);
  return insertedUsuario;
};

export const inserirUsuario = async (
  data: postUsuario
): Promise<getUsuario> => {
  const usuario: dbUsuario = await prisma.usuario.create({
    data: {
      USUA_Nome: data.nome,
      USUA_Email: data.email,
      USUA_Senha: data.senha,
      HOTL_ID: data.hotelId,
    },
    include: { Hotel: true },
  });
  const insertedUsuario: getUsuario = mapUsuario(usuario);
  return insertedUsuario;
};

export const atualizarUsuario = async (
  id: number,
  data: postUsuario
): Promise<getUsuario> => {
  const usuario: dbUsuario = await prisma.usuario.update({
    where: { USUA_ID: id },
    data: {
      USUA_Nome: data.nome,
      USUA_Email: data.email,
      USUA_Senha: data.senha,
      HOTL_ID: data.hotelId,
    },
    include: { Hotel: true },
  });
  const updatedUsuario: getUsuario = {
    id: usuario.USUA_ID,
    nome: usuario.USUA_Nome,
    email: usuario.USUA_Email,
    hotelId: usuario.HOTL_ID,
    hotelNome: usuario.Hotel?.HOTL_Nome,
  };
  return updatedUsuario;
};

export const logUser = async (
  data: loginUsuario
): Promise<loginUsuarioResponse | null> => {
  const user = await prisma.usuario.findFirst({
    where: {
      USUA_Email: data.email,
      USUA_Senha: data.senha,
      HOTL_ID: data.hotelId,
    },
    include: { Hotel: true },
  });
  if (!user) return null;

  const token: JwtPayload = {
    id: user.USUA_ID,
    nome: user.USUA_Nome,
    email: user.USUA_Email,
    hotelId: user.HOTL_ID,
  };
  const tokenValidated = generateToken(token);

  if (!tokenValidated) return null;

  const userLogged: loginUsuarioResponse = { token: tokenValidated };

  return userLogged;
};
