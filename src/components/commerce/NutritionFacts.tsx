import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  
  th, td {
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    text-align: left;
  }
  
  th {
    font-weight: 600;
    color: ${props => props.theme.colors.charcoal};
  }
  
  td {
    color: ${props => props.theme.colors.midnight};
  }
`;

export const NutritionFacts = () => {
    return (
        <div className="max-w-md">
            <h3 className="font-bold text-lg border-b border-black md:border-black/20 pb-2 mb-2">Nutrition Facts</h3>
            <Table>
                <tbody>
                    <tr>
                        <td>Serving Size</td>
                        <td className="text-right">1 Piece</td>
                    </tr>
                    <tr>
                        <td>Calories</td>
                        <td className="text-right">45</td>
                    </tr>
                    <tr>
                        <td>Total Fat</td>
                        <td className="text-right">2g</td>
                    </tr>
                    <tr>
                        <td>Total Sugars</td>
                        <td className="text-right">6g</td>
                    </tr>
                    <tr>
                        <td>Protein</td>
                        <td className="text-right">1g</td>
                    </tr>
                </tbody>
            </Table>
            <p className="text-xs opacity-60 mt-4">* Percent Daily Values are based on a 2,000 calorie diet.</p>
        </div>
    );
};
