import { Decimal } from "@prisma/client/runtime/library";
import {
  dbHotel,
  dbHotelEndereco,
  dbHotelImagem,
  dbHotelIntegracaoArquivo,
  dbHotelQuarto,
  dbHotelQuartoAgendamento,
  dbHotelQuartoImagem,
  getHotel,
  getHotelEndereco,
  getHotelImagem,
  getHotelIntegracaoArquivo,
  getHotelQuarto,
  getHotelQuartoAgendamento,
  getHotelQuartoImagem,
  gridHotel,
  postHotel,
  postHotelQuarto,
  postHotelQuartoAgendamento,
  postHotelQuartoImagem,
  putHotel,
} from "../models/hotelModels";
import prisma from "../prismaClient";
import { v4 as uuidv4 } from "uuid";

const mapHotelIntegracaoArquivo = (
  hotelIntegracaoArquivo: dbHotelIntegracaoArquivo
): getHotelIntegracaoArquivo => ({
  id: hotelIntegracaoArquivo.HOIA_ID,
  hotelId: hotelIntegracaoArquivo.HOTL_ID,
  tipoIntegracaoId: hotelIntegracaoArquivo.TPIT_ID,
  tipoIntegracaoNome: hotelIntegracaoArquivo.TipoIntegracao?.TPIT_Nome,
  diretorio: hotelIntegracaoArquivo.HOIA_Diretorio,
  credencial: hotelIntegracaoArquivo.HOIA_Credencial,
  senha: hotelIntegracaoArquivo.HOIA_Senha,
  enderecoIntegracao: hotelIntegracaoArquivo.HOIA_EnderecoIntegracao,
});

const mapHotelImagem = (hotelImagem: dbHotelImagem): getHotelImagem => ({
  id: hotelImagem.HOIM_ID,
  hotelId: hotelImagem.HOTL_ID,
  nomeArquivo: hotelImagem.HOIM_NomeArquivo,
  guidArquivo: hotelImagem.HOIM_GUIDArquivo,
  base64: hotelImagem.HOIM_Base64,
});

const mapEndereco = (endereco: dbHotelEndereco): getHotelEndereco => ({
  id: endereco.HOEN_ID,
  hotelId: endereco.HOTL_ID,
  numero: endereco.HOEN_Numero,
  bairro: endereco.HOEN_Bairro,
  cidadeId: endereco.CIDA_ID,
  cidadeNome: endereco.Cidade?.CIDA_Nome,
  estadoId: endereco.Cidade?.Estado?.ESTD_ID,
  estadoNome: endereco.Cidade?.Estado?.ESTD_Nome,
  paisId: endereco.Cidade?.Estado?.Pais?.PAIS_ID,
  paisNome: endereco.Cidade?.Estado?.Pais?.PAIS_Nome,
  endereco: endereco.HOEN_Endereco,
  cep: endereco.HOEN_CEP,
});

const mapHotelQuartoAgendamento = (
  quartoAgendamento: dbHotelQuartoAgendamento
): getHotelQuartoAgendamento => ({
  id: quartoAgendamento.HOQA_ID,
  checkIn: quartoAgendamento.HOQA_CheckIn,
  checkOut: quartoAgendamento.HOQA_CheckOut,
  hotelQuartoId: quartoAgendamento.HOQT_ID,
  usuarioId: quartoAgendamento.USUA_ID,
});

const mapHotelQuartoImagem = (
  quartoImagem: dbHotelQuartoImagem
): getHotelQuartoImagem => ({
  id: quartoImagem.HOQI_ID,
  hotelQuartoId: quartoImagem.HOQT_ID,
  nomeArquivo: quartoImagem.HOQI_NomeArquivo,
  guidArquivo: quartoImagem.HOQI_GUIDArquivo,
  base64: quartoImagem.HOQI_Base64,
});

const mapHotelQuarto = (quarto: dbHotelQuarto): getHotelQuarto => {
  const mappedHotelQuartoImagens: getHotelQuartoImagem[] | null =
    quarto.HotelQuartoImagens
      ? quarto.HotelQuartoImagens?.map((quartoImagem) =>
          mapHotelQuartoImagem(quartoImagem)
        )
      : null;
  const mappedHotelQuartoAgendamento: getHotelQuartoAgendamento[] | null =
    quarto.HotelQuartoAgendamentos
      ? quarto.HotelQuartoAgendamentos?.map((quartoAgendamento) =>
          mapHotelQuartoAgendamento(quartoAgendamento)
        )
      : null;
  return {
    id: quarto.HOQT_ID,
    hotelId: quarto.HOTL_ID,
    numero: quarto.HOQT_Numero,
    valorDiaria: quarto.HOQT_ValorDiaria,
    ativo: quarto.HOQT_Ativo,
    capacidadePessoa: quarto.HOQT_CapacidadePessoa,
    HotelQuartoImagens: mappedHotelQuartoImagens,
    HotelQuartoAgendamentos: mappedHotelQuartoAgendamento,
  };
};

