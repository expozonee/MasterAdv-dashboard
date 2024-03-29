import React from "react";

type OptionsProps = {
  type: string;
};

const TYPE = {
  MAIN_CATEGORY: "Main Category",
  SECTION: "Section",
  SUB_SECTION: "Sub Section",
  SUB_CATEGORY: "Sub Category",
};

const Options = ({ type }: OptionsProps) => {
  return (
    <>
      <label className="mx-auto w-11/12">
        {TYPE[type as keyof typeof TYPE]}
      </label>

      <select
        className="w-11/12 mx-auto p-3 border-2 border-gray-300 rounded-md mt-2"
        name="main-category"
        id="main-category"
      >
        <option value="1">{`-- Choose ${
          TYPE[type as keyof typeof TYPE]
        } --`}</option>
        <option value="1">Category 1</option>
        <option value="2">Category 2</option>
        <option value="3">Category 3</option>
      </select>
    </>
  );
};

export default Options;
