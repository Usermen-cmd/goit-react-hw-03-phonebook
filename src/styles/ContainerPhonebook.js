import styled from '@emotion/styled/macro';

export const ContainerPhonebook = styled.div`
  box-sizing: border-box;
  padding: 20px 30px;
  width: 1200px;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(123, 90, 149, 1) 100%
  );
  form {
    display: inline-block;
    margin-right: 40px;
    position: relative;
    margin-bottom: 30px;
  }
  & > button {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0px;
    border: none;
    outline: none;
  }
  margin: 0 auto;
  h1 {
    margin-bottom: 30px;
  }
  h2 {
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 20px;
  }
  input {
    margin-right: 10px;
  }
  label {
    margin-right: 10px;
  }
`;
