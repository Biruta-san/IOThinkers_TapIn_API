// #region HOTEL
export interface dbHotel {
    HOTL_ID: number;
    HOTL_Nome: string;
    HOTL_IdentificacaoTributaria: string;
    HOTL_AcumulaPontuacao: boolean;
    HOTL_ConversaoPontos?: number;
    HotelQuarto?: dbHotelQuarto[];
    HotelEnderecos?: dbHotelEndereco[];
    HotelImagem?: dbHotelImagem[];
    HotelIntegracaoArquivo?: dbHotelIntegracaoArquivo[];
}

export interface getHotel {
    id: number;
    nome: string;
    identificacaoTributaria: string;
    acumulaPontuacao: boolean;
    conversaoPontos?: number;
    HotelQuarto?: getHotelQuarto[];
    HotelEnderecos?: getHotelEndereco[];
    HotelImagem?: getHotelImagem[];
    HotelIntegracaoArquivo?: getHotelIntegracaoArquivo[];
}

export interface postHotel {
    nome: string;
    identificacaoTributaria: string;
    acumulaPontuacao: boolean;
    conversaoPontos?: number;
    HotelQuarto?: postHotelQuarto[];
    HotelEnderecos?: postHotelEndereco[];
    HotelImagem?: postHotelImagem[];
    HotelIntegracaoArquivo?: postHotelIntegracaoArquivo[];
}

export interface putHotel {
    nome: string;
    identificacaoTributaria: string;
    acumulaPontuacao: boolean;
    conversaoPontos?: number;
    HotelQuarto?: putHotelQuarto[];
    ExcluirHotelQuarto?: number[];
    HotelEnderecos?: putHotelEndereco[];
    ExcluirHotelEndereco?: number[];
    HotelImagem?: putHotelImagem[];
    ExcluirHotelImagem?: number[];
    HotelIntegracaoArquivo?: putHotelIntegracaoArquivo[];
    ExcluirHotelIntegracaoArquivo?: number[];
}
// #endregion

// #region HOTEL INTEGRACAO ARQUIVO
export interface dbHotelIntegracaoArquivo {
    HOIA_ID: number;
    HOTL_ID: number;
    TPIT_ID: number;
    HOIA_Diretorio: string;
}

export interface getHotelIntegracaoArquivo {
    id: number;
    hotelId: number;
    tipoIntegracaoId: number;
    diretorio: string;
}

export interface postHotelIntegracaoArquivo {
    hotelId: number;
    tipoIntegracaoId: number;
    diretorio: string;
}

export interface putHotelIntegracaoArquivo {
    hotelId?: number;
    tipoIntegracaoId?: number;
    diretorio?: string;
}
// #endregion

// #region HOTEL IMAGEM
export interface dbHotelImagem {
    HOIM_ID: number;
    HOTL_ID: number;
    HOIM_NomeArquivo: string;
    HOIM_GUIDArquivo?: string;
    HOIM_Base64?: string;
}

export interface getHotelImagem {
    id: number;
    hotelId: number;
    nomeArquivo: string;
    guidArquivo?: string;
    base64?: string;
}

export interface postHotelImagem {
    hotelId: number;
    nomeArquivo: string;
    guidArquivo?: string;
    base64?: string;
}

export interface putHotelImagem {
    hotelId?: number;
    nomeArquivo?: string;
    guidArquivo?: string;
    base64?: string;
}
// #endregion

// #region HOTEL ENDERECO
export interface dbHotelEndereco {
    HOEN_ID: number;
    HOTL_ID: number;
    HOEN_Numero: number;
    HOEN_Bairro: string;
    CIDA_ID: number;
}

export interface getHotelEndereco {
    id: number;
    hotelId: number;
    numero: number;
    bairro: string;
    cidadeId: number;
}

export interface postHotelEndereco {
    hotelId: number;
    numero: number;
    bairro: string;
    cidadeId: number;
}

export interface putHotelEndereco {
    hotelId?: number;
    numero?: number;
    bairro?: string;
    cidadeId?: number;
}
// #endregion

// #region HOTEL QUARTO
export interface dbHotelQuarto {
    HOQT_ID: number;
    HOTL_ID: number;
    HOQT_Numero: number;
    HOQT_ValorDiaria: number;
    HOQT_Ativo: boolean;
    HotelQuartoImagens: dbHotelQuartoImagem[];
    HotelQuartoAgendamentos: dbHotelQuartoAgendamento[];
}

export interface getHotelQuarto {
    id: number;
    hotelId: number;
    numero: number;
    valorDiaria: number;
    ativo: boolean;
    HotelQuartoImagens: getHotelQuartoImagem[];
    HotelQuartoAgendamentos: getHotelQuartoAgendamento[];
}

export interface postHotelQuarto {
    hotelId: number;
    numero: number;
    valorDiaria: number;
    ativo: boolean;
    HotelQuartoImagens: postHotelQuartoImagem[];
    HotelQuartoAgendamentos: postHotelQuartoAgendamento[];
}

export interface putHotelQuarto {
    hotelId?: number;
    numero?: number;
    valorDiaria?: number;
    ativo?: boolean;
    HotelQuartoImagens: putHotelQuartoImagem[];
    ExcluirHotelQuartoImagens: number[];
    HotelQuartoAgendamentos: putHotelQuartoAgendamento[];
    ExcluirHotelQuartoAgendamentos: number[];
}
// #endregion

// #region HOTEL QUARTO IMAGEM
export interface dbHotelQuartoImagem {
    HOQI_ID: number;
    HOQT_ID: number;
    HOQI_NomeArquivo: string;
    HOQI_GUIDArquivo?: string;
    HOQI_Base64?: string;
}

export interface getHotelQuartoImagem {
    id: number;
    hotelQuartoId: number;
    nomeArquivo: string;
    guidArquivo?: string;
    base64?: string;
}

export interface postHotelQuartoImagem {
    hotelQuartoId: number;
    nomeArquivo: string;
    guidArquivo?: string;
    base64?: string;
}

export interface putHotelQuartoImagem {
    hotelQuartoId?: number;
    nomeArquivo?: string;
    guidArquivo?: string;
    base64?: string;
}
// #endregion

// #region HOTEL QUARTO AGENDAMENTO
export interface dbHotelQuartoAgendamento {
    HOQA_ID: number;
    HOQA_CheckIn: Date;
    HOQA_CheckOut: Date;
    HOQT_ID: number;
    USUA_ID: number;
}

export interface getHotelQuartoAgendamento {
    id: number;
    checkIn: Date;
    checkOut: Date;
    hotelQuartoId: number;
    usuarioId: number;
}

export interface postHotelQuartoAgendamento {
    checkIn: Date;
    checkOut: Date;
    hotelQuartoId: number;
    usuarioId: number;
}

export interface putHotelQuartoAgendamento {
    checkIn?: Date;
    checkOut?: Date;
    hotelQuartoId?: number;
    usuarioId?: number;
}
// #endregion