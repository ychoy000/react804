//import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

// 컴포넌트 생성+스타일 지정
//const 컴포넌트명 = styled.태그명'css 스타일';

const StyledButton = styled.button`color:white;
    background-color: blue;`;

  const LargeButton = styled(StyledButton)`
  font-size: 50px;`;

const ReactButton = (props) => {
  // console.log(props.className);
  const style = {
    color: 'white',
    backgroundColor: 'red'
  }
  return (
    //<button className="buttonStyle">
    // <button style={{color: 'white',backgroundColor: 'purple'}}> 
    //  <button style={style}> 
     <button className={props.className} style={style}> 
      {props.children}
     </button>
  )
}

// ReactButton은 styled 버튼이 아님
const ReactLargeButton = styled(ReactButton)`
font-size: 50px;`;

const PrimaryButton = styled.button`
  color: $(function(props){
  console.log('props', props.primary);
  if (props.primary){
  return 'white} else {return 'blue';}
  });`;

function App() {
  return (
    <div>
      <h2>Hello!</h2>
     <ReactButton>REact</ReactButton>
     <StyledButton>Styled</StyledButton>
     <LargeButton>Large</LargeButton>
     <ReactLargeButton>ReactLarge</ReactLargeButton>
     <PrimaryButton primary>Primary</PrimaryButton>
    </div>
  );
}

export default App;
