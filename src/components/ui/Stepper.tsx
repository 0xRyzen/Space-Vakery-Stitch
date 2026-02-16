import styled from 'styled-components';

interface StepperProps {
    steps: string[];
    currentStep: number;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const StepWrapper = styled.div<{ active: boolean; completed: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.active ? props.theme.colors.charcoal : props.completed ? props.theme.colors.pistachio : 'rgba(0,0,0,0.3)'};
  transition: color 0.3s;
`;

const Number = styled.div<{ active: boolean; completed: boolean }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  items-center: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  border: 2px solid ${props => props.active ? props.theme.colors.charcoal : props.completed ? props.theme.colors.pistachio : 'rgba(0,0,0,0.1)'};
  background: ${props => props.active ? props.theme.colors.charcoal : 'transparent'};
  color: ${props => props.active ? 'white' : 'inherit'};
`;

const Line = styled.div<{ completed: boolean }>`
  height: 2px;
  width: 40px;
  background: ${props => props.completed ? props.theme.colors.pistachio : 'rgba(0,0,0,0.1)'};
`;

const Label = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
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

import React from 'react';
