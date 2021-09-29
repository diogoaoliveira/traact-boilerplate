import * as S from './styles'

const Main = ({
  title = 'Traact Boilerplate! hell yeah!',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/hero-illustration.svg" alt="JS Developer" />
  </S.Wrapper>
)

export default Main
