# ZF2 Gulp

## Instruções

Esse arquivo faz as configurações básicas para utilização do gulp para processar o sass com o Zend Framework 2.
Estou partindo do princípio de que você já tenha instalado na sua máquina o node, gulp, e sass.

## Instalação

Baixe todos os arquivos do repositório e coloque dentro da do seguinte diretório:
```php
  seuprojeto/public
```

Rode o seguinte comando no console
```bash
  npm install
```

Após a instalação das dependencias, navegue até a seguinte pasta
```php
  seuprojeto/public
```
Rode o seguinte comando
```bash
  gulp watch
```

Após rodar esse comando, o gulp vai criar um arquivo .scss no seguinte diretório
```php
  seuprojeto/public/sass/src/css/style.scss
```

Todas as alterações de css devem ser feitas nesse arquivo.
Toda vez que esse arquivo for alterado, o arquivo style.css que vem por default na instação do zend será minificado e receberá todo o código do arquivo style.scss
