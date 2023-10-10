import './App.css';
import React from 'react'
import Title from './components/Title';
import Form from './components/Form';
import Menu from './components/Menu';
import ShowMenu from './components/ShowMenu';

const App = () => {

  const basicImage = './img/basic.jpg';
  const noticeImage = './homework/public/img/notice.jpg';
  const qnaImage = './img/qna.jpg';
  const consultationImage = 'img/consultation.jpg'
  const requestImage = 'img/request.jpg';
  const freeBoardImage = 'img/freeBoard.jpg';

  const [selectedMenuItem, setSelectedMenuItem] = React.useState(basicImage);

  const handleMenuClick = (menuName) => {
    setSelectedMenuItem(menuName);
  };

  return (
    <div>
      <Title>커뮤니티</Title>
      <Form />
      <Menu onItemClick={handleMenuClick} />
      <ShowMenu selectedMenuItem={selectedMenuItem} />
    </div>
  );
};

export default App;
