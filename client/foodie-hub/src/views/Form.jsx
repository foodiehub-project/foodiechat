export const Form = () => {
    return (
      <>
        <section className="groupSection">
    <div className="groupContent">
      <div className="imageOuter">
        <img
          src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
          className="rounded-4 groupImageForm"
        />
      </div>
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
    </div>
  </section>
      </>
    );
  };
  