import { Request, Response } from "express";
import {
  agendarHotel,
  atualizarHotel,
  confirmarAgendamentoHotel,
  consultarHotel,
  inserirHotel,
  listaHotel,
  listaQuartoHotel,
  vincularTagAgendamentoHotel,
} from "../services/hotelService";
import {
  putHotelQuartoAgendamentoConfirmacao,
  putHotelQuartoAgendamentoVinculoTag,
  putHotelQuartoAgendar,
} from "../models/hotelModels";

/**
 * @swagger
 * tags:
 *   - name: Hotel
 *     description: Endpoints relacionados a hotéis
 */

/**
 * @swagger
 * /hotel/lista:
 *   get:
 *     summary: Retorna uma lista de hotéis com base nos parâmetros de pesquisa
 *     tags:
 *       - Hotel
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: pesquisa
 *         schema:
 *           type: string
 *         required: false
 *         description: Filtro de pesquisa para o nome ou localização do hotel
 *       - in: query
 *         name: checkIn
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: Data de check-in
 *       - in: query
 *         name: checkOut
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: Data de check-out
 *       - in: query
 *         name: numeroPessoas
 *         schema:
 *           type: integer
 *         required: false
 *         description: Número de pessoas para a reserva
 *     responses:
 *       200:
 *         description: Uma lista de hotéis com os critérios especificados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nome:
 *                     type: string
 *                   valorDiaria:
 *                     type: number
 *                     format: decimal
 *                   cidade:
 *                     type: string
 *                   endereco:
 *                     type: string
 *                   numero:
 *                     type: integer
 *                   imagens:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                         hotelId:
 *                           type: integer
 *                         nomeArquivo:
 *                           type: string
 *                         guidArquivo:
 *                           type: string
 *                         base64:
 *                           type: string
 *                           nullable: true
 *       404:
 *        description: Hotel não encontrado
 *       500:
 *         description: Erro consultando Hoteis
 */
export async function getHoteis(req: Request, res: Response) {
  try {
    const { pesquisa, checkIn, checkOut, numeroPessoas } = req.query;
    const strPesquisa = typeof pesquisa === "string" ? pesquisa : "";
    const dateCheckIn = checkIn ? new Date(checkIn.toString()) : null;
    const dateCheckOut = checkOut ? new Date(checkOut.toString()) : null;
    const numNumeroPessoas = numeroPessoas
      ? parseInt(numeroPessoas.toString())
      : 0;
    const hotel = await listaHotel(
      strPesquisa,
      dateCheckIn,
      dateCheckOut,
      numNumeroPessoas
    );

    if (!hotel) return res.status(404).json({ error: "Hotel não encontrado" });

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: "Erro consultando Hotel" });
  }
}

/**
 * @swagger
 * /hotel/quartos/{id}:
 *   get:
 *     summary: Retorna a lista de quartos de um hotel pelo ID
 *     tags:
 *       - Hotel
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do hotel para buscar os quartos
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de quartos do hotel
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID do quarto
 *                   numero:
 *                     type: integer
 *                     description: Número do quarto
 *                   valorDiaria:
 *                     type: number
 *                     format: decimal
 *                     description: Valor da diária do quarto
 *                   capacidadePessoa:
 *                     type: integer
 *                     description: Capacidade máxima de pessoas no quarto
 *       404:
 *         description: Hotel ou quartos não encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Hotel ou quartos não encontrados
 *       500:
 *         description: Erro consultando o hotel ou os quartos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Erro consultando Hotel
 */
export async function getHotelQuartos(req: Request, res: Response) {
  try {
    const hotelId = parseInt(req.params.id, 10);
    const hotelQuarto = await listaQuartoHotel(hotelId);

    if (!hotelQuarto)
      return res
        .status(404)
        .json({ error: "Hotel ou quartos não encontrados" });

    res.status(200).json(hotelQuarto);
  } catch (error) {
    res.status(500).json({ error: "Erro consultando Hotel" });
  }
}

