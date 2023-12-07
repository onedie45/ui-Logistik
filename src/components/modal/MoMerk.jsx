const MoMerk = () => {
  return (
    <div
      id="modal-merk"
      tabindex="-1"
      aria-hidden="true"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-lg bg-red-500 dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Tambah Merk Barang
            </h3>
            <button
              type="button"
              class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="modal-merk"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div class="p-4 md:p-5 bg-white shadow-[inset_0px_0px_25px_17px_#00000024] rounded-lg">
            <form class="space-y-4" action="#">
              <div>
                <label
                  for="text"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Merk
                </label>
                <input
                  type="text"
                  name="text"
                  id="text"
                  class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  for="text"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nama Perusahaan
                </label>
                <input
                  type="text"
                  name="text"
                  id="text"
                  class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  for="text"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Negara Asal
                </label>
                <button
                  id="dropdownDelayButton"
                  data-dropdown-toggle="dropdownDelay"
                  data-dropdown-delay="500"
                  data-dropdown-trigger="hover"
                  class="text-gray-600 w-full justify-between  bg-gray-200 hover:bg-gray-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                  type="button"
                >
                  Pilih Negara Asal{" "}
                  <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownDelay"
                  class="z-10 w-3/4 hidden bg-gray-200 divide-y divide-gray-100 rounded-lg shadow"
                >
                  <ul
                    class="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownDelayButton"
                  >
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-50">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-50">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-50">
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr class="h-1 mx-auto my-4 bg-gray-300 border-0 rounded" />
              <div class="flex justify-around">
                <button
                  type="button"
                  class="w-36 text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  data-modal-hide="modal-merk"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  class="w-36 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoMerk;
