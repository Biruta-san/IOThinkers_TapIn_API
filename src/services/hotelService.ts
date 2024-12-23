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
  getListHotelQuarto,
  gridHotel,
  postHotel,
  postHotelQuarto,
  postHotelQuartoImagem,
  putHotel,
  putHotelQuartoAgendamento,
  putHotelQuartoAgendamentoConfirmacao,
  putHotelQuartoAgendamentoVinculoTag,
  putHotelQuartoAgendar,
  putHotelQuartoImagem,
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
  link: hotelImagem.HOIM_Link,
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
  usuarioNome: quartoAgendamento.Usuario?.USUA_Nome ?? "",
  checkInConfirmado: quartoAgendamento.HOQA_CheckIn_Confirmado,
  checkOutConfirmado: quartoAgendamento.HOQA_CheckOut_Confirmado,
  tagId: quartoAgendamento.HOQA_TagId,
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

  const mappedImagens: (string | null)[] =
    hotel.HotelImagem && hotel.HotelImagem?.length > 0
      ? hotel.HotelImagem.map((imagem) => imagem.HOIM_Link).filter(
          (base64) => base64 !== undefined
        )
      : [];

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
  let gridHotel: dbHotel[] = await prisma.hotel.findMany({
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
    },
  });

  if (pesquisa) {
    const pesquisaLower = pesquisa.toLowerCase();
    gridHotel = gridHotel.filter(
      (hotel) =>
        hotel.HOTL_Nome.toLowerCase().includes(pesquisaLower) ||
        hotel.HotelEnderecos?.some((endereco) =>
          endereco.Cidade?.CIDA_Nome.toLowerCase().includes(pesquisaLower)
        )
    );
  }

  if (checkIn && checkOut && numeroPessoas) {
    gridHotel = gridHotel.filter((hotel) =>
      hotel.HotelQuarto?.some(
        (quarto) =>
          quarto.HOQT_CapacidadePessoa >= numeroPessoas &&
          quarto.HotelQuartoAgendamentos?.every(
            (agendamento) =>
              agendamento.HOQA_CheckOut < checkIn ||
              agendamento.HOQA_CheckIn > checkOut
          )
      )
    );
  } else {
    if (checkIn) {
      gridHotel = gridHotel.filter((hotel) =>
        hotel.HotelQuarto?.some((quarto) =>
          quarto.HotelQuartoAgendamentos?.every(
            (agendamento) => agendamento.HOQA_CheckOut < checkIn
          )
        )
      );
    }
    if (checkOut) {
      gridHotel = gridHotel.filter((hotel) =>
        hotel.HotelQuarto?.some((quarto) =>
          quarto.HotelQuartoAgendamentos?.every(
            (agendamento) => agendamento.HOQA_CheckIn > checkOut
          )
        )
      );
    }
    if (numeroPessoas) {
      gridHotel = gridHotel.filter((hotel) =>
        hotel.HotelQuarto?.some(
          (quarto) => quarto.HOQT_CapacidadePessoa >= numeroPessoas
        )
      );
    }
  }

  const mappedTipoIntegracoes: gridHotel[] = gridHotel.map((hotel) =>
    mapHotelGrid(hotel)
  );

  return mappedTipoIntegracoes;
};

