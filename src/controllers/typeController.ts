import { Request, Response } from "express";
import {
  atualizarTipoIntegracao,
  consultarTipoIntegracao,
  inserirTipoIntegracao,
  listaTipoIntegracao,
} from "../services/typeService";

/**
 * @swagger
 * tags:
 *   - name: TipoIntegracao
 *     description: Endpoints relacionados a tipos de integração
 */

/**
 * @swagger
 * /tipoIntegracao/lista:
 *   get:
 *     summary: Retorna uma lista de tipos de integração
 *     tags:
 *       - TipoIntegracao
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Uma Lista de tipos de integração
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
 */
export async function getListaTipoIntegracao(req: Request, res: Response) {
  try {
    const tipoIntegracao = await listaTipoIntegracao();
    res.status(200).json(tipoIntegracao);
  } catch (error) {
    res.status(500).json({ error: "Erro consultando tipo de integração" });
  }
}

/**
 * @swagger
 * /tipoIntegracao/{id}:
 *   get:
 *     summary: Retorna um tipo de integração pelo ID
 *     tags:
 *       - TipoIntegracao
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do tipo de integração a ser consultado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Um tipo de Integração
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *       404:
 *         description: Tipo de integração não encontrado
 */
export async function getTipoIntegracao(req: Request, res: Response) {
  try {
    const tipoIntegracao = await consultarTipoIntegracao(
      parseInt(req.params.id, 10)
    );
    res.json(tipoIntegracao);
  } catch (error) {
    res.status(500).json({ error: "Erro consultando tipo de integração" });
  }
}

/**
 * @swagger
 * /tipoIntegracao:
 *   post:
 *     summary: Insere um tipo de integração e retorna o tipo de integração inserido
 *     tags:
 *       - TipoIntegracao
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
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       201:
 *         description: Um tipo de Integração
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 */
export async function postTipoIntegracao(req: Request, res: Response) {
  try {
    const tipoIntegracao = await inserirTipoIntegracao(req.body);
    res.status(201).json(tipoIntegracao);
  } catch (error) {
    res.status(500).json({ error: "Erro inserindo tipo de integração" });
  }
}

/**
 * @swagger
 * /tipoIntegracao/{id}:
 *   put:
 *     summary: Atualiza um tipo de integração existente
 *     tags:
 *       - TipoIntegracao
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do tipo de integração a ser atualizado
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
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tipo de integração atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro no servidor
 */
export async function putTipoIntegracao(req: Request, res: Response) {
  try {
    const tipoIntegracao = await atualizarTipoIntegracao(
      parseInt(req.params.id, 10),
      req.body
    );
    res.status(200).json(tipoIntegracao);
  } catch (error) {
    res.status(500).json({ error: "Erro atualizando tipo de integração" });
  }
}
