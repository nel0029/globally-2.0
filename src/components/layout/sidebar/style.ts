"use client";

import styled from "styled-components";
import Link from "next/link";

export const SideBarContainer = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  border-right: 1px solid ${({ theme }) => theme.border_colors["400"]};
  padding: ${({ theme }) => theme.size["2"]};
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
  gap: 5px;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.font_size["2xl"]};
  color: ${({ theme, $isOnRoute }) =>
    $isOnRoute ? theme.colors.blue["100"] : theme.font_colors["100"]};
  padding: ${({ theme }) => theme.size["1"]};
  &:hover {
    color: ${({ theme, $isOnRoute }) =>
      $isOnRoute ? theme.colors.blue["200"] : theme.colors.blue["100"]};
  }
  transition: all 0.2s ease-in-out;
`;

export const SideBarIconContainer = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const SideBarTextContainer = styled.div`
  width: 100%;
`;
