const axios = require('axios');

module.exports = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).json({ error: "Method Not Allowed" });

    const { operation, payload, token } = req.body;
    const API_URL = 'https://api.kolaygelsin.com/api/request';

    try {
        const headers = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = `Bearer ${token}`;

        const response = await axios.post(API_URL, payload, { headers });
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
