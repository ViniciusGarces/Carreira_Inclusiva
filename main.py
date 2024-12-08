from flask import Flask, render_template, request, flash, redirect, url_for
from flask import session
import json
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = "PALAVRA-SECRETA"

# Caminho absoluto para o arquivo usuarios.json
BASE_DIR = os.path.dirname(__file__)
USUARIOS_DIR = os.path.join(BASE_DIR, 'usuarios')
USUARIOS_FILE = os.path.join(USUARIOS_DIR, 'usuarios.json')

# Garantir que o diretório e o arquivo existam
if not os.path.exists(USUARIOS_DIR):
    os.makedirs(USUARIOS_DIR)

if not os.path.exists(USUARIOS_FILE):
    with open(USUARIOS_FILE, 'w') as file:
        json.dump([], file)  # Cria um arquivo JSON vazio

# Função auxiliar para carregar usuários
def carregar_usuarios():
    if not os.path.exists(USUARIOS_FILE):
        return []  # Retorna uma lista vazia se o arquivo não existir
    with open(USUARIOS_FILE, 'r') as file:
        return json.load(file)

# Função auxiliar para salvar usuários
def salvar_usuarios(lista):
    with open(USUARIOS_FILE, 'w') as file:
        json.dump(lista, file, indent=4)

#rota para a página inicial
@app.route("/")
def home():
    return render_template("index.html")

#rota para a página de login
@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        senha = request.form.get('senha')
        usuarios = carregar_usuarios()

        for usuario in usuarios:
            if email == usuario['email'] and senha == usuario['senha']:
                 # Envia o nome (primeiro nome) para o template
                primeiro_nome = usuario['nome'].split()[0]  # Pega o primeiro nome
                return render_template("index_logado.html", nomeUsuario=primeiro_nome)

        flash("Usuário ou senha inválidos!", "danger")
        return redirect(url_for('login'))

    return render_template("login.html")

#rota para a página de cadastro
@app.route("/cadastro", methods=['GET', 'POST'])
def cadastro():
    if request.method == 'POST':
        nome = request.form.get('nome')
        sobrenome = request.form.get('sobrenome')
        email = request.form.get('email')
        senha = request.form.get('senha')
        confirmar_senha = request.form.get('confirmar_senha')
        cargo = request.form.get('cargo')
        cep = request.form.get('cep')

        # Validação dos campos obrigatórios
        if not nome or not sobrenome or not email or not senha or not confirmar_senha:
            flash("Preencha todos os campos obrigatórios!", "danger")
            return redirect(url_for('cadastro'))

        # Verifica se as senhas coincidem
        if senha != confirmar_senha:
            flash("As senhas não coincidem!", "danger")
            return redirect(url_for('cadastro'))

        usuarios = carregar_usuarios()

        # Verifica se o e-mail já está cadastrado
        for usuario in usuarios:
            if usuario['email'] == email:
                flash("E-mail já cadastrado!", "danger")
                return redirect(url_for('cadastro'))

        # Adiciona o novo usuário
        novo_usuario = {
            'nome': nome,
            'sobrenome': sobrenome,
            'email': email,
            'senha': senha,
            'cargo_pretendido': cargo,
            'cep': cep
        }
        usuarios.append(novo_usuario)
        salvar_usuarios(usuarios)

        flash("Usuário cadastrado com sucesso!", "success")
        return redirect(url_for('login'))

    return render_template("criar_conta.html")

#rota para a página de vagas
@app.route("/encontre_vagas")
def encontre_vagas():
    return render_template("encontre_vagas.html")

#rota para a página de alerta de vagas
@app.route("/gerar_alertas")
def gerar_alertas():
    return render_template("gerar_alertas.html")

# Rota para logout
@app.route("/logout")
def logout():
    session.clear()  # Remove todas as informações da sessão
    flash("Você saiu com sucesso!", "info")
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)