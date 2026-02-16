import { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div``;

const TabList = styled.div`
  display: flex;
  gap: 2rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 0.75rem;
  color: ${props => props.active ? props.theme.colors.charcoal : props.theme.colors.midnight};
  opacity: ${props => props.active ? 1 : 0.5};
  border-bottom: 2px solid ${props => props.active ? props.theme.colors.pistachio : 'transparent'};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
    color: ${props => props.theme.colors.charcoal};
  }
`;

interface TabProps {
    label: string;
    content: React.ReactNode;
}

export const Tabs = ({ items }: { items: TabProps[] }) => {
    const [active, setActive] = useState(0);

    return (
        <TabsContainer>
            <TabList>
                {items.map((item, idx) => (
                    <Tab key={idx} active={idx === active} onClick={() => setActive(idx)}>
                        {item.label}
                    </Tab>
                ))}
            </TabList>
            <div>
                {items[active].content}
            </div>
        </TabsContainer>
    );
};
