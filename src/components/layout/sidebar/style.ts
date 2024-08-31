"use client";

import styled from "styled-components";
import Link from "next/link";

interface LeftSideBarMenuItemProps {
  $isOnRoute?: boolean;
  $font_size?: string;
}

export const LeftSideBarContainer = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-right: 1px solid ${({ theme }) => theme.border_colors["400"]};
  padding: ${({ theme }) => theme.size["2"]};
  gap: ${({ theme }) => theme.size["1"]};
  overflow: hidden;
`;

export const LeftSideBarMenuItem = styled(Link)<LeftSideBarMenuItemProps>`
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  min-height: 40px;
  height: max-content;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.size["2"]};
  white-space: nowrap;

  font-size: ${({ theme, $font_size }) =>
    theme.font_size[`${$font_size ?? "xl"}`]};

  color: ${({ theme, $isOnRoute }) =>
    $isOnRoute ? theme.colors.blue["100"] : theme.font_colors["100"]};

  background-color: ${({ theme, $isOnRoute }) =>
    $isOnRoute ? theme.colors.blue["T300"] : "transparent"};

  border-radius: ${({ theme }) => theme.size["2"]};

  padding: ${({ theme }) => theme.size["2"]};

  &:hover {
    color: ${({ theme, $isOnRoute }) =>
      $isOnRoute ? theme.font_colors["100"] : theme.colors.blue["100"]};

    background-color: ${({ theme, $isOnRoute }) =>
      $isOnRoute ? theme.colors.blue["T300"] : theme.colors.blue["T100"]};
  }
`;

export const LeftSideBarIconContainer = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font_size["2xl"]};
`;

export const LeftSideBarTextContainer = styled.div`
  width: 100%;
`;

export const GroupMenuContainer = styled.div`
  height: 100%;
  max-height: 1000px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size["2"]};
  transition: max-height 1s ease-in-out !important;
`;

export const DropDownContainer = styled.div<{
  $maxHeight?: number;
}>`
  display: flex;
  flex-direction: column;
  max-height: ${({ $maxHeight }) => $maxHeight ?? "40"}px;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  gap: ${({ theme }) => theme.size["1"]};

  border: 1px solid ${({ theme }) => theme.border_colors["400"]};
  border-radius: ${({ theme }) => theme.size["2"]};
  background-color: ${({ theme }) => theme.background["200"]};
  padding: ${({ theme }) => theme.size["0.5"]};
`;
