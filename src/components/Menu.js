function Menu({ onItemClick }) {
  return (
    <ol>
      <li className="menu" onClick={() => onItemClick('공지사항')}>공지사항</li>
      <li className="menu" onClick={() => onItemClick('Q&A')}>Q&A</li>
      <li className="menu" onClick={() => onItemClick('구매상담')}>구매상담</li>
      <li className="menu" onClick={() => onItemClick('AS 신청')}>AS 신청</li>
      <li className="menu" onClick={() => onItemClick('자유게시판')}>자유게시판</li>
    </ol>
  );
}

export default Menu;