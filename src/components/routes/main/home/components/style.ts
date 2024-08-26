import styled from "styled-components";

export const CreateNewPostCardContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.border_colors["400"]};
`;

export const CreateNewPostTextArea = styled.textarea`
  width: 100%;
  resize: none;
  height: auto;
  min-height: max-content;
  overflow: hidden;
`;
