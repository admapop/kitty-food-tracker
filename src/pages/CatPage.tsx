import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyCatSection = styled.section``;

const AddCatSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: gray;
`;

const AddCatHeader = styled.h1`
  font-size: 20px;
  color: red;
`;

const AddCatFormSection = styled.section``;
interface ValidityProp {
  valid: boolean;
}

const AddCatName = styled.input``;
const AddCatAge = styled.input``;
const SubmitCat = styled.button``;

const CatPage = () => {
  const [state, setState] = React.useState([]);
  const [catAgeMonth, setCatAgeMonth] = React.useState('');
  const [catAgeYear, setCatAgeYear] = React.useState('');
  const [catName, setCatName] = React.useState('');

  React.useEffect(() => {
    axios.get('http://localhost:8080/cats').then((res) => setState(res.data));
  }, []);

  const handleButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/cats/new-cat', {
        catName,
        catAgeYear,
        catAgeMonth,
      })
      .then((res) => console.log(res));
  };

  return (
    <Wrapper>
      <AddCatSection>
        <AddCatHeader>Add your cat!</AddCatHeader>
        <AddCatName
          type='text'
          value={catName}
          onChange={(e) => setCatName(e.target.value)}
          required
        />
        <AddCatAge
          type='text'
          value={catAgeYear}
          pattern='\d*'
          placeholder="Enter the cat's years"
          onChange={(e) => setCatAgeYear(e.target.value)}
          // valid={catAge.length !== 0}
          required
        />
        <AddCatAge
          type='text'
          value={catAgeMonth}
          pattern='\d*'
          placeholder="Enter the cat's months"
          onChange={(e) => setCatAgeMonth(e.target.value)}
          required
        />
        <SubmitCat onClick={(e) => handleButton(e)} value='Submit Cat'>
          Submit Cat
        </SubmitCat>
      </AddCatSection>
    </Wrapper>
  );
};

export default CatPage;
