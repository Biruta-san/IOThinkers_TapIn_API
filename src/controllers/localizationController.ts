import { Request, Response } from "express";
import {
  atualizarCidade,
  atualizarEstado,
  atualizarPais,
  consultarCidade,
  consultarEstado,
  consultarPais,
  inserirCidade,
  inserirEstado,
  inserirPais,
  listaCidades,
  listaEstado,
  listaPais,
} from "../services/localizationService";

/**
 * @swagger
 * tags:
 *   - name: Localização
 *     description: Endpoints relacionados a localizações
 */

//#region PAIS
/**
 * @swagger
 * /localizacao/pais/lista:
 *   get:
 *     summary: Retorna uma lista de países
 *     tags:
 *       - Localização
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Uma lista de países
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   sufixoTelefonia:
 *                     type: integer
 *                   nome:
 *                     type: string
 *                   sigla:
 *                     type: string
 */
export async function getPaises(req: Request, res: Response) {
  try {
    const paises = await listaPais();
    res.status(200).json(paises);
  } catch (error) {
    res.status(500).json({ error });
  }
}

/**
 * @swagger
 * /localizacao/pais/{id}:
 *   get:
 *     summary: Retorna um País pelo ID
 *     tags:
 *       - Localização
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do País a ser consultado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Um País
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 sufixoTelefonia:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 sigla:
 *                   type: string
 *       404:
 *         description: País não encontrado
 */
export async function getPais(req: Request, res: Response) {
  try {
    const pais = await consultarPais(parseInt(req.params.id, 10));
    if (!pais) {
      res.status(404).json({ error: "País não encontrado" });
      return;
    }
    res.status(200).json(pais);
  } catch (error) {
    res.status(500).json({ error: "Erro ao consultar País" });
  }
}

/**
 * @swagger
 * /localizacao/pais:
 *   post:
 *     summary: Insere um país e retorna o país inserido
 *     tags:
 *       - Localização
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sufixoTelefonia
 *               - nome
 *               - sigla
 *             properties:
 *               sufixoTelefonia:
 *                 type: integer
 *               nome:
 *                 type: string
 *               sigla:
 *                 type: string
 *     responses:
 *       201:
 *         description: Um país
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 sufixoTelefonia:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 sigla:
 *                   type: string
 */
export async function postPais(req: Request, res: Response) {
  try {
    const pais = await inserirPais(req.body);
    if (!pais) {
      res.status(400).json({ error: "Erro Inserindo país" });
      return;
    }
    res.status(201).json(pais);
  } catch (error) {
    res.status(500).json({ error: "Erro Inserindo país" });
  }
}

/**
 * @swagger
 * /localizacao/pais/{id}:
 *   put:
 *     summary: Atualiza um país existente
 *     tags:
 *       - Localização
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do país a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sufixoTelefonia
 *               - nome
 *               - sigla
 *             properties:
 *               sufixoTelefonia:
 *                 type: integer
 *               nome:
 *                 type: string
 *               sigla:
 *                 type: string
 *     responses:
 *       200:
 *         description: País atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 sufixoTelefonia:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 sigla:
 *                   type: string
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro no servidor
 */
export async function putPais(req: Request, res: Response) {
  try {
    const pais = await atualizarPais(parseInt(req.params.id, 10), req.body);
    if (!pais) {
      res.status(400).json({ error: "Erro atualizando país" });
      return;
    }
    res.status(200).json(pais);
  } catch (error) {
    res.status(500).json({ error: "Erro atualizando país" });
  }
}

//#endregion

//#region ESTADO
/**
 * @swagger
 * /localizacao/estado/lista:
 *   get:
 *     summary: Retorna uma lista de estados
 *     tags:
 *       - Localização
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: paisId
 *         schema:
 *           type: integer
 *         required: false
 *         description: Filtra os estados pelo ID do país
 *     responses:
 *       200:
 *         description: Uma lista de estados
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
 *                   sigla:
 *                     type: string
 *                   paisId:
 *                     type: integer
 *                   paisNome:
 *                     type: string
 */
export async function getEstados(req: Request, res: Response) {
  try {
    const query = req.query;
    const estados = await listaEstado(
      !query.paisId ? null : parseInt(query.paisId.toString(), 10)
    );
    res.status(200).json(estados);
  } catch (error) {
    res.status(500).json({ error });
  }
}

/**
 * @swagger
 * /localizacao/estado/{id}:
 *   get:
 *     summary: Retorna um Estado pelo ID
 *     tags:
 *       - Localização
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Estado a ser consultado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Um Estado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 sigla:
 *                   type: string
 *                 paisId:
 *                   type: integer
 *                 paisNome:
 *                   type: string
 *       404:
 *         description: Estado não encontrado
 */
export async function getEstado(req: Request, res: Response) {
  try {
    const estado = await consultarEstado(parseInt(req.params.id, 10));
    if (!estado) {
      res.status(404).json({ error: "Estado não encontrado" });
      return;
    }
    res.status(200).json(estado);
  } catch (error) {
    res.status(500).json({ error: "Erro ao consultar Estado" });
  }
}

