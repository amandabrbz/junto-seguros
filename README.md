<p align="center">
  <h3 align="center">Junto Seguros</h3>

  <p align="center">
    Vaga Pessoa Desenvolvedora Front End.
    <br />
    <a href="https://github.com/GitJMSeguradora/jobs/blob/master/front/Challenge.md"><strong>Desafio »</strong></a>
  </p>
</p>

## Guide

- [Sobre o Desafio](#Sobre-o-Desafio)
  - [Avaliações](#Avaliações)
    - [Diferenciais](#Diferenciais)
- [Getting Started](#getting-started)
  - [Pré requisitos](#Pré-requisitos)
  - [Clonando e inicializando](#Clonando-e-inicializando)
    - [Modo desenvolvimento](#Modo-desenvolvimento)
    - [Modo build](#Modo-build)
- [Protótipo](#Protótipo)
- [Conclusões](#Conclusões)
  - [Aprendizados](#Aprendizados)
  - [Dificuldades](#Dificuldades)
  - [Pontos de melhorias](#Pontos-de-melhorias)
- [Deploy](#Deploy)
- [Contato](#Contato)
- [Referências](#Referências)
  - [Assets](#Assets)
- [Licença](#Licença)

## Sobre o Desafio

O desafio é criar um SPA em React, onde seja possível realizar a busca de um filme pelo seu título. Também deve ser possível visualizar mais detalhes dos filmes.

A API a ser utilizada será a [OMDb](http://www.omdbapi.com) ao qual o candidato deverá criar uma conta.

### Avaliações

  - [ ] Layout bem feito
  - [ ] Código organizado
  - [ ] Deve publicar o projeto como público no Github

#### Diferenciais

  - [ ] **Diferencial:** Utilizar alguma biblioteca de controle de estado
  - [ ] **Diferencial:** >60% de cobertura de testes
  - [ ] **Diferencial:** Styled Components
  - [ ] **Diferencial:** Criar outras áreas, como por exemplo, filmes prediletos, área de login, etc
  - [ ] **Diferencial:** Otimizar webpack.

## Getting Started

Para ter uma cópia local e fazer rodá-lo, siga esses passos:

### Pré requisitos

Ter instalado no computador:

- [ ] Node.js superior a versão 12
- [ ] [Gatsby](https://www.gatsbyjs.org/)

### Clonando e inicializando

:small_red_triangle_down: Comandos devem ser digitados pelo terminal

Para clonar o projeto:

```sh
git clone https://github.com/amandabrbz/spa-juntoseguros.git
```

#### Modo desenvolvimento

Subir o servidor local:

```sh
cd spa-juntoseguros
gatsby develop
```

Após a aplicação inicializar, deve abrir uma aba automaticamente no browser padrão, rodando o projeto na porta ``:8000``

```sh
http://localhost:8000
```

:no_entry_sign: Caso a porta já esteja sendo utilizada, o próprio terminal avisa.

#### Modo build

O modo build consiste na geração estática das páginas, podendo ver rotas e procurar por páginas não localizadas por exemplo.

Subir o servidor:

```sh
cd spa-juntoseguros
gatsby build
gatsby serve
```

Após a aplicação inicializar, deve abrir uma aba automaticamente no browser padrão, rodando o projeto na porta ``:000``

```sh
http://localhost:9000
```

:no_entry_sign: Caso a porta já esteja sendo utilizada, o próprio terminal avisa.

## Protótipo

Para acessar os protótipos utilizados como base para codificação, acesse o [Whimsical](https://whimsical.com/4D1APFSXfAPjKLUZSjxjMG).

## Conclusões

### Aprendizados

A cada vez que desenvolvo algo em React, acabo aprendendo muita coisa legal. O pensamento de componentização no inicio chega ser abstrato, entretanto quando você vai ligando com teorias do design, como o *Atomic Design* por exemplo, esse pensamento de componentização vai ficado muito mais claro na aplicação. Consumir API por Axios é bem mais "tranquilo".

### Dificuldades

Tive dificuldades em achar e arquitetar uma estrutura para o projeto. Consumir API é um tópico que preciso melhorar e muito.  Utilizar o GraphQL pela primeira vez foi complicado, acabei causando um bug na parte de Reviews por um método que está depreciado e ainda não há muito material sobre ele, mas irei procurar soluções e melhorar o projeto.

### Pontos de melhorias

:heavy_plus_sign: Criar e participar da cultura do TDD

:heavy_plus_sign: Organização e estimativa de tempo.

## Deploy

<center>

[Github](https://github.com/amandabrbz/junto-seguros.git) | [Netlify](https://juntoseguros.netlify.app)
</center>

## Contato

Amanda Barboza @ [LinkedIn](https://linkedin/in/amandabrbz)

email: amanda.brbz@hotmail.com

## Referências

- [Estruturando Projetos](https://blog.matheuscastiglioni.com.br/como-organizar-projetos-em-react/)
- [Estruturando Pastas](https://github.com/frontendbr/forum/issues/726)
- [Rotas](https://celke.com.br/artigo/como-criar-rotas-no-react)
- [Axios](https://alligator.io/react/axios-react/)

### Assets

- [ ] [Ilustrações](https://undraw.co/illustrations)
- [ ] [Paleta de cores](https://coolors.co/f24341-e89a41-cbcfe0-ddd5b2-818578-535d5b-25353d)
- [ ] [Cat ipsum](http://www.catipsum.com/index.php)

## Licença

Distributed under the MIT License. See `LICENSE` for more information.