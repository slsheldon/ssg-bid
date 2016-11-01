---
title: Hospedagem de dados
description: Este guia rápido irá ajudá-lo a tomar boas decisões sobre como hospedar dados de seu projeto do BID 
category: Comunidade
subCategory: Hospedagem de dados
image: /images/wikimedia-servers.jpg
imageTitle: Wikimedia Foundation Servers. CC BY-SA 2012 Victor Grigas, Wikimedia Foundation.
imageLink: https://commons.wikimedia.org/wiki/File:Wikimedia_Foundation_Servers-8055_13.jpg
---
# Hospedagem de dados de projetos do BID: Um guia rápido

<!-- toc -->
<!-- tocstop -->

-----------------------
## Introdução

Uma parte essencial de todos os projetos do BID é garantir que os dados que você gera tornem-se acessíveis de forma aberta através do GBIF.org e, potencialmente,  em outras plataformas on-line. Sabemos que este processo é um desafio para muitas instituições, especialmente para aqueles que são novas no GBIF e não têm as instalações para hospedar dados em um servidor que esteja sempre online.

É importante distinguir entre a publicação de dados e a hospedagem de dados. Mesmo as duas atividades estando conectadas, elas podem ser tratadas por diferentes instituições.

A publicação de dados é o ato de organizar e compartilhar dados para utilização através da rede GBIF. Uma instituição torna-se um publicador de dados no GBIF preenchendo um formulário de inscrição on-line e recebendo um endosso através de um nó participante ou da comissão de gestores de nós.

Hospedagem de dados é o ato de colocar os dados em uma plataforma web estável e acessível. Não há um processo formal para hospedar os dados e servi-los ao GBIF. A publicação de dados e a hospedagem de dados não precisam ser realizadas pela mesma instituição (embora eles geralmente são). Hospedagem de dados é um compromisso significativo uma vez que exige capacidade e recursos de longo prazo para manter uma plataforma de publicação de dados funcionando continuamente.

Lembre-se que, independentemente de onde os conjuntos de dados são hospedados, eles vão ser sempre claramente associados à sua instituição e ao seu país, uma vez que você se registre como um publicador de dados do GBIF. Aqui está um guia rápido para ajudá-lo a tomar a decisão certa sobre como seus dados serão hospedados. 

-----------

## Etapas de hospedagem

Uma vez que seus dados foram organizados em um formatos de dados suportado, faça o seguinte:
  
