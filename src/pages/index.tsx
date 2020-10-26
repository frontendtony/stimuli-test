import styled from 'styled-components';

function Home() {
  return (
    <StyledHomePage data-testid="app">
      <h1 className="text-4xl text-purple-600 text-center font-semibold mt-20 mb-4">
        Stimuli Test
      </h1>
    </StyledHomePage>
  );
}

var StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export default Home;
