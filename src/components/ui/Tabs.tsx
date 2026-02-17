import { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div``;

const TabList = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  margin-bottom: 2rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  @media (min-width: 640px) {
    gap: 2rem;
    overflow-x: visible;
  }
  
  /* Hide scrollbar but keep functionality */
  &::-webkit-scrollbar {
    height: 0;
  }
`;

const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  padding-bottom: 0.75rem;
  white-space: nowrap;
  flex-shrink: 0;
  color: ${props => props.active ? props.theme.colors.charcoal : props.theme.colors.midnight};
  opacity: ${props => props.active ? 1 : 0.5};
  border-bottom: 2px solid ${props => props.active ? props.theme.colors.pistachio : 'transparent'};
  transition: all 0.2s;
  cursor: pointer;
  
  @media (min-width: 640px) {
    font-size: 1rem;
  }

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
