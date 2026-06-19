const request = require('supertest');
const { app, server } = require('./index');

afterAll(() => {
    server.close();
});

describe('Pruebas Unitarias del Microservicio', () => {
    it('Debería responder 200 OK', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toBe("OK");
    });

    it('Debería responder 200 Healthy', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toBe("Healthy");
    });
});