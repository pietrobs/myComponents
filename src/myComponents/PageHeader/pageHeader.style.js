import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  .title-wrapper {
    flex-grow: 1;
    .back-link {
      display: inline-block;
      line-height: 34px;
      padding: 0 10px;
      margin-left: -10px;
      margin-bottom: -4px;
      color: #00b2ff;
      cursor: pointer;
      &:hover {
        background: #DDD;
      }
      .anticon {
        font-size: 12px;
        margin-right: 2px;
      }
    }
    h1 {
      color: #333;
      width: 100%;
      font-size: 32px;
      display: flex;
      align-items: center;
    }
  }
  .buttons-wrapper {
    margin-top: 2px;
    > button {
      margin-left: 12px;
    }
  }
`;

export default Container;
