import React from 'react';
import styled from 'styled-components';
import CSS from 'csstype';

export interface TextProps {
  as?: 'p' | 'span';
  align?: CSS.Property.TextAlign;
  casing?: CSS.Property.TextTransform;
  children: React.ReactNode;
  decoration?: CSS.Property.TextDecoration;
}

export const Text: React.FC<TextProps> = ({ as = 'p', casing, children }) => {
  const TextComponent = styled[as]`
    font-family: 'Roboto', sans-serif;
    ${casing && `text-transform: ${casing};`}
  `;

  return <TextComponent>{children}</TextComponent>;
};

export default Text;
