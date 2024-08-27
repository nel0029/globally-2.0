"use client";

import styled from "styled-components";

export const SideBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContentWrapper = styled.div`
  width: 100%;
  height: max-content;
`;

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.border_colors["400"]};
  font-size: ${({ theme }) => theme.font_size["2xl"]};
  color: ${({ theme }) => theme.font_colors["100"]};
  padding: ${({ theme }) => theme.size["2"]};
`;

export const LogoContainer = styled.div`
  height: max-content;
  width: max-content;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue["100"]};
  border-radius: 50%;
`;

export const HeaderTextContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font_size["2xl"]};

  cursor: pointer;
`;
