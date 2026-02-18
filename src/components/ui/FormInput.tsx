import styled from 'styled-components';
import type { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input<{ $hasError: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid ${props => props.$hasError ? '#ef4444' : 'rgba(0,0,0,0.1)'};
  background: rgba(255,255,255,0.5);
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? '#ef4444' : props.theme.colors.pistachio};
    background: white;
    box-shadow: 0 0 0 3px ${props => props.$hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(90, 105, 191, 0.1)'};
  }
  
  &::placeholder {
    color: rgba(0,0,0,0.4);
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

export const FormInput = ({ error, className, ...props }: FormInputProps) => {
    return (
        <InputWrapper className={className}>
            <StyledInput $hasError={!!error} {...props} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputWrapper>
    );
};