const mapHotel = (hotel: dbHotel): getHotel => {
  const mappedQuartos: getHotelQuarto[] | null = hotel.HotelQuarto
    ? hotel.HotelQuarto?.map((quarto) => mapHotelQuarto(quarto))
    : null;
  const mappedEnderecos: getHotelEndereco[] | null = hotel.HotelEnderecos
    ? hotel.HotelEnderecos?.map((endereco) => mapEndereco(endereco))
    : null;
  const mappedImagens: getHotelImagem[] | null = hotel.HotelImagem
    ? hotel.HotelImagem?.map((imagem) => mapHotelImagem(imagem))
    : null;
  const mappedHotelIntegracaoArquivo: getHotelIntegracaoArquivo[] | null =
    hotel.HotelIntegracaoArquivo
      ? hotel.HotelIntegracaoArquivo?.map((hotelIntegracaoArquivo) =>
          mapHotelIntegracaoArquivo(hotelIntegracaoArquivo)
        )
      : null;

  return {
    id: hotel.HOTL_ID,
    nome: hotel.HOTL_Nome,
    identificacaoTributaria: hotel.HOTL_IdentificacaoTributaria,
    acumulaPontuacao: hotel.HOTL_AcumulaPontuacao,
    conversaoPontos: hotel.HOTL_ConversaoPontos,
    HotelQuarto: mappedQuartos,
    HotelEnderecos: mappedEnderecos,
    HotelImagem: mappedImagens,
    HotelIntegracaoArquivo: mappedHotelIntegracaoArquivo,
  };
};

const mapHotelGrid = (hotel: dbHotel): gridHotel => {
  let valorDiaria: Decimal = new Decimal(0);
  let cidade: string = "";
  let endereco: string = "";
  let numero: number = 0;

  if (hotel.HotelQuarto && hotel.HotelQuarto.length > 0) {
    valorDiaria = hotel.HotelQuarto[0].HOQT_ValorDiaria ?? new Decimal(0);
  }

  if (hotel.HotelEnderecos && hotel.HotelEnderecos.length > 0) {
    cidade = hotel.HotelEnderecos[0].Cidade?.CIDA_Nome ?? "";
    endereco = hotel.HotelEnderecos[0].HOEN_Endereco ?? "";
    numero = hotel.HotelEnderecos[0].HOEN_Numero ?? 0;
  }

  const mappedImagens: getHotelImagem[] | null = hotel.HotelImagem
    ? hotel.HotelImagem?.map((imagem) => mapHotelImagem(imagem))
    : null;

  return {
    id: hotel.HOTL_ID,
    nome: hotel.HOTL_Nome,
    valorDiaria: valorDiaria,
    cidade: cidade,
    endereco: endereco,
    numero: numero,
    imagens: mappedImagens,
  };
};

export const listaHotel = async (
  pesquisa: string | null,
  checkIn: Date | null,
  checkOut: Date | null,
  numeroPessoas: number | null
): Promise<gridHotel[] | null> => {
  let gridHotel: dbHotel[];

  if (pesquisa) {
    gridHotel = await prisma.hotel.findMany({
      include: {
        HotelEnderecos: {
          include: {
            Cidade: { include: { Estado: { include: { Pais: true } } } },
          },
        },
        HotelQuarto: {
          include: { HotelQuartoAgendamentos: true, HotelQuartoImagens: true },
        },
        HotelImagem: true,
      },
      where: {
        HOTL_Nome: { contains: pesquisa },
        HotelEnderecos: {
          some: { Cidade: { CIDA_Nome: { contains: pesquisa } } },
        },
      },
    });
  } else {
    gridHotel = await prisma.hotel.findMany({});
  }

  if (checkIn && checkOut && numeroPessoas) {
    gridHotel.filter((hotel) =>
      hotel.HotelQuarto?.some(
        (x) => x.HOQT_CapacidadePessoa >= numeroPessoas
        // &&x.HotelQuartoAgendamentos?.every(
        //   (y) => y.HOQA_CheckIn > checkOut || y.HOQA_CheckOut < checkIn
        // )
      )
    );
  }

  const mappedTipoIntegracoes: gridHotel[] = gridHotel.map((hotel) =>
    mapHotelGrid(hotel)
  );

  return mappedTipoIntegracoes;
};

