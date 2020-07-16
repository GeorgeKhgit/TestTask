const sendDataToApi = (imagesArray) => async () => {
  let data = new FormData();
  imagesArray.forEach((item, i) => {
    data.append('doc[]', {
      uri: item.uri,
      type: 'image/jpeg',
      name: `filename${i}.jpg`,
    });
  });
  const res = await fetch('test.test/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      photos: data,
    }),
  });
  const result = await res.json();
  console.log(result);
};
export {sendDataToApi};
