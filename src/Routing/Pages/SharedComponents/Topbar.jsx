export default function TopBar(){
    return(
      <div className="bg-[#12182b] min-h-[80px] w-full flex justify-between items-center">
          <div className="flex items-center justify-center  text-white text-4xl">
              <p>Zeynep Sitesi</p>
          </div>
          <div className="flex items-center justify-center text-gray-200 text-lg gap-x-10">
              <a href="#">Movies</a>
              <a href="#">TV Shows</a>
              <a href="#">Suggest Me</a>
          </div>
      </div>
    );
}