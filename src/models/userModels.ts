import { dbHotel, dbHotelQuartoAgendamento } from "./hotelModels";

// #region USUARIO
export interface dbUsuario {
    USUA_ID: number;
    USUA_Nome: string;
    USUA_Email: string;
    USUA_Senha: string;
    HOTL_ID?: number | null;
    Hotel?: dbHotel | null;
    UsuarioHotelPontuacao?: dbUsuarioHotelPontuacao[] | null;
    HotelQuartoAgendamento?: dbHotelQuartoAgendamento[] | null;
}

export interface getUsuario {
    id: number;
    nome: string;
    email: string;
    hotelId?: number | null;
    hotelNome?: string | null;
}

export interface postUsuario {
    nome: string;
    email: string;
    senha: string;
    hotelId?: number | null;
}

export interface putUsuario {
    nome: string;
    email: string;
    senha: string;
    hotelId?: number | null;
}

export interface loginUsuario {
    email: string;
    senha: string;
    hotelId?: number | null;
}
// #endregion

// #region USUARIO HOTEL PONTUACAO
export interface dbUsuarioHotelPontuacao {
    USUA_ID: number;
    HOTL_ID: number;
    USHP_Pontuacao: number;
}

export interface getUsuarioHotelPontuacao {
    usuarioId: number;
    hotelId: number;
    pontuacao: number;
}

export interface postUsuarioHotelPontuacao {
    usuarioId: number;
    hotelId: number;
    pontuacao: number;
}

export interface putUsuarioHotelPontuacao {
    usuarioId?: number;
    hotelId?: number;
    pontuacao?: number;
}
// #endregion