const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

//Models (tabelas)
const Usuario = require('./models/Usuario'); // Certifique-se de ajustar o caminho conforme necessário
const Entrega = require('./models/Entrega');
const Item = require('./models/Item');

//Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    }))
    app.set('view engine', 'handlebars')
    //Body-parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    
    
const port = 3000;
app.listen(port, () =>{
    console.log("Server running at", port)
});

app.get('/', (req, res)=>{
    res.render('home.handlebars');
});

app.get('/estoque', function(req, res){
    Item.findAll({order: [['id', 'DESC']]}).then(function(itens){
        res.render('displayEstoque.handlebars', {itens: itens})
    })
});

app.get('/registro', (req, res)=>{
    res.render('registro.handlebars');
});

// Criacao de item(estoque)
    //Adcionar item ao estoque
    app.get('/criarItem', (req, res)=>{
        res.render('criarItem.handlebars');
    });
    //Rota de adição de item
    app.post('/additem', (req, res)=>{
        Item.create({
            Codigo: req.body.Codigo,
            Descricao: req.body.Descricao,
            Quantidade: req.body.Quantidade,
            Preco: req.body.Preco,
            Pcompra: req.body.Pcompra,
            Lucroliq: req.body.Preco - req.body.Pcompra,
            Lucro: (((req.body.Preco - req.body.Pcompra) / req.body.Pcompra) * 100).toFixed(2),
        }).then(() =>{
            res.render('itemSucesso.handlebars')
        }).catch((err) =>{
            res.send('Erro ao cadastrar item: ' + err)
        });
    });
    //Rota de diaplay de itens
    app.get('/displayEstoque', function(req, res){
        Item.findAll().then(function(itens){
            res.render('displayEstoque.handlebars', {itens: itens})
        })
    });

//Usarios

    //Cadastro de usuario
    
    app.get('/cadastro', (req, res)=>{
        res.render('cadastro.handlebars');
    });

    //Rota envio de dados
    app.post('/rotaenviocadastro', (req, res)=>{
            Usuario.create({
                Email: req.body.emailcadastro,
                Senha: req.body.senhacadastro,
            }).then(() =>{
                res.send('Cadastro realizado com sucesso email:')
            }).catch((err) =>{
                res.send('Erro ao cadastrar: ' + err)
            });
        });
    //Rota Deletar Item
    app.get('/rotadeleteitem/:id',(req, res)=>{
        Item.destroy({where: {'id': req.params.id}}).then(function(){
            res.render('itemDeletado.handlebars')
        }).catch(function(err){
            res.render('erroDeletarItem.handlebars')
        })
    })
    
    //Rota de edição de item
    app.get('/edititem/:id', function(req, res){
        Item.findOne({where: {'id': req.params.id}}).then(function(item){
            res.render('editItem.handlebars', {item: item})
        })
    })

    //Rota Update Item
    app.put('/updateitem/:id', async(req, res)=>{
        const itemId = req.params.id;
        const resultado = await item.replaceOne({_id: itemId}, req.body)
        console.log(resultado)
        Item.update({
            Codigo: req.body.Codigo,
            Descricao: req.body.Descricao,
            Quantidade: req.body.Quantidade,
            Preco: req.body.Preco,
            Pcompra: req.body.Pcompra,
            Lucroliq: req.body.Preco - req.body.Pcompra,
            Lucro: (((req.body.Preco - req.body.Pcompra) / req.body.Pcompra) * 100).toFixed(2),},
            {where: {'id': req.params.id}})})

// Item.sync({force: true})
