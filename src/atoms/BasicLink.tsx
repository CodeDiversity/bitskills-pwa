import React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const StyledLink = styled(Typography)`
  flex-grow: 1;
`;

type BasicLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: string;
};

const BasicLink = ({ to, children, ...props }: BasicLinkProps) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <StyledLink component='span' {...props}>
        {children}
      </StyledLink>
    </Link>
  );
};

export default BasicLink;
