import { Request, Response } from "express";
import {
  atualizarUsuario,
  consultarUsuario,
  inserirUsuario,
  listaUsuario,
  logUser,
} from "../services/userService";

/**
 * @swagger
 * tags:
 *   - name: Usuário
 *     description: Endpoints relacionados a usuários
 */

/**
 * @swagger
 * /usuario/lista:
 *   get:
 *     summary: Retorna uma lista de usuários
 *     tags:
 *       - Usuário
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Uma lista de usuários
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
 *                   email:
 *                     type: string
 *                   hotelId:
 *                     type: integer
 *                     nullable: true
 *                   hotelNome:
 *                     type: string
 *                     nullable: true
 */
export async function getListaUsuario(req: Request, res: Response) {
  try {
    const usuario = await listaUsuario();
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error });
  }
}

/**
 * @swagger
 * /usuario/{id}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     tags:
 *       - Usuário
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser consultado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Um Usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 email:
 *                   type: string
 *                 hotelId:
 *                   type: integer
 *                   nullable: true
 *                 hotelNome:
 *                   type: string
 *                   nullable: true
 *       404:
 *         description: Usuário não encontrado
 */
export async function getUsuario(req: Request, res: Response) {
  try {
    const usuario = await consultarUsuario(parseInt(req.params.id, 10));
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Erro ao consultar usuário" });
  }
}

/**
 * @swagger
 * /usuario/login:
 *   post:
 *     summary: Realiza login na aplicação
 *     tags:
 *       - Usuário
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *               - hotelId
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               hotelId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Um Usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao realizar login
 */
export async function login(req: Request, res: Response) {
  try {
    const { email, senha, hotelId } = req.body;
    const token = await logUser({
      email: email,
      senha: senha,
      hotelId: hotelId,
    });
    if (!token)
      return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(token);
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar login" });
  }
}

/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Insere um usuário e retorna o usuário inserido
 *     tags:
 *       - Usuário
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
 *               - email
 *               - senha
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               hotelId:
 *                 type: integer
 *                 nullable: true
 *     responses:
 *       201:
 *         description: Um usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 email:
 *                   type: string
 *                 hotelId:
 *                   type: integer
 *                   nullable: true
 *                 hotelNome:
 *                   type: string
 *                   nullable: true
 */
export async function postUsuario(req: Request, res: Response) {
  try {
    const usuario = await inserirUsuario(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Erro Inserindo usuário" });
  }
}

/**
 * @swagger
 * /usuario/{id}:
 *   put:
 *     summary: Atualiza um usuário existente
 *     tags:
 *       - Usuário
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser atualizado
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
 *               - email
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *                 nullable: true
 *               hotelId:
 *                 type: integer
 *                 nullable: true
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 email:
 *                   type: string
 *                 hotelId:
 *                   type: integer
 *                   nullable: true
 *                 hotelNome:
 *                   type: string
 *                   nullable: true
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro no servidor
 */
export async function putUsuario(req: Request, res: Response) {
  try {
    const usuario = await atualizarUsuario(
      parseInt(req.params.id, 10),
      req.body
    );
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Erro atualizando usuário" });
  }
}
