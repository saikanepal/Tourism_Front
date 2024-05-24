export const useImage = () => {
  const uploadImage = async (image) => {
    try {
      if (image === undefined || !image) {
        return {
          img: "",
          id: "",
        };
      }
      console.log(image.type);
      if (image.type === "image/jpeg" || image.type === "image/png") {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "vmixpmkf"); // Ensure this preset is correctly set up in Cloudinary
        data.append("cloud_name", "dqkgukmvx");

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dqkgukmvx/image/upload",
          {
            method: "POST",
            body: data,
          }
        );

        const result = await res.json();
        return {
          Picture: {
            img: result.secure_url,
            id: result.public_id,
          },
        };
      }
    } catch (error) {
      console.log(error.message);
      return " ";
    }
  };

  return { uploadImage };
};
