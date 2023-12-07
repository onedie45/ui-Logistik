const TabUsul = () => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-white text-lg uppercase bg-red-600 h-16">
          <tr>
            <th scope="col" class="px-6 py-3 w-[3%]">
              No.
            </th>
            <th scope="col" class="px-6 py-3 w-[5%] text-start">
              Tanggal
            </th>
            <th scope="col" class="px-6 py-3 w-[15%] text-start">
              Periode
            </th>
            <th scope="col" class="px-6 py-3 w-[25%] text-start">
              Unit Kerja
            </th>
            <th scope="col" class="px-6 py-3 w-[16%] text-start">
              PIC
            </th>
            <th scope="col" class="px-6 py-3 w-[10%] text-start">
              Diajukan
            </th>
            <th scope="col" class="px-6 py-3 w-[10%] text-start">
              Jenis
            </th>
            <th scope="col" class="px-6 py-3 w-[25%] text-start">
              Catatan
            </th>
            <th scope="col" class="px-6 py-3 w-[15%]">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody class="text-black text-lg">
          <tr class="odd:bg-gray-50 even:bg-gray-300 border-b">
            <td class="px-4 py-3 text-end">1</td>
            <td class="text-center">20/11/2023</td>
            <td class="px-4 py-3">Desember 2023 </td>
            <td class="">Rekruitmen</td>
            <td class="px-4 py-3">M. Habibi</td>
            <td class="">M. Habibi</td>
            <td class="px-4 py-3">Bulanan</td>
            <td class="">
              <button class="text-black bg-yellow-400 font-medium rounded-full text-md px-4 py-1 text-center">
                Darurat
              </button>
            </td>
            <td class="flex px-2 py-3 justify-around">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
              </button>
              <button>
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  ></path>
                </svg>
              </button>
            </td>
          </tr>
          <tr class="odd:bg-gray-50 even:bg-gray-300 border-b">
            <td class="px-4 py-3 text-end">1</td>
            <td class="text-center">20/11/2023</td>
            <td class="px-4 py-3">Desember 2023 </td>
            <td class="">Rekruitmen</td>
            <td class="px-4 py-3">M. Habibi</td>
            <td class="">M. Habibi</td>
            <td class="px-4 py-3">Bulanan</td>
            <td class="">
              <button class="text-white bg-blue-700 font-medium rounded-full text-md px-4 py-1 text-center">
                Tambahan
              </button>
            </td>
            <td class="flex px-2 py-3 justify-around">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
              </button>
              <button>
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  ></path>
                </svg>
              </button>
            </td>
          </tr>
          <tr class="odd:bg-gray-50 even:bg-gray-300 border-b">
            <td class="px-4 py-3 text-end">1</td>
            <td class="text-center">20/11/2023</td>
            <td class="px-4 py-3">Desember 2023 </td>
            <td class="">Rekruitmen</td>
            <td class="px-4 py-3">M. Habibi</td>
            <td class="">M. Habibi</td>
            <td class="px-4 py-3">Bulanan</td>
            <td class="">
              <button class="text-white bg-red-700 font-medium rounded-full text-md px-4 py-1 text-center">
                Terlambat
              </button>
            </td>
            <td class="flex px-2 py-3 justify-around">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
              </button>
              <button>
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  ></path>
                </svg>
              </button>
            </td>
          </tr>
          <tr class="odd:bg-gray-50 even:bg-gray-300 border-b">
            <td class="px-4 py-3 text-end">1</td>
            <td class="text-center">20/11/2023</td>
            <td class="px-4 py-3">Desember 2023 </td>
            <td class="">Konfirmasi Goldar & ABS</td>
            <td class="px-4 py-3">Maryani</td>
            <td class="">Maryani</td>
            <td class="px-4 py-3">Bulanan</td>
            <td class=" ">
              <button class="text-white bg-green-700 font-medium rounded-full text-md px-4 py-1 text-center">
                Tepat Waktu
              </button>
            </td>
            <td class="flex px-2 py-3 justify-around">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
              </button>
              <button>
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  ></path>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabUsul;
