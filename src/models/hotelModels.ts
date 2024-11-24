import { Decimal } from "@prisma/client/runtime/library";
import { dbTipoIntegracao } from "./typeModels";
import { dbCidade } from "./localizationModels";
import { dbUsuario, getUsuario } from "./userModels";

// #region HOTEL
export interface dbHotel {
  HOTL_ID: number;
  HOTL_Nome: string;
  HOTL_IdentificacaoTributaria: string;
  HOTL_AcumulaPontuacao: boolean;
  HOTL_ConversaoPontos?: Decimal | null;
  HotelQuarto?: dbHotelQuarto[] | null;
  HotelEnderecos?: dbHotelEndereco[] | null;
  HotelImagem?: dbHotelImagem[] | null;
  HotelIntegracaoArquivo?: dbHotelIntegracaoArquivo[] | null;
}

export interface getHotel {
  id: number;
  nome: string;
  identificacaoTributaria: string;
  acumulaPontuacao: boolean;
  conversaoPontos?: Decimal | null;
  HotelQuarto?: getHotelQuarto[] | null;
  HotelEnderecos?: getHotelEndereco[] | null;
  HotelImagem?: getHotelImagem[] | null;
  HotelIntegracaoArquivo?: getHotelIntegracaoArquivo[] | null;
  Usuarios?: getUsuario[] | null;
}

export interface gridHotel {
  id: number;
  nome: string;
  valorDiaria: Decimal;
  cidade: string;
  endereco: string;
  numero: number;
  imagens: (string | null)[];
}

export interface postHotel {
  nome: string;
  identificacaoTributaria: string;
  acumulaPontuacao: boolean;
  conversaoPontos?: number;
  HotelQuarto?: postHotelQuarto[] | null;
  HotelEnderecos?: postHotelEndereco[] | null;
  HotelImagem?: postHotelImagem[] | null;
  HotelIntegracaoArquivo?: postHotelIntegracaoArquivo[] | null;
}

export interface putHotel {
  nome: string;
  identificacaoTributaria: string;
  acumulaPontuacao: boolean;
  conversaoPontos?: number;
  HotelQuarto?: putHotelQuarto[] | null;
  ExcluirHotelQuarto?: number[];
  HotelEnderecos?: putHotelEndereco[] | null;
  ExcluirHotelEndereco?: number[];
  HotelImagem?: putHotelImagem[] | null;
  ExcluirHotelImagem?: number[];
  HotelIntegracaoArquivo?: putHotelIntegracaoArquivo[] | null;
  ExcluirHotelIntegracaoArquivo?: number[];
}
// #endregion

// #region HOTEL INTEGRACAO ARQUIVO
export interface dbHotelIntegracaoArquivo {
  HOIA_ID: number;
  HOTL_ID: number;
  TPIT_ID: number;
  HOIA_Diretorio: string;
  HOIA_Credencial: string;
  HOIA_Senha: string;
  HOIA_EnderecoIntegracao: string;
  TipoIntegracao: dbTipoIntegracao;
}

export interface getHotelIntegracaoArquivo {
  id: number;
  hotelId: number;
  tipoIntegracaoId: number;
  tipoIntegracaoNome: string;
  diretorio: string;
  credencial: string;
  senha: string;
  enderecoIntegracao: string;
}

export interface postHotelIntegracaoArquivo {
  tipoIntegracaoId: number;
  diretorio: string;
  credencial: string;
  senha: string;
  enderecoIntegracao: string;
}

export interface putHotelIntegracaoArquivo {
  id: number;
  hotelId: number;
  tipoIntegracaoId: number;
  diretorio: string;
  credencial: string;
  senha: string;
  enderecoIntegracao: string;
}
// #endregion

// #region HOTEL IMAGEM
export interface dbHotelImagem {
  HOIM_ID: number;
  HOTL_ID: number;
  HOIM_NomeArquivo: string;
  HOIM_GUIDArquivo: string;
  HOIM_Base64?: string | null;
}

export interface getHotelImagem {
  id: number;
  hotelId: number;
  nomeArquivo: string;
  guidArquivo: string;
  base64?: string | null;
}

export interface postHotelImagem {
  nomeArquivo: string;
  guidArquivo: string;
  base64?: string | null;
}

export interface putHotelImagem {
  id: number;
  hotelId: number;
  nomeArquivo: string;
  guidArquivo: string;
  base64?: string | null;
}
// #endregion

// #region HOTEL ENDERECO
export interface dbHotelEndereco {
  HOEN_ID: number;
  HOTL_ID: number;
  HOEN_Numero: number;
  HOEN_Bairro: string;
  HOEN_Endereco: string;
  HOEN_CEP: string;
  CIDA_ID: number;
  Cidade: dbCidade;
}

