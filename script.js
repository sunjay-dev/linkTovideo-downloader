async function download(){
  let data = document.getElementById('in').value;

  const url = `https://youtube-video-and-shorts-downloader1.p.rapidapi.com/api/getYTVideo?url=${data}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ce670b6670msha0f6220fdbfcba7p1d6888jsnfd64eb1e8c81',
      'X-RapidAPI-Host': 'youtube-video-and-shorts-downloader1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (result.links && result.links.length > 0) {

      if(result.links[0].quality=="hd_720p"){
      const downloadLink = result.links[0].link;
      window.open(downloadLink, '_blank'); 
      }
      else if(result.links[1].quality=="hd_720p"){
        const downloadLink = result.links[0].link;
        window.open(downloadLink, '_blank'); 
        }
    } else {
      alert('No download link found.');
    }
  } catch (error) {
    console.error(error);
  }
}