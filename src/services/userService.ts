import { dbUsuario, getUsuario, loginUsuario, postUsuario } from "../models/userModels";
import prisma from "../prismaClient";
import { isNotNullOrEmpty } from "../utils/validate";

export const listaUsuario = async () => {
    const usuarios: dbUsuario[] = await prisma.usuario.findMany();
    const mappedUsuarios: getUsuario[] =
        usuarios.map(tpIntegracao => (
            {
                id: tpIntegracao.USUA_ID,
                nome: tpIntegracao.USUA_Nome,
                email: tpIntegracao.USUA_Email,
                hotelId: tpIntegracao.HOTL_ID,
                hotelNome: tpIntegracao.Hotel?.HOTL_Nome
            }
        ));

    return mappedUsuarios;
};

export const consultarUsuario = async (id: number) => {
    const usuario: dbUsuario | null = await prisma.usuario.findFirst({ where: { USUA_ID: id } });

    if (!usuario) return null;

    const insertedUsuario: getUsuario =
    {
        id: usuario.USUA_ID,
        nome: usuario.USUA_Nome,
        email: usuario.USUA_Email,
        hotelId: usuario.HOTL_ID,
        hotelNome: usuario.Hotel?.HOTL_Nome
    };
    return insertedUsuario;
};

export const inserirUsuario = async (data: postUsuario) => {
    const usuario: dbUsuario = await prisma.usuario.create(
        {
            data: {
                USUA_Nome: data.nome,
                USUA_Email: data.email,
                USUA_Senha: data.senha,
                HOTL_ID: data.hotelId
            }
        }
    );
    const insertedUsuario: getUsuario =
    {
        id: usuario.USUA_ID,
        nome: usuario.USUA_Nome,
        email: usuario.USUA_Email,
        hotelId: usuario.HOTL_ID,
        hotelNome: usuario.Hotel?.HOTL_Nome
    };
    return insertedUsuario;
};

export const atualizarUsuario = async (id: number, data: postUsuario) => {
    const usuario: dbUsuario =
        await prisma.usuario.update(
            {
                where: { USUA_ID: id },
                data: {
                    USUA_Nome: data.nome,
                    USUA_Email: data.email,
                    USUA_Senha: data.senha,
                    HOTL_ID: data.hotelId
                }
            });
    const updatedUsuario: getUsuario =
    {
        id: usuario.USUA_ID,
        nome: usuario.USUA_Nome,
        email: usuario.USUA_Email,
        hotelId: usuario.HOTL_ID,
        hotelNome: usuario.Hotel?.HOTL_Nome
    };
    return updatedUsuario;
};

export const logUser = async (data: loginUsuario) => {
    return isNotNullOrEmpty(await prisma.usuario.findFirst({ where: { USUA_Email: data.email, USUA_Senha: data.senha, HOTL_ID: data.hotelId } }));
};