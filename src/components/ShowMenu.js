function ShowMenu({ selectedMenuItem }) {

  let imageSrc = '';

  if (selectedMenuItem === '공지사항') {
    imageSrc = 'img/notice.jpg';
  } else if (selectedMenuItem === 'Q&A') {
    imageSrc = 'img/qna.jpg';
  } else if (selectedMenuItem === '구매상담') {
    imageSrc = 'img/consultation.jpg';
  } else if (selectedMenuItem === 'AS 신청') {
    imageSrc = 'img/request.jpg';
  } else if (selectedMenuItem === '자유게시판') {
    imageSrc = 'img/freeBoard.jpg';
  }

  // if (selectedMenuItem === '공지사항') {
  //   imageSrc = noticeImage;
  // } else if (selectedMenuItem === 'Q&A') {
  //   imageSrc = qnaImage;
  // } else if (selectedMenuItem === '구매상담') {
  //   imageSrc = consultationImage;
  // } else if (selectedMenuItem === 'AS 신청') {
  //   imageSrc = requestImage;
  // } else if (selectedMenuItem === '자유게시판') {
  //   imageSrc = freeBoardImage;
  // }

  return (
    <div>
      <h2>{selectedMenuItem}</h2>
      <img
        src={imageSrc}
        alt={selectedMenuItem + ' 그림'}
        width="200px"
        style={{ border: "2px solid #000" }}
      />
    </div>
  );
}

export default ShowMenu;