export interface getHotelEndereco {
  id: number;
  hotelId: number;
  numero: number;
  bairro: string;
  cidadeId: number;
  cidadeNome: string;
  estadoId: number;
  estadoNome: string;
  paisId: number;
  paisNome: string;
  endereco: string;
  cep: string;
}

export interface postHotelEndereco {
  numero: number;
  bairro: string;
  cidadeId: number;
  endereco: string;
  cep: string;
}

export interface putHotelEndereco {
  id: number;
  hotelId: number;
  numero: number;
  bairro: string;
  cidadeId: number;
  endereco: string;
  cep: string;
}
// #endregion

// #region HOTEL QUARTO
export interface dbHotelQuarto {
  HOQT_ID: number;
  HOTL_ID: number;
  HOQT_Numero: number;
  HOQT_ValorDiaria: Decimal;
  HOQT_Ativo: boolean;
  HOQT_CapacidadePessoa: number;
  HotelQuartoImagens: dbHotelQuartoImagem[] | null;
  HotelQuartoAgendamentos: dbHotelQuartoAgendamento[] | null;
}

export interface getHotelQuarto {
  id: number;
  hotelId: number;
  numero: number;
  valorDiaria: Decimal;
  ativo: boolean;
  capacidadePessoa: number;
  HotelQuartoImagens: getHotelQuartoImagem[] | null;
  HotelQuartoAgendamentos: getHotelQuartoAgendamento[] | null;
}

export interface getListHotelQuarto {
  id: number;
  numero: number;
  valorDiaria: Decimal;
  capacidadePessoa: number;
}

export interface postHotelQuarto {
  numero: number;
  valorDiaria: Decimal;
  ativo: boolean;
  capacidadePessoa: number;
  HotelQuartoImagens: postHotelQuartoImagem[] | null;
  HotelQuartoAgendamentos: postHotelQuartoAgendamento[] | null;
}

export interface putHotelQuarto {
  id: number;
  hotelId: number;
  numero: number;
  valorDiaria: Decimal;
  ativo: boolean;
  capacidadePessoa: number;
  HotelQuartoImagens: putHotelQuartoImagem[] | null;
  ExcluirHotelQuartoImagens: number[] | null;
  HotelQuartoAgendamentos: putHotelQuartoAgendamento[] | null;
  ExcluirHotelQuartoAgendamentos: number[];
}
// #endregion

// #region HOTEL QUARTO IMAGEM
export interface dbHotelQuartoImagem {
  HOQI_ID: number;
  HOQT_ID: number;
  HOQI_NomeArquivo: string;
  HOQI_GUIDArquivo: string;
  HOQI_Base64: string | null;
}

export interface getHotelQuartoImagem {
  id: number;
  hotelQuartoId: number;
  nomeArquivo: string;
  guidArquivo: string;
  base64?: string | null;
}

export interface postHotelQuartoImagem {
  nomeArquivo: string;
  guidArquivo?: string;
  base64?: string | null;
}

export interface putHotelQuartoImagem {
  id: number;
  hotelQuartoId: number;
  nomeArquivo: string;
  guidArquivo: string;
  base64: string | null;
}
// #endregion

// #region HOTEL QUARTO AGENDAMENTO
export interface dbHotelQuartoAgendamento {
  HOQA_ID: number;
  HOQA_CheckIn: Date;
  HOQA_CheckOut: Date;
  HOQT_ID: number;
  USUA_ID: number;
  Usuario?: dbUsuario;
  HOQA_Confirmado: boolean;
  HOQA_TagId: string | null;
}

export interface getHotelQuartoAgendamento {
  id: number;
  checkIn: Date;
  checkOut: Date;
  hotelQuartoId: number;
  usuarioId: number;
  usuarioNome: string;
  confirmado: boolean;
  tagId: string | null;
}

export interface postHotelQuartoAgendamento {
  checkIn: Date;
  checkOut: Date;
  usuarioId: number;
  hotelQuartoId: number;
  confirmado: boolean;
  tagId: string | null;
}

export interface putHotelQuartoAgendamento {
  id: number;
  checkIn: Date;
  checkOut: Date;
  usuarioId: number;
  hotelQuartoId: number;
  confirmado: boolean;
  tagId: string | null;
}

export interface putHotelQuartoAgendar {
  hotelQuartoId: number;
  usuarioId: number;
  dataCheckIn: Date;
  dataCheckOut: Date;
}

export interface putHotelQuartoAgendamentoConfirmacao {
  id: number;
  confirmado: boolean;
  tagId: string;
}

export interface putHotelQuartoAgendamentoVinculoTag {
  id: number;
  tagId: string;
}
// #endregion
