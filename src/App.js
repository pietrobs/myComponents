import React from 'react';
import 'antd/dist/antd.css';

import { Row, Typography, Col } from 'antd';

import { Empty, ComponentContainer, Box, PageHeader, List } from './myComponents';

const { Text, Title } = Typography;

const Items = [
  {
    name: "Small",
  },
  {
    name: "Medium name",
  },
  {
    name: "Large name foo bar foo bar foo bar foo bar",
  },
]

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EEE' }}>

      <Title>MyComponents Doc</Title>

      <Row gutter={20}>

        <ComponentContainer>
          <Title level={2}>Empty State</Title>
          <Empty
            description="Você ainda não cadastrou nenhum usuário!"
            button={{
              text: "CADASTRAR USUÁRIO",
              action: () => { alert("Clicou") }
            }}
          />
          <Text>O Empty State é utilizado para não deixar um usuário sem nenhum feedback quando alguma informação não é encontrada.</Text>
          <Row>
            <ul style={{ listStyle: 'none' }}>
              <li><Text code>image: Imagem que será exibida com altura 120px</Text></li>
              <li><Text code>title: Título (h1) default: 'Ué...não encontrei nenhum dado aqui!'</Text></li>
              <li><Text code>description: Texto de descrição (h2) default: null</Text></li>
              <li><Text code>style: Estilo do container que engloba tudo</Text></li>
            </ul>
          </Row>

        </ComponentContainer>

        <ComponentContainer>
          <Title level={2}>Box</Title>

          <Box shadow background="lightblue">
            Teste
          </Box>
          <Text>O box pode ser utilizado para organizar componentes</Text>
          <Row>
            <ul style={{ listStyle: 'none' }}>
              <li><Text code>shadow: Sombra (boolean) default: false</Text></li>
              <li><Text code>background: Cor de fundo (String) default: 'white'</Text></li>
              <li><Text code>horizontal: Margin vertical do componente (String) default: 20px</Text></li>
              <li><Text code>style: Estilo do container que engloba tudo</Text></li>
            </ul>
          </Row>

        </ComponentContainer>


        <ComponentContainer>
          <Title level={2}>PageHeader</Title>

          <PageHeader
            title="Início"
            backLinkText="Voltar"
          />

          <Text>Geralmente utilizado no topo das páginas, o PageHeader permite a adição de um título, um botão de voltar e de botões em seu lado oposto</Text>
          <Row>
            <ul style={{ listStyle: 'none' }}>
              <li><Text code>title: Título da página. default: ''</Text></li>
              <li><Text code>backLinkText: Texto do botão de voltar. default: null</Text></li>
              <li><Text code>backLinkTo: URL que será redirecionado ao clicar default: ''</Text></li>
            </ul>
          </Row>

        </ComponentContainer>

        <ComponentContainer>
          <Title level={2}>List</Title>
          <Row display="flex" flexDirection="row" justify="space-between" align="space-around">
            
            <Col lg={{ span: 8, offset: 0 }}>
              <h1>Title</h1>
              <List title="Membros" items={Items} />
            </Col>
            
            <Col lg={{ span: 15, offset: 1 }}>
              <List title="Membros" items={Items} style={{marginTop: '55px'}}/>
            </Col>

          </Row>
          

        </ComponentContainer>

      </Row>

    </div >
  );
}

export default App;
