import { GoTrashcan, GoSync } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

function PhotosListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  console.log(results);

  const deleteIcon = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl" />
      </div>
    );
  };

  const loadingIcon = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-80">
        <GoSync className="animate-spin text-3xl" />
      </div>
    );
  };

  return (
    <div onClick={handleRemovePhoto} className="relative cursor-pointer m-2">
      <img className="h-20 w-20" src={photo.url} alt="random pic" />
      {results.isLoading ? loadingIcon() : deleteIcon()}
    </div>
  );
}

export default PhotosListItem;
