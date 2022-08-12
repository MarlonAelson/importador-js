# importador-js

Na migração/importação de dados para banco dados é muito comum o cliente repassar as informações de seu sistema antigo em Planilhas de Excel. Gerar scripts a partir dos dados em Excel é muito trabalhoso e muitas vezes há necessidade do cliente enviar novamente a Planilha porque precisou alterar/acrescentar dados. Dessa forma, visando diminuir este trabalho manual e até mesmo evitar retrabalho, este projeto foi criado com o objetivo de agilizar a transformação dos dados das Planilhas em scripts SQL de INSERT ou UPDATE INSERT. A princípio ele foi feito para o banco de dados FIREBIRD, porém foram importados pacotes Node do POSTGRESQL e também do MYSQL, mas só testado com MYSQL e FIREBIRD.

Apesar de não ter familiaridade com Javascript/Node optei por eles porque queria aprender um pouco sobre as tecnologias e porque adicionar o Firebird ao PHP na época foi trabalhoso.

Ele não possui interface, portanto as configurações são lançadas diretamente no arquivo app.js e o chamar o arquivo pelo prompt de comando ele irá fazer o procedimento de inserir somente no banco de dados, gerar somente os scripts de SQL sendo eles de INSERT ou UPDATE OR INSERT, ou ambos ao mesmo tempo.

Para utilizá-lo 
