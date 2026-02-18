import React from 'react';
import styled from 'styled-components';

interface StepperProps {
    steps: string[];
    currentStep: number;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 640px) {
    gap: 1rem;
    margin-bottom: 3rem;
  }
`;

const StepWrapper = styled.div<{ active: boolean; completed: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${props => props.active ? props.theme.colors.charcoal : props.completed ? props.theme.colors.pistachio : 'rgba(0,0,0,0.3)'};
  transition: color 0.3s;
  
  @media (min-width: 640px) {
    gap: 0.5rem;
  }
`;

const Number = styled.div<{ active: boolean; completed: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 700;
  flex-shrink: 0;
  border: 2px solid ${props => props.active ? props.theme.colors.charcoal : props.completed ? props.theme.colors.pistachio : 'rgba(0,0,0,0.1)'};
  background: ${props => props.active ? props.theme.colors.charcoal : 'transparent'};
  color: ${props => props.active ? 'white' : 'inherit'};
  
  @media (min-width: 640px) {
    width: 28px;
    height: 28px;
    font-size: 0.75rem;
  }
`;

const Line = styled.div<{ completed: boolean }>`
  height: 2px;
  width: 20px;
  background: ${props => props.completed ? props.theme.colors.pistachio : 'rgba(0,0,0,0.1)'};
  
  @media (min-width: 640px) {
    width: 40px;
  }
`;

const Label = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: none;
  
  @media (min-width: 480px) {
    display: inline;
    font-size: 0.75rem;
  }
  
  @media (min-width: 640px) {
    font-size: 0.85rem;
  }
`;

export const Stepper = ({ steps, currentStep }: StepperProps) => {
    return (
        <Container>
            {steps.map((step, idx) => (
                <React.Fragment key={step}>
                    <StepWrapper active={idx === currentStep} completed={idx < currentStep}>
                        <Number active={idx === currentStep} completed={idx < currentStep}>
                            {idx < currentStep ? '✓' : idx + 1}
                        </Number>
                        <Label>{step}</Label>
                    </StepWrapper>
                    {idx < steps.length - 1 && <Line completed={idx < currentStep} />}
                </React.Fragment>
            ))}
        </Container>
    );
};
