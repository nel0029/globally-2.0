import styled from "styled-components";

export const FormCard = styled.div<{ $size?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, $size }) => `${$size}px` ?? theme.size["2"]};

  max-width: 400px;
  width: 100%;
  padding: ${({ theme }) => theme.size["10"]} ${({ theme }) => theme.size["7"]};

  background-color: ${({ theme }) => theme.background["200"]};

  border-style: solid;
  border-width: ${({ theme }) => theme.size["0.25"]};
  border-color: ${({ theme }) => theme.border_colors["400"]};
  border-radius: ${({ theme }) => theme.size["5"]};
`;

export const FormItem = styled.div<{ $size?: number }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme, $size }) => `${$size}px` ?? theme.size["0.5"]};
`;

export const FormInput = styled.input`
  outline: none;
  border-style: solid;
  border-width: ${({ theme }) => theme.size["0.25"]};
  border-color: ${({ theme }) => theme.border_colors["400"]};
  border-radius: ${({ theme }) => theme.size["1"]};

  font-size: ${({ theme }) => theme.size["4"]};
  color: ${({ theme }) => theme.font_colors["100"]};
  line-height: ${({ theme }) => theme.size["5"]};

  padding: ${({ theme }) => theme.size["2"]};

  background-color: ${({ theme }) => theme.background["300"]};

  &:focus {
    background-color: ${({ theme }) => theme.background["300"]} !important;
  }

  &::-webkit-autofill {
    background-color: ${({ theme }) => theme.background["300"]} !important;
  }
`;

export const FormLabel = styled.span`
  color: ${({ theme }) => theme.font_colors["100"]};
  font-size: ${({ theme }) => theme.size["4"]};
  line-height: ${({ theme }) => theme.size["5"]};
`;

export const FormButton = styled.button`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue["200"]};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.blue["300"]};
  }

  padding: ${({ theme }) => theme.size["2"]};

  border: none;
  border-radius: ${({ theme }) => theme.size["1"]};

  background-color: ${({ theme }) => theme.colors.blue["100"]};

  font-size: ${({ theme }) => theme.size["4"]};
  line-height: ${({ theme }) => theme.size["5"]};
  color: ${({ theme }) => theme.colors.neutral["900"]};
`;

export const FormText = styled.span<{
  $isPrimary?: boolean;
  $isTitle?: boolean;
  $isClickable?: boolean;
  $isStatement?: boolean;
}>`
  color: ${({ theme, $isPrimary }) =>
    $isPrimary ? theme.colors.blue["100"] : theme.font_colors["100"]};
  font-weight: ${({ $isPrimary }) => ($isPrimary ? "bold" : "normal")};
  font-size: ${({ theme, $isTitle, $isStatement }) =>
    theme.size[`${$isTitle ? "6" : $isStatement ? "4" : "3"}`]};
  line-height: ${({ theme, $isTitle, $isStatement }) =>
    theme.size[`${$isTitle ? "7" : $isStatement ? "5" : "4"}`]};
  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "auto")};
  &:hover {
    text-decoration: ${({ $isClickable }) =>
      $isClickable ? "underline" : "none"};
    text-decoration-color: ${({ theme }) => theme.colors.blue["100"]};
  }
`;

export const FormTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4px;
  font-size: 20px;
`;

export const Box = styled.div<{
  $direction?: "row" | "column";
  $size?: number;
}>`
  width: 100%;
  display: flex;
  flex-direction: ${({ $direction }) => $direction ?? "row"};
  gap: ${({ $size }) => `${$size}px` ?? "5px"};
`;
export const FormDivider = styled.div<{ $size?: number }>`
  height: 1px;
  width: 100%;
  border-bottom: ${({ $size }) => `${$size}px` ?? "1px"} solid;
  border-color: ${({ theme }) => theme.border_colors["400"]};
`;
