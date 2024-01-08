import Ovino from "../model/Ovino";
import Layout from "../components/template/Layout";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaCircleCheck } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { IoMdAdd, IoMdCloseCircle } from "react-icons/io";
import OvinoModal from "../components/template/modal/OvinoModal";

import { formataData, formataHora } from "../utils/date/DateFormatter";
import Peso from "../model/Peso";

export default function Rebanho() {
  const [selectedOvino, setSelectedOvino] = useState<Ovino>(null);
  const [numSelection, setNumSelection] = useState(6);

  const { data: ovinos, refetch } = useQuery({
    queryKey: ["ovinos_rebanho"],
    queryFn: getOvinos,
  });

  async function getOvinos() {
    const resp = await fetch(
      "http://localhost:8080/ovinos"
    );
    return await resp.json();
  }

  function retornaOvinos() {
    return ovinos?.map((ovinoRaw: Ovino, i: number) => {

      return (
        i >= numSelection - 6 &&
        i <= numSelection && (
          <tr key={ovinoRaw.tag + "-" + i}>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap text-center">
              {ovinoRaw.tag}
            </td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
              {formataData(ovinoRaw?.dtBirth)}
            </td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
              {ovinoRaw.mother ?? "-"}
            </td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap hidden md:table-cell text-center">
              {ovinoRaw?.Pesos[0]?.weight ? `${ovinoRaw?.Pesos[0]?.weight} kg` : "-"}
            </td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap hidden md:table-cell text-center">
              {ovinoRaw.gender}
            </td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap hidden md:table-cell">
              <div className="flex items-center justify-center">
                {ovinoRaw.active == true ? <FaCircleCheck color="green" size={22} /> : <IoMdCloseCircle color="red" size={25} />}
              </div>
            </td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap flex justify-center">
              <MdEdit
                size={25}
                className="cursor-pointer text-gray-200 p-1 bg-green-900 hover:bg-green-700 rounded-full h-7 w-7 shadow-md "
                onClick={() => setSelectedOvino(ovinoRaw)}
              />
            </td>
          </tr>
        )
      );
    });
  }

  function novoOvino() {
    setSelectedOvino(new Ovino(null, null, null, null, [], null, null))
  }

  return (
    <Layout titulo="Rebanho" subTitulo="Relatorios referentes ao seu rebanho">
      <div className="flex justify-end mb-2">
        <button onClick={novoOvino} className="w-24 bg-[#327534] rounded-sm flex flex-row items-center justify-center gap-2">
          <IoMdAdd size={20} />
          Novo
        </button>
      </div>
      <div className="overflow-hidden border border-gray-200 dark:border-[#313136] md:rounded-lg ">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-[#313136]">
          <thead className="bg-[#327534]">
            <tr className="">
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal rtl:text-right "
              >
                Brinco
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right"
              >
                Nascimento
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right "
              >
                Mae
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal rtl:text-right hidden md:table-cell"
              >
                Peso
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal rtl:text-right hidden md:table-cell"
              >
                Genero
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal rtl:text-right hidden md:table-cell"
              >
                Ativo
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal rtl:text-right"
              >
                Opções
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-200 dark:bg-[#2a2a30] divide-y divide-gray-300 dark:divide-[#3f3f44] ">
            {retornaOvinos()}
          </tbody>
        </table>
      </div>
      <div className="flex gap-4 mt-4 justify-between">
        <button
          className="bg-[#327534] text-white py-1 px-4 rounded-md flex items-center hover:bg-green-700 active:bg-green-800"
          onClick={() => numSelection != 7 && setNumSelection(numSelection - 7)}
        >
          <HiOutlineArrowNarrowLeft className="mr-2" />
          Anterior
        </button>
        <button
          className="bg-[#327534] text-white py-1 px-4 rounded-md flex items-center hover:bg-green-700 active:bg-green-800"
          onClick={() => numSelection < ovinos.length && setNumSelection(numSelection + 6)}
        >
          Próximo
          <HiOutlineArrowNarrowRight className="ml-2" />
        </button>
      </div>
      {selectedOvino && <OvinoModal setSelectedOvino={setSelectedOvino} ovino={selectedOvino} refetch={refetch} />}
    </Layout>
  )
}