function AwardBlock({ data }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '20px 0px',
      }}
    >
      <div style={{ width: '380px' }}>
        <p style={{ fontWeight: 500, fontSize: '18px' }}>{data.title}</p>
        <p style={{ fontSize: '14px', color: 'gray' }}>
          {data.date} / {data.organization}
        </p>
      </div>
      <p>{data.description}</p>
    </div>
  );
}

export default AwardBlock;