1. Se transforme em um publicador de dados GBIF através do preenchimento do [formulário de inscrição para publicadores](http://www.gbif.org/publishing-data/request-endorsement#/intro) (em inglês)
2. Encontre uma plataforma para publicação, IPT ou outra, em ordem de preferência:
    a. Hospedada em sua instituição
    b. Hospedada em um nó nacional (se o seu país é [Participante do GBIF](http://www.gbif.org/participation/participant-list))
    c. Hospedada por outro participante do GBIF ou por outro publicador de dados do GBIF (por exemplo, [um centro de hospedagem de dados](#centre))
    d. Se nenhuma das situações acima se aplica, envie uma mensagem para a [lista de comunidade do GBIF](mailto:bid-community@lists.gbif.org), explicando suas necessidades. Nós vamos encontrar um IPT para você!
3. Consiga acesso ao IPT (e treinamento básico)
4. Inicie a publicação de seus conjuntos de dados

-----------

## Opções de hospedagem de dados

### Hospedagem de dados pela instituição publicadora de dados

Publicadores de dados com a capacidade para hospedar seus próprios dados  instalam seu próprio IPT (Integrated Publishing Toolkit) ou outra plataforma de publicação de dados (<a name="ipt">Ver mais abaixo</a>) 

### Hospedagem de dados fora da instituição publicadora de dados  

Publicadores de dados que têm capacidade técnica limitada, ou que não desejam executar suas próprias plataformas de publicação de dados, podem optar por ter os seus dados hospedados  externamente. Isto vai poupar tempo e dinheiro com a criação e manutenção de seu próprio IPT, e você deverá ser capaz de receber suporte de help desk no seu próprio idioma se o serviço de hospedagem de dados tiver estrutura para isso . Embora existam muitas opções possíveis de serviços de hospedagem de dados, as organizações normalmente optam por trabalhar com quem compartilha um enfoque institucional, nacional, regional ou temático.

Se o seu país é um participante GBIF, a primeira opção a considerar é se o nó nacional do GBIF oferece uma solução para hospedagem de dados. Ter seus dados hospedados pelo seu nó nacional facilita a coleta de dados de interesse nacional e deve permitir sua conexão com uma rede de pblicadores locais e acesso a ajuda de help desk do seu nó.

Para os casos em que a hospedagem de dados não está disponível a partir do nó nacional, o GBIF tem uma lista de <a name="centre"></a>[**centros confiáveis de hospedagem de dados**](https://github.com/gbif/ipt/wiki/dataHostingCentres#data-hosting-centres) que atendem a um conjunto de critérios rigorosos, incluindo a administração e manutenção constante de um IPT on-line, a demonstração de um histórico de sucesso de hospedagem de dados, e suporte de help desk rápido e experiente. GBIF recomenda fortemente o uso de um centro de hospedagem confiável que possa estabelecer uma conta para você em seu IPT e permita que você possa gerenciar e publicar seus próprios conjuntos de dados através GBIF.org.

A última opção é que o próprio GBIF hospede os dados usando uma **plataforma de publicação hospedada em nuvem**. O Secretariado do GBIF mantém um  [BID IPT hospedado em nuvem](http://cloud.gbif.org/bid/about.do) que fornece aos publicadores a hospedagem de dados usando serviços de hardware, software e armazenamento compartilhados. Os usuários do serviço recebe uma solução de hospedagem robusta, sem custo e que é fácil de migrar para uma instalação auto-hospedado no futuro. No entanto, nós nacionais e centros de hospedagem são susceptíveis de fornecer mais serviço de 'hands-on' e assistência com os aspectos de publicação de dados e controle de qualidade. Como resultado, os projetos do BID devem normalmente usar o serviço hospedado de nuvem do IPT BID apenas se os projetos são incapazes de encontrar uma solução satisfatória dentre as outras opções de hospedagem.

-----------

## Introdução ao 'Integrated Publishing Toolkit'<a name="ipt"></a>

O IPT é um software livre e de código aberto desenvolvido e apoiado pela Secretaria do GBIF que as organizações ao redor do mundo usam para publicar e compartilhar conjuntos de dados de biodiversidade através da rede GBIF. O IPT também pode funcionar como um repositório de dados referenciados em um artigo, como neste exemplo de uma [instalação IPT hospedado pela rede Canadensys](http://data.canadensys.net/ipt).  

[Saiba mais sobre os requisitos técnicos para a realização de um IPT](https://github.com/gbif/ipt/wiki/IPT2ManualNotes.wiki#requirements) (em inglês)

### Modo de teste

O IPT pode ser instalado em modo de teste, o que significa que seus recursos hospedados não serão indexados ou acessíveis ao público através de pesquisa no GBIF.org. Se você decidir instalar o seu próprio IPT, o GBIF recomenda que você tente primeiro o modo de teste afim de compreender o processo de registro. O modo de teste é para a execução do IPT enquanto este é avaliado ou para realização de treinamento; registros feitos em modo de teste entrarão em um registro de teste e os recursos nunca serão indexados.

Quando voce tiver a certeza de que o IPT está funcionando da maneira que você espera, reinstale o software no modo de produção para tornar os dados realmente detectáveis através do GBIF. O modo de produção registra os conjuntos de dados e os publica para que eles sejam indexados e acessíveis ao público através do GBIF.org.

Tanto a instância IPT e a organização associada devem ser registradas com o GBIF. Se a sua organização ainda não está registrada, você será solicitado a concluir esta etapa e fornecer informações básicas através de um pequeno formulário no IPT. Saiba mais sobre como isso funciona no [Manual do Usuário do IPT](https://github.com/gbif/ipt/wiki/IPT2ManualNotes.wiki#configure-gbif-registration-options) (em inglês ou espanhol).

-----------

## Termos de uso
O uso de um hospedeiro de dados externo por um publicador de dados deve ser negociado entre as respectivas partes, de preferência com um acordo de serviço que defina os termos e as obrigações tanto para o publicador de dados quanto para o hospedeiro de dados. O uso do serviço hospedado em nuvem IPT BID será regido pelo [Acordo de Publicadores de dados do GBIF](http://www.gbif.org/terms/data-publisher) (em inglês). 

*Agradecimentos ao Andrea Portela, [SiBBr: Sistema de Informação sobre a Biodiversidade Brasileira](http://www.sibbr.gov.br) por a ajuda com a tradução para o português.*
-----------

```styledYaml
templates:
- path: eufund.html
```
