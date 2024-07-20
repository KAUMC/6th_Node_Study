// models/review.dao.js

import { pool } from '../config/db.config.js';

export const fetchReviews = async (offset, limit) => { //디비 직접 호출
    try {
        const [rows] = await pool.query('SELECT * FROM store_review LIMIT ?, ?', [offset, limit]);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
