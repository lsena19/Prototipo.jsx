import React from 'react';
import './styles.css';

function App() {
  return (
    <>
      <header>
        <div className="container">
          <h1>
            <a href="#">EcoCashback</a>
          </h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Empresas Certificadas</a></li>
              <li><a href="#">Como Funciona</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="C:\\Projeto TreeEcologic/Pagina Sobre.html">Sobre</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Transforme suas compras em impacto positivo!</h2>
          <p>Ganhe cashback ao consumir em empresas sustentáveis e ajude o planeta.</p>
          <a href="#" className="btn">Cadastre-se Agora</a>
        </div>
      </section>

      <section className="como-funciona">
        <div className="container">
          <h3>Como Funciona</h3>
          <div className="steps">
            <div className="step">
              <h4>1. Encontre Empresas Sustentáveis</h4>
              <p>Navegue por nossa lista de empresas certificadas que seguem práticas ecológicas.</p>
            </div>
            <div className="step">
              <h4>2. Compre e Ganhe Cashback</h4>
              <p>Receba cashback em suas compras e economize ao mesmo tempo que apoia o meio ambiente.</p>
            </div>
            <div className="step">
              <h4>3. Ajude a Transformar o Mundo</h4>
              <p>Juntos, promovemos práticas conscientes e ajudamos o planeta.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="empresas-destaque">
        <div className="container">
          <h3>Empresas Certificadas em Destaque</h3>
          <div className="cards">
            <div className="card">
              <h4>EcoStore</h4>
              <p>Certificação Ouro (9.8/10)</p>
              <p>Cashback: até 20%</p>
            </div>
            <div className="card">
              <h4>BioGreen</h4>
              <p>Certificação Prata (8.9/10)</p>
              <p>Cashback: até 15%</p>
            </div>
            <div className="card">
              <h4>PlanetSave</h4>
              <p>Certificação Bronze (7.5/10)</p>
              <p>Cashback: até 10%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="beneficios">
        <div className="container">
          <h3>Por que Consumir de Empresas Sustentáveis?</h3>
          <ul>
            <li>Redução de resíduos</li>
            <li>Apoio a pequenos produtores</li>
            <li>Descontos e cashback</li>
            <li>Economia de água e energia</li>
          </ul>
        </div>
      </section>

      <section className="cta-final">
        <div className="container">
          <h3>Pronto para fazer parte da mudança?</h3>
          <a href="#" className="btn">Cadastre-se Agora e Ganhe Cashback</a>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 EcoCashback. Todos os direitos reservados.</p>
          <nav>
            <ul>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default App;