/**
 * @swagger
 * /localizacao/estado:
 *   post:
 *     summary: Insere um estado e retorna o estado inserido
 *     tags:
 *       - Localização
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
 *               - sigla
 *               - paisId
 *             properties:
 *               nome:
 *                 type: string
 *               sigla:
 *                 type: string
 *               paisId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Um estado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 sigla:
 *                   type: string
 *                 paisId:
 *                   type: integer
 *                 paisNome:
 *                   type: string
 */
export async function postEstado(req: Request, res: Response) {
  try {
    const estado = await inserirEstado(req.body);
    if (!estado) {
      res.status(400).json({ error: "Erro Inserindo estado" });
      return;
    }
    res.status(201).json(estado);
  } catch (error) {
    res.status(500).json({ error: "Erro Inserindo estado" });
  }
}

/**
 * @swagger
 * /localizacao/estado/{id}:
 *   put:
 *     summary: Atualiza um estado existente
 *     tags:
 *       - Localização
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do estado a ser atualizado
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
 *               - sigla
 *               - paisId
 *             properties:
 *               nome:
 *                 type: string
 *               sigla:
 *                 type: string
 *               paisId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Estado atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 sigla:
 *                   type: string
 *                 paisId:
 *                   type: integer
 *                 paisNome:
 *                   type: string
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro no servidor
 */
export async function putEstado(req: Request, res: Response) {
  try {
    const estado = await atualizarEstado(parseInt(req.params.id, 10), req.body);
    if (!estado) {
      res.status(400).json({ error: "Erro atualizando estado" });
      return;
    }
    res.status(200).json(estado);
  } catch (error) {
    res.status(500).json({ error: "Erro atualizando estado" });
  }
}

//#endregion
//#region CIDADE
/**
 * @swagger
 * /localizacao/cidade/lista:
 *   get:
 *     summary: Retorna uma lista de cidades
 *     tags:
 *       - Localização
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: paisId
 *         schema:
 *           type: integer
 *         required: false
 *         description: Filtra as cidades pelo ID do país
 *       - in: query
 *         name: estadoId
 *         schema:
 *           type: integer
 *         required: false
 *         description: Filtra as cidades pelo ID do estado
 *     responses:
 *       200:
 *         description: Uma lista de cidades
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
 *                   estadoId:
 *                     type: integer
 *                   estadoNome:
 *                     type: string
 *                   paisId:
 *                     type: integer
 *                   paisNome:
 *                     type: string
 */
export async function getCidades(req: Request, res: Response) {
  try {
    const query = req.query;
    const cidades = await listaCidades(
      !query.paisId ? null : parseInt(query.paisId.toString(), 10),
      !query.estadoId ? null : parseInt(query.estadoId.toString(), 10)
    );
    res.status(200).json(cidades);
  } catch (error) {
    res.status(500).json({ error });
  }
}

/**
 * @swagger
 * /localizacao/cidade/{id}:
 *   get:
 *     summary: Retorna uma Cidade pelo ID
 *     tags:
 *       - Localização
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da Cidade a ser consultada
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Uma Cidade
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 estadoId:
 *                   type: integer
 *                 estadoNome:
 *                   type: string
 *                 paisId:
 *                   type: integer
 *                 paisNome:
 *                   type: string
 *       404:
 *         description: Cidade não encontrada
 */
export async function getCidade(req: Request, res: Response) {
  try {
    const cidade = await consultarCidade(parseInt(req.params.id, 10));
    if (!cidade) {
      res.status(404).json({ error: "Cidade não encontrada" });
      return;
    }
    res.status(200).json(cidade);
  } catch (error) {
    res.status(500).json({ error: "Erro ao consultar Cidade" });
  }
}

/**
 * @swagger
 * /localizacao/cidade:
 *   post:
 *     summary: Insere uma cidade e retorna a cidade inserida
 *     tags:
 *       - Localização
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
 *               - estadoId
 *             properties:
 *               nome:
 *                 type: string
 *               estadoId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Uma Cidade
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 estadoId:
 *                   type: integer
 *                 estadoNome:
 *                   type: string
 *                 paisId:
 *                   type: integer
 *                 paisNome:
 *                   type: string
 */
export async function postCidade(req: Request, res: Response) {
  try {
    const cidade = await inserirCidade(req.body);
    if (!cidade) {
      res.status(400).json({ error: "Erro Inserindo cidade" });
      return;
    }
    res.status(201).json(cidade);
  } catch (error) {
    res.status(500).json({ error: "Erro Inserindo cidade" });
  }
}

/**
 * @swagger
 * /localizacao/cidade/{id}:
 *   put:
 *     summary: Atualiza uma cidade existente
 *     tags:
 *       - Localização
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da cidade a ser atualizada
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
 *               - estadoId
 *             properties:
 *               nome:
 *                 type: string
 *               estadoId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Cidade atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 estadoId:
 *                   type: integer
 *                 estadoNome:
 *                   type: string
 *                 paisId:
 *                   type: integer
 *                 paisNome:
 *                   type: string
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro no servidor
 */
export async function putCidade(req: Request, res: Response) {
  try {
    const cidade = await atualizarCidade(parseInt(req.params.id, 10), req.body);
    if (!cidade) {
      res.status(400).json({ error: "Erro atualizando cidade" });
      return;
    }
    res.status(200).json(cidade);
  } catch (error) {
    res.status(500).json({ error: "Erro atualizando cidade" });
  }
}

//#endregion
