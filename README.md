<h1>Node JS<\h1>

Na migração/importação de dados para banco dados é muito comum o cliente repassar as informações de seu sistema antigo em Planilhas de Excel. O processo de gerar scripts a partir dos dados em Excel é muito trabalhoso e muitas vezes há necessidade do cliente enviar novamente a Planilha porque precisou alterar/acrescentar dados e, com isso, será necessário refazer todo o trabalho. Dessa forma, visando diminuir este trabalho manual e até mesmo evitar retrabalho, este projeto foi criado com o objetivo de agilizar a transformação dos dados das Planilhas em scripts SQL de INSERT ou UPDATE INSERT. A princípio ele foi feito para o banco de dados FIREBIRD, porém foram importados pacotes Node do POSTGRESQL e também do MYSQL, mas só testado com MYSQL e FIREBIRD.

Apesar de não ter familiaridade com Javascript/Node optei por eles porque queria aprender um pouco sobre as tecnologias e porque adicionar o Firebird ao PHP na época foi trabalhoso.

Ele não possui interface, portanto as configurações são lançadas diretamente no arquivo app.js e o chamar o arquivo pelo prompt de comando ele irá fazer o procedimento de inserir somente no banco de dados, gerar somente os scripts de SQL sendo eles de INSERT ou UPDATE OR INSERT, ou ambos ao mesmo tempo.

<h3>Para utilizá-lo acesse o prompt de comando:<\h3> 
1 - Execute o comando "git clone https://github.com/MarlonAelson/importador-js.git" e espere concluir;
2 - Entre na pasta "importador-js" e execute o comando "npm install" e espere concluir;

<h3>Processo Manual<\h3>
3 - Coloque o arquivo xlsx no diretório "sua_path\importador-js\backend\arquivos_importacao" com o seguinte padrão. O nome do arquivo excel será o nome da tabela no banco de dados. Na primeira linha do arquivo deverá conter o nome das colunas dos dados que serão inseridos no banco de dados. A partir da segunda linha serão os dados a serem inseridos. A panilha deve está toda tratada antes de realizar o procedimento, deixe apenas as colunas que de fato necessitam ser inseridas, em caso de erro de estouro de memória... selecione somente as linhas e colunas com os dados na planilha, copie e cole numa planilha nova, isso irá evitar que o projeto tente ler linhas e colunas em branco.
4 - Vá até o diretório "sua_path\importador-js\backend\uteis\diretorios" e configure no arquivo "diretorio.js" o caminho do diretório dos arquivos a serem importados de acordo com "sua_path" onde salvou o projeto. Exemplo: o projeto foi salvo na unidade "C:", então o a configuração ficará "C:\importador-js\backend\arquivos_importacao".
5 - Configure o arquivo app.js com o nome da planilha que vai gerar o script, se será query de "insert" ou "update or insert" (para esse comando é necessário configurar o nome da coluna), se vai querer salvar o script em txt e a configuração do banco de dados. 

<h3>Voltando para prompt de comand<\h3>
6 - Após o passo 5 executar o seguinte comando "node app". Isso fará com quê os dados sejam inseridos dentro do banco de dados e gerados os scripts em txt dentro da pasta "backend" caso tenha optado por isso.
