# meeting-room-front

Angular 12 instalado a partir do Node.js v14.17.3.

Dependências utilizadas:

* Bootstrap;
* jQuery;
* JSON Server.

Detalhes adicionais:

* Em ```db.json``` está o banco de dados de teste. Porta em: ```json-server.json```.

* O arquivo ```proxy.conf.json``` serve para estabelecer uma comunicação entre o padrão ```localhost:4200``` do Angular e os endpoints da API presentes no back-end. Na seção "scripts" do arquivo ```package.json```, é possível notar a seguinte linha.
```
"start": "ng serve --proxy-config proxy.conf.json"
```

Isso faz com que o comando ```npm start``` inicie o Angular com as configurações definidas no proxy.

* Configuração adicional no ```angular.json``` para Bootstrap e jQuery a seguir.
```
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.min.js",
  "node_modules/jquery/dist/jquery.min.js"
]
```
