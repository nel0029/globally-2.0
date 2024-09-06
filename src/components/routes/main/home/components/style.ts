import styled from "styled-components";
import Image from "next/image";

export const CreateNewPostCardContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: ${({ theme }) => theme.size["2"]};
  gap: ${({ theme }) => theme.size["2"]};

  border-width: 1px;
  border-color: ${({ theme }) => theme.border_colors["600"]};
  border-style: solid;
  border-radius: ${({ theme }) => theme.size["2"]};
`;

export const CreateNewPostSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size["2"]};
`;

export const CustomTextArea = styled.textarea`
  flex: 1;
  width: 100%;
  resize: none;
  min-height: 100%;
  overflow: hidden;
  background-color: transparent;
  font-family: inherit;
  font-size: ${({ theme }) => theme.font_size["base"]};
  color: ${({ theme }) => theme.font_colors["100"]};
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.font_colors["300"]};
  }

  &:focus {
    outline: none;
  }
`;

export const CustomTextAreaContainer = styled.div`
  padding: ${({ theme }) => theme.size["2"]} 0;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const CreateNewPostButton = styled.button`
  cursor: pointer;
  width: max-content;
  padding: ${({ theme }) => theme.size["1"]} ${({ theme }) => theme.size["3"]};
  background-color: ${({ theme }) => theme.colors.blue["100"]};
  border: none;
  border-radius: ${({ theme }) => theme.size["3"]};
  font-size: ${({ theme }) => theme.font_size["base"]};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue["200"]};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ActionButtonsGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.size["2"]};
`;

export const ActionButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.size["2"]};
`;

export const AvatarContainer = styled.div`
  position: relative;
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const StyledButton = styled.button<{ $variants?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: ${({ theme, $variants }) =>
    theme.button_variants[$variants || "blue"]};
  font-size: ${({ theme }) => theme.font_size["2xl"]};

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.blue["100"]};
  }
`;