export const consultarHotel = async (id: number): Promise<getHotel | null> => {
  const hotel: dbHotel | null = await prisma.hotel.findFirst({
    where: { HOTL_ID: id },
    include: {
      HotelEnderecos: {
        include: {
          Cidade: { include: { Estado: { include: { Pais: true } } } },
        },
      },
      HotelQuarto: {
        include: {
          HotelQuartoAgendamentos: { include: { Usuario: true } },
          HotelQuartoImagens: true,
        },
      },
      HotelImagem: true,
      HotelIntegracaoArquivo: { include: { TipoIntegracao: true } },
      Usuarios: true,
    },
  });

  if (!hotel) return null;

  const selectedHotel: getHotel = mapHotel(hotel);
  return selectedHotel;
};

export const inserirHotel = async (data: postHotel): Promise<getHotel> => {
  const hotel: dbHotel = await prisma.hotel.create({
    data: {
      HOTL_Nome: data.nome,
      HOTL_IdentificacaoTributaria: data.identificacaoTributaria,
      HOTL_AcumulaPontuacao: data.acumulaPontuacao,
      HOTL_ConversaoPontos: data.conversaoPontos,
      HotelQuarto: {
        create: data.HotelQuarto?.map((x: postHotelQuarto) => ({
          HOQT_Numero: x.numero,
          HOQT_ValorDiaria: x.valorDiaria,
          HOQT_Ativo: true,
          HOQT_CapacidadePessoa: x.capacidadePessoa,
          HotelQuartoImagens: {
            create: x.HotelQuartoImagens?.map((y: postHotelQuartoImagem) => ({
              HOQI_NomeArquivo: y.nomeArquivo,
              HOQI_GUIDArquivo: uuidv4(),
              HOQI_Base64: y.base64,
            })),
          },
          HotelQuartoAgendamentos: {
            create: x.HotelQuartoAgendamentos?.map(
              (y: postHotelQuartoAgendamento) => ({
                HOQA_CheckIn: y.checkIn,
                HOQA_CheckOut: y.checkOut,
                USUA_ID: y.usuarioId,
              })
            ),
          },
        })),
      },
      HotelEnderecos: {
        create: data.HotelEnderecos?.map((x) => ({
          HOEN_Numero: x.numero,
          HOEN_Bairro: x.bairro,
          HOEN_Endereco: x.endereco,
          HOEN_CEP: x.cep,
          CIDA_ID: x.cidadeId,
        })),
      },
      HotelImagem: {
        create: data.HotelImagem?.map((x) => ({
          HOIM_NomeArquivo: x.nomeArquivo,
          HOIM_GUIDArquivo: uuidv4(),
          HOIM_Base64: x.base64,
        })),
      },
      HotelIntegracaoArquivo: {
        create: data.HotelIntegracaoArquivo?.map((x) => ({
          TPIT_ID: x.tipoIntegracaoId,
          HOIA_Diretorio: x.diretorio,
          HOIA_Credencial: x.credencial,
          HOIA_Senha: x.senha,
          HOIA_EnderecoIntegracao: x.enderecoIntegracao,
        })),
      },
    },
    include: {
      HotelEnderecos: {
        include: {
          Cidade: { include: { Estado: { include: { Pais: true } } } },
        },
      },
      HotelQuarto: {
        include: {
          HotelQuartoAgendamentos: { include: { Usuario: true } },
          HotelQuartoImagens: true,
        },
      },
      HotelImagem: true,
      HotelIntegracaoArquivo: { include: { TipoIntegracao: true } },
      Usuarios: true,
    },
  });
  const insertedHotel: getHotel = mapHotel(hotel);

  return insertedHotel;
};

export const atualizarHotel = async (
  id: number,
  data: putHotel
): Promise<getHotel> => {
  // if (data.ExcluirHotelQuarto) {
  //   await prisma.hotelQuarto.deleteMany({
  //     where: { HOQT_ID: {in: data.ExcluirHotelQuarto} },
  //   });
  // }

  const hotel: dbHotel = await prisma.hotel.update({
    where: { HOTL_ID: id },
    data: { HOTL_Nome: data.nome },
  });

  const updatedHotel: getHotel = mapHotel(hotel);
  return updatedHotel;
};
