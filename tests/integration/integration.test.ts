import { app, request, expect } from './config/helpers';

describe('Testes de Integração', () => {
    describe("GET /api/users/all", () => {
        it('Deve retornar um Json com todos os usuários', done => {
            request(app)
                .get('/api/users/all')
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                })
        });
    });

    describe("POST /api/users/new", () => {
        it('Deve Criar usuário', done => {

            const user = {
                nome: 'Teste',
                sobrenome: 'Sobrenome'
            }

            request(app)
                .post('/api/users/new')
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });

    describe("PUT /api/users/:id/edit", () => {
        it('Deve atualizar um usuário', done => {
            const user = {
                nome: 'TesteUpdate',
                sobrenome: 'Sobrenome'
            }

            request(app)
                .put(`/api/users/${1}/new`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });

    describe("DELETE /api/users/:id", () => {
        it('Deve deletar um usuário', done => {
            request(app)
                .delete(`/api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });
});