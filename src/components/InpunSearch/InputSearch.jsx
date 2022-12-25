export const InputSearch = ({ onChenge, value, submit }) => {
  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          value={value}
          onChange={e => {
            onChenge(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default InputSearch;
