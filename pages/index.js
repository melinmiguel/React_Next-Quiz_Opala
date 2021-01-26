import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'


const BackgroundImage = styled.div`
background-image: url(${db.bg});
flex: 1;
background-size: cover;
background-position: center;
`;

export const QuizContainar = styled.div` 
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin:auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainar>
        <Widget>
          <Widget.header>
            <h1> the Legend os Alura</h1>
          </Widget.header>
          <Widget.Content>
            <p> lorem ipisulum banana pera m~çao ovo macarom lindo bonitao</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1> Quizes da Galera</h1>
            <p> Aqui a gente coloca os links dos quis delez</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainar>
      <GitHubCorner projectUrl="www.github.com/melinmiguel" />
    </QuizBackground>
  );
}
