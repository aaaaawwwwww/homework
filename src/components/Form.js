import React from 'react';

const Form = () => {
  const [value, setValue] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    if (value === '') {
      setErrorMessage('검색어를 입력하십시오.');
      return;
    }
  }

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <select className="select" size="">
        <option name="select" selected="clicked">제목</option>
        <option name="select" >내용</option>
        <option name="select">제목+내용</option>
        <option name="select">작성자</option>
      </select>
      <input type="text" name="name"
        placeholder="검색어를 입력하세요"
        style={{ width: '300px' }}
      />
      <button type="submit">검색</button>
      <p style={{ color: "#f00" }}>{errorMessage}</p>
    </form>
  );
}

export default Form;