/**
 * @swagger
 * /hotel/{id}:
 *   get:
 *     summary: Retorna os detalhes de um hotel pelo ID
 *     tags:
 *       - Hotel
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do hotel a ser consultado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalhes do hotel consultado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 identificacaoTributaria:
 *                   type: string
 *                 acumulaPontuacao:
 *                   type: boolean
 *                 conversaoPontos:
 *                   type: number
 *                   format: decimal
 *                   nullable: true
 *                 HotelQuarto:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       hotelId:
 *                         type: integer
 *                       numero:
 *                         type: integer
 *                       valorDiaria:
 *                         type: number
 *                         format: decimal
 *                       ativo:
 *                         type: boolean
 *                       capacidadePessoa:
 *                         type: integer
 *                       HotelQuartoImagens:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: integer
 *                             hotelQuartoId:
 *                               type: integer
 *                             nomeArquivo:
 *                               type: string
 *                             guidArquivo:
 *                               type: string
 *                             base64:
 *                               type: string
 *                               nullable: true
 *                       HotelQuartoAgendamentos:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: integer
 *                             usuarioId:
 *                               type: integer
 *                             dataCheckIn:
 *                               type: string
 *                               format: date-time
 *                             dataCheckOut:
 *                               type: string
 *                               format: date-time
 *                             confirmado:
 *                               type: boolean
 *                 HotelEnderecos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       hotelId:
 *                         type: integer
 *                       numero:
 *                         type: integer
 *                       bairro:
 *                         type: string
 *                       cidadeId:
 *                         type: integer
 *                       cidadeNome:
 *                         type: string
 *                       estadoId:
 *                         type: integer
 *                       estadoNome:
 *                         type: string
 *                       paisId:
 *                         type: integer
 *                       paisNome:
 *                         type: string
 *                       endereco:
 *                         type: string
 *                       cep:
 *                         type: string
 *                 HotelImagem:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       hotelId:
 *                         type: integer
 *                       nomeArquivo:
 *                         type: string
 *                       guidArquivo:
 *                         type: string
 *                       base64:
 *                         type: string
 *                         nullable: true
 *                 HotelIntegracaoArquivo:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       hotelId:
 *                         type: integer
 *                       tipoIntegracaoId:
 *                         type: integer
 *                       tipoIntegracaoNome:
 *                         type: string
 *                       diretorio:
 *                         type: string
 *                       credencial:
 *                         type: string
 *                       senha:
 *                         type: string
 *                       enderecoIntegracao:
 *                         type: string
 *                 Usuarios:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       nome:
 *                         type: string
 *                       email:
 *                         type: string
 *                       hotelId:
 *                         type: integer
 *                         nullable: true
 *                       hotelNome:
 *                         type: string
 *                         nullable: true
 *       404:
 *         description: Hotel não encontrado
 *       500:
 *         description: Erro consultando o hotel
 */
export async function getHotel(req: Request, res: Response) {
  try {
    const hotel = await consultarHotel(parseInt(req.params.id, 10));
    if (!hotel) {
      return res.status(404).json({ error: "Hotel não encontrado" });
    }
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: "Erro consultando hotel" });
  }
}

