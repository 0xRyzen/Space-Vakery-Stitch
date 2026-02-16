import styled from 'styled-components';

interface MeterProps {
    label: string;
    lowLabel: string;
    highLabel: string;
    value: number; // 0 to 100
    color?: string;
}

const Container = styled.div`
  margin-bottom: 1.5rem;
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: ${props => props.theme.colors.midnight};
  opacity: 0.6;
`;

const BarContainer = styled.div`
  height: 6px;
  background: rgba(28, 31, 42, 0.1);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
`;

const Bar = styled.div<{ value: number; color?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => props.value}%;
  background: ${props => props.color || props.theme.colors.pistachio};
  border-radius: 3px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Marker = styled.div<{ value: number }>`
  position: absolute;
  top: 50%;
  left: ${props => props.value}%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: white;
  border: 2px solid ${props => props.theme.colors.charcoal};
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const Meter = ({ label, lowLabel, highLabel, value, color }: MeterProps) => {
    return (
        <Container>
            <div className="text-[10px] uppercase tracking-widest font-bold mb-2 opacity-40">{label}</div>
            <BarContainer>
                <Bar value={value} color={color} />
                <Marker value={value} />
            </BarContainer>
            <LabelRow className="mt-2">
                <span>{lowLabel}</span>
                <span>{highLabel}</span>
            </LabelRow>
        </Container>
    );
};
