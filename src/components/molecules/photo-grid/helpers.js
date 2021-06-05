export function groupPhotoData(photos, extractSource = (photo) => photo) {
  function formPhotoGroup(photos, type) {
    const data = [];
    for (let photo of photos) {
      data.push({
        source: extractSource(photo),
        payload: photo,
      });
    }

    return {
      data,
      type,
    };
  }

  if (photos.length == 2) {
    return [formPhotoGroup(photos, "two-grid")];
  }

  const MAX_ITEMS_NUMBER = 3;

  const groupDefinitions = [
    { type: "one-grid", itemsNumber: 1 },
    { type: "three-left-grid", itemsNumber: MAX_ITEMS_NUMBER },
    { type: "three-right-grid", itemsNumber: MAX_ITEMS_NUMBER },
    { type: "two-grid", itemsNumber: 2 },
  ];

  let currentGroupDefinitionIndex = 0;
  let photoIndex = 0;

  const photoGroups = [];

  do {
    const photosForGroup = photos.slice(
      photoIndex,
      photoIndex + groupDefinitions[currentGroupDefinitionIndex].itemsNumber
    );    
    photoGroups.push(formPhotoGroup(photosForGroup, groupDefinitions[currentGroupDefinitionIndex].type));

    photoIndex += groupDefinitions[currentGroupDefinitionIndex].itemsNumber;
    currentGroupDefinitionIndex = (currentGroupDefinitionIndex + 1) % groupDefinitions.length;
  } while (
    photos.length >=
    photoIndex + groupDefinitions[currentGroupDefinitionIndex].itemsNumber
  );

  if (photoIndex < photos.length)
  {
      const remainingPhotos = photos.slice(photoIndex, photos.length);
      const type = remainingPhotos.length == 1 ? "one-grid": "two-grid";

      photoGroups.push(formPhotoGroup(remainingPhotos, type));
  }

  return photoGroups;
}
