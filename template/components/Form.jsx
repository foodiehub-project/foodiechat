export const Form = () => {
  return (
    <>
      <div className="formOuter">
        <form>
          <div className="mb-3 custPosition">
            <label className="form-label labelForm">Group Name</label>
            <input type="text" className="form-control customForm" />
          </div>
          <div className="mb-3 custPosition">
            <label className="form-label labelForm">Group Image</label>
            <input
              className="form-control customForm"
              type="file"
              id="formFile"
            />
          </div>
          <button type="submit" className="btn btn-light customBtn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
