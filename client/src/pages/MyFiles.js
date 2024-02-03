// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const MyFiles = () => {
//   return (
//     <>
//       <Navbar />
//       <div
//         className="bg-cover w-full min-h-screen  bg-[#121916] relative z-40 bg-center text-[#fff] px-64 py-20 flex flex-col items-center  text-center"
//         style={{
//           backgroundImage: `url('/images/eclipse.png')`,
//           type: "image/svg+xml",
//         }}
//       >
//         <h1 className="text-5xl font-bold">My Files</h1>
//         <p className="text-xl py-4">View and manage your uploaded files</p>
//         <input
//           type="text"
//           placeholder="Search "
//           //   value={searchTerm}
//           //   onChange={(e) => setSearchTerm(e.target.value)}
//           className="mb-4 p-2 border-0 outline-none rounded-lg w-[650px] placeholder:text-[#dedede] bg-[#121916]"
//         />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default MyFiles;

import React, { useCallback, useEffect, useState } from "react";
import Axios from "axios";
import Tippy from "@tippyjs/react";  
import "tippy.js/dist/tippy.css";
import { useNavigate } from "react-router-dom";
import { formatBytes } from "../utils/formatBytes";
import { formatDates } from "../utils/formatDates";
import ReactPaginate from "react-paginate";

import { BiSort } from "react-icons/bi";
import { IoFilter } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sortFields = [
  { name: "File Name", value: "file_name" },
  { name: "Upload Date", value: "file_creationDate" },
  { name: "File Size", value: "file_size" },
];

const sortOrders = [
  { name: "Ascending", value: 1 },
  { name: "Descending", value: -1 },
];

const tableHeaders = ["", "Name", "", "Size", "Date"];

