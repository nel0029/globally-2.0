"use client";

import styled from "styled-components";
import Link from "next/link";

export const SideBarContainer = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-right: 1px solid ${({ theme }) => theme.border_colors["400"]};
  padding: ${({ theme }) => theme.size["2"]};
  gap: ${({ theme }) => theme.size["1"]};
`;

export const SideBarMenuItem = styled(Link)<{ $isOnRoute?: boolean }>`
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  height: max-content;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.size["2"]};
  white-space: nowrap;

  font-size: ${({ theme }) => theme.font_size["xl"]};

  color: ${({ theme, $isOnRoute }) =>
    $isOnRoute ? theme.colors.blue["100"] : theme.font_colors["100"]};

  background-color: ${({ theme, $isOnRoute }) =>
    $isOnRoute ? theme.colors.blue["T300"] : "transparent"};

  border-radius: ${({ theme }) => theme.size["2"]};

  padding: ${({ theme }) => theme.size["2"]};

  &:hover {
    color: ${({ theme, $isOnRoute }) =>
      $isOnRoute ? theme.colors.neutral["100"] : theme.colors.blue["100"]};

    background-color: ${({ theme, $isOnRoute }) =>
      $isOnRoute ? theme.colors.blue["T300"] : theme.colors.blue["T100"]};
  }

  transition: all 0.2s ease-in-out;
`;

export const SideBarIconContainer = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font_size["2xl"]};
`;

export const SideBarTextContainer = styled.div`
  width: 100%;
`;

export const GroupMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size["1"]};
`;