/**
 * @swagger
 * /hotel:
 *   post:
 *     summary: Insere um hotel e retorna o hotel inserido
 *     tags:
 *       - Hotel
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - identificacaoTributaria
 *               - acumulaPontuacao
 *             properties:
 *               nome:
 *                 type: string
 *               identificacaoTributaria:
 *                 type: string
 *               acumulaPontuacao:
 *                 type: boolean
 *               conversaoPontos:
 *                 type: number
 *                 nullable: true
 *               HotelQuarto:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     numero:
 *                       type: integer
 *                     valorDiaria:
 *                       type: number
 *                       format: decimal
 *                     ativo:
 *                       type: boolean
 *                     capacidadePessoa:
 *                       type: integer
 *                     HotelQuartoImagens:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           nomeArquivo:
 *                             type: string
 *                           guidArquivo:
 *                             type: string
 *                           base64:
 *                             type: string
 *                             nullable: true
 *                     HotelQuartoAgendamentos:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           usuarioId:
 *                            type: integer
 *                           dataCheckIn:
 *                             type: string
 *                             format: date-time
 *                           dataCheckOut:
 *                             type: string
 *                             format: date-time
 *                           confirmado:
 *                             type: boolean
 *               HotelEnderecos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     numero:
 *                       type: integer
 *                     bairro:
 *                       type: string
 *                     cidadeId:
 *                       type: integer
 *                     endereco:
 *                       type: string
 *                     cep:
 *                       type: string
 *               HotelImagem:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     nomeArquivo:
 *                       type: string
 *                     guidArquivo:
 *                       type: string
 *                     base64:
 *                       type: string
 *                       nullable: true
 *               HotelIntegracaoArquivo:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     tipoIntegracaoId:
 *                       type: integer
 *                     diretorio:
 *                       type: string
 *                     credencial:
 *                       type: string
 *                     senha:
 *                       type: string
 *                     enderecoIntegracao:
 *                       type: string
 *     responses:
 *       201:
 *         description: Hotel inserido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 identificacaoTributaria:
 *                   type: string
 *                 acumulaPontuacao:
 *                   type: boolean
 *                 conversaoPontos:
 *                   type: number
 *                   nullable: true
 *                 HotelQuarto:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       numero:
 *                         type: integer
 *                       valorDiaria:
 *                         type: number
 *                         format: decimal
 *                       ativo:
 *                         type: boolean
 *                       capacidadePessoa:
 *                         type: integer
 *                 HotelEnderecos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       numero:
 *                         type: integer
 *                       bairro:
 *                         type: string
 *                       cidadeId:
 *                         type: integer
 *                       endereco:
 *                         type: string
 *                       cep:
 *                         type: string
 *                 HotelImagem:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       nomeArquivo:
 *                         type: string
 *                       guidArquivo:
 *                         type: string
 *                 HotelIntegracaoArquivo:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       tipoIntegracaoId:
 *                         type: integer
 *                       diretorio:
 *                         type: string
 *                       credencial:
 *                         type: string
 *                       senha:
 *                         type: string
 *                       enderecoIntegracao:
 *                         type: string
 *       500:
 *         description: Erro ao inserir hotel
 */
