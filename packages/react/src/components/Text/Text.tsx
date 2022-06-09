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

const Component = styled.p`
  font-family: 'Roboto', sans-serif;
  ${({ align }: TextProps) => align && `text-align: ${align};`}
  ${({ casing }: TextProps) => casing && `text-transform: ${casing};`}
  ${({ decoration }: TextProps) => decoration && `text-decoration: ${decoration};`}
`;

const Text: React.FC<TextProps> = ({ as = 'p', align, casing, decoration, children }) => {
  return (
    <Component as={as} align={align} casing={casing} decoration={decoration}>
      {children}
    </Component>
  );
};

export default Text;
