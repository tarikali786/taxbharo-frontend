import React from "react";

const Test = () => {
  return (
    <div className="max-w-sm border rounded-sm  m-auto p-10 flex items-center gap-4 ">
      <img
        src="https://tailwindcss.com/img/erin-lindford.jpg"
        className=" block rounded-full size-20 sm:mx-0"
        alt=""
      />
      <div className="space-y-0.5">
        <p className="text-lg text-black font-semibold">Erin Lindford</p>
        <p className="text-slate-500 font-medium">Product Engineer</p>
        <button
          className=" bg-blue-500 text-white-500 px-10 py-2 rounded-xl font-medium  hover:bg-black-500
         hover:text-blue-500 focus:outline-none  active:ring-2 focus:ring-blue-500 focus:ring-offset-2
         "
        >
          Cick
        </button>

        <div className="p-6 divide-y divide-white-500 truncate">
          <p>lorem10</p>
        </div>
        <table>
          <tbody>
            <tr className="odd:bg-white-500 even:bg-blue-500">
              <td>Helo</td>
              <td>Helo</td>
              <td>Helo</td>
              <td>Helo</td>
              <td>Helo</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr className="odd:bg-black-100 even:bg-blue-500">
              <td>Helo</td>
              <td>Helo</td>
              <td>Helo</td>
              <td>Helo</td>
              <td>Helo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Test;