export async function postHotel(req: Request, res: Response) {
  try {
    const hotel = await inserirHotel(req.body);
    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({ error: "Erro inserindo hotel", message: error });
  }
}
/**
 * @swagger
 * /hotel/{id}:
 *   put:
 *     summary: Atualiza um hotel existente
 *     tags:
 *       - Hotel
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do hotel a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - identificacaoTributaria
 *               - acumulaPontuacao
 *             properties:
 *               nome:
 *                 type: string
 *               identificacaoTributaria:
 *                 type: string
 *               acumulaPontuacao:
 *                 type: boolean
 *               conversaoPontos:
 *                 type: number
 *                 nullable: true
 *               HotelQuarto:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     numero:
 *                       type: integer
 *                     valorDiaria:
 *                       type: number
 *                       format: decimal
 *                     ativo:
 *                       type: boolean
 *                     capacidadePessoa:
 *                       type: integer
 *                     HotelQuartoImagens:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                           nomeArquivo:
 *                             type: string
 *                           guidArquivo:
 *                             type: string
 *                           base64:
 *                             type: string
 *                             nullable: true
 *                     ExcluirHotelQuartoImagens:
 *                       type: array
 *                       items:
 *                         type: integer
 *                     HotelQuartoAgendamentos:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                           usuarioId:
 *                             type: integer
 *                           dataCheckIn:
 *                             type: string
 *                             format: date-time
 *                           dataCheckOut:
 *                             type: string
 *                             format: date-time
 *                           confirmado:
 *                             type: boolean
 *                     ExcluirHotelQuartoAgendamentos:
 *                       type: array
 *                       items:
 *                         type: integer
 *               ExcluirHotelQuarto:
 *                 type: array
 *                 items:
 *                   type: integer
 *               HotelEnderecos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     numero:
 *                       type: integer
 *                     bairro:
 *                       type: string
 *                     cidadeId:
 *                       type: integer
 *                     endereco:
 *                       type: string
 *                     cep:
 *                       type: string
 *               ExcluirHotelEndereco:
 *                 type: array
 *                 items:
 *                   type: integer
 *               HotelImagem:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     nomeArquivo:
 *                       type: string
 *                     guidArquivo:
 *                       type: string
 *                       base64:
 *                         type: string
 *                         nullable: true
 *               ExcluirHotelImagem:
 *                 type: array
 *                 items:
 *                   type: integer
 *               HotelIntegracaoArquivo:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     tipoIntegracaoId:
 *                       type: integer
 *                     diretorio:
 *                       type: string
 *                     credencial:
 *                       type: string
 *                     senha:
 *                       type: string
 *                     enderecoIntegracao:
 *                       type: string
 *               ExcluirHotelIntegracaoArquivo:
 *                 type: array
 *                 items:
 *                   type: integer
 *     responses:
 *       200:
 *         description: Hotel atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 identificacaoTributaria:
 *                   type: string
 *                 acumulaPontuacao:
 *                   type: boolean
 *                 conversaoPontos:
 *                   type: number
 *                   nullable: true
 *                 HotelQuarto:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       numero:
 *                         type: integer
 *                       valorDiaria:
 *                         type: number
 *                         format: decimal
 *                       ativo:
 *                         type: boolean
 *                       capacidadePessoa:
 *                         type: integer
 *                 HotelEnderecos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       numero:
 *                         type: integer
 *                       bairro:
 *                         type: string
 *                       cidadeId:
 *                         type: integer
 *                       cidadeNome:
 *                         type: string
 *                       estadoId:
 *                         type: integer
 *                       estadoNome:
 *                         type: string
 *                       paisId:
 *                         type: integer
 *                       paisNome:
 *                         type: string
 *                       endereco:
 *                         type: string
 *                       cep:
 *                         type: string
 *                 HotelImagem:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       nomeArquivo:
 *                         type: string
 *                       guidArquivo:
 *                         type: string
 *                       base64:
 *                         type: string
 *                         nullable: true
 *                 HotelIntegracaoArquivo:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       tipoIntegracaoId:
 *                         type: integer
 *                       tipoIntegracaoNome:
 *                         type: string
 *                       diretorio:
 *                         type: string
 *                       credencial:
 *                         type: string
 *                       senha:
 *                         type: string
 *                       enderecoIntegracao:
 *                         type: string
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro no servidor
 */
export async function putHotel(req: Request, res: Response) {
  try {
    const hotel = await atualizarHotel(parseInt(req.params.id, 10), req.body);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: "Erro atualizando hotel" });
  }
}

/**
 * @swagger
 * /hotel/agendar:
 *   post:
 *     summary: Agendar um quarto de hotel para um usuário
 *     description: Este endpoint permite que um usuário agende um quarto em um hotel, especificando as datas de check-in e check-out.
 *     tags:
 *       - Hotel
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - hotelQuartoId
 *               - usuarioId
 *               - dataCheckIn
 *               - dataCheckOut
 *             properties:
 *               hotelQuartoId:
 *                 type: integer
 *                 description: ID do hotel onde o agendamento será realizado.
 *               usuarioId:
 *                 type: integer
 *                 description: ID do usuário que está realizando o agendamento.
 *               dataCheckIn:
 *                 type: string
 *                 format: date
 *                 description: Data de check-in no hotel.
 *               dataCheckOut:
 *                 type: string
 *                 format: date
 *                 description: Data de check-out do hotel.
 *     responses:
 *       201:
 *         description: Agendamento realizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do agendamento.
 *                 checkIn:
 *                   type: string
 *                   format: date
 *                   description: Data de check-in.
 *                 checkOut:
 *                   type: string
 *                   format: date
 *                   description: Data de check-out.
 *                 hotelQuartoId:
 *                   type: integer
 *                   description: ID do quarto no hotel.
 *                 usuarioId:
 *                   type: integer
 *                   description: ID do usuário que fez o agendamento.
 *                 usuarioNome:
 *                   type: string
 *                   description: Nome do usuário.
 *                 confirmado:
 *                   type: boolean
 *                   description: Indica se o agendamento foi confirmado.
 *       500:
 *         description: Erro ao inserir agendamento.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro.
 */
