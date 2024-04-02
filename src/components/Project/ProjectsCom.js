import React, { useState } from "react";
import Gambar from "../../asset/product/PanelBeton/EPS-Panel-Lebih-ringan-kuat-300x300.jpg";

const ProjectsCom = () => {
  // Data untuk card
  const projectData = [
    {
      title: "On Progress Title 1",
      date: "On Progress Date 1",
      status: "On Progress",
    },
    {
      title: "On Progress Title 2",
      date: "On Progress Date 2",
      status: "On Progress",
    },
    {
      title: "On Progress Title 3",
      date: "On Progress Date 3",
      status: "On Progress",
    },
    {
      title: "On Progress Title 4",
      date: "On Progress Date 4",
      status: "On Progress",
    },
    {
      title: "On Progress Title 5",
      date: "On Progress Date 5",
      status: "On Progress",
    },
    {
      title: "On Progress Title 6",
      date: "On Progress Date 6",
      status: "On Progress",
    },
    {
      title: "On Progress Title 7",
      date: "On Progress Date 7",
      status: "On Progress",
    },
    {
      title: "On Progress Title 8",
      date: "On Progress Date 8",
      status: "On Progress",
    },
    {
      title: "On Progress Title 9",
      date: "On Progress Date 9",
      status: "On Progress",
    },
    { title: "Finished Title 1", date: "Finished Date 1", status: "Finished" }, // Tambahkan data dengan status "Finished"
    { title: "Finished Title 2", date: "Finished Date 2", status: "Finished" }, // Tambahkan data dengan status "Finished"
    { title: "Finished Title 3", date: "Finished Date 3", status: "Finished" }, // Tambahkan data dengan status "Finished"
    // Tambahkan 6 data finished lagi agar jumlahnya sama dengan data on progress
    { title: "Finished Title 4", date: "Finished Date 4", status: "Finished" },
    { title: "Finished Title 5", date: "Finished Date 5", status: "Finished" },
    { title: "Finished Title 6", date: "Finished Date 6", status: "Finished" },
    { title: "Finished Title 7", date: "Finished Date 7", status: "Finished" },
    { title: "Finished Title 8", date: "Finished Date 8", status: "Finished" },
    { title: "Finished Title 9", date: "Finished Date 9", status: "Finished" },
  ];

  // State untuk melacak jumlah data yang ditampilkan
  const [visibleOnProgressCount, setVisibleOnProgressCount] = useState(3);
  const [visibleFinishedCount, setVisibleFinishedCount] = useState(3);

  // Fungsi untuk menampilkan data tambahan saat tombol "Load More" diklik
  const handleLoadMoreOnProgress = () => {
    setVisibleOnProgressCount((prevCount) =>
      Math.min(
        prevCount + 3,
        projectData.filter((project) => project.status === "On Progress").length
      )
    );
  };

  const handleLoadMoreFinished = () => {
    setVisibleFinishedCount((prevCount) =>
      Math.min(
        prevCount + 3,
        projectData.filter((project) => project.status === "Finished").length
      )
    );
  };

  // Fungsi untuk menyembunyikan kembali semua card kecuali 3 teratas
  const handleHideOnProgress = () => {
    setVisibleOnProgressCount(3);
  };

  const handleHideFinished = () => {
    setVisibleFinishedCount(3);
  };

  // Menentukan apakah semua data telah dimuat
  const allOnProgressDataLoaded =
    visibleOnProgressCount >=
    projectData.filter((project) => project.status === "On Progress").length;
  const allFinishedDataLoaded =
    visibleFinishedCount >=
    projectData.filter((project) => project.status === "Finished").length;

  return (
    <div className="font-manrope px-5 md:px-10 py-10 md:py-10">
      <div className="pb-10">
        <p className="status bg-customGreen text-xl text-bold text-white py-1 px-2 rounded-full text-center">
          On Progress
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectData
            .filter((project) => project.status === "On Progress")
            .slice(0, visibleOnProgressCount)
            .map((project, index) => (
              <div key={index} className="project-card">
                <div
                  className="project-details flex items-center border rounded-lg overflow-hidden mt-4"
                  style={{
                    backgroundImage: `url(${Gambar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px", // atur tinggi card sesuai dengan ukuran gambar
                  }}
                >
                  <div className="content flex-1 p-4 mt-40 ">
                    <p className="title text-xl font-bold mb-2 text-white text-center">
                      {project.title}
                    </p>
                    <div className="flex justify-between mx-20">
                      <p className="date text-white font-semibold">
                        {project.date}
                      </p>
                      <p className="status text-white font-semibold">
                        {project.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {!allOnProgressDataLoaded && (
          <div className="flex justify-center items-center my-10">
            <button
              className="bg-customGreen px-4 py-2 text-white rounded-xl"
              onClick={handleLoadMoreOnProgress}
            >
              Load More On Progress
            </button>
          </div>
        )}

        {allOnProgressDataLoaded && (
          <div className="flex justify-center items-center my-10">
            <button
              className="bg-red-500 px-4 py-2 text-white rounded-xl"
              onClick={handleHideOnProgress}
            >
              Hide On Progress
            </button>
          </div>
        )}
      </div>

      <hr className="my-10 border-2 border-gray-200" />

      <div>
        <p className="status bg-customGreen text-xl text-bold text-white py-1 px-2 rounded-full text-center">
          Finished
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectData
            .filter((project) => project.status === "Finished")
            .slice(0, visibleFinishedCount)
            .map((project, index) => (
              <div key={index} className="project-card">
                <div
                  className="project-details flex items-center border rounded-lg overflow-hidden mt-4"
                  style={{
                    backgroundImage: `url(${Gambar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px", // atur tinggi card sesuai dengan ukuran gambar
                  }}
                >
                  <div className="content flex-1 p-4 mt-40 ">
                    <p className="title text-xl font-bold mb-2 text-white text-center">
                      {project.title}
                    </p>
                    <div className="flex justify-between mx-20">
                      <p className="date text-white font-semibold">
                        {project.date}
                      </p>
                      <p className="status text-white font-semibold">
                        {project.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {!allFinishedDataLoaded && (
          <div className="flex justify-center items-center my-10">
            <button
              className="bg-customGreen px-4 py-2 text-white rounded-xl"
              onClick={handleLoadMoreFinished}
            >
              Load More Finished
            </button>
          </div>
        )}

        {allFinishedDataLoaded && (
          <div className="flex justify-center items-center my-10">
            <button
              className="bg-red-500 px-4 py-2 text-white rounded-xl"
              onClick={handleHideFinished}
            >
              Hide Finished
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsCom;
