import { Request, Response } from "express";
import {
  atualizarHotel,
  consultarHotel,
  inserirHotel,
  listaHotel,
} from "../services/hotelService";

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
    const tipoIntegracao = await listaHotel(
      strPesquisa,
      dateCheckIn,
      dateCheckOut,
      numNumeroPessoas
    );

    if (!tipoIntegracao)
      return res.status(404).json({ error: "Hotel não encontrado" });

    res.status(200).json(tipoIntegracao);
  } catch (error) {
    res.status(500).json({ error: "Erro consultando tipo de integração" });
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