export async function putAgendar(req: Request, res: Response) {
  try {
    const data: putHotelQuartoAgendar = {
      hotelQuartoId: parseInt(req.body.hotelQuartoId, 10),
      usuarioId: parseInt(req.body.usuarioId, 10),
      dataCheckIn: new Date(req.body.dataCheckIn),
      dataCheckOut: new Date(req.body.dataCheckOut),
    };

    const agendamento = await agendarHotel(data);
    res.status(201).json(agendamento);
  } catch (error) {
    res.status(500).json({ error: "Erro Inserindo agendamento" });
  }
}

/**
 * @swagger
 * /hotel/confirmarAgendamento/{id}:
 *   put:
 *     summary: Confirma um agendamento de hotel
 *     description: Este endpoint permite que você confirme um agendamento de hotel específico, usando o ID do agendamento e um campo booleano para confirmação.
 *     tags:
 *       - Hotel
 *     security:
 *       - bearerAuth: []  # Supondo que você use autenticação via Bearer Token
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do agendamento de hotel a ser confirmado.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               confirmado:
 *                 type: boolean
 *                 description: Indica se o agendamento foi confirmado ou não.
 *     responses:
 *       201:
 *         description: Agendamento confirmado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sucesso:
 *                   type: boolean
 *                   description: Indica se a operação de confirmação foi bem-sucedida.
 *       400:
 *         description: Requisição inválida (por exemplo, parâmetros ausentes ou inválidos).
 *       500:
 *         description: Erro interno do servidor ao tentar confirmar o agendamento.
 *       404:
 *         description: Agendamento não encontrado.
 */
export async function putConfirmarAgendamento(req: Request, res: Response) {
  try {
    const data: putHotelQuartoAgendamentoConfirmacao = {
      id: parseInt(req.params.id, 10),
      confirmado: req.body.confirmado,
    };

    const agendamento = await confirmarAgendamentoHotel(data);
    if (agendamento) res.status(200).json({ sucesso: agendamento });
    else res.status(500).json({ error: "Erro confirmando agendamento" });
  } catch (error) {
    res.status(500).json({ error: "Erro confirmando agendamento" });
  }
}

/**
 * @swagger
 * /hotel/vincularTag/{id}:
 *   put:
 *     summary: Vincula uma tag a um agendamento de hotel
 *     description: Este endpoint permite que você vincule uma tag a um agendamento de hotel específico, usando o ID do agendamento e o ID da tag.
 *     tags:
 *       - Hotel
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do agendamento de hotel.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tag
 *             properties:
 *               tag:
 *                 type: string
 *                 description: ID da tag a ser vinculada ao agendamento.
 *     responses:
 *       200:
 *         description: Tag vinculada com sucesso ao agendamento.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sucesso:
 *                   type: boolean
 *                   description: Indica se a operação foi bem-sucedida.
 *       400:
 *         description: Requisição inválida (por exemplo, parâmetros ausentes ou inválidos).
 *       500:
 *         description: Erro interno do servidor ao tentar vincular a tag.
 *       404:
 *         description: Agendamento não encontrado ou tag não encontrada.
 */
export async function putVincularTagAgendamento(req: Request, res: Response) {
  try {
    const data: putHotelQuartoAgendamentoVinculoTag = {
      id: parseInt(req.params.id, 10),
      tagId: req.body.tag,
    };

    const agendamento = await vincularTagAgendamentoHotel(data);
    if (agendamento) res.status(200).json({ sucesso: agendamento });
    else
      res.status(500).json({ error: "Erro ao vincular tag", tag: data.tagId });
  } catch (error) {
    res.status(500).json({ error: "Erro ao vincular tag" });
  }
}
