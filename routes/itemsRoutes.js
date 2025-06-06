const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

/**
 * @swagger
 * tags:
 *   name: Items
 *   description: API для управления элементами
 */

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Получить список всех элементов
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: Успешный ответ
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/items', itemsController.getItems);

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Создать новый элемент
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Элемент создан
 */
router.post('/items', itemsController.createItem);

/**
 * @swagger
 * /api/items/{id}:
 *   delete:
 *     summary: Удалить элемент по ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Элемент удалён
 */
router.delete('/items/:id', itemsController.deleteItem);

/**
 * @swagger
 * /api/items/{id}:
 *   put:
 *     summary: Обновить элемент по ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Элемент обновлён
 */
router.put('/items/:id', itemsController.updateItem);

module.exports = router;
