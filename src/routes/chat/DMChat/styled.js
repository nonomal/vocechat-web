import styled from "styled-components";
export const StyledHeader = styled.header`
  height: 100%;
  /* padding: 0 20px 0 10px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* tricky */
  > div {
    padding-left: 4px;
  }
  .txt {
    display: flex;
    align-items: center;
    gap: 5px;
    .title {
      font-size: 16px;
      line-height: 24px;
      color: #1c1c1e;
    }
    .desc {
      margin-left: 8px;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #616161;
    }
  }
`;
export const StyledDMChat = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  padding-bottom: 16px;
  height: calc(100vh - 56px - 22px);
  > .chat {
    padding: 18px 16px;
    height: 100%;
    height: -webkit-fill-available;
    overflow: auto;
  }
  > .send {
    margin: 0 16px;
  }
`;