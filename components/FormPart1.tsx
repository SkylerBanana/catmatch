export default async function FormPart1() {
  return (
    <>
      <h1 className="text-center">Tell Us About Yourself</h1>
      <div className="flex flex-col space-y-2">
        <label className="text-md" htmlFor="firstname">
          First Name
        </label>
        <input
          className="rounded-md px-4 py-2  border border-black"
          name="firstname"
          placeholder="Peanut"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-md" htmlFor="lastname">
          Last Name
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border border-black"
          name="lastname"
          placeholder="thegreat"
          required
        />
      </div>
      <div className="flex flex-col  ">
        <label>Gender</label>
        <div className="flex flex-row gap-8 justify-center items-center">
          <label>
            <input type="radio" id="option1" name="options" value="Male" />
            Male
          </label>

          <label>
            <input type="radio" id="option2" name="options" value="Female" />
            Female
          </label>
        </div>
      </div>
    </>
  );
}