function MyFiles() {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [owner, setOwner] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [type, setType] = useState("");
  const [types, setTypes] = useState([]);
  const [privateStatus, setPrivateStatus] = useState(true);
  const [publicStatus, setPublicStatus] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortField, setSortField] = useState("file_name");
  const [sortOrder, setSortOrder] = useState(1);

  const fetchFiles = useCallback(
    async (abortSignal) => {
      try {
        setIsLoading(true);
        const res = await Axios.post(
          `${process.env.REACT_APP_SERVER_URL}/api/user/files`,
          {
            search,
            types,
            privateStatus,
            publicStatus,
            sortField,
            sortOrder,
          },
          {
            headers: {
              Authorization:
                "Bearer " + window.localStorage.getItem("didToken"),
            },
            signal: abortSignal,
          }
        );
        setOwner(res.data.owner);
        setFiles(res.data.files);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    },
    [privateStatus, publicStatus, search, types, sortField, sortOrder]
  );

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    if (type) {
      setTypes((prev) => [...prev, type]);
      setType("");
    }
  };

  const handleFilterClose = (e) => {
    if (!e.path.some((elem) => elem.classList?.contains("filter-div"))) {
      setFilterOpen(false);
    }
  };

  const handleSortClose = (e) => {
    if (!e.path.some((elem) => elem.classList?.contains("sort-div"))) {
      setSortOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleFilterClose);
    window.addEventListener("click", handleSortClose);

    return () => {
      window.removeEventListener("click", handleFilterClose);
      window.removeEventListener("click", handleSortClose);
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchFiles(controller.signal);

    return () => {
      setFiles([]);
      controller.abort();
    };
  }, [
    search,
    types,
    privateStatus,
    publicStatus,
    sortField,
    sortOrder,
    fetchFiles,
  ]);

  return (
    <>
    <Navbar />
    <div
      className="bg-cover w-full min-h-screen  bg-[#121916] relative z-40 bg-center text-[#fff] px-64 py-20 flex flex-col items-center  text-center"
      style={{
        backgroundImage: `url('/images/eclipse.png')`,
        type: "image/svg+xml",
      }}
    >
      <div>
        <h1 className="text-5xl font-bold">My Files</h1>
        <p className="text-xl py-4">View and manage your uploaded files</p>
        <div className="search-con">
          <div className="filter-div">
            <button
              onClick={() => setFilterOpen((p) => !p)}
              className="filter-button"
            >
              <IoFilter /> <span>Filter</span>
            </button>

            {filterOpen && (
              <div className="filter-options">
                <div className="filter-file-type">
                  <form onSubmit={handleFilterSubmit}>
                    <input
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      type="text"
                      placeholder="Search for file types"
                    />
                  </form>

                  {!!types.length && (
                    <div className="choice-chips">
                      {types.map((type, idx) => (
                        <button
                          onClick={() =>
                            setTypes((prev) => prev.filter((_, i) => idx !== i))
                          }
                          key={idx}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="filter-file-status">
                  <label>
                    <input
                      checked={privateStatus}
                      onChange={(e) => setPrivateStatus(e.target.checked)}
                      type="checkbox"
                    />
                    <span>Private</span>
                  </label>
                  <label>
                    <input
                      checked={publicStatus}
                      onChange={(e) => setPublicStatus(e.target.checked)}
                      type="checkbox"
                    />
                    <span>Public</span>
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="sort-div">
            <button
              onClick={() => setSortOpen((p) => !p)}
              className="sort-button"
            >
              <BiSort /> <span>Sort</span>
            </button>
            {sortOpen && (
              <div className="sort-options">
                <div className="sort-fields">
                  <p>Sort by</p>
                  {sortFields.map(({ name, value }) => (
                    <button
                      key={value}
                      isactive={sortField === value ? "true" : "false"}
                      onClick={() => setSortField(value)}
                    >
                      {name}
                    </button>
                  ))}
                </div>
                <div className="sort-orders">
                  <p>Order by</p>
                  {sortOrders.map(({ value, name }) => (
                    <button
                      key={value}
                      isactive={sortOrder === value ? "true" : "false"}
                      onClick={() => setSortOrder(value)}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {isLoading ? (
          <div className="spinner-con">
            <img
              src="/images/loading.svg"
              alt="Loading..."
              typeof="image/svg"
            />
          </div>
        ) : (
          <PagignatedFiles
            files={files}
            owner={owner}
            search={search}
            itemsPerPage={8}
          />
        )}
      </div>
    </div>
    <Footer />
    </>
  );
}
const PagignatedFiles = ({ files, owner, search, itemsPerPage }) => {
  const navigate = useNavigate();
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(files.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(files.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % files.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="table-con">
      <div className="table-glass">
        <table>
          <thead>
            <tr>
              {tableHeaders.map((val, idx) => {
                return (
                  <th className="file-row" key={idx}>
                    {val}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 &&
              currentItems.map((val, idx) => {
                return (
                  <tr
                    className="file-row"
                    key={idx}
                    onClick={() =>
                      navigate("/app/myFiles/desc", { state: { val, owner } })
                    }
                  >
                    <td>
                      <img src="/icons/file-icons/normal-file.png" alt="" />
                    </td>
                    <td id="first-col">
                      {val.file_name ? val.file_name : "test.png"}
                    </td>
                    <td>
                      {val.public ? (
                        <Tippy content="Public" placement="left">
                          <img
                            className="visible"
                            src="/images/icons/eye.png"
                            alt="public"
                            typeof="image/png"
                          />
                        </Tippy>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>{val.file_size ? formatBytes(val.file_size) : "69"}</td>
                    <td>
                      {val.file_creationDate
                        ? formatDates(val.file_creationDate)
                        : "2045/08/30"}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {files.length > 8 && (
          <ReactPaginate
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={files.length}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            className="pagignation"
            pageClassName="li"
            activeClassName="active-page"
            previousLabel={""}
            nextLabel={""}
            previousClassName={"prevarrow"}
            nextClassName={"nextarrow"}
          />
        )}
      </div>
    </div>
  );
};

export default MyFiles;

// bg-[#397e67]
