	async function testme() {
		const baseURL = 'https://api.sampleapis.com/css-color-names/colors';
		var colorpicker = document.getElementById('textf').value
		const fetchstring = (`${baseURL}?name=`+ colorpicker)
		fetch(fetchstring)
  			.then(resp => resp.json())
  			.then(data => displayData(data));

		function displayData(data) {
  		document.querySelector("pre").innerHTML = JSON.stringify(data[0].hex, null, 2);
		}
	}

	testme()
