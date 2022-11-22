export default function CrudTableRow({ bike, setDataToEdit, deleteData }) {
  let { id, company, bikeModel } = bike;

  return (
    <tr className="border-b text-white bg-red-500 opacity-90 border-gray-300 border-dashed">
      <td className="py-4 px-6">{company}</td>
      <td className="py-4 px-6">{bikeModel}</td>
      <td className="py-4 px-6 text-center">
        <button
          className="mx-2 p-1 px-5 bg-blue-500 cursor-pointer hover:bg-cyan-600 text-slate-100  rounded-full "
          onClick={() => setDataToEdit(bike)}
        >
          Edit
        </button>
        <button
          className="mx-2 p-1 px-5 bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-slate-100 rounded-full"
          onClick={() => deleteData(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