export const listaQuartoHotel = async (
  hotelId: number
): Promise<getListHotelQuarto[] | null> => {
  const hotel = await prisma.hotel.findFirst({
    where: { HOTL_ID: hotelId },
    include: { HotelQuarto: true },
  });

  if (!hotel) return null;

  const mapQuartos: getListHotelQuarto[] = hotel.HotelQuarto?.filter(
    (x) => x.HOQT_Ativo
  )?.map((quarto) => ({
    id: quarto.HOQT_ID,
    numero: quarto.HOQT_Numero,
    valorDiaria: quarto.HOQT_ValorDiaria,
    capacidadePessoa: quarto.HOQT_CapacidadePessoa,
  }));

  if (!mapQuartos || mapQuartos?.length === 0) return null;

  return mapQuartos;
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
          HOIM_Link: x.link,
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
): Promise<getHotel | null> => {
  // #region DELETAR REGISTROS
  if (data.ExcluirHotelQuarto) {
    await prisma.hotelQuartoImagem.deleteMany({
      where: { HOQT_ID: { in: data.ExcluirHotelQuarto } },
    });
    await prisma.hotelQuartoAgendamento.deleteMany({
      where: { HOQT_ID: { in: data.ExcluirHotelQuarto } },
    });
    await prisma.hotelQuarto.deleteMany({
      where: { HOQT_ID: { in: data.ExcluirHotelQuarto } },
    });
  }

  if (data.ExcluirHotelIntegracaoArquivo) {
    await prisma.hotelIntegracaoArquivo.deleteMany({
      where: { HOIA_ID: { in: data.ExcluirHotelIntegracaoArquivo } },
    });
  }

  if (data.ExcluirHotelImagem) {
    await prisma.hotelImagem.deleteMany({
      where: { HOIM_ID: { in: data.ExcluirHotelImagem } },
    });
  }

  if (data.ExcluirHotelEndereco) {
    await prisma.hotelEndereco.deleteMany({
      where: { HOEN_ID: { in: data.ExcluirHotelEndereco } },
    });
  }
  // #endregion

  //#region INSERIR OU ATUALIZAR REGISTROS DEPENDENTES
  const upsertHotelImagens = async (): Promise<void> => {
    if (data.HotelImagem) {
      data.HotelImagem?.forEach(async (x) => {
        if (x.id === 0) {
          await prisma.hotelImagem.create({
            data: {
              HOTL_ID: id,
              HOIM_Link: x.link,
            },
          });
        } else {
          await prisma.hotelImagem.update({
            where: { HOIM_ID: x.id },
            data: {
              HOTL_ID: id,
              HOIM_Link: x.link,
            },
          });
        }
      });
    }
  };

  // #region INSERIR OU ATUALIZAR HOTEL QUARTO
  const upsertHotelQuartos = async (): Promise<void> => {
    if (data.HotelQuarto) {
      data.HotelQuarto?.forEach(async (x) => {
        if (x.id === 0) {
          await prisma.hotelQuarto.create({
            data: {
              HOTL_ID: id,
              HOQT_Numero: x.numero,
              HOQT_ValorDiaria: x.valorDiaria,
              HOQT_Ativo: x.ativo,
              HOQT_CapacidadePessoa: x.capacidadePessoa,
              HotelQuartoImagens: {
                create: x.HotelQuartoImagens?.map((y) => ({
                  HOQI_NomeArquivo: y.nomeArquivo,
                  HOQI_GUIDArquivo: uuidv4(),
                  HOQI_Base64: y.base64,
                })),
              },
            },
          });
        } else {
          await prisma.hotelQuarto.update({
            where: { HOQT_ID: x.id },
            data: {
              HOTL_ID: id,
              HOQT_Numero: x.numero,
              HOQT_ValorDiaria: x.valorDiaria,
              HOQT_Ativo: x.ativo,
              HOQT_CapacidadePessoa: x.capacidadePessoa,
            },
          });
          await upsertHotelQuartoAgendamentos(x.HotelQuartoAgendamentos);
          await upsertHotelQuartoImagens(x.HotelQuartoImagens);
        }
      });
    }
  };

  const upsertHotelQuartoAgendamentos = async (
    hotelAgendamentos: putHotelQuartoAgendamento[] | null
  ): Promise<void> => {
    if (hotelAgendamentos) {
      hotelAgendamentos.forEach(async (x) => {
        if (x.id === 0) {
          await prisma.hotelQuartoAgendamento.create({
            data: {
              HOQT_ID: x.hotelQuartoId,
              HOQA_CheckIn: x.checkIn ? new Date(x.checkIn) : new Date(),
              HOQA_CheckOut: x.checkOut ? new Date(x.checkOut) : new Date(),
              USUA_ID: x.usuarioId,
              HOQA_CheckIn_Confirmado: x.checkInConfirmado,
              HOQA_CheckOut_Confirmado: x.checkOutConfirmado,
            },
          });
        } else {
          await prisma.hotelQuartoAgendamento.update({
            where: { HOQA_ID: x.id },
            data: {
              HOQT_ID: x.hotelQuartoId,
              HOQA_CheckIn: x.checkIn ? new Date(x.checkIn) : new Date(),
              HOQA_CheckOut: x.checkOut ? new Date(x.checkOut) : new Date(),
              USUA_ID: x.usuarioId,
              HOQA_CheckIn_Confirmado: x.checkInConfirmado,
              HOQA_CheckOut_Confirmado: x.checkOutConfirmado,
            },
          });
        }
      });
    }
  };

  const upsertHotelQuartoImagens = async (
    hotelQuartoImagens: putHotelQuartoImagem[] | null
  ): Promise<void> => {
    if (hotelQuartoImagens) {
      hotelQuartoImagens.forEach(async (x) => {
        if (x.id === 0) {
          await prisma.hotelQuartoImagem.create({
            data: {
              HOQT_ID: x.hotelQuartoId,
              HOQI_NomeArquivo: x.nomeArquivo,
              HOQI_GUIDArquivo: uuidv4(),
              HOQI_Base64: x.base64,
            },
          });
        } else {
          await prisma.hotelQuartoImagem.update({
            where: { HOQI_ID: x.id },
            data: {
              HOQT_ID: x.hotelQuartoId,
              HOQI_NomeArquivo: x.nomeArquivo,
              HOQI_GUIDArquivo: x.guidArquivo,
              HOQI_Base64: x.base64,
            },
          });
        }
      });
    }
  };
  // #endregion

  const upsertHotelEnderecos = async (): Promise<void> => {
    if (data.HotelEnderecos) {
      data.HotelEnderecos?.forEach(async (x) => {
        if (x.id === 0) {
          await prisma.hotelEndereco.create({
            data: {
              HOTL_ID: id,
              HOEN_Numero: x.numero,
              HOEN_Bairro: x.bairro,
              HOEN_Endereco: x.endereco,
              HOEN_CEP: x.cep,
              CIDA_ID: x.cidadeId,
            },
          });
        } else {
          await prisma.hotelEndereco.update({
            where: { HOEN_ID: x.id },
            data: {
              HOTL_ID: id,
              HOEN_Numero: x.numero,
              HOEN_Bairro: x.bairro,
              HOEN_Endereco: x.endereco,
              HOEN_CEP: x.cep,
              CIDA_ID: x.cidadeId,
            },
          });
        }
      });
    }
  };

  const upsertHotelIntegracaoArquivo = async (): Promise<void> => {
    if (data.HotelIntegracaoArquivo) {
      data.HotelIntegracaoArquivo?.forEach(async (x) => {
        if (x.id === 0) {
          await prisma.hotelIntegracaoArquivo.create({
            data: {
              HOTL_ID: id,
              TPIT_ID: x.tipoIntegracaoId,
              HOIA_Diretorio: x.diretorio,
              HOIA_Credencial: x.credencial,
              HOIA_Senha: x.senha,
              HOIA_EnderecoIntegracao: x.enderecoIntegracao,
            },
          });
        } else {
          await prisma.hotelIntegracaoArquivo.update({
            where: { HOIA_ID: x.id },
            data: {
              HOTL_ID: id,
              TPIT_ID: x.tipoIntegracaoId,
              HOIA_Diretorio: x.diretorio,
              HOIA_Credencial: x.credencial,
              HOIA_Senha: x.senha,
              HOIA_EnderecoIntegracao: x.enderecoIntegracao,
            },
          });
        }
      });
    }
  };
  // #endregion

  const updateHotel = async (): Promise<void> => {
    await prisma.hotel.update({
      where: { HOTL_ID: id },
      data: {
        HOTL_Nome: data.nome,
        HOTL_IdentificacaoTributaria: data.identificacaoTributaria,
        HOTL_AcumulaPontuacao: data.acumulaPontuacao,
        HOTL_ConversaoPontos: data.conversaoPontos,
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
  };

  await Promise.all([
    upsertHotelImagens,
    upsertHotelQuartos,
    upsertHotelEnderecos,
    upsertHotelIntegracaoArquivo,
    updateHotel,
  ]);

  const hotel: getHotel | null = await consultarHotel(id);

  return hotel;
};

export const agendarHotel = async (
  data: putHotelQuartoAgendar
): Promise<getHotelQuartoAgendamento | null> => {
  const agendamento: dbHotelQuartoAgendamento =
    await prisma.hotelQuartoAgendamento.create({
      data: {
        HOQT_ID: data.hotelQuartoId,
        HOQA_CheckIn: data.dataCheckIn,
        HOQA_CheckOut: data.dataCheckOut,
        USUA_ID: data.usuarioId,
        HOQA_CheckIn_Confirmado: false,
        HOQA_CheckOut_Confirmado: false,
        HOQA_TagId: null,
      },
      include: { Usuario: true },
    });

  if (!agendamento) return null;

  const mappedAgendamento = mapHotelQuartoAgendamento(agendamento);

  return mappedAgendamento;
};

export const confirmarAgendamentoHotel = async (
  data: putHotelQuartoAgendamentoConfirmacao
): Promise<boolean> => {
  const agendamento: dbHotelQuartoAgendamento | null =
    await prisma.hotelQuartoAgendamento.update({
      where: { HOQA_ID: data.id, HOQA_TagId: data.tagId },
      data: {
        HOQA_CheckIn_Confirmado: data.checkInConfirmado,
        HOQA_CheckOut_Confirmado: data.checkOutConfirmado,
      },
    });

  return agendamento ? true : false;
};

export const vincularTagAgendamentoHotel = async (
  data: putHotelQuartoAgendamentoVinculoTag
): Promise<boolean> => {
  if (!data.id || data.id <= 0) return false;

  const agendamento: dbHotelQuartoAgendamento | null =
    await prisma.hotelQuartoAgendamento.update({
      where: { HOQA_ID: data.id },
      data: {
        HOQA_TagId: data.tagId,
      },
    });

  return agendamento ? true : false;
};
