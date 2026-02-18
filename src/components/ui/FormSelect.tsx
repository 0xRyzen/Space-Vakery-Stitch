import styled from 'styled-components';
import type { SelectHTMLAttributes } from 'react';

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    error?: string;
}

const SelectWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const StyledSelect = styled.select<{ $hasError: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid ${props => props.$hasError ? '#ef4444' : 'rgba(0,0,0,0.1)'};
  background: rgba(255,255,255,0.5);
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? '#ef4444' : props.theme.colors.pistachio};
    background: white;
    box-shadow: 0 0 0 3px ${props => props.$hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(90, 105, 191, 0.1)'};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.span`
  display: block;
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  font-weight: 500;
`;

export const FormSelect = ({ error, className, children, ...props }: FormSelectProps) => {
    return (
        <SelectWrapper className={className}>
            <StyledSelect $hasError={!!error} {...props}>
                {children}
            </StyledSelect>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </SelectWrapper>
    );
};
